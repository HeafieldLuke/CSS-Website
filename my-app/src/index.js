import React from "react";
import ReactDOM from "react-dom";
import Logo  from "./components/Logo/Logo";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import "./index.css";


class App extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
                <Logo/>
                <Home/>
            </div>
        )
    }
}
 
ReactDOM.render(
    <App/>,
    document.getElementById("root")
);