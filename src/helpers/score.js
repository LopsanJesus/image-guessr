import { getStoredArray } from "./storage.js";

export const SCORE_TO_UNLOCK_LEVEL = 10;

export const getHitsPerLevel = () => {
  const achievedCitiesPerLevel = [];
  const hitsPerLevel = [];

  var level = 1;
  while (getStoredArray("cities" + level).length > 0) {
    achievedCitiesPerLevel.push(getStoredArray("cities" + level));
    level++;
  }

  achievedCitiesPerLevel.map((element, index) => {
    return (hitsPerLevel[index + 1] = element.length);
  });

  return hitsPerLevel;
};
