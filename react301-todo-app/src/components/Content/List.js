import React, { useEffect } from "react";
import { useTodo } from "../../contexts/TodoContext";

// let filtered = null;

let filtered = null;
console.log(filtered);

const List = () => {
    const { todos, setTodos, filter } = useTodo();

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    const onCheck = (id) => {
        const cloned_todos = [...todos];

        const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);

        const item = todos[itemIndex];
        item.completed = !item.completed;

        setTodos(cloned_todos);
    };

    const onDestroy = (id) => {
        const cloned_todos = [...todos];

        const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
        console.log(itemIndex);
        cloned_todos.splice(itemIndex, 1);
        console.log(cloned_todos);
        setTodos(cloned_todos);
    };

    

    filtered = todos;
    if (filter !== "all") {
        filtered = todos.filter((todo) =>
            filter === "active"
                ? todo.completed === false && todo
                : todo.completed === true && todo
        );
    }

    console.log(todos);
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li className={todo.completed ? "completed" : ""} key={todo.id}>
                    <div className="view">
                        <input
                            type="checkbox"
                            className="toggle"
                            checked={todo.completed}
                            onChange={() => onCheck(todo.id)}
                        />
                        <label htmlFor="">{todo.text}</label>
                        <button
                            className="destroy"
                            onClick={() => onDestroy(todo.id)}
                        >
                            sil
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default List;
