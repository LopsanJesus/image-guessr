import React from "react";
import WhatsAppIcon from "../../assets/WhatsAppIcon/WhatsAppIcon";

import { withTranslation } from "react-i18next";

import "./ShareButtons.css";
import CopyLinkIcon from "../../assets/CopyLinkIcon/CopyLinkIcon";

const ShareButtons = ({ t }) => {
  return (
    <div className="flex justify-center w-full py-8">
      <div className="overflow-hidden rounded max-w-md w-full shadow-lg bg-white">
        <div className="flex justify-center text-3xl my-10">
          {t("Play with your friends")}
        </div>
        <div className="flex justify-center mb-10 flex-row space-x-5">
          <WhatsAppIcon />
          <CopyLinkIcon />
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(ShareButtons);
