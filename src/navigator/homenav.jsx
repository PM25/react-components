import React, { PureComponent } from "react";
import ReactPlayer from "react-player/lazy";

export default class HomeNavigator extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            sidenav: {
                icon: "fas fa-bars sidenav-btn ripple",
                classList: ["show"],
                ripple_status: false,
                onMouseDown: this.showRipple,
                onMouseUp: this.toggleSidenav,
            },
            home: {
                icon: "fas fa-home",
                classList: [],
                url: "/homepage",
                active: false,
            },
            language: {
                icon: "fas fa-language",
                classList: ["show"],
                active: false,
                active_effect: true,
                onClick: this.toggleLanguage,
            },
            music: {
                icon: "fas fa-music",
                classList: ["show"],
                active: false,
                active_effect: true,
                onClick: this.toggleMusic,
            },
            toggleToolbar: {
                icon: "fas fa-caret-right",
                classList: ["show"],
                active: false,
                active_effect: false,
                onClick: this.toggleToolbar,
            },
            toolbar: ["language", "music"],
        };
        this.collapseToolbar();
    }

    toggleSidenav = () => {
        this.props.toggleSidenav();
        setTimeout(() => {
            this.hideRipple();
        }, 200);
    };

    showRipple = () => {
        this.setState((prevState) => ({
            sidenav: {
                ...prevState.sidenav,
                ripple_status: true,
            },
        }));
    };

    hideRipple = () => {
        this.setState((prevState) => ({
            sidenav: {
                ...prevState.sidenav,
                ripple_status: false,
            },
        }));
    };

    toggleMusic = () => {
        this.setState((prevState) => ({
            music: {
                ...prevState.music,
                active: !this.state.music.active,
            },
        }));
    };

    toggleLanguage = () => {
        this.setState((prevState) => ({
            language: {
                ...prevState.language,
                active: !this.state.language.active,
            },
        }));
    };

    toggleToolbar = () => {
        let active = !this.state.toggleToolbar.active;
        this.setState((prevState) => ({
            toggleToolbar: {
                ...prevState.toggleToolbar,
                icon: active ? "fas fa-caret-left" : "fas fa-caret-right",
                active: active,
            },
        }));
        if (active) {
            this.expandToolbar();
        } else {
            this.collapseToolbar();
        }
    };

    expandToolbar = () => {
        this.state.toolbar.forEach((key) => {
            let index = this.state[key].classList.indexOf("hide");
            if (index !== -1) {
                this.state[key].classList.splice(index, 1);
            }
        });
    };

    collapseToolbar = () => {
        this.state.toolbar.forEach((key) => {
            this.state[key].classList.push("hide");
        });
    };

    render() {
        return (
            <nav id="home-nav">
                <ul>
                    {this.renderRippleButton(this.state.sidenav)}
                    {this.renderButton(this.state.home)}
                    {this.renderButton(this.state.music)}
                    {this.renderButton(this.state.language)}
                    {this.renderButton(this.state.toggleToolbar)}
                </ul>
                <MusicPlayer
                    width={"100%"}
                    height={"80px"}
                    showing={this.state.music.active}
                ></MusicPlayer>
            </nav>
        );
    }

    renderRippleButton(state) {
        return (
            <RippleButton
                icon={state.icon}
                classList={state.classList}
                ripple_status={state.ripple_status}
                onClick={state.onMouseUp}
                onMouseDown={state.onMouseDown}
            ></RippleButton>
        );
    }

    renderButton(state) {
        let classList = state.classList.slice();
        if (state.active_effect && state.active) {
            classList.push("active");
        }
        return (
            <Button
                icon={state.icon}
                classList={classList}
                url={state.url}
                onClick={state.onClick}
            ></Button>
        );
    }
}

function Button(props) {
    return (
        <li
            className={"btn " + props.classList.join(" ")}
            onClick={() => props.onClick()}
        >
            {props.url ? (
                <a href={props.url}>
                    <i className={props.icon}></i>
                </a>
            ) : (
                <i className={props.icon}></i>
            )}
        </li>
    );
}

function RippleButton(props) {
    return (
        <li
            className={"btn icons " + props.classList}
            onClick={() => props.onClick()}
            onMouseDown={() => props.onMouseDown()}
        >
            <i className={props.icon}></i>
            <div className={props.ripple_status ? "ripple-effect" : ""}></div>
        </li>
    );
}

function MusicPlayer(props) {
    return (
        <div id="music-player" className={props.showing ? "show" : ""}>
            <ReactPlayer
                url={
                    "https://soundcloud.com/jason-huang-200883547/sets/plusmore"
                }
                width={props.width}
                height={props.height}
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
