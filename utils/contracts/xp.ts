export type XpSummary = {
  gainedXp: number;
  frozen: boolean;
  streakExtended: boolean;
  date: number;
  userId: number;
  repaired: boolean;
  dailyGoalXp: number;
  numSessions: number;
  totalSessionTime: number;
};

export type XpSummaryResponse = {
  summaries: XpSummary[];
};
