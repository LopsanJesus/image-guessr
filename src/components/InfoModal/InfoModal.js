import React from "react";

import { withTranslation } from "react-i18next";
import CityIcon from "../../assets/CityIcon/CityIcon";
import CountryIcon from "../../assets/CountryIcon/CountryIcon";
import MonumentIcon from "../../assets/MonumentIcon/MonumentIcon";

const InfoModal = ({ setShowModal, level, t }) => {
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
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <ul>
                  <li>
                    <div className="text-center text-xl font-bold m-5">
                      Info level {level}
                    </div>
                  </li>
                  <li>
                    <div className="text-center text-xl font-bold m-5">
                      Achieve 10 point to get to level {parseInt(level) + 1}
                    </div>
                  </li>
                  <li className="m-4">
                    <div className="inline-block rounded-lg bg-yellow-500">
                      <div className="m-0.5 p-0.5">
                        <CityIcon />
                      </div>
                    </div>
                    <span className="absolute p-2">Guess the CITY</span>
                  </li>
                  <li className="m-4">
                    <div className="inline-block rounded-lg bg-blue-500">
                      <div className="m-0.5 p-0.5">
                        <CountryIcon />
                      </div>
                    </div>
                    <span className="absolute p-2">Guess the COUNTRY</span>
                  </li>
                  <li className="m-4">
                    <div className="inline-block rounded-lg bg-pink-500">
                      <div className="m-0.5 p-0.5">
                        <MonumentIcon />
                      </div>
                    </div>
                    <span className="absolute p-2">Guess the MONUMENT</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6 sm:flex sm:flex-row">
              <button
                id="close-modal-button"
                type="button"
                className="xl:mb-3 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                {t("Cancel")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(InfoModal);
