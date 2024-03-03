import React from "react";

const RunButton = ({ onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      Run
    </button>
  );
};

export default RunButton;
