import React from "react";
import ReactDOM from "react-dom";

import "./css/index.css";
import Navigator from "./navigator";
import Footer from "./footer";

ReactDOM.render(
    <React.StrictMode>
        <Navigator></Navigator>
        <Footer></Footer>
    </React.StrictMode>,
    document.getElementById("root")
);
