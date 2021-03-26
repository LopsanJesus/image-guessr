import React from "react";
import "./Level.css";
import { useParams } from "react-router-dom";

import { storeItem, checkItem } from "../../helpers/storage.js";
import _ from "lodash";

const Level = () => {
  const params = useParams();
  const images = ["seville", "paris"];
  const goal = 10;
  var score = 0;

  var cities = localStorage.getItem("cities" + params.level);
  if (cities != null) {
    cities.split("|").forEach((element) => {
      //ESTO NO SIRVE
      //POR CADA CIUDAD QUE APAREZCA EN EL LOCALSTORAGE, DEBERÍAMOS AÑADIRLE SU CARTELITO
      if (element.trim() != "") {
        _.remove(images, (n) => {
          return n === element;
        });

        // $("#" + element + "text").html(
        //   element.replaceAll("-", " ").toUpperCase()
        // );
        // $("#" + element + "text").show();
        // addHit();
      }
    });
  }

  return (
    <div>
      <div class="main">
        <div class="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          <div class="hero">
            <div class="hero-headline flex flex-col items-center justify-center pt-24 text-center">
              <h1 class="font-bold text-5xl text-gray-900 m-5">
                Guess each city!
              </h1>
              <h1 class="font-bold text-3xl text-gray-900">
                Level {params.level} | Score: <span id="score">0</span>
              </h1>
              <p
                id="goal-message"
                class="font-base text-base text-gray-600 m-5"
              >
                Achieve 10 points to unlock level {parseInt(params.level) + 1}.
              </p>
            </div>

            <section
              id="photos"
              class="my-5 grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              {images.length > 0 ? (
                images.map((image) => {
                  return (
                    <div class="image-container relative inline-block text-center">
                      <img
                        id={image}
                        src={"/img/" + image + "-min.jpg"}
                        width="500"
                        height="600"
                        class="image hover:opacity-75"
                      />
                      <div
                        id={image + "text"}
                        class="imagetext hidden font-extrabold rounded-xl text-green-500 bg-white p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      >
                        {image}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div class="flex justify-center text-black p-8">
                  No images were found
                </div>
              )}
            </section>
          </div>
        </div>
      </div>

      <div id="modal" class="hidden">
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
                    src="/img/seville.jpg"
                    class="w-500 h-600 md:w-1000 md:h-1200"
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
                  class="uppercase w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 text-base font-medium text-black focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                />
                <button
                  id="check-modal-button"
                  type="button"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Check
                </button>
                <button
                  id="close-modal-button"
                  type="button"
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="modal-level" class="hidden">
        <div class="fixed z-10 inset-0 overflow-y-auto">
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              class="hidden sm:inline-block align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              class="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-3xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                      You unlocked next level!
                    </h3>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row">
                <button
                  id="go-modal-level-button"
                  type="button"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Go!
                </button>
                <button
                  id="close-modal-level-button"
                  type="button"
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Let me finish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level;
