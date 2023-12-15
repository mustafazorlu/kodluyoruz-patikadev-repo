import "./App.css";
import { useEffect, useState } from "react";

function App() {
    // useEffect(() => {
    //     // localStorage.setItem("todos",JSON.stringify([]));
    // });

    const [title, setTitle] = useState("");
    const [searchText, setSearchText] = useState("");
    const [todos, setTodos] = useState([]);

    const submitFunction = (event) => {
        event.preventDefault();

        if (!title) {
            return;
        }

        setTodos([...todos,title]);

        console.log(todos);

        // localStorage.setItem("todos", JSON.stringify(todos));

        setTitle("");

        console.log("eklendi");
    };

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    // useEffect(() => {
    //     console.log(title);
    // }, [title]);

    return (
        <div className="app">
            <div className="wrapper">
                <div className="search-wrapper">
                    <h1>#todolist</h1>
                    <div className="search-input">
                        <input
                            type="text"
                            className="input"
                            placeholder="Search"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                </div>

                <form className="add-wrapper" onSubmit={submitFunction}>
                    <input
                        type="text"
                        className="input add-input"
                        placeholder="Add"
                        value={title}
                        onChange={onChangeTitle}
                    />
                    <button className="btn">Add</button>
                </form>

                <div className="list">
                    {todos.map((todo, index) => (
                        <div className="list-item" key={index}>
                            <span>{todo.todo_title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
