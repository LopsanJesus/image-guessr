import React from "react";
import WhatsAppIcon from "../../assets/WhatsAppIcon/WhatsAppIcon";
import "./ShareButtons.css";

const ShareButtons = () => {
  return (
    <div className="flex justify-center w-full py-8">
      <div className="overflow-hidden rounded max-w-md w-full shadow-lg bg-white">
        <div className="flex justify-center text-3xl my-10">
          Compite con tus amigos!
        </div>
        <div className="flex justify-center mb-10">
          <WhatsAppIcon />
        </div>
      </div>
    </div>
  );
};

export default ShareButtons;
