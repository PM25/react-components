import React, { Component } from "react";
import "./about.css";
import profileImg from "./img/pm2.jpeg";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="section" id="profile">
                <div className="header">
                    <div className="profile-img">
                        <img src={profileImg} alt="Profile"></img>
                    </div>
                    <div className="basic-info">
                        <div className="title-box">
                            <span className="name">
                                <div className="main">黃品硯</div>
                                <div className="alt">Pin-Yen (Jason) Huang</div>
                            </span>
                            <span className="title">
                                <a href="https://learner.csie.ntu.edu.tw">
                                    CLLab
                                </a>
                                •National Taiwan University
                            </span>
                            <div className="info">
                                <a
                                    href="https://www.linkedin.com/in/PM-Huang"
                                    data-tootik="LinkedIn"
                                    data-tootik-conf="bottom"
                                >
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a
                                    href="https://scholar.google.com.tw/citations?user=nQdpH2MAAAAJ"
                                    data-tootik="Google Scholar"
                                    data-tootik-conf="bottom"
                                >
                                    <i class="fas fa-graduation-cap"></i>
                                </a>
                                <a
                                    href="resource/cv_v3.pdf"
                                    data-tootik="Résumé"
                                    data-tootik-conf="bottom"
                                >
                                    <i class="far fa-id-badge"></i>
                                </a>
                                <a
                                    href="https://github.com/PM25"
                                    data-tootik="Github"
                                    data-tootik-conf="bottom"
                                >
                                    <i class="fab fa-github"></i>
                                </a>
                                <a
                                    href="https://www.facebook.com/pyhuang97"
                                    data-tootik="Facebook"
                                    data-tootik-conf="bottom"
                                >
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
