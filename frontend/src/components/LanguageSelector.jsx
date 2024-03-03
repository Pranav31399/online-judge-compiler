import React from "react";

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  const languages = [
    { value: "cpp", label: "C++" },
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
  ];

  const handleChange = (event) => {
    onLanguageChange(event.target.value);
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="language-select"
        className="block text-gray-700 font-bold mb-2"
      >
        Select Language:
      </label>
      <select
        id="language-select"
        className="border border-gray-400 rounded p-2 w-full"
        value={selectedLanguage}
        onChange={handleChange}
      >
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
