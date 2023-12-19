import Container from "./components/Container";
import { LangContextProvider } from "./contexts/LangContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import "./style.css";

function App() {
    return (
        <LangContextProvider>
            <ThemeContextProvider>
                <Container />
            </ThemeContextProvider>
        </LangContextProvider>
    );
}

export default App;
//{ name: "mustafa", surname: "zorlu", age: 23 }
