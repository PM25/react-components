import React, { PureComponent } from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// images
import profileImg from "../img/profile.jpeg";

export default class SideNavigator extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            sidenav: {
                icon: "fas fa-bars sidenav-btn ripple",
                classList: [],
                ripple_effect: true,
                ripple_status: false,
            },
            linkbuttons: [
                {
                    text: "Home",
                    icon: "fas fa-home",
                    url: "/homepage",
                },
                {
                    text: "Projects",
                    icon: "fas fa-flask",
                    url: "/projects",
                },
                {
                    text: "Articles",
                    icon: "fas fa-book",
                    url: "/articles",
                },
                {
                    text: "About",
                    icon: "far fa-user-circle",
                    url: "/",
                },
                {
                    text: "Bug Report",
                    icon: "fas fa-bug",
                    url: "https://github.com/PM25/pm25.github.io/issues",
                    tab: true,
                },
            ],
        };
    }

    SidenavOn() {
        this.setState((prevState) => ({
            sidenav: {
                ...prevState.sidenav,
                ripple_status: true,
            },
        }));
    }

    toggleSidenav() {
        this.props.toggleSidenav();
        setTimeout(() => {
            this.setState((prevState) => ({
                sidenav: {
                    ...prevState.sidenav,
                    ripple_status: false,
                },
            }));
        }, 200);
    }

    render() {
        return (
            <div
                id={"side-nav"}
                className={this.props.show ? "show-sidenav" : ""}
            >
                <div className="sidenav-btn-wrapper">
                    {this.renderRippleButton(
                        this.state.sidenav,
                        () => this.toggleSidenav(),
                        () => this.SidenavOn()
                    )}
                </div>
                <Profile
                    profile={profileImg}
                    name={"Pin-Yen"}
                    quote={"Don't Think, Imagine!"}
                ></Profile>
                <SimpleBar className={"category"}>
                    <ul>
                        {this.state.linkbuttons.map((state, key) => {
                            return this.renderLinkButton(state);
                        })}
                    </ul>
                </SimpleBar>
            </div>
        );
    }

    renderLinkButton(state) {
        return (
            <LinkButton
                text={state.text}
                icon={state.icon}
                url={state.url}
                tab={state.tab}
            ></LinkButton>
        );
    }

    renderRippleButton(state, onClick, onMouseDown) {
        return (
            <RippleButton
                icon={state.icon}
                classList={state.classList}
                active={state.active}
                ripple_status={state.ripple_status}
                onClick={onClick}
                onMouseDown={onMouseDown}
            ></RippleButton>
        );
    }
}

function LinkButton(props) {
    return (
        <li>
            <a
                href={props.url}
                target={props.tab ? "_blank" : ""}
                rel="noreferrer"
            >
                <i className={props.icon + " icon"}></i>
                <span>{props.text}</span>
            </a>
        </li>
    );
}

function RippleButton(props) {
    return (
        <div
            className={"btn " + props.classList.join(" ")}
            onClick={() => props.onClick()}
            onMouseDown={() => props.onMouseDown()}
        >
            <i className={props.icon}>
                <div
                    className={props.ripple_status ? "ripple-effect" : ""}
                ></div>
            </i>
        </div>
    );
}

function Profile(props) {
    return (
        <div className="profile">
            <img id="profile-img" src={props.profile} alt="Profile"></img>
            <span id="profile-name"> {props.name} </span>
            <span id="profile-quote"> {props.quote} </span>
        </div>
    );
}
