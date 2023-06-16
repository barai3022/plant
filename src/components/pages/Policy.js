import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./policy.css";

const Policy = () => {
    const navlinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline",
        };
    };
    return (
        <>
    
            <nav className="nav-policy">
                <NavLink style={navlinkStyles} to="home">
                    Home
                </NavLink>
                <NavLink style={navlinkStyles} to="quality">
                    Quality
                </NavLink>
                <NavLink style={navlinkStyles} to="environment">
                    Environmental
                </NavLink>
                <NavLink style={navlinkStyles} to="ohs">
                    OHS
                </NavLink>
            </nav>
            <Outlet />
        </>
    );
};

export default Policy;
