import React from "react";
import "./css/loader.css";

export default function Loader() {
    return (
        <div className="center" style={{ height: "100vh" }}>
            <div className="loading center" style={{ color: "#555" }}>
                Loading...
            </div>
        </div>
    );
}
