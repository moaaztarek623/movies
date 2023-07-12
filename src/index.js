import React from "react";
import ReactDOM from "react-dom";
import './sass/main.css'
import { ThemeProvider } from "@material-tailwind/react";
import App from './App.js';

ReactDOM.render(<ThemeProvider> <App/> </ThemeProvider>, document.getElementById("root"));

