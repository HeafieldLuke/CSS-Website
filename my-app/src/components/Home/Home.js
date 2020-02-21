import React, { Component } from "react";
import "./Home.css";
import GeoLeopard from "../../images/GeoLeopard.svg";

class Home extends Component {
  render() {
    return (
        <div className="container">
            <div className="home_paragraph">
                <p>
                   Computer Science Society
                </p>
            </div>
            <div className ="home">
                <img src= {GeoLeopard} alt= "GeoLeopard" className="leopard"/>
            </div>
        </div>
    );
  }
}
export default Home