import React from "react";
import "./Header.css";
import Menu from "./Menu.js";

const Header = ({ username, is_authenticated, logout }) => (
    <header className="header">
        <div>TODO project</div>
        <Menu username={username} is_authenticated={is_authenticated} logout={logout} />
    </header>
);

export default Header;
