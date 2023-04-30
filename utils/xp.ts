import { XpSummaryResponse } from "./contracts/xp";

export const fetchXpSummaries = (
  userId: number
): Promise<XpSummaryResponse> => {
  return $fetch<XpSummaryResponse>(
    `https://www.duolingo.com/2017-06-30/users/${userId}/xp_summaries`
  );
};
