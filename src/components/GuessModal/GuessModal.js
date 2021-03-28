import React, { useRef, useState } from "react";
import "./GuessModal.css";

import { getCityTranslationsArray } from "../../data/cities";

const GuessModal = ({ city, addHit, setShowModal }) => {
  const modalInput = useRef(null);
  const [error, setError] = useState(false);

  const checkGuess = () => {
    if (
      getCityTranslationsArray(city).includes(
        modalInput.current.value.trim().toLowerCase()
      )
    ) {
      addHit();
    } else {
      setError(true);
    }

    // if (
    //   input.toUpperCase() === text.toUpperCase() ||
    //   translateCity(actualImg).includes(input.toLowerCase())
    // ) {
    //   addHit();

    //   storeItem(actualImg, "cities" + level);
    //   $("#modal").hide();
    //   $("#" + actualImg + "text").html(text.toUpperCase());
    //   $("#" + actualImg + "text").show();
    //   $("#guess-input").removeClass("bg-red-400");
    // } else {
    //   $("#guess-input").addClass("bg-red-400");
    // }
  };

  return (
    <div id="modal-guess">
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <img
                  id="modal-img"
                  src={`/img/${city}.jpg`}
                  class="w-500 h-600 md:w-1000 md:h-1200"
                  alt="City"
                />
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row">
              <input
                type="text"
                id="guess-input"
                name="name"
                maxLength="30"
                size="20"
                className={`uppercase w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 text-base font-medium text-black focus:outline-none sm:ml-3 sm:w-auto sm:text-sm ${
                  error && "bg-red-400"
                }`}
                ref={modalInput}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    checkGuess();
                  }
                }}
                autoFocus
              />
              <button
                id="check-modal-button"
                type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => {
                  checkGuess();
                }}
              >
                Check
              </button>
              <button
                id="close-modal-button"
                type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuessModal;