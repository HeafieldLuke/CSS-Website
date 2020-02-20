import React from "react";
import ReactDOM from "react-dom";
import Logo  from "./components/Logo";
import NavBar from "./components/NavBar";
import "./index.css";

class App extends React.Component{
    render(){
        return(
            <div>
            <NavBar/>
            <Logo/>
            </div>

        )
    }
}
 
ReactDOM.render(
    <App/>,
    document.getElementById("root")
);