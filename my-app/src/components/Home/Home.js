import React, { Component } from "react";
import "./Home.css";
import GeoLeopard from "../../images/GeoLeopard.svg";

class Home extends Component {
  render() {
    return (
        <div className="section" id ="home">
            <div className="section-content">
                <h1>
                   Home
                </h1>
                <div>
                  <img src= {GeoLeopard} alt= "GeoLeopard" className="leopard"/>
                </div>
            </div>
            
        </div>
    );
  }
}
export default Home