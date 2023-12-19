import React from "react";
import ChangeLang from "./ChangeLang";
import ChangeTheme from "./ChangeTheme";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Container = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={`${theme} container`}
        >
            <div className="wrapper">
                <ChangeTheme />
                <ChangeLang />
            </div>
        </div>
    );
};

export default Container;
