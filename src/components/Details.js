
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Button from '@material-ui/core/Button';

import "../App.css";
import "./Details.css";


function Details() {
    const location = useLocation();
    const [data, setData] = useState({});

    useEffect(() => {

        async function fetchData(url) {

            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setData(json[0])

        }
        try {
            console.log(location.state.detail)
            fetchData(location.state.detail)

        } catch (error) {
            console.log(error)
        }

    }, []);
    return (
        <React.Fragment>
            <div className="QRCode-menu">
                <Button className="App-btn">Naziv kompanije: {Object.keys(data).length > 0 ? data["cname"] : "Nije pronadjeno"}</Button>
                <Button className="App-btn">Naziv artikla: {Object.keys(data).length > 0 ? data["name"] : "Nije pronadjeno"}</Button>
                <Button className="App-btn">Tip proizvoda: {Object.keys(data).length > 0 ? data["type"] : "Nije pronadjeno"}</Button>
            </div>
        </React.Fragment>

    );
}

export default Details