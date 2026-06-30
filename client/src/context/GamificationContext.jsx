import { createContext, useState, useEffect, useCallback, useContext } from 'react';
import { useToast } from '../components/Toast';
import { supabase } from '../lib/supabase';
import { AuthContext } from './AuthContext';

export const GamificationContext = createContext();

const LEVEL_THRESHOLDS = [
  { number: 1, name: 'Beginner', minXp: 0, maxXp: 199 },
  { number: 2, name: 'Aware', minXp: 200, maxXp: 499 },
  { number: 3, name: 'Defender', minXp: 500, maxXp: 999 },
  { number: 4, name: 'Guardian', minXp: 1000, maxXp: 1999 },
  { number: 5, name: 'Shield Master', minXp: 2000, maxXp: 999999 }
];

const BADGE_CATALOG = [
  { id: 'first_blood', name: 'First Blood', icon: '🎯', description: 'Complete your first module' },
  { id: 'speed_demon', name: 'Speed Demon', icon: '⚡', description: 'Complete a module in under 2 minutes' },
  { id: 'untouchable', name: 'Untouchable', icon: '💎', description: 'Get 100% on 3 quizzes in a row' },
  { id: 'scam_spotter', name: 'Scam Spotter', icon: '🔍', description: 'Correctly identify 10 phishing emails in games' },
  { id: 'shield_master', name: 'Shield Master', icon: '🛡️', description: 'Complete all 23 modules' },
  { id: 'streak_starter', name: 'Streak Starter', icon: '🔥', description: 'Maintain a 3-day streak' },
  { id: 'week_warrior', name: 'Week Warrior', icon: '⚔️', description: 'Maintain a 7-day streak' },
  { id: 'month_master', name: 'Month Master', icon: '👑', description: 'Maintain a 30-day streak' },
  { id: 'quiz_whiz', name: 'Quiz Whiz', icon: '🧠', description: 'Score 100% on 5 different quizzes' },
  { id: 'game_on', name: 'Game On', icon: '🎮', description: 'Complete 5 different games' },
  { id: 'half_way', name: 'Half Way There', icon: '🏔️', description: 'Complete 12 modules' },
  { id: 'rising_star', name: 'Rising Star', icon: '⭐', description: 'Reach Level 2 (Aware)' },
  { id: 'defender_badge', name: 'Defender', icon: '🏰', description: 'Reach Level 3 (Defender)' },
  { id: 'guardian_badge', name: 'Guardian', icon: '🗡️', description: 'Reach Level 4 (Guardian)' },
  { id: 'perfectionist', name: 'Perfectionist', icon: '✨', description: 'Complete any 5 modules with 100% quiz scores' }
].map(b => ({ ...b, unlocked: false, unlockedAt: null }));

const DEFAULT_STATE = {
  xp: 0,
  level: LEVEL_THRESHOLDS[0],
  streak: { count: 0, lastLoginDate: null, isActive: false },
  badges: BADGE_CATALOG
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
        setState(prev => ({ ...prev, ...parsed }));
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
            badges: mergedBadges
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
    return LEVEL_THRESHOLDS.find(l => xpAmount >= l.minXp && xpAmount <= l.maxXp) || LEVEL_THRESHOLDS[4];
  };

  const checkStreak = useCallback(() => {
    setState(prev => {
      const now = new Date();
      const todayStr = now.toISOString().split('T')[0];
      const newState = { ...prev };
      
      if (!newState.streak.lastLoginDate) {
        newState.streak = { count: 1, lastLoginDate: todayStr, isActive: true };
        showToast('First Login! +10 XP', 'xp');
        return newState;
      }

      const lastDate = new Date(newState.streak.lastLoginDate);
      const diffTime = Math.abs(now - lastDate);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (newState.streak.lastLoginDate !== todayStr) {
        if (diffDays === 1) {
          newState.streak.count += 1;
          newState.streak.isActive = true;
          showToast(`Streak continues! ${newState.streak.count} days 🔥`, 'xp');
        } else if (diffDays > 1) {
          newState.streak.count = 1;
          newState.streak.isActive = true;
          showToast('Streak reset. Start building again! 🔥', 'info');
        }
        newState.streak.lastLoginDate = todayStr;
      }

      return newState;
    });
  }, [showToast]);

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

  const unlockBadge = useCallback((badgeId) => {
    setState(prev => {
      const badgeIdx = prev.badges.findIndex(b => b.id === badgeId);
      if (badgeIdx >= 0 && !prev.badges[badgeIdx].unlocked) {
        const newBadges = [...prev.badges];
        newBadges[badgeIdx] = { ...newBadges[badgeIdx], unlocked: true, unlockedAt: new Date().toISOString() };
        showToast(`Unlocked: ${newBadges[badgeIdx].name}`, 'badge');
        const newState = { ...prev, badges: newBadges };
        saveState(newState);
        return newState;
      }
      return prev;
    });
  }, [saveState, showToast]);

  const checkBadges = useCallback((context) => {
    if (context.completedModules?.length > 0) unlockBadge('first_blood');
    if (context.completedModules?.length >= 23) unlockBadge('shield_master');
    if (context.completedModules?.length >= 12) unlockBadge('half_way');
    
    if (state.streak.count >= 3) unlockBadge('streak_starter');
    if (state.streak.count >= 7) unlockBadge('week_warrior');
    if (state.streak.count >= 30) unlockBadge('month_master');
    
    if (state.level.number >= 2) unlockBadge('rising_star');
    if (state.level.number >= 3) unlockBadge('defender_badge');
    if (state.level.number >= 4) unlockBadge('guardian_badge');
  }, [state.streak.count, state.level.number, unlockBadge]);

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
      checkBadges, 
      getProgress,
      clearLevelUp,
      unlockBadge
    }}>
      {children}
    </GamificationContext.Provider>
  );
}
