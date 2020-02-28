import React, {Component} from 'react';
import "./App.css";
import Logo from "./Logo.png";

class Header extends Component{
    render(){
        <React.Fragment>
            <div className = "header">
                <a href = "http://localhost:3001/">
                    <img src ={Logo} alt="Totoro!" className ='logo'/>
                </a>
            </div>
        </React.Fragment>
    }
}
export default Header;