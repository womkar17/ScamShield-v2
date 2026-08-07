import { createContext, useState, useEffect, useCallback, useContext, useRef } from 'react';
import { useToast } from '../components/Toast';
import { supabase } from '../lib/supabase';
import { AuthContext } from './AuthContext';

export const GamificationContext = createContext();

const LEVEL_THRESHOLDS = [
  { number: 1, name: 'Novice', minXp: 0, maxXp: 999 },
  { number: 2, name: 'Aware', minXp: 1000, maxXp: 2499 },
  { number: 3, name: 'Scout', minXp: 2500, maxXp: 4999 },
  { number: 4, name: 'Defender', minXp: 5000, maxXp: 9999 },
  { number: 5, name: 'Guardian', minXp: 10000, maxXp: 14999 },
  { number: 6, name: 'Specialist', minXp: 15000, maxXp: 19999 },
  { number: 7, name: 'Expert', minXp: 20000, maxXp: 24999 },
  { number: 8, name: 'Master', minXp: 25000, maxXp: 29999 },
  { number: 9, name: 'Grandmaster', minXp: 30000, maxXp: 34999 },
  { number: 10, name: 'Cyber Sentinel', minXp: 35000, maxXp: 999999 }
];

const BADGE_CATALOG = [
  { id: 'first_blood', name: 'First Blood', icon: '🎯', description: 'Complete your first module' },
  { id: 'speed_demon', name: 'Speed Demon', icon: '⚡', description: 'Complete a module in under 2 minutes' },
  { id: 'untouchable', name: 'Untouchable', icon: '💎', description: 'Get 100% on 10 quizzes in a row' },
  { id: 'scam_spotter', name: 'Scam Spotter', icon: '🔍', description: 'Correctly identify 25 phishing emails in games' },
  { id: 'shield_master', name: 'Shield Master', icon: '🛡️', description: 'Complete all 23 modules' },
  { id: 'streak_starter', name: 'Streak Starter', icon: '🔥', description: 'Maintain a 3-day streak' },
  { id: 'week_warrior', name: 'Week Warrior', icon: '⚔️', description: 'Maintain a 7-day streak' },
  { id: 'month_master', name: 'Month Master', icon: '👑', description: 'Maintain a 30-day streak' },
  { id: 'quiz_whiz', name: 'Quiz Whiz', icon: '🧠', description: 'Score 100% on 5 different quizzes' },
  { id: 'game_on', name: 'Game On', icon: '🎮', description: 'Complete 25 different games' },
  { id: 'half_way', name: 'Half Way There', icon: '🏔️', description: 'Complete 12 modules' },
  { id: 'rising_star', name: 'Rising Star', icon: '⭐', description: 'Reach Level 2 (Aware)' },
  { id: 'defender_badge', name: 'Defender', icon: '🏰', description: 'Reach Level 3 (Defender)' },
  { id: 'guardian_badge', name: 'Guardian', icon: '🗡️', description: 'Reach Level 4 (Guardian)' },
  { id: 'perfectionist', name: 'Perfectionist', icon: '✨', description: 'Complete any 15 modules with 100% quiz scores' },
  { id: 'arcade_master', name: 'Arcade Master', icon: '🕹️', description: 'Complete 50 different arcade minigames' },
  { id: 'completionist', name: 'Completionist', icon: '🏆', description: 'Complete all 75 pre-loaded minigames' },
  { id: 'ironclad', name: 'Ironclad', icon: '🛡️', description: 'Maintain a 60-day active streak' },
  { id: 'century_club', name: 'Century Club', icon: '💯', description: 'Maintain a 100-day active streak' },
  { id: 'deepfake_detective', name: 'Deepfake Detective', icon: '🎭', description: 'Successfully complete 10 Deepfake Interrogation games' },
  { id: 'threat_intel_analyst', name: 'Threat Intel Analyst', icon: '📚', description: 'Read 10 Real-World Case Studies' },
  { id: 'zero_day_hero', name: 'Zero-Day Hero', icon: '🦸', description: 'Reach Level 5 (Shield Master)' },
  { id: 'eagle_eye', name: 'Eagle Eye', icon: '🦅', description: 'Spot 50 red flags across Spot-the-Flag games' },
  { id: 'unbreakable', name: 'Unbreakable', icon: '🔐', description: 'Successfully secure 15 passwords in the Password games' },
  { id: 'wire_fraud_expert', name: 'Wire Fraud Expert', icon: '💸', description: 'Successfully complete 10 Wire Audit or Swipe games' },
  { id: 'lore_master', name: 'Lore Master', icon: '📜', description: 'Complete 40 Modules' },
  { id: 'flawless_victory', name: 'Flawless Victory', icon: '✨', description: 'Complete 25 modules with a 100% score on the first attempt' }
].map(b => ({ ...b, unlocked: false, unlockedAt: null }));

const DEFAULT_STATE = {
  xp: 0,
  level: LEVEL_THRESHOLDS[0],
  streak: { count: 0, lastLoginDate: null, isActive: false },
  badges: BADGE_CATALOG,
  stats: {
    gamesPlayed: 0,
    caseStudiesRead: 0,
    flagsSpotted: 0,
    passwordsSecured: 0,
    deepfakesSurvived: 0,
    wireFraudsCaught: 0,
    phishingEmailsIdentified: 0,
    flawlessModules: 0,
    quizzes100Streak: 0
  }
};

export function GamificationProvider({ children }) {
  const [state, setState] = useState(DEFAULT_STATE);
  const [levelUpData, setLevelUpData] = useState(null);
  const { showToast } = useToast();

  // Load from localStorage first (works for all users including guests)
  useEffect(() => {
    const saved = localStorage.getItem('ss_gamification');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        
        let mergedBadges = [...DEFAULT_STATE.badges];
        if (parsed.badges) {
          mergedBadges = mergedBadges.map(defaultBadge => {
            const savedBadge = parsed.badges.find(b => b.id === defaultBadge.id);
            return savedBadge ? { ...defaultBadge, unlocked: savedBadge.unlocked, unlockedAt: savedBadge.unlockedAt } : defaultBadge;
          });
        }

        setState(prev => ({ 
          ...prev, 
          ...parsed,
          badges: mergedBadges,
          stats: { ...DEFAULT_STATE.stats, ...(parsed.stats || {}) }
        }));
      } catch (e) {
        console.error('Failed to parse gamification data', e);
      }
    }
    checkStreak();
  }, []);

  // Sync FROM Supabase when user logs in
  useEffect(() => {
    const syncFromSupabase = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) return;

      const userId = session.user.id;

      // Fetch profile XP/streak
      const { data: profile } = await supabase
        .from('profiles')
        .select('xp, streak, level')
        .eq('id', userId)
        .single();

      // Fetch progress (badges, modules)
      const { data: progress } = await supabase
        .from('user_progress')
        .select('unlocked_badges, arcade_games_played')
        .eq('user_id', userId)
        .single();

      if (profile) {
        const level = getLevelForXp(profile.xp || 0);
        setState(prev => {
          // Merge: use the higher XP between local and remote
          const mergedXp = Math.max(prev.xp, profile.xp || 0);
          const mergedLevel = getLevelForXp(mergedXp);
          const mergedStreak = Math.max(prev.streak.count, profile.streak || 0);

          // Merge badges
          let mergedBadges = [...prev.badges];
          if (progress?.unlocked_badges?.length) {
            mergedBadges = mergedBadges.map(b => ({
              ...b,
              unlocked: b.unlocked || progress.unlocked_badges.includes(b.id),
              unlockedAt: b.unlockedAt || (progress.unlocked_badges.includes(b.id) ? new Date().toISOString() : null)
            }));
          }

          const newState = {
            ...prev,
            xp: mergedXp,
            level: mergedLevel,
            streak: { ...prev.streak, count: mergedStreak },
            badges: mergedBadges,
            stats: { ...DEFAULT_STATE.stats, ...(prev.stats || {}) }
          };

          localStorage.setItem('ss_gamification', JSON.stringify(newState));
          return newState;
        });
      }
    };

    syncFromSupabase();

    // Also listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        syncFromSupabase();
      }
    });

    return () => subscription?.unsubscribe();
  }, []);

  // Sync TO Supabase whenever state changes
  const syncToSupabase = useCallback(async (newState) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) return;

    const userId = session.user.id;

    // Update profile
    await supabase.from('profiles').update({
      xp: newState.xp,
      level: newState.level.number,
      streak: newState.streak.count
    }).eq('id', userId);

    // Update progress
    const unlockedBadgeIds = newState.badges.filter(b => b.unlocked).map(b => b.id);
    await supabase.from('user_progress').update({
      unlocked_badges: unlockedBadgeIds
    }).eq('user_id', userId);
  }, []);

  const saveState = useCallback((newState) => {
    setState(newState);
    localStorage.setItem('ss_gamification', JSON.stringify(newState));
    // Async sync to Supabase (fire and forget)
    syncToSupabase(newState);
  }, [syncToSupabase]);

  const getLevelForXp = (xpAmount) => {
    return LEVEL_THRESHOLDS.find(l => xpAmount >= l.minXp && xpAmount <= l.maxXp) || LEVEL_THRESHOLDS[9];
  };

  const checkStreak = useCallback(() => {
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    
    // We can evaluate streak outside setState using the ref to avoid stale state in dependencies
    const currentStreak = badgesRef.current ? state.streak : { count: 0, lastLoginDate: null, isActive: false }; // fallback

    setState(prev => {
      const newState = { ...prev };
      
      if (!newState.streak.lastLoginDate) {
        newState.streak = { count: 1, lastLoginDate: todayStr, isActive: true };
        return newState;
      }

      const lastDate = new Date(newState.streak.lastLoginDate);
      const diffTime = Math.abs(now - lastDate);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (newState.streak.lastLoginDate !== todayStr) {
        if (diffDays === 1) {
          newState.streak.count += 1;
          newState.streak.isActive = true;
        } else if (diffDays > 1) {
          newState.streak.count = 1;
          newState.streak.isActive = true;
        }
        newState.streak.lastLoginDate = todayStr;
      }

      return newState;
    });

    // Handle toasts outside setState, synchronously evaluating current state
    if (!state.streak.lastLoginDate) {
      showToast('First Login! +10 XP', 'xp');
    } else {
      const lastDate = new Date(state.streak.lastLoginDate);
      const diffTime = Math.abs(now - lastDate);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      if (state.streak.lastLoginDate !== todayStr) {
        if (diffDays === 1) {
          showToast(`Streak continues! ${state.streak.count + 1} days 🔥`, 'xp');
        } else if (diffDays > 1) {
          showToast('Streak reset. Start building again! 🔥', 'info');
        }
      }
    }
  }, [state.streak, showToast]);

  useEffect(() => {
    if (state !== DEFAULT_STATE) {
      localStorage.setItem('ss_gamification', JSON.stringify(state));
    }
  }, [state.streak.lastLoginDate]);

  const addXP = useCallback((amount, reason = '') => {
    setState(prev => {
      const newXp = prev.xp + amount;
      const oldLevel = prev.level;
      const newLevel = getLevelForXp(newXp);
      
      const newState = { ...prev, xp: newXp, level: newLevel };
      
      if (newLevel.number > oldLevel.number) {
        setLevelUpData({ oldLevel, newLevel });
      }

      saveState(newState);
      return newState;
    });
  }, [saveState]);

  const badgesRef = useRef(DEFAULT_STATE.badges);
  const unlockingBadges = useRef(new Set());
  
  useEffect(() => { badgesRef.current = state.badges; }, [state.badges]);

  const unlockBadge = useCallback((badgeId) => {
    if (unlockingBadges.current.has(badgeId)) return;

    const badge = badgesRef.current.find(b => b.id === badgeId);
    if (!badge || badge.unlocked) return;

    unlockingBadges.current.add(badgeId);
    showToast(`Unlocked: ${badge.name}`, 'badge');

    setState(prev => {
      const badgeIdx = prev.badges.findIndex(b => b.id === badgeId);
      if (badgeIdx >= 0 && !prev.badges[badgeIdx].unlocked) {
        const newBadges = [...prev.badges];
        newBadges[badgeIdx] = { ...newBadges[badgeIdx], unlocked: true, unlockedAt: new Date().toISOString() };
        const newState = { ...prev, badges: newBadges };
        saveState(newState);
        return newState;
      }
      return prev;
    });
  }, [saveState, showToast]);

  const trackStat = useCallback((statName, incrementAmount = 1) => {
    setState(prev => {
      const newStats = { ...prev.stats, [statName]: (prev.stats?.[statName] || 0) + incrementAmount };
      const newState = { ...prev, stats: newStats };
      saveState(newState);
      return newState;
    });
  }, [saveState]);

  const checkBadges = useCallback((context = {}) => {
    // Basic progression
    if (context.completedModules?.length > 0) unlockBadge('first_blood');
    if (context.completedModules?.length >= 12) unlockBadge('half_way');
    if (context.completedModules?.length >= 23) unlockBadge('shield_master');
    if (context.completedModules?.length >= 40) unlockBadge('lore_master');

    // Streaks
    if (state.streak.count >= 3) unlockBadge('streak_starter');
    if (state.streak.count >= 7) unlockBadge('week_warrior');
    if (state.streak.count >= 30) unlockBadge('month_master');
    if (state.streak.count >= 60) unlockBadge('ironclad');
    if (state.streak.count >= 100) unlockBadge('century_club');
    
    // Levels
    if (state.level.number >= 2) unlockBadge('rising_star');
    if (state.level.number >= 3) unlockBadge('defender_badge');
    if (state.level.number >= 4) unlockBadge('guardian_badge');
    if (state.level.number >= 5) unlockBadge('zero_day_hero');

    // Advanced Stats (from state.stats)
    const stats = state.stats || DEFAULT_STATE.stats;
    if (stats.gamesPlayed >= 25) unlockBadge('game_on');
    if (stats.gamesPlayed >= 50) unlockBadge('arcade_master');
    if (stats.gamesPlayed >= 75) unlockBadge('completionist');
    
    if (stats.quizzes100Streak >= 10) unlockBadge('untouchable');
    if (stats.phishingEmailsIdentified >= 25) unlockBadge('scam_spotter');
    if (stats.deepfakesSurvived >= 10) unlockBadge('deepfake_detective');
    if (stats.caseStudiesRead >= 10) unlockBadge('threat_intel_analyst');
    if (stats.flagsSpotted >= 50) unlockBadge('eagle_eye');
    if (stats.passwordsSecured >= 15) unlockBadge('unbreakable');
    if (stats.wireFraudsCaught >= 10) unlockBadge('wire_fraud_expert');
    if (stats.flawlessModules >= 25) unlockBadge('flawless_victory');
    if (stats.flawlessModules >= 15) unlockBadge('perfectionist');

  }, [state.streak.count, state.level.number, state.stats, unlockBadge]);

  const getProgress = useCallback(() => {
    const { minXp, maxXp } = state.level;
    const currentLevelXp = state.xp - minXp;
    const levelRange = maxXp - minXp;
    const percentToNextLevel = state.level.number === 5 ? 100 : Math.min(100, Math.round((currentLevelXp / levelRange) * 100));

    return {
      xp: state.xp,
      level: state.level,
      streak: state.streak,
      badges: state.badges,
      percentToNextLevel
    };
  }, [state]);

  const clearLevelUp = () => setLevelUpData(null);

  return (
    <GamificationContext.Provider value={{ 
      ...state, 
      levelUpData,
      addXP, 
      trackStat,
      checkBadges, 
      getProgress,
      clearLevelUp,
      unlockBadge
    }}>
      {children}
    </GamificationContext.Provider>
  );
}
