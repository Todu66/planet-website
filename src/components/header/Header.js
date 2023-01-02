import React, { useState } from "react";
import "../css/Header.css"
import planetData from "../../data.json";


export default function Header () {
    const changedData = planetData.map((planet) => (
        <a href="#" target="_blank"onClick={() => handlePlanetClick(planet)}>{planet.name}</a>
    ));
    
    
    const [currentPlanet, setCurrentPlanet] = useState(null);
    
    
    function handlePlanetClick(planet) {
        setCurrentPlanet(planet);
    }

    return (
        <header className="header">
            <h1>The Planets</h1>
            <nav>
                <ul>
                    <li>{changedData}</li>
                </ul>
            </nav>
        </header>
    )
}