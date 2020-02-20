import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="container">
       <ul id="nav" className="nav">
          <li><a href="#Resource">Resource</a></li>
          <li><a href="#Eboard">Eboard</a></li>
          <li><a href="#Community">Community</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Home">Home</a></li>
      </ul>
      </div>
    );
  }
}
export default NavBar