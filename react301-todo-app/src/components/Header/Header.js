import React from "react";
import NewTodoForm from "./NewTodoForm/NewTodoForm";

const Header = () => {
    return (
        <div>
            <h1>todos</h1>
            <NewTodoForm/>
        </div>
    );
};

export default Header;
