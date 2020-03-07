import React, { Component } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="container">
       <ul id="nav" className="nav">

      <li>
      <Link
        activeClass="active"
        to="join"
        spy={true}
        smooth={true}
        offset={0}
        duration= {500}>Join</Link>
      </li>

       <li>
        <Link
          activeClass="active"
          to="resource"
          spy={true}
          smooth={true}
          offset={0}
          duration= {500}>Resource</Link>
        </li>

        <li>
        <Link
          activeClass="active"
          to="eboard"
          spy={true}
          smooth={true}
          offset={0}
          duration= {500}>Eboard</Link>
        </li>

        

        <li>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration= {500}>About</Link>
        </li>

        <li>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration= {500}>Home</Link>
        </li>
      </ul>
      </nav>
    );
  }
}
export default NavBar