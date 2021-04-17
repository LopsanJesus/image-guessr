import React from "react";
import { Link, useLocation } from "react-router-dom";
import { withTranslation } from "react-i18next";

import "./TopBar.css";
import ShareIcon from "../../assets/ShareIcon/ShareIcon";

const TopBar = ({ t }) => {
  const location = useLocation();

  if (location.pathname === "/") return null;
  return (
    <div className="sticky top-0 z-20">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center justify-start sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <span className="font-custom block text-gray-300 text-4xl font-medium p-2">
                  ImageGuessr
                </span>
              </div>
            </div>
            <div className="ml-3 relative flex">
              <div className="mr-2">
                <ShareIcon />
              </div>
              <Link
                to={"/play"}
                className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {t("Menu")}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default withTranslation()(TopBar);
