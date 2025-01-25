import React, { Component } from "react";

import Avatar from "../avatar/Avatar.jsx";
import AboutMenu from "./AboutMenu.jsx";



export default class About extends Component {
  render() {
    return (
      <>
        <AboutMenu />
        <Avatar page="about" />
        

      </>
    );
  }
}