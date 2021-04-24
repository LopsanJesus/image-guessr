import React from "react";
import { withTranslation } from "react-i18next";
import CityIcon from "../../assets/CityIcon/CityIcon";
import CountryIcon from "../../assets/CountryIcon/CountryIcon";
import MonumentIcon from "../../assets/MonumentIcon/MonumentIcon";

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

const Image = ({ imageType, imageName, isStored, onClick, t }) => {
  console.log(imageName);

  return (
    <div className="image-container relative inline-block text-center">
      <div
        className={`absolute left-0 rounded-lg ${
          !isStored ? getColor(imageType) : "bg-green-500"
        }`}
      >
        <div className="m-0.5 p-2">{getIcon(imageType)}</div>
      </div>
      <img
        id={imageName}
        src={"/img/" + imageName + ".jpg"}
        width="500"
        height="600"
        className={`image max-h-96 cursor-pointer ${
          !isStored ? "" : "border-green-500"
        } border-4 rounded-lg`}
        alt="ImageGuessr"
        onClick={() => onClick && onClick({ imageName, imageType })}
      />
      {isStored && (
        <div
          id={imageName + "text"}
          className="imagetext uppercase font-extrabold rounded-xl text-green-500 bg-white p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          {t(
            imageName
              .split("-")
              .join(" ")
              .toUpperCase()
          )}
        </div>
      )}
    </div>
  );
};

export default withTranslation()(Image);
