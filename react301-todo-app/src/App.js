import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
    return (
        <TodoProvider>
            <div className="App">
                <Header />
                <Content />
            </div>
        </TodoProvider>
    );
}

export default App;
