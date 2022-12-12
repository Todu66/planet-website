import React from "react";
import "../components/navigation.css";
import Navigation from '../components/navigation.js'
import Planet from "../components/Planet";
import earth1 from "../images/earth-1.png";
import earth2 from "../images/earth-2.png";
import earth3 from "../images/earth-3.png";

export default function Earth() {
  return (
    <>
      <Navigation
        name="EARTH"
        info="Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive."
        image1={earth1}
        image2={earth2}
        image3={earth3}
        time="0.99 DAYS"
        revolution="365.26 DAYS"
        radius="6,371 KM"
        temp="16°C"
        color="#6D2ED5"
      />
    </>
  );
}
