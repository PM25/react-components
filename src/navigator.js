import React, { PureComponent } from "react";
import { HashRouter as Router } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

import "./css/all.css";
import "./css/navigator.css";
import HomeNavigator from "./navigator/homenav.jsx";
import SideNavigator from "./navigator/sidenav.jsx";

export default class Navigator extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showing: false,
        };
    }

    toggleSidenav = () => {
        this.setState({ showing: !this.state.showing });
    };

    closeSidenav = () => {
        this.setState({ showing: false });
    };

    render() {
        return (
            <OutsideClickHandler onOutsideClick={this.closeSidenav}>
                <Router>
                    <HomeNavigator
                        toggleSidenav={this.toggleSidenav}
                    ></HomeNavigator>
                    <SideNavigator
                        show={this.state.showing}
                        toggleSidenav={this.toggleSidenav}
                        closeSidenav={this.closeSidenav}
                    ></SideNavigator>
                </Router>
            </OutsideClickHandler>
        );
    }
}
