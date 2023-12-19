import React, { useState } from "react";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const ChangeTheme = () => {
    const data = useContext(ThemeContext);
    const [theme, setTheme] = useState(data);
    return (
        <div>
            change theme {theme}
            <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                tema değiştirme butonu
            </button>
        </div>
    );
};

export default ChangeTheme;
