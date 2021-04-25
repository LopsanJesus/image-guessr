import React from "react";
import ImageTypeIcon from "../ImageTypeIcon";
import { withTranslation } from "react-i18next";

const Image = ({
  imageType,
  imageName,
  isStored,
  onClick,
  t,
  showTypeInHeader,
}) => {
  console.log(imageName);

  return (
    <div
      className="image-container relative inline-block text-center cursor-pointer"
      onClick={() => onClick && onClick({ imageName, imageType })}
    >
      {showTypeInHeader && (
        <h3 className="font-bold text-center text-2xl text-gray-900 my-4">
          <ImageTypeIcon imageType={imageType} isStored={isStored} />
          {t(imageType)}
        </h3>
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
        className={`image max-h-96 ${
          !isStored ? "" : "border-green-500"
        } border-4 rounded-lg`}
        alt="ImageGuessr"
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
