import React from "react";

const CTAButton = ({ text, onClick }) => {
  return (
    <button
      id="go-modal-level-button"
      type="button"
      className="w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-secondary text-primary font-bold text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CTAButton;
