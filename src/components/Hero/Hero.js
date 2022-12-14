import React from "react";
import "./Hero.css";
import data from "../../data.json";

console.log(data);
export default function Hero() {
  const mapingImages = data.map((item) => {
    return <img className="image1" src={item.images.planet} />;
  });
  return (
    <div className="both-side">
      <div className="left-side-img">
        {mapingImages}
        </div>

      <div className="right-side">
      </div>
    </div>
  );
}
