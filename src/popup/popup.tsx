import React from "react";
import {createRoot} from "react-dom/client"
import Heading from "../componets/Heading/Heading";
import "/src/styles/tailwind.css"

const body = (
    <main className="w-[400px] py-4 bg-slate-800 text-white text-lg">
        <div className="flex items-center px-4 pb-4 mb-4 border-b gap-x-2">
            <img src="key.png" alt="key" className="w-[40px] h-[40px]"/>
            <h3 className="text-2xl">SecurePass</h3>
        </div>

        <div className="px-6">
            <div id="result" className="px-4 py-2 rounded-sm bg-slate-700">Click the generate button</div>
        </div>
        <div className="px-6">
            <span className="text-sm">Length</span>
            <div className="px-4 py-2 rounded-sm bg-slate-700">
                <span>4-</span>
                <span>32</span>
            </div>
        </div>

        <div className="w-full px-6">
            <span className="text-sm">Customize</span>
            <div>
                <div className="flex gap-x-2">
                    <span>
                        Include Uppercase
                    </span>
                    <input type="checkbox" name="" id="" />
                </div>
                <div className="flex gap-x-2">
                    <span>
                        Include Lowercase
                    </span>
                    <input type="checkbox" name="" id="" />
                </div>
                <div className="flex gap-x-2">
                    <span>
                        Include Numbers
                    </span>
                    <input type="checkbox" name="" id="" />
                </div>
                <div className="flex gap-x-2">
                    <span>
                        Include Symbols
                    </span>
                    <input type="checkbox" name="" id="" />
                </div>
            </div>
        </div>

        <div className="px-6">
            <button type="button" className="w-full px-2 py-2 font-semibold rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">GENERATE</button>
        </div>
    </main>
);

const container = document.createElement("div");
document.body.appendChild(container);

const root  = createRoot(container);
root.render(body);