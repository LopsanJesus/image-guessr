import React from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { isLevelCompleted } from "../../helpers/score";

import "./LevelListItem.css";

const LevelListItem = ({ level, hits, disabled, t }) => {
  return (
    <Link
      to={"/play/level/" + level}
      id={"level-" + level}
      className={`block group p-4 border-b m-4 rounded-3xl
      ${
        isLevelCompleted(hits)
          ? "bg-green-400 hover:bg-green-500 text-white group-hover:text-white"
          : disabled
          ? "bg-gray-400 opacity-25 cursor-not-allowed"
          : "bg-white hover:bg-blue-400"
      }
      `}
      onClick={disabled ? (e) => e.preventDefault() : undefined}
    >
      <p
        className={`flex justify-center font-bold text-3xl mb-1 ${
          disabled ? "" : "group-hover:text-white"
        }`}
      >
        {t("Level") + " " + level}
      </p>

      <p
        className={`flex justify-center text-grey-darker mb-2 ${
          disabled ? "" : "group-hover:text-white"
        }`}
      >
        {hits ? hits : 0} / 12
      </p>
    </Link>
  );
};

export default withTranslation()(LevelListItem);
