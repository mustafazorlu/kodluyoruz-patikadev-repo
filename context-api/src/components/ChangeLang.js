import React, { useContext } from "react";
import LangContext from "../contexts/LangContext";

const ChangeLang = () => {
    const { lang, changeLang } = useContext(LangContext);
    return (
        <div style={{padding:'1rem', display:'flex', flexDirection:'column', gap: '1rem', width:'max-content'}}>
            <div>Aktif dil : {lang}</div>
            <button onClick={() => changeLang("tr")}>Türkçe</button>
            <button onClick={() => changeLang("en")}>İngilizce</button>
            <button onClick={() => changeLang("kr")}>Korece</button>
        </div>
    );
};

export default ChangeLang;
