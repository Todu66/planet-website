import React, { Component } from "react";
import data from "../data.json";
import Header from "./Header"
import "./Header.css"



export default function Navigation () {
  const changedData = data.map((item) => {
    return (
      <Header name={item.name} /> 
    )
  });

  return (
    <div>
      <header className="header">
        <h1>The Planets</h1>
        <nav>
          <ul>
            {changedData}
          </ul>
        </nav>
      </header>
      <hr></hr>  
    </div>
  );
}
