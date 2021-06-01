
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import "./Details.css";

function Details() {
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname); // result: '/secondpage'
        console.log(location.search); // result: '?query=abc'
        console.log(location.state.detail); // result: 'some_value'
    }, [location]);
    return (
        <React.Fragment>
            <div className="QRCode-menu">
                {location.state.detail}
            </div>
        </React.Fragment>

    );
}

export default Details