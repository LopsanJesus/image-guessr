import React from "react";
import { Link } from "react-router-dom";

import "./TopBar.css";

const TopBar = () => {
  return (
    <div>
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
            <div className="ml-3 relative">
              <Link
                to={"/play"}
                className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Menu
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
