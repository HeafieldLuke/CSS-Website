import React, { Component } from "react";
import "./Home.css";
import { ReactComponent as girlWindow } from '../../images/girlWindow.svg';
import { ReactComponent as boy } from '../../images/boy.svg';
import styled, { keyframes } from 'styled-components'

const moveVertical = keyframes`
0% { transform: translateY(0); }
100% { transform: translateY(-10px);
`;

const moveHorizontal = keyframes`
0% { transform: translateX(0); }
100% { transform: translateX(-10px);
`;


const Girl = styled(girlWindow)`
  height-max:100%;
  width: 30%;
  height: 30%;
  display: block;
  margin-top: 30%;
  margin-left: 20%;

  .window{
    animation: ${moveVertical} infinite 1s alternate;
    transform-origin: center;
    transform-box: fill-box;
    }
`

const Boy = styled(boy)`
  height-max:100%;
  width: 22%;
  height: 22%;
  display: block;
  margin-top: -40%;
  margin-left: 60%;

  .top_box, .middle_box, .bottom_box{
    animation: ${moveHorizontal} infinite 1s alternate;
    transform-origin: center;
    transform-box: fill-box;
    }

`

class Home extends Component {
  render() {
    return (
            <section id ="home" className= "home-section">
             
              <div>
                <h1 className = "home-title1">
                   Who Are We?
                </h1>
                <p className = "home-paragraph1">
                  We are Wentworth<br></br>
                  Institution of Technology<br></br>
                  Computer Science Soceity<br></br>
                  located in Boston, MA<br></br>
                </p>
                <h1 className = "home-title2">
                   Our Goal!
                </h1>
                <p className = "home-paragraph2">
                To better prepare<br></br>
                students in their career<br></br>
                 by handing them<br></br>
                the tools to succeed<br></br>
                </p>
                <Girl/>
                <Boy/>
              </div>
              </section>
            
    );
  }
}
export default Home