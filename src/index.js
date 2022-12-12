import React from "react";
import App from './App';
import { createRoot } from 'react-dom/client'
import Mercury from "./pages/mercury"

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Mercury /> */}
    <App />
  </React.StrictMode>
);
