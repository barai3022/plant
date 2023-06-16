import React from "react";
import "./induction.css";
const Safety = () => {
    return (
        <div className="section">
            <h1>Site Safety </h1>
            <ul>
                <li>
                    Stand clear off all panels while you are in control room{" "}
                </li>
                <li>Do not touch any control equipment, switches or device</li>
                <li>
                    While you are at the plant site do not restrict or block
                    access to emergency equipment such as fire extinguishers,
                    safety shower, emergency exit or route{" "}
                </li>
                <li>
                    Stand clear of rotating equipment such as pumps and motors
                    which may start automatically and without warning.{" "}
                </li>
                <li>
                    Cloth shall not have flapping or trailing edges that may get
                    entangled with rotating equipment or moving parts of the
                    plant
                </li>
                <li>Long hair must be neatly tied back</li>
            </ul>
        </div>
    );
};

export default Safety;
