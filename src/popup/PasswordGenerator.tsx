import React, { useEffect, useState } from 'react'
import { usePasswordContext } from '../context/PasswordContext';

const PasswordGenerator = ({options, charSets}) => {
    const {
        passwordLength,
        toggleStates,
        handleResult,
      } = usePasswordContext();
    
    const generatePassword = () => {
        const toggledCharSets = options
        .filter((option) => toggleStates[option.key])
        .map((option) => charSets[option.key])
        .join("");
        
        if (toggledCharSets) {
            let password = "";
            for (let i = 0; i <= passwordLength; i++) {
                const randomIndex = Math.floor(Math.random() * toggledCharSets.length);
                password += toggledCharSets.charAt(randomIndex);
            }
            return handleResult(password);
        } else {
            return handleResult("Customize your password!!");
        }
    };

    return (
        <div className="w-full">
            <button
            onClick={generatePassword}
            type="button"
            className="w-full px-2 py-2 font-bold uppercase transition-transform duration-300 transform rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 active:scale-90"
            >
            Generate
            </button>
      </div>
  )
}

export default PasswordGenerator;