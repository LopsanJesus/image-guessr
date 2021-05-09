import React from "react";
import { useHistory } from "react-router-dom";
import ReactGA from "react-ga";
import ShareButtons from "../ShareButtons/ShareButtons";
import CTAButton from "../CTAButton/CTAButton";

import { withTranslation } from "react-i18next";

import "./AlertModal.css";

const AlertModal = ({ level, setShowModal, t }) => {
  const history = useHistory();

  return (
    <div id="modal-level">
      <div className="fixed z-30 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className="inline-block bg-primary rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-3xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-white">
                    {t("You unlocked level") + (parseInt(level) + 1) + "!"}
                  </h3>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row">
              <div className="inline-flex w-full ">
                <CTAButton
                  text={t("Go")}
                  level={level}
                  onClick={() => {
                    setShowModal(false);
                    ReactGA.event({
                      category: "Modal new level unlocked",
                      action: "Navigate to new level",
                      label: "to -> level " + (parseInt(level) + 1),
                    });
                    history.push("/play/level/" + (parseInt(level) + 1));
                  }}
                />
              </div>
              <button
                id="close-modal-level-button"
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => {
                  setShowModal(false);
                  ReactGA.event({
                    category: "Modal new level unlocked",
                    action: "finish current level",
                    label: "to -> level " + parseInt(level),
                  });
                }}
              >
                {t("Let me finish")}
              </button>
            </div>
            <div className="my-5">
              <ShareButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(AlertModal);
