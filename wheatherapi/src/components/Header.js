import React from "react";

const Header = ({ setSearchState, getData, searchState }) => {
    return (
        <div className="header">
            <img src="" alt="" />
            <div className="input_wrapper">
                <input
                    type="text"
                    className="search_input"
                    onChange={(e) => setSearchState(e.target.value)}
                    placeholder="Search city weather you want to know.."
                />
                <button className="search_btn" onClick={() => getData(searchState)}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default Header;
