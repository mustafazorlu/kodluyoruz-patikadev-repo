import { createContext, useState } from "react";

const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
    const [lang, setLang] = useState("tr");

    const changeLang = (langValue) => {
        setLang(langValue);
    };

    const values = {
        lang,
        changeLang
    };
    return <LangContext.Provider value={values}>{children}</LangContext.Provider>;
};

export default LangContext;
