import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div class="flex justify-center text-3xl m-20">
        Welcome to ImageGuessr!
      </div>
      <div class="flex justify-center">
        <a
          href="/play"
          class="mr-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
        >
          Let's Play!
        </a>
      </div>
    </div>
  );
};

export default Home;
