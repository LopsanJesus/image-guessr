import { useEffect } from "react";
import background from "./images/background2.jpg";

const BackgroundImage = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    return () => {
      document.body.style.backgroundImage = "";
    };
  });
  return null;
};

export default BackgroundImage;
