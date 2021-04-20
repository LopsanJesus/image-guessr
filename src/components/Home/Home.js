import React from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

import "./Home.css";

const Home = ({ t }) => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="my-20 h-2/5">
        <h1
          className="text-5xl text-white tracking-widest"
          style={{ textShadow: `2px 2px 3px black` }}
        >
          {t("ImageGuessr")}
        </h1>
      </div>
      <div className="">
        <Link
          to="/play"
          className="bg-pink-500 hover:bg-pink-600  text-white font-bold py-4 px-10 rounded-lg"
        >
          {t("Play")}
        </Link>
      </div>
    </div>
  );
};

export default withTranslation()(Home);
