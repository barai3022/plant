import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./induction.css";

const Induction = () => {
    const navlinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline",
        };
    };
    return (
        <>
            <nav className="nav-induction">
                <NavLink style={navlinkStyles} to="home">
                    Home
                </NavLink>
                <NavLink style={navlinkStyles} to="obligation">
                    Obligation
                </NavLink>
                <NavLink style={navlinkStyles} to="hazards">
                    Hazards
                </NavLink>
                <NavLink style={navlinkStyles} to="safety">
                    Safety
                </NavLink>
                <NavLink style={navlinkStyles} to="food">
                    Food
                </NavLink>
                <NavLink style={navlinkStyles} to="ppe">
                    PPE
                </NavLink>
                <NavLink style={navlinkStyles} to="first-aid">
                    First Aid
                </NavLink>
                <NavLink style={navlinkStyles} to="waste">
                    Waste
                </NavLink>
            </nav>
            <Outlet />
        </>
    );
};

export default Induction;
