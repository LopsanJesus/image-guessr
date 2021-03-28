import React from "react";
import { Link } from "react-router-dom";

import "./LevelListItem.css";

const LevelListItem = ({ level, hits, disabled }) => {
  return (
    <Link
      to={"/play/level/" + level}
      id={"level-" + level}
      className={`block group p-4 border-b m-4 rounded-3xl ${
        disabled
          ? "bg-gray-400 opacity-25 cursor-not-allowed"
          : "bg-white hover:bg-blue-600"
      }`}
      onClick={disabled ? (e) => e.preventDefault() : undefined}
    >
      <p
        className={`flex justify-center font-bold text-3xl mb-1 text-black ${
          disabled ? "" : "group-hover:text-white"
        }`}
      >
        Level {level}
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

export default LevelListItem;
