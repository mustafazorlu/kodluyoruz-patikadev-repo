import React from "react";
import styles from "./style.module.css";
import Task from "../Task";
const Tasks = ({ tasks, toggleComplete, deleteTask }) => {
    const taskQuantity = tasks.length;
    const completedTesk = tasks.filter((task) => task.isCompleted).length;
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Create tasks</p>
                    <span>{taskQuantity}</span>
                </div>
                <div>
                    <p>Completed tasks</p>
                    <span>
                        {completedTesk} of {taskQuantity}
                    </span>
                </div>
            </header>
            <div className={styles.list}>
                {tasks.map((task) => (
                    <Task
                        task={task}
                        key={task.id}
                        toggleComplete={toggleComplete}
                        deleteTask={deleteTask}
                    />
                ))}
            </div>
        </section>
    );
};

export default Tasks;
