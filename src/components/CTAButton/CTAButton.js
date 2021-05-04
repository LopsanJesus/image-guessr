import React from "react";

const CTAButton = ({ text, onClick, isActive = true }) => {
  return isActive ? (
    <button
      id="go-modal-level-button"
      type="button"
      className="bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-primary font-bold text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
      onClick={isActive && onClick}
    >
      {text}
    </button>
  ) : (
    <div className="bg-tertiary w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-primary font-bold text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm">
      {text}
    </div>
  );
};

export default CTAButton;
