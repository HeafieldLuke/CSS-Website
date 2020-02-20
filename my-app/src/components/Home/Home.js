import React, { Component } from "react";
import "./Home.css";
import GeoLeopard from "../../images/GeoLeopard.svg"

class Home extends Component {
  render() {
    return (
        <div className="container">
            <p className="home">
            <img src= {GeoLeopard} alt= "GeoLeopard" className="leopard"/>
            </p>
        </div>
    );
  }
}
export default Home