import React, { Component } from "react";
import "./navigation.css";
import { createRoot } from "react-dom/client";

// export default function Welcome(props) {
//     console.log(props)
//     return (
        
//         <li>
//           <a href="#">{props.name}</a>
//         </li>
//     )
// }

export default function Navigation(props) {
  return (
    <header>
      <nav>
        <ul>
            <li>
                <a>{props.name}</a>
            </li>
        </ul>
      </nav>
    </header>
  );
}


