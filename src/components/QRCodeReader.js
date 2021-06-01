import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import { useHistory } from "react-router-dom";

import "./QRCodeReader.css";

function QRCodeReader() {
    // Declare a new state variable, which we'll call "count"

    const [scan, setScan] = useState(false);
    const history = useHistory();
    let qrCodeScanner = <QrReader onError={handleError} onScan={helper} style={{ width: '100%' }} />;

    function toggleScan() {
        return !scan ? setScan(true) : setScan(false)
    }

    function helper() { }

    function handleScan(data) {
        if (data) {
            history.push({ pathname: '/details/', state: { detail: data } })
        }
    }

    function handleError(err) {
        console.error(err)
    }
    if (scan) {
        qrCodeScanner = <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: '100%' }} />;
    } else {
        qrCodeScanner = <QrReader onError={handleError} onScan={helper} style={{ width: '100%' }} />;
    }
    return (
        <React.Fragment>
            <div className="QRCode-menu">
                <Button onClick={toggleScan} className="App-btn">{scan ? "Zaustavi skeniranje" : "Zapocni skeniranje"}</Button>
                {qrCodeScanner}

            </div>
        </React.Fragment>

    );
}

export default QRCodeReader