import React from 'react'
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";

import "../App.css";
import "./Home.css";

function Home() {
    const history = useHistory();
    return (
        <React.Fragment>
            <div className="Home-menu">
                <Button onClick={() => history.push('/qrcode/')} className="App-btn">Skeniraj QR kod</Button>
                <Button onClick={() => history.push('/about/')} className="App-btn">O nama</Button>
            </div>
        </React.Fragment>
    );
}

export default Home