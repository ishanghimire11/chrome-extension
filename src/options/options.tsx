import React from "react";
import {createRoot} from "react-dom/client"
import Heading from "../componets/Heading/Heading";
import "/src/styles/tailwind.css"

const test = (
    <div>
        <Heading title="Optionsssssssss"/>
    </div>
);

const container = document.createElement("div");
document.body.appendChild(container);

const root  = createRoot(container);
root.render(test);