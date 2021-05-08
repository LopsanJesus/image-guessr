import React from "react";

import { withTranslation } from "react-i18next";

import CityBadge from "../CityBadge";
import ShareButtons from "../ShareButtons";

const LastLevelInfoModal = ({ t, onClose }) => {
  return (
    <div id="modal-guess">
      <div className="fixed z-30 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className="w-11/12 bg-primary text-white inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="px-4 pt-20 sm:p-6 sm:pb-4">
              <div>
                <div className="m-5 flex justify-center">
                  <CityBadge />
                </div>
                <span className="font-custom block text-secondary text-4xl text-center font-medium p-2">
                  ImageGuessr
                </span>
                <div className="text-center text-xl m-3 mb-7">
                  <span>{t("Last level completed!")}</span>
                </div>
                <ShareButtons />
                <div className="text-center text-base m-3 mt-5">
                  <span>{t("More levels coming soon...")}</span>
                </div>
              </div>
            </div>
            <div className="px-4 pt-1 pb-4 sm:px-6 sm:flex sm:flex-row justify-center">
              <button
                id="close-modal-button"
                type="button"
                className="xl:mb-3 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onClose}
              >
                {t("Let me finish")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(LastLevelInfoModal);
