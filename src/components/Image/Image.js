import React from "react";
import { withTranslation } from "react-i18next";
import CityIcon from "../../assets/CityIcon/CityIcon";

const Image = ({ image, isStored, onClick, t }) => {
  console.log(image);
  const imageName = image.image;

  return (
    <div className="image-container relative inline-block text-center">
      <div className="absolute left-0 bg-green-500 rounded-lg ">
        <div className="m-0.5 p-2">
          <CityIcon />
        </div>
      </div>
      <img
        id={imageName}
        src={"/img/" + imageName + ".jpg"}
        width="500"
        height="600"
        className={`image ${
          isStored ? "border-2 rounded-lg border-green-500" : "hover:opacity-75"
        }`}
        alt={imageName}
        onClick={!isStored ? () => onClick(imageName) : undefined}
      />
      {isStored && (
        <div
          id={imageName + "text"}
          className="imagetext uppercase font-extrabold rounded-xl text-green-500 bg-white p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          {t(imageName.split("-").join(" ").toUpperCase())}
        </div>
      )}
    </div>
  );
};

export default withTranslation()(Image);
