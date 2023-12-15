import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks/Tasks";
import { useEffect } from "react";

const LOCAL_STORAGE_KEY = "todo:savedTasks";

function App() {
    const [tasks, setTasks] = useState([]);

    const loadTasks = () => {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved) {
            setTasks(JSON.parse(saved));
        }
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const saveTasks = (newTasks) => {
        setTasks(newTasks);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
    };

    const addTask = (taskTitle) => {
        saveTasks([
            ...tasks,
            {
                id: crypto.randomUUID(),
                title: taskTitle,
                isCompleted: false,
            },
        ]);
    };

    const toggleComplete = (taskId) => {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted,
                };
            }
            return task;
        });
        saveTasks(newTasks);
    };

    const deleteTask = (taskId) => {
        const newTasks = tasks.filter((task) => task.id !== taskId);
        saveTasks(newTasks);
    };

    return (
        <div>
            <Header addTask={addTask} />
            <Tasks
                tasks={tasks}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
            />
        </div>
    );
}

export default App;
