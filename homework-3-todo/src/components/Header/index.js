import React from "react";
import styles from "./style.module.css";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const Header = ({ addTask }) => {
    const [title, setTitle] = useState("");
    const handleSubmit = (e) => {
        //form submit olayını kaldırması için
        e.preventDefault();
        //ici boşsa eklemesine izin vermemesi için durduruyoruz
        if (!title) return;
        //task ekliyoruz
        addTask(title);
        //title inputunu içini boşaltıyoruz
        setTitle("");
    };
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    return (
        <header className={styles.header}>
            <span>todolist</span>
            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="add a new task"
                    value={title}
                    onChange={onChangeTitle}
                />
                <button>
                    Create
                    <CiCirclePlus size={20} />
                </button>
            </form>
        </header>
    );
};

export default Header;
