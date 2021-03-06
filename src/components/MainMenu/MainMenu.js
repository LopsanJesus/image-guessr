import React /*, { useState }*/ from "react";
import "./MainMenu.css";

import LevelListItem from "../LevelListItem";

import { getLastLevelAchieved } from "../../helpers/storage.js";
import { getHitsPerLevel } from "../../helpers/score.js";
import { getNumberOfLevels } from "../../data/cities.js";
import _ from "lodash";
import { withTranslation } from "react-i18next";
import ShareButtons from "../ShareButtons/ShareButtons";
import Footer from "../Footer";
// import ResetProgress from "../ResetProgress";

const MainMenu = ({ t }) => {
  // const [showResetProgressModal, setShowResetProgressModal] = useState(false);
  const numberOfLevels = getNumberOfLevels();
  const lastLevelAchieved = getLastLevelAchieved();
  const hitsPerLevel = getHitsPerLevel();

  return (
    <div>
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

            <span className="flex justify-center text-white font-bold text-xl text-black group-hover:text-white m-6">
              {t("More levels coming soon...")}
            </span>

            <div className="mt-5 mb-10">
              <ShareButtons />
            </div>
            {/* <button
              onClick={() => {
                setShowResetProgressModal(false);
              }}
            >
              Boton
            </button> */}
          </div>
        </div>
        <Footer />
      </div>
      {/* {showResetProgressModal && (
        <div className="mt-5 mb-10">
          <ResetProgress />
        </div>
      )} */}
    </div>
  );
};

export default withTranslation()(MainMenu);
