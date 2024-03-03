import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import LanguageSelector from './components/LanguageSelector';
import OutputBox from './components/OutputBox';
import RunButton from './components/RunButton';
import axios from 'axios';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('cpp');
  // Initial language
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleRun = async () => {
    const payload = { code, language: selectedLanguage };
    console.log(payload);
    const { data } = await axios.post('http://localhost:5000/run', payload);
    // const data = await response.json();
    setOutput(data.output || data.error);
  };

  return (
    <div className="container mx-auto p-4">
      <LanguageSelector
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
      />
      <CodeEditor value={code} onChange={setCode} language={selectedLanguage} />
      <RunButton onClick={handleRun} />
      {output && <OutputBox output={output} />}
    </div>
  );
}

export default App;

