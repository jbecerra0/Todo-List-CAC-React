import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        newTask = {
            ...newTask,
            id: uuidv4(),
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    };

    const changeCompleted = (id) => {
        const newTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="bg-dark p-3 h-auto d-flex flex-column align-items-center border border-primary-subtle rounded">
                <Form addTask={addTask} />
                <List
                    tasks={tasks}
                    deleteTask={deleteTask}
                    changeCompleted={changeCompleted}
                />
            </div>
        </div>
    );
}

export default TodoList;
