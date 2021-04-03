import React from "react";
import "./MainMenu.css";

import LevelListItem from "../LevelListItem";

import { getStoredItem } from "../../helpers/storage.js";
import { getHitsPerLevel } from "../../helpers/score.js";
import { getNumberOfLevels } from "../../data/cities.js";
import _ from "lodash";
import { withTranslation } from "react-i18next";

const MainMenu = ({ t }) => {
  const numberOfLevels = getNumberOfLevels();
  const lastLevelAchieved =
    getStoredItem("level") > 0 ? getStoredItem("level") : 0;
  const hitsPerLevel = getHitsPerLevel();

  return (
    <div>
      <div className="flex justify-center w-full py-8">
        <div className="overflow-hidden rounded max-w-md w-full shadow-lg">
          {numberOfLevels > 0 ? (
            _.times(numberOfLevels, (index) => {
              return (
                <LevelListItem
                  key={"levelListItem" + index}
                  level={index + 1}
                  hits={hitsPerLevel[index + 1]}
                  disabled={index + 1 > lastLevelAchieved + 1}
                />
              );
            })
          ) : (
            <div className="flex justify-center text-black p-8">
              No levels were found
            </div>
          )}

          <span className="flex justify-center text-gray-500 font-bold text-xl text-black group-hover:text-white m-6">
            {t("More levels coming soon...")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(MainMenu);
