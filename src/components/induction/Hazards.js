import React from "react";
import "./induction.css";
const Hazards = () => {
    return (
        <div className="section">
            <h1> Plant Hazards & places </h1>
            <table>
                <tr>
                    <th>High Voltage</th>
                    <td>Engine Hall, MV Room, LV Switchgear, HV Switchyard</td>
                </tr>
                <tr>
                    <th>High noise</th>
                    <td>Engine Hall</td>
                </tr>
                <tr>
                    <th>Fire </th>
                    <td>Engine Hall, MV Room, LV Switchgear, HV Switchyard</td>
                </tr>
                <tr>
                    <th>Gas Leakage</th>
                    <td>Engine Hall, Gas RMS</td>
                </tr>
                <tr>
                    <th>Oil Spillage</th>
                    <td>Engine Hall, Switchyard, Lube Oil Storage area</td>
                </tr>
                <tr>
                    <th>High temperature</th>
                    <td>Engine Hall</td>
                </tr>
                <tr>
                    <th>High Pressure</th>
                    <td>Engine Hall</td>
                </tr>
                <tr>
                    <th>Chemicals </th>
                    <td>Chemical Storage Area</td>
                </tr>
            </table>
        </div>
    );
};

export default Hazards;
