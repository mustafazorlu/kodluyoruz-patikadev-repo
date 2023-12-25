import { createContext, useEffect, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

const api = {
    key: "0a548e0c18ca32142ce52885e2c37bc0",
};

export const WeatherContextProvider = ({ children }) => {
    const [stateData, setStateData] = useState({});
    const [search, setSearch] = useState("İzmir");
    const [theme, setTheme] = useState("light");
    const [isCelcius, setIsCelcius] = useState("metric");

    useEffect(() => {
        getDataHandler("İzmir");
    }, []);

    const getDataHandler = (search) => {
        
        axios(
            `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api.key}&units=metric&lang=en`
        )
            .then((response) => {
                console.log(response.data);
                setStateData(response.data);
            })
            .catch((e) => {
                console.log(e);
                setSearch("İzmir");
            });

        axios(
            `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=${isCelcius}&cnt=9&appid=${
                api.key
            }&lang=${"en"}`
        )
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const values = {
        stateData,
        setStateData,
        search,
        setSearch,
        theme,
        setTheme,
        getDataHandler,
    };

    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherContext;
