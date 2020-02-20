import React, { Component } from "react";
import "./Logo.css";
import logo from '../../images/CSS_Logo.png';

class Logo extends Component {
  render() {
    return (
      <div className="container">
        <a href="#Home"><img src= {logo} alt= "CSS_Logo" className="logo"/></a>
      </div>
    );
  }
}
export default Logo