import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { MINIGAMES } from '../data/minigames';
import EnvironmentCheck from '../components/exam/EnvironmentCheck';
import RoomScan from '../components/exam/RoomScan';
import EyeCalibration from '../components/exam/EyeCalibration';
import ExamHUD from '../components/exam/ExamHUD';
import ExamResults from '../components/exam/ExamResults';
import { useSecureExam } from '../hooks/useSecureExam';
import { useExamTimer } from '../hooks/useExamTimer';
import { useFaceDetection } from '../hooks/useFaceDetection';
import { useEyeTracking } from '../hooks/useEyeTracking';

// Import game components
import SwipeGame from '../components/games/SwipeGame';
import SpotTheFlagGame from '../components/games/SpotTheFlagGame';
import PasswordGame from '../components/games/PasswordGame';
import QuizGame from '../components/games/QuizGame';
import ChatGame from '../components/games/ChatGame';
import AudioScamGame from '../components/games/AudioScamGame';
import VisualScamGame from '../components/games/VisualScamGame';
import TerminalGame from '../components/games/TerminalGame';
import ForensicsGame from '../components/games/ForensicsGame';
import WireAuditGame from '../components/games/WireAuditGame';
import EmailThreadGame from '../components/games/EmailThreadGame';
import ScamSimulatorGame from '../components/games/ScamSimulatorGame';
import DeepfakeInterrogationGame from '../components/games/DeepfakeInterrogationGame';
import PermissionPurgeGame from '../components/games/PermissionPurgeGame';

const ExamPage = () => {
  const navigate = useNavigate();
  const { userProfile, currentUser, isAdmin } = useContext(AuthContext);
  const userName = userProfile?.username || userProfile?.email?.split('@')[0] || currentUser?.email?.split('@')[0] || 'Student';

  const [phase, setPhase] = useState('landing'); 
  // 'landing' | 'envcheck' | 'roomscan' | 'calibration' | 'active' | 'results'

  const [examGames, setExamGames] = useState([]);
  const [currentGameIdx, setCurrentGameIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [roomScanImages, setRoomScanImages] = useState([]);
  const [examResult, setExamResult] = useState(null);

  // --- Exam Setup & Cooldown Check ---
  const [cooldownTimeLeft, setCooldownTimeLeft] = useState(null);

  useEffect(() => {
    // Check 24-hour cooldown for normal users from DB
    if (!isAdmin && userProfile) {
      const lastFailed = userProfile.last_failed_exam;
      if (lastFailed) {
        const timeSinceFail = Date.now() - new Date(lastFailed).getTime();
        const cooldownMs = 24 * 60 * 60 * 1000;
        if (timeSinceFail < cooldownMs) {
          const hoursLeft = Math.ceil((cooldownMs - timeSinceFail) / (1000 * 60 * 60));
          setCooldownTimeLeft(hoursLeft);
          setPhase('cooldown');
          return;
        }
      }
    }

    if (phase === 'landing') {
      const EXAM_POOL = MINIGAMES.filter(g => g.difficulty === 'Hard' && g.id.startsWith('exam_hard_'));
      const shuffled = [...EXAM_POOL].sort(() => Math.random() - 0.5);
      setExamGames(shuffled); // All 30 hard simulations
    }
  }, [phase, isAdmin, userProfile]);

  // --- Hooks Setup ---
  const isExamActive = phase === 'active';

  const handleFail = async (reason) => {
    // If we fail via strikes (3), we end immediately with 0 score
    if (!isAdmin && userProfile) {
      // Update Supabase DB
      try {
        const newAttempts = (userProfile.exam_attempts || 0) + 1;
        await supabase.from('profiles').update({
          last_failed_exam: new Date().toISOString(),
          exam_attempts: newAttempts
        }).eq('id', userProfile.id);
      } catch (e) {
        console.error('Failed to log exam failure to DB', e);
      }
    }

    setExamResult({
      score: 0,
      total: examGames.length,
      isPassed: false
    });
    setPhase('results');
  };

  const { strikes, violationLog, isLocked, enterFullscreen, addStrike, examContainerRef } = useSecureExam({
    isActive: isExamActive,
    onFail: handleFail
  });

  const { timeLeftFormatted, isUrgent, isExpired } = useExamTimer({
    initialMinutes: 40,
    isActive: isExamActive,
    onExpire: () => {
      // Time up, grade what we have
      addStrike('Time expired.');
      finishExam();
    }
  });

  const { statusRef: faceDetectionStatus } = useFaceDetection({
    isActive: isExamActive,
    onMiss: (reason) => addStrike(reason)
  });

  const { gazeWarnings, cleanup: cleanupGaze, startCalibration: startEyeCalibration, markCalibrated: markEyeCalibrated, statusRef: eyeTrackingStatus } = useEyeTracking({
    isActive: isExamActive,
    onWarning: (reason) => addStrike(reason)
  });

  // Camera streams are now managed internally by useFaceDetection and useEyeTracking
  // via the shared camera singleton (sharedCamera.js). No manual wiring needed.

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanupGaze();
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(e => console.error(e));
      }
    };
  }, [cleanupGaze]);

  // --- Helpers ---
  const finishExam = async () => {
    // 55% threshold of 30 games is 16.5 -> 17 correct required
    const totalGames = examGames.length;
    const requiredCorrect = Math.ceil(totalGames * 0.55);
    const isPassed = strikes < 1 && score >= requiredCorrect;
    
    if (userProfile && !isAdmin) {
      try {
        const newAttempts = (userProfile.exam_attempts || 0) + 1;
        const updateData = { exam_attempts: newAttempts };
        
        if (isPassed) {
          updateData.exam_passed = true;
        } else {
          updateData.last_failed_exam = new Date().toISOString();
        }
        
        await supabase.from('profiles').update(updateData).eq('id', userProfile.id);
      } catch (e) {
        console.error('Failed to log exam finish to DB', e);
      }
    }

    setExamResult({
      score: strikes >= 1 ? 0 : score,
      total: examGames.length,
      isPassed
    });
    setPhase('results');

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(e => console.error(e));
    }
    cleanupGaze();
  };

  const handleGameComplete = (success) => {
    if (success) {
      setScore(prev => prev + 1);
    }
    
    if (currentGameIdx + 1 < examGames.length) {
      setCurrentGameIdx(prev => prev + 1);
    } else {
      // Last game completed
      finishExam();
    }
  };

  // --- Rendering ---
  const renderActiveGame = () => {
    const game = examGames[currentGameIdx];
    if (!game) return null;
    
    let GameComponent;
    switch (game.type) {
      case 'swipe': GameComponent = SwipeGame; break;
      case 'spot-flag': GameComponent = SpotTheFlagGame; break;
      case 'password': GameComponent = PasswordGame; break;
      case 'quiz': GameComponent = QuizGame; break;
      case 'chat': GameComponent = ChatGame; break;
      case 'audio': GameComponent = AudioScamGame; break;
      case 'visual': GameComponent = VisualScamGame; break;
      case 'terminal': GameComponent = TerminalGame; break;
      case 'forensics':
      case 'phishing-investigator': GameComponent = ForensicsGame; break;
      case 'wire-audit':
      case 'wire-intercept': GameComponent = WireAuditGame; break;
      case 'email_thread': GameComponent = EmailThreadGame; break;
      case 'scam_sim': GameComponent = ScamSimulatorGame; break;
      case 'deepfake': GameComponent = DeepfakeInterrogationGame; break;
      case 'permission': GameComponent = PermissionPurgeGame; break;
      default: GameComponent = QuizGame;
    }

    return (
      <div style={{ padding: '80px 20px 60px', height: '100%', overflowY: 'auto' }}>
        <GameComponent key={game.id} game={game} onComplete={handleGameComplete} isExamMode={true} />
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {phase === 'landing' && (
        <div style={styles.centerContainer}>
          <div style={styles.card}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎓</div>
            <h1 style={{ color: 'var(--text)', marginBottom: '1rem' }}>Proctored Exam</h1>
            <p style={{ color: 'var(--text2)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Welcome to the ScamShield Certification Exam.
              <br/><br/>
              This exam consists of 30 advanced multiple-choice questions under a 40-minute timer. 
              The passing threshold is 55% (17 out of 30 correct).
              <br/><br/>
              <strong>⚠️ WARNING:</strong> This is a proctored environment. You must remain in fullscreen mode, keep your camera uncovered, and avoid switching tabs or using keyboard shortcuts. 1 violation will result in an automatic failure.
            </p>
            <button 
              onClick={() => setPhase('envcheck')}
              style={styles.primaryButton}
            >
              Begin System Check ➔
            </button>
          </div>
        </div>
      )}

      {phase === 'cooldown' && (
        <div style={styles.centerContainer}>
          <div style={styles.card}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⏳</div>
            <h1 style={{ color: 'var(--text)', marginBottom: '1rem' }}>Exam on Cooldown</h1>
            <p style={{ color: 'var(--text2)', marginBottom: '2rem', lineHeight: 1.6 }}>
              You recently failed the proctored exam. To ensure academic integrity and encourage further study, there is a mandatory 24-hour waiting period before you can attempt it again.
              <br/><br/>
              <strong>Time remaining:</strong> ~{cooldownTimeLeft} hours
            </p>
            <button 
              onClick={() => navigate('/dashboard')}
              style={styles.primaryButton}
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      )}

      {phase === 'envcheck' && (
        <div style={styles.centerContainer}>
          <EnvironmentCheck onComplete={() => setPhase('roomscan')} />
        </div>
      )}

      {phase === 'roomscan' && (
        <div style={styles.centerContainer}>
          <RoomScan onComplete={(images) => {
            setRoomScanImages(images);
            setPhase('calibration');
          }} />
        </div>
      )}

      {phase === 'calibration' && (
        <EyeCalibration 
          startCalibration={startEyeCalibration}
          markCalibrated={markEyeCalibrated}
          onComplete={async () => {
          // Go to active phase and request fullscreen
          setPhase('active');
          if (examContainerRef.current) {
            await enterFullscreen(examContainerRef.current);
          } else {
            await enterFullscreen(document.documentElement);
          }
        }} />
      )}

      {phase === 'active' && (
        <div 
          ref={examContainerRef} 
          style={{ width: '100vw', height: '100vh', background: 'var(--bg)', position: 'fixed', top: 0, left: 0, zIndex: 9999 }}
        >
          {/* Video elements are now created internally by detection hooks */}
          {isLocked ? (
            <div style={styles.centerContainer}>
              <div style={styles.card}>
                <h2 style={{ color: '#ef4444' }}>🔒 Exam Terminated</h2>
                <p>You accrued a strike and the exam has been locked.</p>
                <p>Please wait, redirecting to results...</p>
              </div>
            </div>
          ) : (
            <>
              <ExamHUD 
                currentSimNum={currentGameIdx + 1}
                totalSims={examGames.length}
                score={score}
                timeLeftFormatted={timeLeftFormatted}
                isUrgent={isUrgent}
                strikes={strikes}
                gazeWarnings={gazeWarnings}
                faceDetectionStatus={faceDetectionStatus}
                eyeTrackingStatus={eyeTrackingStatus}
              />
              {renderActiveGame()}
            </>
          )}
        </div>
      )}

      {phase === 'results' && examResult && (
        <ExamResults 
          score={examResult.score}
          total={examResult.total}
          isPassed={examResult.isPassed}
          violationLog={violationLog}
          roomScanImages={roomScanImages}
          userName={userName}
          onRetake={() => {
            window.location.reload(); // Reload to reset all states cleanly
          }}
        />
      )}
    </div>
  );
};

const styles = {
  centerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '2rem'
  },
  card: {
    background: 'var(--bg2)',
    padding: '3rem',
    borderRadius: '16px',
    border: '1px solid var(--border)',
    maxWidth: '600px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
  },
  primaryButton: {
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
  }
};

export default ExamPage;
