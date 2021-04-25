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
import GuessModal from "../GuessModal";
import AlertModal from "../AlertModal";
import { getLevelImages, getNumberOfLevels } from "../../data/cities";
import { withTranslation } from "react-i18next";
import Footer from "../Footer";
import Image from "../Image/Image";
import InfoIcon from "../../assets/InfoIcon/InfoIcon";
import InfoModal from "../InfoModal/InfoModal";

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

  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [guessingCity, setGuessingCity] = useState({});

  var lastLevelAchieved = getLastLevelAchieved();

  if (parseInt(level) < 1 || lastLevelAchieved + 1 < parseInt(level))
    return <Redirect to="/play" />;

  var images = getLevelImages(level);

  const addHit = () => {
    storeItem(guessingCity.imageName, CITIES_PREFIX + level);
    setScore(score + 1);
    setShowModal(false);
    setStoredCities([...storedCities, guessingCity.imageName]);

    if (score + 1 === SCORE_TO_UNLOCK_LEVEL) {
      setShowAlertModal(true);
    }
  };

  const handleInfoButtonClick = () => {
    setShowInfoModal(true);
    ReactGA.event({
      category: "Info",
      action: "Info button clicked",
      label: "Info clicked in level: " + level,
    });
  };

  const handleImageClick = ({ imageName, imageType }) => {
    setGuessingCity({ imageName, imageType });
    setShowModal(true);

    ReactGA.event({
      category: "Image",
      action: "Image clicked",
      label: "Nivel: " + level + " - Imagen: " + imageName,
    });
  };

  return (
    <div>
      <div className="main">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          <div className="hero">
            <div className="hero-headline flex flex-col items-center justify-center pt-2 pb-2 text-center">
              <div
                className="cursor-pointer m-3"
                onClick={handleInfoButtonClick}
              >
                <InfoIcon />
              </div>
              <h1 className="font-bold text-3xl text-gray-900 m-2">
                {t("Guess each city")}
              </h1>
              <h1 className="sticky bg-gray-300 z-30 w-full font-bold text-2xl text-gray-900 py-2 score">
                {`${t("Level")} ${level} | ${t("Score")}: `}
                <span id="score">{score}</span>
              </h1>
              {getNumberOfLevels() !== parseInt(level) && (
                <p
                  id="goal-message"
                  className="font-base text-base text-gray-600 my-2 mb-4"
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
                    let isStored = storedCities.includes(image.image);
                    return (
                      <Image
                        key={image.image}
                        imageName={image.image}
                        imageType={image.type}
                        isStored={isStored}
                        onClick={handleImageClick}
                      />
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

      {showInfoModal && (
        <InfoModal setShowModal={setShowInfoModal} level={level} />
      )}

      {showModal && (
        <GuessModal
          imageName={guessingCity.imageName}
          imageType={guessingCity.imageType}
          addHit={addHit}
          setShowModal={setShowModal}
          level={level}
          isStored={storedCities.includes(guessingCity.imageName)}
        />
      )}

      {showAlertModal && getNumberOfLevels() !== parseInt(level) && (
        <AlertModal level={level} setShowModal={setShowAlertModal} />
      )}
    </div>
  );
};

export default withTranslation()(Level);
