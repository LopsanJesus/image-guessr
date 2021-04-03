import React, { useState } from "react";

import { withTranslation } from "react-i18next";

import "./style.css";

const URL = window.location.origin;

const CopyLinkIcon = ({ t }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(URL);
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  };

  return (
    <>
      <div className="copylink-icon-wrapper" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="copylink-ico"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      </div>
      {showConfirmation && (
        <span className="text-gray-500 text-sm absolute -mt-7">
          {t("Link copied to clipboard")}
        </span>
      )}
    </>
  );
};

export default withTranslation()(CopyLinkIcon);
