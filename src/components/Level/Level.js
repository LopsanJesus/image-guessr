import React, { useState } from "react";
import "./Level.css";
import { Redirect, useParams } from "react-router-dom";
import ReactGA from "react-ga";

import { storeItem, checkItem, getStoredArray } from "../../helpers/storage";
// import _ from "lodash";
import GuessModal from "../GuessModal";
import AlertModal from "../AlertModal";
import { getLevelCities } from "../../data/cities";

const Level = () => {
  const params = useParams();

  var storedCities = getStoredArray("cities" + params.level);

  const goal = 10;
  const [score, setScore] = useState(storedCities.length);
  const [showModal, setShowModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [guessingCity, setGuessingCity] = useState("");

  var lastLevelAchieved =
    localStorage.getItem("level") !== null
      ? parseInt(localStorage.getItem("level"))
      : 0;

  if (
    parseInt(params.level) < 1 ||
    lastLevelAchieved + 1 < parseInt(params.level)
  )
    return <Redirect to="/play" />;

  var images = getLevelCities(params.level);

  const addHit = () => {
    storeItem(guessingCity, "cities" + params.level);
    setScore(score + 1);
    setShowModal(false);

    if (score + 1 >= goal && !checkItem(params.level, "alerts")) {
      setShowAlertModal(true);
      storeItem(params.level, "alerts");
      localStorage.setItem("level", params.level);
    }
  };

  const handleImageClick = (image) => {
    setGuessingCity(image);
    setShowModal(true);

    ReactGA.event({
      category: "Image",
      action: "Image clicked",
      label: "Nivel: " + params.level + " - Imagen: " + image,
    });
  };

  return (
    <div>
      <div className="main">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          <div className="hero">
            <div className="hero-headline flex flex-col items-center justify-center pt-12 pb-8 text-center">
              <h1 className="font-bold text-5xl text-gray-900 m-5">
                Guess each city!
              </h1>
              <h1 className="font-bold text-3xl text-gray-900">
                Level {params.level} | Score: <span id="score">{score}</span>
              </h1>
              <p
                id="goal-message"
                className="font-base text-base text-gray-600 m-5"
              >
                Achieve 10 points to unlock level {parseInt(params.level) + 1}.
              </p>
            </div>

            <section
              id="photos"
              className="my-5 grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              {images.length > 0 ? (
                images.map((image) => {
                  let isStored = storedCities.includes(image);
                  return (
                    <div
                      key={image}
                      className="image-container relative inline-block text-center"
                    >
                      <img
                        id={image}
                        src={"/img/" + image + ".jpg"}
                        width="500"
                        height="600"
                        className={`image ${
                          isStored
                            ? "border-2 rounded-lg border-green-500"
                            : "hover:opacity-75"
                        }`}
                        alt={image}
                        onClick={
                          !isStored ? () => handleImageClick(image) : undefined
                        }
                      />
                      {isStored && (
                        <div
                          id={image + "text"}
                          className="imagetext font-extrabold rounded-xl text-green-500 bg-white p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        >
                          {image.replaceAll("-", " ").toUpperCase()}
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="flex justify-center text-black p-8">
                  No images were found
                </div>
              )}
            </section>
          </div>
        </div>
      </div>

      {showModal && (
        <GuessModal
          city={guessingCity}
          addHit={addHit}
          setShowModal={setShowModal}
          level={params.level}
        />
      )}

      {showAlertModal && (
        <AlertModal level={params.level} setShowModal={setShowAlertModal} />
      )}
    </div>
  );
};

export default Level;
