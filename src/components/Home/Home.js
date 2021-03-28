import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center text-3xl m-20">
        Welcome to ImageGuessr!
      </div>
      <div className="flex justify-center">
        <Link
          to="/play"
          className="mr-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
        >
          Let's Play!
        </Link>
      </div>
    </div>
  );
};

export default Home;
