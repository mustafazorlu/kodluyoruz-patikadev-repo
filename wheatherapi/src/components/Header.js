import { useMainWeather } from "../context/WeatherContext";
import { useWeather } from "../hooks/useWeather";

const Header = () => {
    const { setSearch, stateData } = useMainWeather();

    const splittedImgUrl = stateData?.weather?.[0].description.replaceAll(
        " ",
        "-"
    );
    console.log(splittedImgUrl);
    useWeather();
    return (
        <div className="header">
            <img
                src={`/assets/${splittedImgUrl}.jpg`}
                alt=""
                className="header_image"
            />
            <div className="input_wrapper">
                <input
                    type="text"
                    className="search_input"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search city weather you want to know.."
                />
                <button className="search_btn">Search</button>
            </div>
        </div>
    );
};

export default Header;
