
import React, {Component} from 'react';
import './navigator.css';
import profileImg from './img/profile.jpeg';


class LinkButton extends Component {
    render() {
        return(
            <li>
                <a href={this.props.url} target={this.props.tab? "_blank" : ""} rel="noreferrer">
                    <i className={this.props.icon + " icons"}></i>
                    <span>{this.props.text}</span>
                </a>
            </li>
        )
    }
}

class Profile extends Component {
    render() {
        return(
            <div className="profile">
                <img id="profile-img" src={this.props.profile} alt="Profile"></img>
                <span id="profile-name"> {this.props.name} </span>
                <span id="profile-quote"> {this.props.quote} </span>
            </div>
        )
    }
}

class SideNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homepage: {
                text: "首頁",
                icon: "fas fa-home",
                url: "/c/homepage",
            },
            projects: {
                text: "Projects",
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
                tab: true
            },
        }
    }

    render() {
        return (
            <div id={"side-nav"} className={this.props.show? "show-sidenav" : ""}>
                <div className="sidenav-btn-wrapper">
                    <i className="fa fa-bars icons sidenav-btn btn ripple" onClick={() => this.props.toggleSidenav()}></i>
                </div>
                <Profile profile={profileImg} name={"黃品硯"} quote={"Don't Think, Imagine!"}></Profile>
                <div className={"category"} data-simplebar>
                    <ul>
                        {this.renderLinkButton(this.state.homepage)}
                        {this.renderLinkButton(this.state.projects)}
                        {this.renderLinkButton(this.state.articles)}
                        {this.renderLinkButton(this.state.about)}
                        {this.renderLinkButton(this.state.comments)}
                        {this.renderLinkButton(this.state.reports)}
                    </ul>
                </div>
            </div>
        );
    }

    renderLinkButton(state) {
        return (
            <LinkButton text={state.text} icon={state.icon} url={state.url} tab={state.tab}></LinkButton>
        )
    }
}

export default SideNavigator;