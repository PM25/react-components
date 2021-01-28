import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
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
                    url: "/home",
                },
                {
                    text: "Project",
                    icon: "fas fa-flask",
                    url: "/project",
                },
                {
                    text: "Article",
                    icon: "fas fa-book",
                    url: "/article",
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
                            if (state.tab)
                                return (
                                    <li key={key}>
                                        <ExternalLinkButton
                                            id={key}
                                            text={state.text}
                                            icon={state.icon}
                                            url={state.url}
                                        ></ExternalLinkButton>
                                    </li>
                                );
                            else
                                return (
                                    <li key={key}>
                                        <LinkButton
                                            id={key}
                                            text={state.text}
                                            icon={state.icon}
                                            url={state.url}
                                        ></LinkButton>
                                    </li>
                                );
                        })}
                    </ul>
                </SimpleBar>
            </div>
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
        <Link to={props.url}>
            <i className={props.icon + " icon"}></i>
            <span>{props.text}</span>
        </Link>
    );
}

function ExternalLinkButton(props) {
    return (
        <a href={props.url} target={"_blank"} rel="noreferrer">
            <i className={props.icon + " icon"}></i>
            <span>{props.text}</span>
        </a>
    );
}

function RippleButton(props) {
    return (
        <div
            className={"btn " + props.classList.join(" ")}
            onClick={() => props.onClick()}
            onMouseDown={() => props.onMouseDown()}
        >
            <i className={props.icon}></i>
            <div className={props.ripple_status ? "ripple-effect" : ""}></div>
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
