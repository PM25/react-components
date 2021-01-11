import React from "react";
import "./navigator.css";
import HomeNavigator from "./homenav";
import SideNavigator from "./sidenav";

class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenav: {
                active: false,
            },
        };
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

    render() {
        return (
            <div name="navigator">
                <HomeNavigator
                    toggleSidenav={() => this.toggleSidenav()}
                ></HomeNavigator>
                <SideNavigator
                    show={this.state.sidenav.active}
                    toggleSidenav={() => this.toggleSidenav()}
                ></SideNavigator>
            </div>
        );
    }
}

export default Navigator;
