import React, { FC, Dispatch } from "react";
import { Task } from "../../Models/Tasks/Tasks";
import "./Clear_Task.scss";

export interface AddTaskProps {
    setTasks: Dispatch<React.SetStateAction<Task[]>>;
}

const ClearTask: FC<AddTaskProps> = ({ setTasks }) => {
    const clear_tasks = () => {
        if (window.confirm("Are you sure you want to clear all tasks")) {
            localStorage.removeItem("agma-task-manager");
            setTasks([]);
        }
    };

    return (
        <section className="clear_task_main">
            <h2 className="c_t_m_t">
                Clear all <i>Tasks</i> from storage?
            </h2>
            <button type="button" className="c_t_m_b" onClick={clear_tasks}>
                CLEAR
            </button>
        </section>
    );
};

export default ClearTask;
