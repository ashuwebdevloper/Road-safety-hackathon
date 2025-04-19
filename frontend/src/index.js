import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import Store from "./redux/store";
import { BrowserRouter } from 'react-router-dom';


<BrowserRouter basename="/Road-safety-hackathon">
  <App />
</BrowserRouter>

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  document.getElementById("root")
);


reportWebVitals();
