import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const navlinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline",
        };
    };
    return (
        <nav className="primary-nav">
            <NavLink style={navlinkStyles} to="/">
                Home
            </NavLink>
            <NavLink style={navlinkStyles} to="unit-i">
                Unit-I
            </NavLink>
            <NavLink style={navlinkStyles} to="unit-ii">
                Unit-II
            </NavLink>

            <NavLink style={navlinkStyles} to="policy">
                Policy
            </NavLink>
            <NavLink style={navlinkStyles} to="induction">
                Induction
            </NavLink>
        </nav>
    );
};

export default Navbar;
