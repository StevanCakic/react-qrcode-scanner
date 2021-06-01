import Button from '@material-ui/core/Button';
import React, { useState, useRef } from 'react';
import QrReader from 'react-qr-reader';
import { useHistory } from "react-router-dom";

import "./QRCodeReader.css";

function QRCodeReader() {
    // Declare a new state variable, which we'll call "count"
    const qrReader1 = useRef(null);
    const history = useHistory();

    function handleScan(data) {
        if (data) {
            history.push({ pathname: '/details/', state: { detail: data } })
        }
    }

    function handleError(err) {
        console.error(err)
    }

    function openImageDialog() {
        qrReader1.openImageDialog()
    }
    
    return (
        <React.Fragment>
            <div className="QRCode-menu">
                <Button onClick={openImageDialog} className="App-btn">Submit QR code</Button>
                <QrReader legacyMode={true} ref={qrReader1} delay={300} onError={handleError} onScan={handleScan} style={{ width: '100%' }} />;

            </div>
        </React.Fragment>

    );
}

export default QRCodeReader