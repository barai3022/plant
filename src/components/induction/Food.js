import React from "react";
import "./induction.css";
const Food = () => {
    return (
        <div className="section">
            <h1>Food, Drinks, Drugs, Alcohol and Smoking </h1>
            <ul>
                <li>
                    Food and drinks are not allowed to take inside the plant
                    areas except designated areas.
                </li>
                <li>
                    Whole plant has been declared non-smoking zone except in
                    following designated areas:
                    <ul className="nested-ul">
                        <li>Main gate </li>
                        <li>In side the Dormitory Building</li>
                    </ul>
                </li>
                <li>
                    Alcohol, unauthorized drips, illegal substances are strictly
                    prohibited
                </li>
            </ul>
        </div>
    );
};

export default Food;
