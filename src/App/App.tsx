import React, { FC, useState, useEffect } from "react";
import AddTask from "../Components/Add_Task/Add_Task";
import ClearTask from "../Components/Clear_Task/Clear_Task";
import TaskList from "../Components/Task_List/Task_List";
import { Task } from "../Models/Tasks/Tasks";
import "./App.scss";

const App: FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const LS_tasks = localStorage.getItem("agma-task-manager");
        if (LS_tasks === null || LS_tasks === undefined) {
            setTasks([]);
        } else {
            const processed_LS_tasks = JSON.parse(LS_tasks);
            setTasks([...processed_LS_tasks]);
        }
    }, []);

    useEffect(() => {
        if (tasks?.length > 0) {
            localStorage.setItem("agma-task-manager", JSON.stringify(tasks));
        }
    }, [tasks]);

    return (
        <main className="app_main">
            <h1 className="app_m_h">Task Manager</h1>
            <AddTask setTasks={setTasks} />
            <TaskList tasks={tasks} setTasks={setTasks} />
            <ClearTask setTasks={setTasks} />
        </main>
    );
};

export default App;
