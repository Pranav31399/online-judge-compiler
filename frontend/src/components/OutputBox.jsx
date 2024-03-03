import React from "react";

const OutputBox = ({ output }) => {
  return (
    <div className="border border-gray-400 rounded p-2 mt-2">
      <pre>{output}</pre>
    </div>
  );
};

export default OutputBox;
