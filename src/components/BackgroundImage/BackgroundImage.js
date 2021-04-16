import React from "react";
import background from "./images/background1.jpg";

const BackgroundImage = () => {
  return (
    <div
      className="bg-scroll h-screen w-screen bg-cover bg-center absolute"
      style={{ backgroundImage: `url(${background})`, zIndex: "-1" }}
    ></div>
  );
};

export default BackgroundImage;
