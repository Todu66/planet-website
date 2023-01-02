import React, { useState } from "react";
import "./page.css";
import planetData from "../../data.json";

export default function Mercury() {

  const buttons = Object.keys(planetData[0].images).map(id => {
    return (
      <button key={id} onClick={() => handleClick(id)}>
        {id}
      </button>
    );
  });
 
  const [imageId, setImageId] = useState('');
  function handleClick(id) {
    setImageId(id);
  }

  return (

    <div className="both-side">
      <div className="left-side-img">
      {imageId && <img src={planetData[0].images[imageId]} alt={imageId} />}
      </div>

      <div className="right-side">
        <div className="top_text">

        </div>

        <div className="buttons">
          {buttons}
          
        </div>
      </div>
    </div>
    // <div>
    //   {buttons}
    //   {imageId && <img src={planetData[0].images[imageId]} alt={imageId} />}
    // </div>
  );
}
