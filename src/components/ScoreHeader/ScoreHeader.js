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
      {nextLevelExists && (
        <div className="ml-6">
          <CTAButton
            text={t("Next level")}
            level={level}
            isActive={score >= SCORE_TO_UNLOCK_LEVEL}
            onClick={() => {
              history.push("/play/level/" + nextLevel);
            }}
          />
        </div>
      )}
      <div className="font-bold text-white">
        <span className="text-3xl">{score}</span>
        <span className="text-sm"> / 12</span>
      </div>
    </>
  );
};

export default withTranslation()(ScoreHeader);
