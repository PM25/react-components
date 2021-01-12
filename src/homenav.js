import React, { Component } from "react";
// import ReactPlayer from "react-player";
import ReactPlayer from "react-player/lazy";
import "./navigator.css";

class Button extends Component {
    render() {
        return (
            <li
                className={"btn " + this.props.classList.join(" ")}
                onClick={() => this.props.onClick()}
            >
                {this.props.url ? (
                    <a href={this.props.url}>
                        <i className={this.props.icon}></i>
                    </a>
                ) : (
                    <i className={this.props.icon}></i>
                )}
            </li>
        );
    }
}

class RippleButton extends Component {
    render() {
        return (
            <li
                className={"btn icons " + this.props.classList.join(" ")}
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
            </li>
        );
    }
}

class HomeNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenav: {
                icon: "fas fa-bars sidenav-btn ripple",
                classList: [],
                ripple_effect: true,
                ripple_status: false,
            },
            home: {
                icon: "fas fa-home",
                classList: [],
                url: "/c/homepage",
                active: false,
            },
            language: {
                icon: "fas fa-language",
                classList: [],
                active: false,
                active_effect: true,
            },
            music: {
                icon: "fas fa-music",
                classList: [],
                active: false,
                active_effect: true,
            },
            toolbar: {
                icon: "fas fa-caret-right",
                classList: [],
                active: false,
                list: ["language", "music"],
            },
        };
        this.collapse_toolbar();
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

    toggleMusic() {
        this.setState((prevState) => ({
            music: {
                ...prevState.music,
                active: !this.state.music.active,
            },
        }));
    }

    toggleLanguage() {
        this.setState((prevState) => ({
            language: {
                ...prevState.language,
                active: !this.state.language.active,
            },
        }));
    }

    toggleToolbar() {
        let active = !this.state.toolbar.active;
        this.setState((prevState) => ({
            toolbar: {
                ...prevState.toolbar,
                icon: active ? "fas fa-caret-left" : "fas fa-caret-right",
                active: active,
            },
        }));
        if (active) {
            this.expand_toolbar();
        } else {
            this.collapse_toolbar();
        }
    }

    expand_toolbar() {
        this.state.toolbar.list.forEach((key) => {
            let index = this.state[key].classList.indexOf("toolbar");
            if (index !== -1) {
                this.state[key].classList.splice(index, 1);
            }
        });
    }

    collapse_toolbar() {
        this.state.toolbar.list.forEach((key) => {
            this.state[key].classList.push("toolbar");
        });
    }

    render() {
        return (
            <nav id="home-nav">
                <ul>
                    {this.renderButton(
                        this.state.sidenav,
                        () => this.toggleSidenav(),
                        () => this.SidenavOn()
                    )}
                    {this.renderButton(this.state.home)}
                    {this.renderButton(this.state.music, () =>
                        this.toggleMusic()
                    )}
                    {this.renderButton(this.state.language, () =>
                        this.toggleLanguage()
                    )}
                    {this.renderButton(this.state.toolbar, () =>
                        this.toggleToolbar()
                    )}
                </ul>
                {this.renderMusicPlayer()}
            </nav>
        );
    }

    renderButton(state, onClick, onMouseDown) {
        let classList = state.classList.slice();
        if (state.active_effect && state.active) {
            classList.push("active");
        }

        if (state.ripple_effect) {
            return (
                <RippleButton
                    icon={state.icon}
                    classList={classList}
                    active={state.active}
                    ripple_status={state.ripple_status}
                    onClick={onClick}
                    onMouseDown={onMouseDown}
                ></RippleButton>
            );
        } else {
            return (
                <Button
                    icon={state.icon}
                    classList={classList}
                    url={state.url}
                    active={state.active}
                    onClick={onClick}
                ></Button>
            );
        }
    }

    renderMusicPlayer() {
        return (
            <div
                id="music-player"
                className={this.state.music.active ? "show" : ""}
            >
                <ReactPlayer
                    url={
                        "https://soundcloud.com/jason-huang-200883547/sets/plusmore"
                    }
                    width={"100%"}
                    height={"80px"}
                    config={{
                        soundcloud: {
                            options: {
                                start_track: 0,
                                download: false,
                                sharing: false,
                                buying: false,
                                show_artwork: false,
                                show_playcount: false,
                                show_user: false,
                                single_active: true,
                                show_reposts: false,
                                show_teaser: false,
                                visual: false,
                            },
                        },
                    }}
                />
            </div>
        );
    }
}

export default HomeNavigator;
