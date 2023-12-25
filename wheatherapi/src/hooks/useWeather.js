import { useMainWeather } from "../context/WeatherContext";
import axios from "axios";
import { useEffect } from "react";

const api_key = "0a548e0c18ca32142ce52885e2c37bc0";

export const useWeather = () => {
    const { setStateData, search, setSearch } = useMainWeather();

    useEffect(() => {
        axios(
            `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}&units=metric&lang=en`
        )
            .then((response) => {
                console.log(response.data);
                setStateData(response.data);
            })
            .catch((e) => {
                console.log(e);
                setSearch("İzmir");
            });
    }, [search]);
};
