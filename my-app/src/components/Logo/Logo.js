import React, { Component } from "react";
import "./Logo.css";
import logo from '../../../src/CSS_Logo.png';

class Logo extends Component {
  render() {
    return (
      <div className="container">
        <img src= {logo} alt= "CSS_Logo" className="logo"/>
        <p>Home</p>
        <p>About</p>
      </div>
    );
  }
}
export default Logo