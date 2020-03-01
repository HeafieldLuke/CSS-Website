import React, { Component } from "react";
import "./Logo.css";
import logo from '../../images/CSS_Logo.png';

class Logo extends Component {
  render() {
    return (
      <div className="container">
        <img src= {logo} alt= "CSS_Logo" className="logo"/>
        <p className="title">
        Computer Science Society
        </p>
      </div>
    );
  }
}
export default Logo