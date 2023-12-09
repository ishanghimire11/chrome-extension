import React from "react";
import { createRoot } from "react-dom/client";
import PasswordProvider, { usePasswordContext } from "../context/PasswordContext";
import "/src/styles/tailwind.css";

import { Title } from "../componets/Title/Title";
import Slider from "../componets/Slider/Slider";
import Customize from "./Customize";
import PasswordGenerator from "./PasswordGenerator";

const options = [
    { name: 'Include Uppercase', key: 'includeUpperCase' },
    { name: 'Include Lowercase', key: 'includeLowerCase' },
    { name: 'Include Numbers', key: 'includeNumbers' },
    { name: 'Include Symbols', key: 'includeSymbols' }
];

const charSets = {
    includeUpperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    includeLowerCase: 'abcdefghijklmnopqrstuvwxyz',
    includeNumbers: '0123456789',
    includeSymbols: '!@#$%^&*()-=_+[]{}|;:,.<>?'
};

const Header = () => (
    <header className="flex items-center px-4 pb-4 mb-8 border-b gap-x-2">
      <img src="key.png" alt="key" className="w-[40px] h-[40px]" />
      <h3 className="text-2xl">SecurePass</h3>
    </header>
);

const ResultSection = () => {
    const {passwordResult} = usePasswordContext();
    
    return (
        <div className="w-full mb-6">
            <div className="px-4 py-2 rounded-sm bg-slate-700"><span id="result" className="text-[15px]">{passwordResult}</span></div>
        </div>
    );
};

const LengthSection = () => (
    <div className="w-full mb-6">
      <Title name="Length" />
      <Slider />
    </div>
  );   

const CustomizeSection = ({ options }) => (
    <div className="w-full mb-6">
      <Title name="Customize" />
      <div className="flex flex-col gap-y-2">
        {options.map((option) => (
          <Customize key={option.key} option={option} />
        ))}
      </div>
    </div>
);

const body = (
    <div className="w-[400px] py-6 bg-slate-800 text-white text-lg">
        <Header />
        <div className="px-6 content">        
            <ResultSection />
            <LengthSection />
            <CustomizeSection options={options} />
            <PasswordGenerator options={options} charSets={charSets}/>
        </div>
    </div>
);

const container = document.createElement("main");
document.body.appendChild(container);
const root  = createRoot(container);
root.render(<PasswordProvider>{body}</PasswordProvider>);