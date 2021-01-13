import react, { Component } from "react";
import Education from "./education.js";

export default class Intro extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="intro">
                <Education></Education>
            </div>
        );
    }
}
