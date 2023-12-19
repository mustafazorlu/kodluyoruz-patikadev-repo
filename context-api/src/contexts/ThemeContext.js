import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value="light">{children}</ThemeContext.Provider>
    );
};

export default ThemeContext;
