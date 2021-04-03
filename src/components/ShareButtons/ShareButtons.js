import React from "react";
import WhatsAppIcon from "../../assets/WhatsAppIcon/WhatsAppIcon";
import CopyLinkIcon from "../../assets/CopyLinkIcon/CopyLinkIcon";

import { withTranslation } from "react-i18next";

import "./ShareButtons.css";

const ShareButtons = ({ t }) => {
  return (
    <div className="flex justify-center mb-10 flex-row space-x-5">
      <WhatsAppIcon />
      <CopyLinkIcon />
    </div>
  );
};

export default withTranslation()(ShareButtons);
