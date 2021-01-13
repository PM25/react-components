import react, { Component } from "react";
import "./about.css";
import Profile from "./profile";

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Profile></Profile>;
    }
}
