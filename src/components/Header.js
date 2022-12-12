import React from "react";
import "./style.css";
import data from "../data.json";

export default function Planet(props) {
  return (
    <header>
      <nav>
        <ul>
          <li>{props.name}</li>
        </ul>
      </nav>
    </header>
  );
}
// export default function Joke(props) {
//   return (
//     <div>
//       {props.setup && <h3>Setup: {props.setup}</h3>}
//       <p>Punchline: {props.punchline}</p>
//       <hr />
//     </div>
//   );
// }
