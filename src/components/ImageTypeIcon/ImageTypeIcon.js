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

const ImageTypeIcon = ({ imageType , isStored}) => {
  return (
    <div className={`rounded-lg ${
        !isStored ? getColor(imageType) : "bg-green-500"
      }`}
    >
      <div className="m-0.5 p-2">{getIcon(imageType)}</div>
    </div>
  );
};

export default ImageTypeIcon;
