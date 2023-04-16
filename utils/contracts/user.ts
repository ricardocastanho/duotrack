export type User = {
  id: number;
  name: string;
  monthlyXp: number;
  streak: number;
  motivation: string;
  picture: string;
  learningLanguage: string;
  hasFacebookId: boolean;
  facebookId: string;
  inviteURL: string;
  canUseModerationTools: boolean;
  fromLanguage: string;
  _achievements: {
    tier: number;
    count: number;
    tierCounts: number[];
    name: string;
    shouldShowUnlock: boolean;
  }[];
  location: string;
  username: string;
  bio: string;
  hasGoogleId: boolean;
  optionalFeatures: {
    id: string;
    status: string;
  }[];
  currentCourse: {
    status: string;
    learningLanguage: string;
    healthEnabled: boolean;
    xp: number;
    wordsLearned: number;
    id: string;
    fromLanguage: string;
    title: string;
    smartTips: {
      url: string;
      smartTipId: string;
    }[];
    trackingProperties: {
      direction: string;
      total_crowns: number;
      took_placementtest: boolean;
      learning_language: string;
      gold_skill_count: number;
      gold_tree_percent: number;
      num_skills_newly_decayed: number;
      num_skills_decayed: number;
      ui_language: string;
      max_tree_level: number;
    };
    crowns: number;
    progressQuizHistory: {
      endTime: number;
      score: number;
      startTime: number;
    }[];
    sections: {
      numRows: number;
      checkpointFinished: boolean;
      checkpointAccessible: boolean;
      name: string;
      summary: string;
      preload: boolean;
      extraCrowns: number;
      placementTestAvailable: boolean;
      authorId: string;
      progressVersion: number;
    }[];
  };
  currentCourseId: string;
  hasPhoneNumber: boolean;
  creationDate: number;
  hasPlus: boolean;
  roles: string[];
  emailVerified: boolean;
  courses: {
    id: string;
    preload: boolean;
    placementTestAvailable: boolean;
    authorId: string;
    title: string;
    learningLanguage: string;
    xp: number;
    healthEnabled: boolean;
    fromLanguage: string;
    crowns: number;
  }[];
  xpGains: {
    eventType: string;
    xp: number;
    skillId: string;
    time: number;
  }[];
  enableSpeaker: boolean;
  deactivated: boolean;
  emailEditSuggested: boolean;
  emailStreakFreezeUsed: boolean;
  gems: number;
  pushEditSuggested: boolean;
  pushAnnouncement: boolean;
  totalXp: number;
  enableMicrophone: boolean;
  insiteImmersionLingots: boolean;
  pushPromotion: boolean;
  emailStreakSaver: boolean;
  insiteSentenceEdited: boolean;
  canCreatePearsonClassroom: boolean;
  xpGoal: number;
  email: string;
  timezone: string;
  timezoneOffset: string;
  coachOutfit: string;
  weeklyXp: number;
  lingots: number;
  googleId: string;
  countryCode: string;
  streakData: {
    length: number;
    updatedTimeZone: string;
    xpGoal: number;
    updatedTimestamp: number;
  };
  referralInfo: {
    inviterName: string;
    unconsumedInviteeName: string;
    numBonusesReady: number;
    hasReachedCap: boolean;
    isEligibleForBonus: boolean;
  };
  pushStreamPost: boolean;
  adsEnabled: boolean;
  emailAnnouncement: boolean;
  xpGoalMetToday: boolean;
  pushLeaderboards: boolean;
  zapsRemaining: number;
  emailSchoolsAnnouncement: boolean;
  emailWeeklyProgressReport: boolean;
  emailWeeklyReport: boolean;
  pushComment: boolean;
  pushFollow: boolean;
  pushClubs: boolean;
  pushStreakSaver: boolean;
  emailClassroomJoin: boolean;
  emailAssignment: boolean;
  emailAssignmentComplete: boolean;
  lastStreak: {
    isAvailableForRepair: boolean;
    googlePlayProductId: string;
    googlePlayDevPayload: string;
    length: number;
    daysAgo: number;
    lastReachedGoal: number;
    shortenedProductId: string;
  };
  shopItems: {
    wagerDay: number;
    purchaseId: string;
    purchaseDate: number;
    itemName: string;
    id: string;
    purchasePrice: number;
  }[];
  health: {
    maxHearts: number;
    healthEnabled: boolean;
    eligibleForFreeRefill: boolean;
    secondsPerHeartSegment: number;
    hearts: number;
    useHealth: boolean;
    secondsUntilNextHeartSegment: number;
  };
};

export type UserResponse = {
  users: User[];
};
