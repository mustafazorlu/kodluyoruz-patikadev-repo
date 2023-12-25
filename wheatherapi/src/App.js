import "./App.css";
import Header from "./components/Header";
import { WeatherContextProvider } from "./context/WeatherContext";

import Card from "./components/Card";

function App() {
    // const [stateData, setStateData] = useState({});
    // const [searchState, setSearchState] = useState("");
    // useEffect(() => {
    //     getData("London");
    // }, []);

    // const getData = async (state) => {
    //     //data

    //     fetch(
    //         `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${api_key}&units=metric&lang=en`
    //     )
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setStateData(data);
    //         });
    // };

    return (
        <WeatherContextProvider>
            <div className="app">
                <Header />
                <div className="container">
                    <Card />
                </div>
            </div>
        </WeatherContextProvider>
    );
}

export default App;
