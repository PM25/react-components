import React from "react";
import ReactDOM from "react-dom";

import "./css/all.css";
import Navigator from "./navigator";
import Footer from "./footer";
import Loader from "./loader";

ReactDOM.render(
    <React.StrictMode>
        <Navigator />
        <Loader />
        <Footer />
    </React.StrictMode>,
    document.getElementById("root")
);
