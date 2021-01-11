import React from 'react';
// import ReactPlayer from "react-player";
import ReactPlayer from 'react-player/lazy'
import './navigator.css';

class Button extends React.Component {    
    render() {
        if (this.props.url){
            return (
                <li className={"btn icons " + this.props.class.join(' ')} onClick={() => this.props.onClick()}>
                    <a href={this.props.url}>
                        <i className={this.props.icon}></i>
                    </a>
                </li>
            );
        } else {
            return (
                <li className={"btn icons " + this.props.class.join(' ')} onClick={() => this.props.onClick()}>
                    <i className={this.props.icon}></i>
                </li>  
            );
        }
    }
}

class HomeNavigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenav: {
                icon: "fas fa-bars",
                class: ["sidenav-btn", "ripple"],
            },
            home: {
                icon: "fas fa-home",
                class: [],
                url: "/c/homepage",
                active: false
            },
            language: {
                icon: "fas fa-language",
                class: [],
                active: false
            },
            music: {
                icon: "fas fa-music",
                class: [],
                active: false
            },
            toolbar: {
                icon: "fas fa-caret-right",
                class: [],
                active: false,
                list: ["language", "music"]
            }
        }
        this.collapse_toolbar();
    }

    toggleMusic() {
        this.setState(prevState => ({
            music: {
                ...prevState.music,
                active: !this.state.music.active
            }
        }));
    }

    toggleLanguage() {
        this.setState(prevState => ({
            language: {
                ...prevState.language,
                active: !this.state.language.active
            }
        }));
    }

    toggleToolbar() {
        let active = !this.state.toolbar.active;
        this.setState(prevState => ({
            toolbar: {
                ...prevState.toolbar,
                icon: active? "fas fa-caret-left" : "fas fa-caret-right",
                active: active
            }
        }));
        if(active) {
           this.expand_toolbar(); 
        } else {
            this.collapse_toolbar();
        }
    }

    expand_toolbar() {
        this.state.toolbar.list.forEach((key) => {
            let index = this.state[key].class.indexOf("toolbar");
            if (index !== -1) {
                this.state[key].class.splice(index, 1);
            }
        });
    }

    collapse_toolbar() {
        this.state.toolbar.list.forEach((key) => {
            this.state[key].class.push("toolbar");
        });
    }

    render() {
        return (
            <nav id="home-nav">
                <ul>
                    {this.renderButton(this.state.sidenav, this.props.toggleSidenav)}
                    {this.renderButton(this.state.home)}
                    {this.renderButton(this.state.music, () => this.toggleMusic())}
                    {this.renderButton(this.state.language, () => this.toggleLanguage())}
                    {this.renderButton(this.state.toolbar, () => this.toggleToolbar())}
                </ul>
                {this.renderMusicPlayer()}          
            </nav>
        );
    }

    renderButton(state, command) {
        return(<Button icon={state.icon} class={state.class} url={state.url} onClick={command}></Button>);
    }

    renderMusicPlayer() {
        return(
            <div id="music-player" className={this.state.music.active? "show" : ""}>
                <ReactPlayer
                    url="https://soundcloud.com/jason-huang-200883547/sets/plusmore"
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
                                visual: false
                            }
                        }
                    }}
                />
            </div>
        );
    }
}

export default HomeNavigator;