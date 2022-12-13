import React from "react";
import "../components/navigation.css";
import Welcome from "../components/navigation.js";
import Planet from "../components/Planet";
import jupiter1 from "../images/earth-1.png";
import jupiter2 from "../images/earth-2.png";
import jupiter3 from "../images/earth-3.png";

export default function Jupiter() {
  return (
    <>
      <Welcome
        name="JUPITER"
        info="When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core."
        image1={jupiter1}
        image2={jupiter2}
        image3={jupiter3}
        time="9.93 HOURS"
        revolution="11.86 YEARS"
        radius="69,911 KM"
        temp="-108°C"
        color="#D83A34"
      />
    </>
  );
}
