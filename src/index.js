import React from "react";
import ReactDOM from "react-dom";

import Navigator from "./navigator";
import Footer from "./footer";

ReactDOM.render(
    <React.StrictMode>
        <Navigator />
        <Footer />
    </React.StrictMode>,
    document.getElementById("root")
);
