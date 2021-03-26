import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div>
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="flex items-center justify-start sm:items-stretch sm:justify-start">
              <div class="flex-shrink-0 flex items-center">
                <span class="font-custom block text-gray-300 text-4xl font-medium p-2">
                  ImageGuessr
                </span>
              </div>
            </div>
            <div class="ml-3 relative">
              <a
                href="/play"
                class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Menu
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
