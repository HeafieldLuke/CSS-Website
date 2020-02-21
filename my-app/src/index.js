import React from "react";
import ReactDOM from "react-dom";
import Logo  from "./components/Logo/Logo";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

import "./index.css";
import Eboard from "./components/Eboard/Eboard";
import About from "./components/About/About";
import Section from "./components/Home/Section";
import Community from "./components/Community/Community";
import Resource from "./components/Resource/Resource";


class App extends React.Component{
    render(){
        return( 
                <div>
                    <NavBar/>
                    <Logo/>
                    <Home/>
                    <About/>
                    <Community/>
                    <Eboard/>
                    <Resource/>
                </div>
        )
    }
}
 
ReactDOM.render(
    <App/>,
    document.getElementById("root")
);