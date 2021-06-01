// 3rd party components
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Custom components
import About from "./components/About";
import App from './App';
import Details from "./components/Details";
import Home from "./components/Home";
import QRCodeReader from "./components/QRCodeReader";

// Custom CSS
import './index.css';

ReactDOM.render(
  <Router>
    <App />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about/" exact component={About} />
      <Route path="/qrcode/" exact component={QRCodeReader} />
      <Route path="/details/" exact component={Details} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
