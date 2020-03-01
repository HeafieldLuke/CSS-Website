import React from "react";
import ReactDOM from "react-dom";
import Logo  from "./components/Logo/Logo";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Eboard from "./components/Eboard/Eboard";
import About from "./components/About/About";
import Community from "./components/Community/Community";
import Resource from "./components/Resource/Resource";
import "./index.css";

class App extends React.Component{
    render(){
        return( 
                <div>
                    <NavBar/>
                    <Logo/>
                    <Home/>
                    <About/>
                </div>
        )
    }
}
 
ReactDOM.render(
    <App/>,
    document.getElementById("root")
);