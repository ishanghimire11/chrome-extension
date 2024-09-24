import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import PasswordProvider, {
  usePasswordContext,
} from "../context/PasswordContext";
import "/src/styles/tailwind.css";

import { Title } from "../componets/Title/Title";
import Slider from "../componets/Slider/Slider";
import Customize from "./Customize";
import PasswordGenerator from "./PasswordGenerator";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/solid";

const options = [
  { name: "Include Uppercase", key: "includeUpperCase" },
  { name: "Include Lowercase", key: "includeLowerCase" },
  { name: "Include Numbers", key: "includeNumbers" },
  { name: "Include Symbols", key: "includeSymbols" },
];

const charSets = {
  includeUpperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  includeLowerCase: "abcdefghijklmnopqrstuvwxyz",
  includeNumbers: "0123456789",
  includeSymbols: "!@#$%^&*()-=_+[]{}|;:,.<>?",
};

// const Header = () => (
//   <header className="flex items-center px-4 pb-4 mb-8 border-b gap-x-2">
//     <img src="key.png" alt="key" className="w-[40px] h-[40px]" />
//     <h3 className="text-2xl">SecurePass</h3>
//   </header>
// );

// const ResultSection = () => {
//   const { passwordResult } = usePasswordContext();

//   return (
//     <div className="w-full mb-6">
//       <div className="px-4 py-2 rounded-sm bg-slate-700">
//         <span id="result" className="text-[15px]">
//           {passwordResult}
//         </span>
//       </div>
//     </div>
//   );
// };

// const LengthSection = () => (
//   <div className="w-full mb-6">
//     <Title name="Length" />
//     <Slider />
//   </div>
// );

// const CustomizeSection = ({ options }) => (
//   <div className="w-full mb-6">
//     <Title name="Customize" />
//     <div className="flex flex-col gap-y-2">
//       {options.map((option) => (
//         <Customize key={option.key} option={option} />
//       ))}
//     </div>
//   </div>
// );

// const body = (
//   <div className="w-[400px] py-6 bg-slate-800 text-white text-lg">
//     <Header />
//     <div className="px-6 content">
//       <ResultSection />
//       <LengthSection />
//       <CustomizeSection options={options} />
//       <PasswordGenerator options={options} charSets={charSets} />
//     </div>
//   </div>
// );

const Header = () => (
  <header className="flex items-center px-6 pb-6 mb-6 border-b border-slate-600 gap-x-3">
    <img src="key.png" alt="key" className="w-[40px] h-[40px]" />
    <h3 className="text-2xl font-bold text-white">SuggestPass</h3>
  </header>
);

const ResultSection = () => {
  const { passwordResult } = usePasswordContext();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(passwordResult);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative w-full mb-6">
      <div className="flex items-center justify-between px-4 py-2 rounded-md bg-slate-700">
        <span id="result" className="text-[16px] tracking-wide">
          {passwordResult || (
            <span className="opacity-70">
              Your password will appear here...
            </span>
          )}
        </span>
      </div>
      {passwordResult && (
        <button
          onClick={copyToClipboard}
          className="block mt-4 ml-auto text-sm text-right hover:text-indigo-500 w-fit"
          disabled={copied}
        >
          {copied ? (
            <p className="flex items-center text-white gap-x-1">
              <span>Copied</span>
              <CheckIcon className="w-4 h-4" />
            </p>
          ) : (
            <p className="flex items-center text-white gap-x-1">
              <span>Copy</span>
              <ClipboardIcon className="w-4 h-4" />
            </p>
          )}
        </button>
      )}
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
    <div className="flex flex-col gap-y-3">
      {options.map((option) => (
        <Customize key={option.key} option={option} />
      ))}
    </div>
  </div>
);

const body = (
  <div className="w-[400px] py-4 bg-slate-900 text-white text-lg shadow-lg">
    <Header />
    <div className="px-6 content">
      <ResultSection />
      <LengthSection />
      <CustomizeSection options={options} />
      <PasswordGenerator options={options} charSets={charSets} />
    </div>
  </div>
);

const container = document.createElement("main");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<PasswordProvider>{body}</PasswordProvider>);
