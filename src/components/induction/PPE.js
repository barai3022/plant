import React from "react";
import "./induction.css";
const PPE = () => {
    return (
        <div className="section">
            <h1>Personal Protective Equipment</h1>

            <ul>
                <li>
                    Mandatory Personal Protective Equipment (PPE) are:
                    <ul className="nested-ul">
                        <li>Safety Helmet</li>
                        <li>Safety Shoe.</li>
                    </ul>
                </li>
                <li>
                    Other PPEs that may be required are:
                    <ul className="nested-ul">
                        <li>Ear Protector</li>
                        <li> Chemical Gloves </li>
                        <li> Safety Goggles </li>
                        <li> Face Shield </li>
                        <li> Face Mask etc</li>
                    </ul>
                </li>
                <li>
                    While working at plant these equipment must be worn at
                    designated PPE areas.
                </li>
            </ul>
        </div>
    );
};

export default PPE;
