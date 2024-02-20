import React from "react";
import { NavLink } from "react-router-dom";

const NavBar: React.FunctionComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper blue darken-2 z-depth-3">
                <div className="container">
                    <a href="/" className="brand-logo">TS Todos</a>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink to="/">Tasks</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default NavBar;