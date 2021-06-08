import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => (
    <nav>
        <ul className="navbar_list">
            <li>
                <Link className="navbar_link" to="/">
                    Users
                </Link>
            </li>
            <li>
                <Link className="navbar_link" to="/projects">
                    Projects
                </Link>
            </li>
            <li>
                <Link className="navbar_link" to="/notes">
                    Notes
                </Link>
            </li>
            <li>
                <Link className="navbar_link" to="/login">
                    Login
                </Link>
            </li>
        </ul>
    </nav>
);

export default Menu;
