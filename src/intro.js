import react, { Component } from "react";
import EducationSection from "./education.js";
import BioSection from "./bio.js";

export default class IntroSection extends Component {
    render() {
        return (
            <div id="intro" className="section">
                <EducationSection></EducationSection>
                <BioSection></BioSection>
            </div>
        );
    }
}
