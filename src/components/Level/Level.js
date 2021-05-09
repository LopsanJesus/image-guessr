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
import ScoreHeader from "../ScoreHeader";
import { getLevelImages, getNumberOfLevels } from "../../data/cities";
import { withTranslation } from "react-i18next";
import Footer from "../Footer";
import Image from "../Image/Image";
import InfoIcon from "../../assets/InfoIcon/InfoIcon";
import InfoModal from "../InfoModal/InfoModal";
import { useShowLevelInformationByDefault } from "../../hooks/useShowLevelInformationByDefault";
import { useShowLastLevelInfo } from "../../hooks/useShowLastLevelInfo";
import LastLevelInfoModal from "../LastLevelInfoModal";

const Level = ({ t }) => {
  const params = useParams();
  const [level, setLevel] = useState(params.level);
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);
  const {
    showLevelInfoByDefault,
    setLevelInfoSeen,
  } = useShowLevelInformationByDefault(level);

  const [storedCities, setStoredCities] = useState(
    getStoredArray(CITIES_PREFIX + level)
  );
  const [score, setScore] = useState(storedCities.length);
  const { showLastLevelInfo, setShowLastLevelInfo } = useShowLastLevelInfo(
    level,
    score
  );

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

  const nextLevelExists = getNumberOfLevels() !== parseInt(level);

  const onGuessModalClose = () => {
    setShowModal(false);
    window.scrollTo(0, scrollPosition);
  };

  const onInfoModalClose = () => {
    setShowInfoModal(false);
    if (showLevelInfoByDefault) {
      setLevelInfoSeen(level);
    }
  };

  const addHit = () => {
    storeItem(guessingCity.imageName, CITIES_PREFIX + level);
    setScore(score + 1);
    onGuessModalClose();
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
    setScrollPosition(window.pageYOffset);
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
              <span className="font-bold text-2xl m-1 text-white">
                {t("Level")} {level}
              </span>
              <h1 className="sticky bg-primary z-30 w-full md:py-6 py-4 score flex flex-row justify-between items-center px-2">
                <span
                  className="cursor-pointer rounded-2xl bg-white"
                  onClick={handleInfoButtonClick}
                >
                  <InfoIcon />
                </span>
                <ScoreHeader
                  level={level}
                  score={score}
                  nextLevelExists={nextLevelExists}
                />
              </h1>
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

      {(showLevelInfoByDefault || showInfoModal) && (
        <InfoModal onCloseInfoModal={onInfoModalClose} level={level} />
      )}

      {showLastLevelInfo && (
        <LastLevelInfoModal onClose={() => setShowLastLevelInfo(level)} />
      )}

      {showModal && (
        <GuessModal
          imageName={guessingCity.imageName}
          imageType={guessingCity.imageType}
          addHit={addHit}
          onCloseModal={() => {
            onGuessModalClose();
          }}
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
