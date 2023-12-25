import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

import Card from "./components/Card";

const api_key = "0a548e0c18ca32142ce52885e2c37bc0";

function App() {
    const [stateData, setStateData] = useState({});
    const [searchState, setSearchState] = useState("");
    useEffect(() => {
        getData("London");
    }, []);

    const getData = async (state) => {
        //data

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${api_key}&units=metric&lang=en`
        )
            .then((response) => response.json())
            .then((data) => {
                setStateData(data);
            });
    };

    return (
        <div className="app">
            <Header
                setSearchState={setSearchState}
                getData={getData}
                searchState={searchState}
                stateData={stateData}
            />
            <div className="container">
                {stateData && <Card stateData={stateData} />}
            </div>
        </div>
    );
}

export default App;
