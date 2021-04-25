import React from "react";

import CTAButton from "../CTAButton";

import { useHistory } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { SCORE_TO_UNLOCK_LEVEL } from "../../helpers/score";

const ScoreHeader = ({ level, score, nextLevelExists, t }) => {
  const history = useHistory();
  const nextLevel = parseInt(level) + 1;

  return (
    <>
      <span className="font-bold text-2xl text-gray-900">
        {`${t("Level")} ${level}`}
      </span>
      <span className="text-1xl text-gray-600 ml-4">{score} / 12</span>

      {nextLevelExists && score >= SCORE_TO_UNLOCK_LEVEL && (
        <div className="ml-5">
          <CTAButton
            text={"Level " + nextLevel}
            level={level}
            onClick={() => {
              history.push("/play/level/" + nextLevel);
            }}
          />
        </div>
      )}
    </>
  );
};

export default withTranslation()(ScoreHeader);
