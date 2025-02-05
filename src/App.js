import React, { useState } from 'react';
import { FaMagic, FaClipboard } from 'react-icons/fa';
import Header from './Header';

function App() {
  const [character, setCharacter] = useState("This is where your character will be shown");

  // Function to generate a random character (for demo purposes, using a random string)
  const generateCharacter = () => {
    const randomString = Math.random().toString(36).substring(2, 15); // Generates a random alphanumeric string
    setCharacter(randomString); // Set the generated character to state
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
          <input 
            type="text" 
            value={character} 
            readOnly 
            className="px-4 py-2 border border-gray-400/80 rounded-md w-full text-center opacity-80 placeholder-gray-500" 
            placeholder="Enter Enye text here"
          />
          <div className="relative group">
            <FaClipboard 
              className="ml-2 cursor-pointer text-dark hover:text-gray-800" 
              onClick={handleCopy} // Handle copy when clicked
            />
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs py-1 px-2 rounded-md transition-opacity">
              Copy Text
            </div>
          </div>
        </div>
        
        <div className="mt-12 w-full flex justify-center">
          <p className="text-sm text-gray-600">
            Developed by <strong>Keith Coner</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
