
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
            // To get ID 
            const details = location.state.detail.split("/")
            const id = parseInt(details[details.length - 1]);
            // ovo ce da se mijenja kad se povezemo sa bazom 
            for (const product of json.data) {
                if (product["id"] == id) {
                    setData(product)
                    break;
                }
            }

        }
        try {

            fetchData("https://jsonblob.com/api/jsonBlob/835dcbea-c2ea-11eb-8480-0309ea41fc0b")

        } catch (error) {
            console.log(error)
        }

    }, []);
    return (
        <React.Fragment>
            <div className="QRCode-menu">
                <Button className="App-btn">Proizvedeno: {Object.keys(data).length > 0 ? data["godina_proizvodnje"]: "Nije pronadjeno"}</Button>
                <Button className="App-btn">Proizvodjac: {Object.keys(data).length > 0 ? data["mjesto_proizvodnje"]: "Nije pronadjeno"}</Button>
                <Button className="App-btn">Rok upotrebe: {Object.keys(data).length > 0 ? data["rok_upotrebe"]: "Nije pronadjeno"}</Button>
            </div>
        </React.Fragment>

    );
}

export default Details