import React, { Component } from "react";
import "./navigator.css";
import HomeNavigator from "./homenav";
import SideNavigator from "./sidenav";
import OutsideClickHandler from "react-outside-click-handler";

export default class Navigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenav: {
                active: false,
            },
        };
        this.toggleSidenav = this.toggleSidenav.bind(this);
    }

    toggleSidenav() {
        let active_sidenav = this.state.sidenav.active;
        this.setState((prevState) => ({
            sidenav: {
                ...prevState,
                active: !active_sidenav,
            },
        }));
    }

    closeSidenav() {
        this.setState((prevState) => ({
            sidenav: {
                ...prevState,
                active: false,
            },
        }));
    }

    render() {
        return (
            <OutsideClickHandler
                onOutsideClick={() => {
                    this.closeSidenav();
                }}
            >
                <div name="navigator">
                    <HomeNavigator
                        toggleSidenav={() => this.toggleSidenav()}
                    ></HomeNavigator>
                    <SideNavigator
                        show={this.state.sidenav.active}
                        toggleSidenav={() => this.toggleSidenav()}
                    ></SideNavigator>
                </div>
            </OutsideClickHandler>
        );
    }
}
