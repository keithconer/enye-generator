import React, { useState } from 'react';
import { FaMagic, FaClipboard, FaGithub } from 'react-icons/fa';
import Header from './Header';

function App() {
  const [character, setCharacter] = useState("character will be shown here");
  const [caseType, setCaseType] = useState("lowercase");

  // Function to generate the character "ñ" in the selected case
  const generateCharacter = () => {
    if (caseType === "uppercase") {
      setCharacter("Ñ");
    } else {
      setCharacter("ñ");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(character); // Copy the current character to clipboard
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-light-gray">
      <Header />
      <div className="flex flex-col items-center mt-4 w-full max-w-lg">
        <button 
          className="bg-dark text-white px-6 py-3 rounded-md text-lg flex items-center justify-center hover:bg-gray-800 w-4/5"
          onClick={generateCharacter} // Trigger character generation on click
        >
          <FaMagic className="mr-2" />
          Generate Character
        </button>
        
        <div className="mt-2 flex items-center w-4/5">
          {/* Dropdown on the left side of the input */}
          <select 
            value={caseType}
            onChange={(e) => setCaseType(e.target.value)} // Update case type on selection change
            className="mr-2 px-2 py-1 border border-gray-400/80 rounded-md text-sm opacity-80"
          >
            <option value="lowercase">Lowercase</option>
            <option value="uppercase">Uppercase</option>
          </select>

          {/* Input Field with smaller font */}
          <input 
            type="text" 
            value={character} 
            readOnly 
            className="px-4 py-2 border border-gray-400/80 rounded-md w-full text-center opacity-80 text-sm placeholder:text-xs"
            placeholder="This is where your character will be shown"
          />

          {/* Copy Icon */}
          <div className="relative group ml-2">
            <FaClipboard 
              className="cursor-pointer text-dark hover:text-gray-800" 
              onClick={handleCopy} // Handle copy when clicked
            />
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs py-1 px-2 rounded-md transition-opacity">
              Copy Text
            </div>
          </div>
        </div>

        <div className="mt-8 w-full flex justify-center"> {/* Increased margin-top here */}
          <p className="text-sm text-dark">
            Developed by <strong className="text-dark">Keith Coner</strong>
          </p>
        </div>

        {/* GitHub Icon with "Source Code" Text in a circular container */}
        <div className="mt-4 flex items-center justify-center space-x-2">
          <a 
            href="https://github.com/keithconer" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 bg-dark text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <FaGithub className="text-xl" />
            <span className="text-sm">Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
