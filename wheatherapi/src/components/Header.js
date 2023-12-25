import WeatherContext from "../context/WeatherContext";
import { useContext } from "react";

const Header = () => {
    const { setSearch, stateData, search, getDataHandler } =
        useContext(WeatherContext);

    const splittedImgUrl = stateData?.weather?.[0].description.replaceAll(
        " ",
        "-"
    );

    const submitForm = (e) => {
        e.preventDefault();
        getDataHandler(search);
    };

    return (
        <div className="header">
            <img
                src={`/assets/${splittedImgUrl}.jpg`}
                alt=""
                className="header_image"
            />
            <form className="input_wrapper" onSubmit={(e) => submitForm(e)}>
                <input
                    type="text"
                    className="search_input"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search city weather you want to know.."
                />
                <button className="search_btn" type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};

export default Header;
