import react, { Component } from "react";
import "./about.css";
import ntuLogo from "./img/ntu_logo.webp";
import nccuLogo from "./img/nccu_logo.webp";
import ncnuLogo from "./img/ncnu_logo.webp";
import tcsshLogo from "./img/tcssh_logo.webp";

class Edu extends Component {
    render() {
        return (
            <div className={"container " + this.props.status}>
                <div className="content">
                    <div className="school">
                        <img src={this.props.logo} alt="logo"></img>
                        <span>{this.props.name}</span>
                    </div>
                    <div className="major">
                        <div>
                            {this.props.degree}, {this.props.department}
                        </div>
                        <div>{this.props.period}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ntu: {
                name: "National Taiwan University",
                degree: "Master of Science",
                department: "Computer Science and Information Engineering",
                period: "2020.9 - Present",
                logo: ntuLogo,
                status: "current",
            },
            nccu: {
                name: "National Chengchi University",
                degree: "Bachelor of Science",
                department: "Computer Science",
                period: "2018.9 - 2020.6",
                logo: nccuLogo,
                status: "before",
            },
            ncnu: {
                name: "National Chi Nan University",
                degree: "Bachelor of Science",
                department: "Computer Science and Information Engineering",
                period: "2016.9 - 2018.6",
                logo: ncnuLogo,
                status: "before",
            },
            tcssh: {
                name: "Taichung Second Senior High School",
                degree: "Senior High School",
                department: "Regular",
                period: "2013.9 - 2016.6",
                logo: tcsshLogo,
                status: "before",
            },
        };
    }

    render() {
        return (
            <div className="education">
                <h2 className="header">Education</h2>
                <div className="content">
                    <div className="timeline-container">
                        <div className="edu-timeline">
                            {this.renderEdu(this.state.ntu)}
                            {this.renderEdu(this.state.nccu)}
                            {this.renderEdu(this.state.ncnu)}
                            {this.renderEdu(this.state.tcssh)}
                            {/* <div class="container before"><div class="content"><div class="school"><img src="/img/nccu_logo.webp"><span>National Chengchi University</span></div><div class="major"><span>Bachelor of Science, Computer Science</span><span><br>2018.9 - 2020.6</span></div></div></div> */}
                            {/* <div class="container before"><div class="content"><div class="school"><img src="/img/ncnu_logo.webp"><span>National Chi Nan University</span></div><div class="major"><span>Bachelor of Science, Computer Science and Information Engineering</span><span><br>2016.9 - 2018.6</span></div></div></div> */}
                            {/* <div class="container before"><div class="content"><div class="school"><img src="/img/tcssh_logo.webp"><span>Taichung Second Senior High School</span></div><div class="major"><span>Senior High School, Regular</span><span><br>2013.9 - 2016.6</span></div></div></div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderEdu(state) {
        return (
            <Edu
                status={state.status}
                name={state.name}
                degree={state.degree}
                department={state.department}
                period={state.period}
                logo={state.logo}
            ></Edu>
        );
    }
}
