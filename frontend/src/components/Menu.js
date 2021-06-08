import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = ({ username, is_authenticated, logout }) => (
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
                {is_authenticated() ? (
                    <Link className="navbar_link" onClick={() => logout()}>Logout</Link>
                ) : (
                    <Link className="navbar_link" to="/login">
                        Login
                    </Link>
                )}
            </li>
            <li><div className="navbar_username">{username}</div></li>
        </ul>
    </nav>
);

export default Menu;
