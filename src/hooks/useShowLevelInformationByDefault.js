import { useEffect, useState } from "react";
import { storeItem, getStoredItem } from "../helpers/storage";

const INFO_LEVEL_STORAGE_KEY = "LEVELS_SEEN_BY_DEFAULT";
const LEVELS_WITH_DEFAULT_INFORMATION = [1, 5];

const shouldShowInfoForLevel = (level) => {
  return (
    LEVELS_WITH_DEFAULT_INFORMATION.includes(parseInt(level)) &&
    (getStoredItem(INFO_LEVEL_STORAGE_KEY) === null ||
      !getStoredItem(INFO_LEVEL_STORAGE_KEY).includes(level))
  );
};

export function useShowLevelInformationByDefault(level) {
  useEffect(() => {
    setShowLevelInfoByDefault(shouldShowInfoForLevel(level));
  }, [level]);

  const [showLevelInfoByDefault, setShowLevelInfoByDefault] = useState(
    shouldShowInfoForLevel(level)
  );

  const setLevelInfoSeen = (level) => {
    const levelsSeen = getStoredItem(INFO_LEVEL_STORAGE_KEY);
    if (levelsSeen === null || !levelsSeen.includes(level)) {
      storeItem(level, INFO_LEVEL_STORAGE_KEY);
      setShowLevelInfoByDefault(false);
    }
  };

  return { showLevelInfoByDefault, setLevelInfoSeen };
}
