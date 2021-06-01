import React from 'react'
import { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
// CSS
import "./App.css"

// Assets
import logo from './logo.svg';

function App() {

  const history = useHistory();
  return (
    <Fragment>
      <img onClick={() => history.push('/')} src={logo} className="App-logo" alt="logo" />
      <Button className="App-btn App-btn-lng">MNE</Button>
    </Fragment>
  )
}


export default App