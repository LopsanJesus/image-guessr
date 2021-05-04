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
      {nextLevelExists && score >= SCORE_TO_UNLOCK_LEVEL ? (
        <div className="ml-6">
          <CTAButton
            text={t("Next level")}
            level={level}
            onClick={() => {
              history.push("/play/level/" + nextLevel);
            }}
          />
        </div>
      ) : (
        <span className="font-bold text-4xl m-4 text-white">
          {`${t("Level")} ${level}`}
        </span>
      )}
      <span className="text-xl font-bold text-white">{score} / 12</span>
    </>
  );
};

export default withTranslation()(ScoreHeader);
