import React from "react";

import { withTranslation } from "react-i18next";

import "./ResetProgress.css";

const ResetProgress = ({ t }) => {
  return (
    <div className="flex justify-center flex-row space-x-5">
      <button>ABC</button>
    </div>
  );
};

export default withTranslation()(ResetProgress);
