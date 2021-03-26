import React from "react";
import "./LevelListItem.css";

const LevelListItem = ({ level, hits, disabled }) => {
  return (
    <a
      id={"level-" + level}
      href={"/play/level/" + level}
      className={`block group p-4 border-b m-4 rounded-3xl ${
        disabled
          ? "bg-gray-400 opacity-25 cursor-not-allowed"
          : "bg-white hover:bg-blue-600"
      }`}
      onClick={disabled && ((e) => e.preventDefault())}
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
    </a>
  );
};

export default LevelListItem;
