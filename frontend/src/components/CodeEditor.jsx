import React, { useState } from "react";

const CodeEditor = ({ value, onChange, language }) => {
  // Props likely unused with a plain textbox
  return (
    <div className="border border-gray-400 rounded p-2">
      <textarea
        className="w-full h-80 resize-y"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default CodeEditor;
