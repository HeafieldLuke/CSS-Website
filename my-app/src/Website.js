import React, { Component } from "react";
import "./Website.css";
import logo from './CSS_Logo.png';
 
class Logo extends Component {
  render() {
    return (
      <div className="container">
        <img src= {logo} alt= "CSS_Logo" className="logo"/>
        <p className="bar">Home</p>
        <p className="bar">About</p>
      </div>
    );
  }
}

class Bar extends Component {
    render() {
      var letterStyle = {
        padding: 10,
        margin: 10,
        backgroundColor: this.props.bgcolor,
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: 32,
        textAlign: "center"
      };
   
      return (
        <div style = {letterStyle}>
          <p>Hello</p>>
        </div>
      );
    }
  }
 
  export {
    Logo,
    Bar,
  }