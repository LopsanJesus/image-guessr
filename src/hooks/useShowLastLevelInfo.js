import { useEffect, useState } from "react";
import { getNumberOfLevels } from "../data/cities";

import { SCORE_TO_UNLOCK_LEVEL } from "../helpers/score";

export function useShowLastLevelInfo(level, score) {
  const [showLastLevelInfo, setShowLastLevelInfo] = useState(false);

  useEffect(() => {
    setShowLastLevelInfo(
      level === getNumberOfLevels().toString() && score >= SCORE_TO_UNLOCK_LEVEL
    );
  }, [level, score]);
  return { showLastLevelInfo };
}
