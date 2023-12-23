/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useTodo } from "../contexts/TodoContext";

const ContentFooter = () => {
    const { todos, filter, setFilter, setTodos } = useTodo();

    const clearCompleted = () => {
        const cloned_todos = [...todos];

        const newTodos = cloned_todos.filter((todo) => !todo.completed);
        console.log("newtodos", newTodos);
        setTodos(newTodos);
    };
    return (
        <div className="footer">
            <span className="todo-count">
                <strong>{todos.length} </strong>
                item{todos.length > 1 && "s"} left 
            </span>
            <ul className="filters">
                <li>
                    <span
                        href=""
                        className={filter === "all" ? "selected" : ""}
                        onClick={() => setFilter("all")}
                    >
                        All
                    </span>
                </li>
                <li>
                    <span
                        className={filter === "active" ? "selected" : ""}
                        onClick={() => setFilter("active")}
                    >
                        Active
                    </span>
                </li>
                <li>
                    <span
                        className={filter === "completed" ? "selected" : ""}
                        onClick={() => setFilter("completed")}
                    >
                        Completed
                    </span>
                </li>
            </ul>

            <button className="" onClick={clearCompleted}>
                clear completed
            </button>
        </div>
    );
};

export default ContentFooter;
