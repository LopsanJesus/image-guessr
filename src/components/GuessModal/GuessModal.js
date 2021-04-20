import React, { useRef, useState } from "react";
import ReactGA from "react-ga";

import { withTranslation } from "react-i18next";
import "./GuessModal.css";

import { getImageTranslations } from "../../data/cities";
import Image from "../Image/Image";

const GuessModal = ({
  imageName,
  imageType,
  addHit,
  setShowModal,
  level,
  t,
  isStored,
}) => {
  const modalInput = useRef(null);
  const [error, setError] = useState(false);

  const getLabel = () => {
    return "Level: " + level + " - Imagen: " + imageName;
  };
  const trackHit = () => {
    ReactGA.event({
      category: "Image",
      action: "Image guess hit",
      label: getLabel(),
    });
  };

  const trackError = () => {
    ReactGA.event({
      category: "Image",
      action: "Image guess error",
      label: getLabel() + " - user tried: " + modalInput.current.value,
    });
  };

  const checkGuess = () => {
    if (
      getImageTranslations(level, imageName).includes(
        modalInput.current.value.trim().toLowerCase()
      )
    ) {
      addHit();
      trackHit();
    } else {
      setError(true);
      trackError();
    }
  };

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
            <div className="bg-white px-4 pt-5 sm:p-6 sm:pb-4">
              <Image
                imageName={imageName}
                imageType={imageType}
                isStored={isStored}
              />
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6 sm:flex sm:flex-row">
              {!isStored && (
                <>
                  <input
                    type="text"
                    id="guess-input"
                    name="name"
                    maxLength="30"
                    size="20"
                    className={`leading-10 uppercase w-full inline-flex justify-center rounded-md border shadow-sm px-4 mb-3 text-base font-medium text-black focus:outline-none sm:ml-3 sm:w-auto sm:text-sm ${
                      error && "bg-red-400"
                    }`}
                    ref={modalInput}
                    onKeyUp={(e) => {
                      if (e.key === "Enter") {
                        checkGuess();
                      }
                    }}
                    autoFocus
                    autoComplete="off"
                  />

                  <button
                    id="check-modal-button"
                    type="button"
                    className="xl:mb-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      checkGuess();
                    }}
                  >
                    {t("Check")}
                  </button>
                </>
              )}
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

export default withTranslation()(GuessModal);
