import React from "react";

import ShareIcon from "../../assets/ShareIcon/ShareIcon";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="py-2 mt-5 bg-gray-400 flex flex-row items-center justify-center space-x-5">
      <div className="font-base text-base text-gray-600">ImageGuessr®</div>
      <div className="">
        <ShareIcon />
      </div>
    </footer>
  );
};

export default Footer;
