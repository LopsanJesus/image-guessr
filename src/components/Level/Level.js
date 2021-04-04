import React, { useState, useEffect } from "react";
import "./Level.css";
import { Redirect, useParams } from "react-router-dom";
import ReactGA from "react-ga";

import {
  storeItem,
  getStoredArray,
  CITIES_PREFIX,
  getLastLevelAchieved,
} from "../../helpers/storage";
import { SCORE_TO_UNLOCK_LEVEL } from "../../helpers/score";
// import _ from "lodash";
import GuessModal from "../GuessModal";
import AlertModal from "../AlertModal";
import { getLevelCities, getNumberOfLevels } from "../../data/cities";
import { withTranslation } from "react-i18next";
import Footer from "../Footer";

const Level = ({ t }) => {
  const params = useParams();
  const [level, setLevel] = useState(params.level);

  const [storedCities, setStoredCities] = useState(
    getStoredArray(CITIES_PREFIX + level)
  );
  const [score, setScore] = useState(storedCities.length);

  useEffect(() => {
    if (params.level !== level) {
      setLevel(params.level);
      setStoredCities(getStoredArray(CITIES_PREFIX + params.level));
      setScore(getStoredArray(CITIES_PREFIX + params.level).length);
    }
  }, [params, level]);

  const [showModal, setShowModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [guessingCity, setGuessingCity] = useState("");

  var lastLevelAchieved = getLastLevelAchieved();

  if (parseInt(level) < 1 || lastLevelAchieved + 1 < parseInt(level))
    return <Redirect to="/play" />;

  var images = getLevelCities(level);

  const addHit = () => {
    storeItem(guessingCity, CITIES_PREFIX + level);
    setScore(score + 1);
    setShowModal(false);
    setStoredCities([...storedCities, guessingCity]);

    if (score + 1 === SCORE_TO_UNLOCK_LEVEL) {
      setShowAlertModal(true);
    }
  };

  const handleImageClick = (image) => {
    setGuessingCity(image);
    setShowModal(true);

    ReactGA.event({
      category: "Image",
      action: "Image clicked",
      label: "Nivel: " + level + " - Imagen: " + image,
    });
  };

  return (
    <div>
      <div className="main">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          <div className="hero">
            <div className="hero-headline flex flex-col items-center justify-center pt-2 pb-2 text-center">
              <h1 className="font-bold text-3xl text-gray-900 m-2">
                {t("Guess each city")}
              </h1>
              <h1 className="sticky bg-gray-300 z-30 w-full font-bold text-2xl text-gray-900 py-2 score">
                {`${t("Level")} ${level} | ${t("Score")}: `}
                <span id="score">{score}</span>
              </h1>
              {console.log(level)}
              {getNumberOfLevels() !== parseInt(level) && (
                <p
                  id="goal-message"
                  className="font-base text-base text-gray-600 my-2"
                >
                  {t("Achieve 10 points to unlock level")} {parseInt(level) + 1}
                  .
                </p>
              )}
              <section
                id="photos"
                className="grid grid-cols-1 md:grid-cols-4 gap-4"
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
                            !isStored
                              ? () => handleImageClick(image)
                              : undefined
                          }
                        />
                        {isStored && (
                          <div
                            id={image + "text"}
                            className="imagetext uppercase font-extrabold rounded-xl text-green-500 bg-white p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          >
                            {t(image.replaceAll("-", " ").toUpperCase())}
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
        <Footer />
      </div>

      {showModal && (
        <GuessModal
          city={guessingCity}
          addHit={addHit}
          setShowModal={setShowModal}
          level={level}
        />
      )}

      {showAlertModal && getNumberOfLevels() !== parseInt(level) && (
        <AlertModal level={level} setShowModal={setShowAlertModal} />
      )}
    </div>
  );
};

export default withTranslation()(Level);
