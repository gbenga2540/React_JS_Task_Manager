import React, { FC, useState, FormEvent, Dispatch, useRef } from "react";
import { Task } from "../../Models/Tasks/Tasks";
import { none_null_checker } from "../../Utils/None_Null_Checker/None_Null_Checker";
import "./Add_Task.scss";

export interface AddTaskProps {
    setTasks: Dispatch<React.SetStateAction<Task[]>>;
}

const AddTask: FC<AddTaskProps> = ({ setTasks }) => {
    const [task, setTask] = useState<string>("");
    const text_input_ref = useRef<HTMLInputElement>(null);

    const add_task_to_tasks = (e: FormEvent) => {
        e.preventDefault();
        if (none_null_checker(task) === false) {
            const createTask: Task = {
                id: Date.now(),
                title: task,
                isCompleted: false,
            };
            setTasks((oldTasks) => [...oldTasks, createTask]);
            setTask("");
        } else {
            alert("Task field cannot be empty!!!");
        }
        text_input_ref?.current?.focus();
    };

    return (
        <form className="add_task_main" onSubmit={(e) => add_task_to_tasks(e)}>
            <input
                type={"text"}
                placeholder={"Add a task..."}
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="a_t_m_i"
                ref={text_input_ref}
            />
            <button type="submit" className="a_t_m_b">
                ADD
            </button>
        </form>
    );
};

export default AddTask;
