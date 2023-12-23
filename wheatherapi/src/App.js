import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

import Card from "./components/Card";

const api_key = "0a548e0c18ca32142ce52885e2c37bc0";
//https://api.openweathermap.org/data/3.0/onecall?lat=${stateData.lat}&lon=${stateData.lon}&exclude=daily&appid=${api_key}
//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}
//https://openweathermap.org/img/wn/10d@2x.png

function App() {
    useEffect(() => {
        getData("London");
    }, []);

    const [stateData, setStateData] = useState({});
    const [searchState, setSearchState] = useState("");

    const getData = (state) => {
        //data
        fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${state}&limit=5&appid=${api_key}`
        )
            .then((response) => response.json())
            .then((data) => {
                const veri = data[0];

                fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${veri.lat}&lon=${veri.lon}&appid=${api_key}`
                )
                    .then((response) => response.json())
                    .then((data) => {
                        setStateData(data);
                    });
            });
    };

    // useEffect(() => {
    //     console.log(searchState);
    //     console.log(stateData);
    // }, [searchState, stateData]);

    return (
        <div className="app">
            <Header
                setSearchState={setSearchState}
                getData={getData}
                searchState={searchState}
            />
            <div className="container">
                {stateData && <Card stateData={stateData} />}
            </div>
        </div>
    );
}

export default App;
