import React from "react";

const NavBar: React.FunctionComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper blue darken-2 z-depth-3">
                <div className="container">
                    <a href="/" className="brand-logo">TS Todos</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/">Tasks</a></li>
                        <li><a href="/">About</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default NavBar;