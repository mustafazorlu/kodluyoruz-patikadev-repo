import { createContext, useState, useContext } from "react";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
    const [stateData, setStateData] = useState({});
    const [search, setSearch] = useState("İzmir");
    const [theme, setTheme] = useState("light");

    const values = {
        stateData,
        setStateData,
        search,
        setSearch,
        theme,
        setTheme,
    };

    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useMainWeather = () => useContext(WeatherContext);
