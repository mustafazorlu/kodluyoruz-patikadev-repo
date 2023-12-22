import React from "react";
import ContentFooter from "../ContentFooter";
import List from "./List";

const Content = () => {
    return (
        <section className="todo-list">
            <label htmlFor="">mark all as complete</label>
            <List/>
            <ContentFooter />
        </section>
    );
};

export default Content;
