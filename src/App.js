import React from "react";
import { createRoot } from 'react-dom/client'
import Mercury from "./pages/mercury";
import Venus from "./pages/Venus";
import Navigation from "./components/navigation";
import Earth from "./pages/Earth"
import Mars from "./pages/Mars"
import Jupiter from "./pages/Jupiter"
import Saturn from "./pages/Saturn"


export default function App() {
  return (
    <div>
      <Navigation />
      <Mercury />
      <Venus />
      <Earth />
      <Mars />
      <Jupiter />
      <Saturn />
    </div>
  );
}
