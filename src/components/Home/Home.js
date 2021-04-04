import React from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

import "./Home.css";
import { getLastLevelAchieved } from "../../helpers/storage";

const Home = ({ t }) => {
  console.log(getLastLevelAchieved());

  return (
    <div>
      <div className="flex justify-center text-3xl m-20">
        {t("Welcome to ImageGuessr")}
      </div>
      <div className="flex justify-center">
        <Link
          to="/play"
          className="mr-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
        >
          {t("Play")}
        </Link>
      </div>
    </div>
  );
};

export default withTranslation()(Home);
