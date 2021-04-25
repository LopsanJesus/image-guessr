import React from "react";

import CityIcon from "../../assets/CityIcon/CityIcon";
import CountryIcon from "../../assets/CountryIcon/CountryIcon";
import MonumentIcon from "../../assets/MonumentIcon/MonumentIcon";

const getColor = (type) => {
  switch (type) {
    case "city":
      return "bg-yellow-300";
    case "country":
      return "bg-blue-300";
    case "monument":
      return "bg-pink-300";
    default:
      return "bg-pink-300";
  }
};

const getIcon = (type) => {
  switch (type) {
    case "city":
      return <CityIcon />;
    case "country":
      return <CountryIcon />;
    case "monument":
      return <MonumentIcon />;
    default:
      return <CityIcon />;
  }
};

const ImageTypeIcon = ({ imageType, isStored, text }) => {
  return (
    <div
      className={`${text ? "rounded-t-lg": "rounded-lg"} flex flex-row justify-center ${
        !isStored ? getColor(imageType) : "bg-green-500"
      }`}
    >
      <div className={`p-2 flex items-center flex-grow-0 ${text ? "ml-3" : ""} `}>{getIcon(imageType)}</div>

      {text && (
        <span className="font-bold text-2xl text-white my-4 mr-4 flex-grow">
          {text}
        </span>
      )}
    </div>
  );
};

export default ImageTypeIcon;
