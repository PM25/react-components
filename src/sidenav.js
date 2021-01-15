import React, { Component } from "react";
import "./navigator.css";
import profileImg from "./img/profile.jpeg";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

class LinkButton extends Component {
    render() {
        return (
            <li>
                <a
                    href={this.props.url}
                    target={this.props.tab ? "_blank" : ""}
                    rel="noreferrer"
                >
                    <i className={this.props.icon + " icon"}></i>
                    <span>{this.props.text}</span>
                </a>
            </li>
        );
    }
}

class RippleButton extends Component {
    render() {
        return (
            <div
                className={"btn " + this.props.classList.join(" ")}
                onClick={() => this.props.onClick()}
                onMouseDown={() => this.props.onMouseDown()}
            >
                <i className={this.props.icon}>
                    <div
                        className={
                            this.props.ripple_status ? "ripple-effect" : ""
                        }
                    ></div>
                </i>
            </div>
        );
    }
}

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <img
                    id="profile-img"
                    src={this.props.profile}
                    alt="Profile"
                ></img>
                <span id="profile-name"> {this.props.name} </span>
                <span id="profile-quote"> {this.props.quote} </span>
            </div>
        );
    }
}

export default class SideNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenav: {
                icon: "fas fa-bars sidenav-btn ripple",
                classList: [],
                ripple_effect: true,
                ripple_status: false,
            },
            homepage: {
                text: "首頁",
                icon: "fas fa-home",
                url: "/c/homepage",
            },
            projects: {
                text: "專案",
                icon: "fas fa-flask",
                url: "/c/projects",
            },
            articles: {
                text: "文章",
                icon: "fas fa-book",
                url: "/c/articles",
            },
            about: {
                text: "關於我",
                icon: "far fa-user-circle",
                url: "/",
            },
            comments: {
                text: "留言",
                icon: "far fa-comment",
                url: "/c/comment",
            },
            reports: {
                text: "錯誤回報",
                icon: "fas fa-bug",
                url: "https://github.com/PM25/pm25.github.io/issues",
                tab: true,
            },
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
                    name={"黃品硯"}
                    quote={"Don't Think, Imagine!"}
                ></Profile>
                <SimpleBar className={"category"}>
                    <ul>
                        {this.renderLinkButton(this.state.homepage)}
                        {this.renderLinkButton(this.state.projects)}
                        {this.renderLinkButton(this.state.articles)}
                        {this.renderLinkButton(this.state.about)}
                        {this.renderLinkButton(this.state.comments)}
                        {this.renderLinkButton(this.state.reports)}
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
