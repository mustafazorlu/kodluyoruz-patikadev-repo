import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const ChangeTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{padding:'1rem', display:'flex', flexDirection:'column', width:'max-content', gap:'1rem'}}>
            <span>change theme {theme}</span>
            <button onClick={() => toggleTheme()}>
                tema değiştirme butonu
            </button>
        </div>
    );
};

export default ChangeTheme;
