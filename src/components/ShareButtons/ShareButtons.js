import React from "react";
import ShareIcon from "../../assets/ShareIcon/ShareIcon";
import WhatsAppIcon from "../../assets/WhatsAppIcon/WhatsAppIcon";
import "./ShareButtons.css";

const ShareButtons = () => {
  return (
    <div className="flex flex-row">
      <div className="flex-1">
        <ShareIcon />
      </div>
      <div className="flex-1">
        <WhatsAppIcon />
      </div>
    </div>
  );
};

export default ShareButtons;
