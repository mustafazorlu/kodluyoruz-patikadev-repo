import { useContext, useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [filter, setFilter] = useState("all");
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "learn react",
            completed: false,
        },
    ]);

    const addTodo = (text) => {
        setTodos((prev) => [
            ...prev,
            { id: uuidv4(), text: text, completed: false },
        ]);
    };

    const values = { todos, setTodos, addTodo, filter, setFilter };

    return (
        <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
    );
};

export const useTodo = () => {
    const context = useContext(TodoContext);

    if (context === undefined) {
        throw new Error(
            "useTodo hook must be call inside TodoProvider component."
        );
    }

    return context;
};
