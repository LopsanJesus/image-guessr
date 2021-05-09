import React from "react";
import ImageTypeIcon from "../ImageTypeIcon";
import CheckIcon from "../../assets/CheckIcon/CheckIcon";
import { withTranslation } from "react-i18next";

import "./styles.css";

const getBorderColor = (type) => {
  switch (type) {
    case "city":
      return "border-yellow-300";
    case "country":
      return "border-blue-300";
    case "monument":
      return "border-pink-300";
    default:
      return "border-pink-300";
  }
};

const cityNameToString = (imageName, t) => {
  return t(imageName.split("-").join(" ").toUpperCase());
};

const Image = ({
  imageType,
  imageName,
  isStored,
  onClick,
  t,
  showTypeInHeader,
}) => {
  return (
    <div
      className="image-container relative inline-block text-center cursor-pointer"
      onClick={() => onClick && onClick({ imageName, imageType })}
    >
      {showTypeInHeader && (
        <h2 className="w-7/12 m-auto">
          <ImageTypeIcon
            imageType={imageType}
            isStored={isStored}
            text={t(imageType)}
          />
        </h2>
      )}

      {!showTypeInHeader && (
        <div className="absolute left-0">
          <ImageTypeIcon imageType={imageType} isStored={isStored} />
        </div>
      )}
      <img
        id={imageName}
        src={"/img/" + imageName + ".jpg"}
        width="500"
        height="600"
        className={`image imageClass ${
          !isStored
            ? showTypeInHeader
              ? getBorderColor(imageType)
              : ""
            : "border-green-500"
        } border-4 rounded-lg`}
        alt="ImageGuessr"
      />
      {isStored && !showTypeInHeader && (
        <div
          id={imageName + "text"}
          className="imagetext uppercase font-extrabold rounded-xl text-green-500 bg-white p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          {cityNameToString(imageName, t)}
        </div>
      )}

      {isStored && showTypeInHeader && (
        <h2 className="uppercase font-extrabold text-green-500 pt-4 flex flex-row justify-center">
          <span className="mr-2">{cityNameToString(imageName, t)}</span>
          <CheckIcon />
        </h2>
      )}
    </div>
  );
};

export default withTranslation()(Image);
