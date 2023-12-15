import React from "react";
import styles from "./style.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Task = ({ task, toggleComplete, deleteTask }) => {
    return (
        <div className={styles.task}>
            <button
                className={styles.checkContainer}
                onClick={() => toggleComplete(task.id)}
            >
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div></div>}
            </button>
            <p className={task.isCompleted ? styles.textCompleted : ""}>
                {task.title}
            </p>
            <button
                className={styles.deleteButton}
                onClick={() => deleteTask(task.id)}
            >
                <TbTrash size={20} />
            </button>
        </div>
    );
};

export default Task;
