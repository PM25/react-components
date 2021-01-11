import React from 'react';
import './navigator.css';
import HomeNavigator from './homenav';
import SideNavigator from './sidenav';

class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenav: false
        }
    }

    toggleSidenav() {
        let show_sidenav = this.state.sidenav;
        this.setState({sidenav: !show_sidenav});
    }

    render() {
        return(
            <div name="navigator">
                <HomeNavigator toggleSidenav={() => this.toggleSidenav()}></HomeNavigator>
                <SideNavigator show={this.state.sidenav} toggleSidenav={() => this.toggleSidenav()}></SideNavigator>
            </div>
        )
    }
}

export default Navigator;