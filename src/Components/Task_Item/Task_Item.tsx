import React, { FC, Dispatch, useState, FormEvent } from "react";
import { Task } from "../../Models/Tasks/Tasks";
import { MdDone, MdEdit, MdDelete } from "react-icons/md";
import "./Task_Item.scss";
import { none_null_checker } from "../../Utils/None_Null_Checker/None_Null_Checker";
import { getCustomTimeAgo } from "../../Utils/Time_Converter/Time_Converter";

interface TaskItemProps {
    taskitem: Task;
    setTasks: Dispatch<React.SetStateAction<Task[]>>;
    isLastItem: boolean;
}

const TaskItem: FC<TaskItemProps> = ({ taskitem, setTasks, isLastItem }) => {
    const [canEdit, setCanEdit] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>("");

    const enable_disable_edit_text = () => {
        setEditText(taskitem?.title);
        setCanEdit(!canEdit);
    };

    const cancel_edit_text = () => {
        setCanEdit(false);
    };

    const complete_task = () => {
        setTasks((tasks) =>
            tasks?.map((item) =>
                item.id === taskitem.id
                    ? { ...item, isCompleted: !item.isCompleted }
                    : { ...item }
            )
        );
    };

    const edit_text = (e: FormEvent) => {
        e.preventDefault();
        if (none_null_checker(editText) === false) {
            setTasks((tasks) =>
                tasks?.map((item) =>
                    item.id === taskitem.id
                        ? { ...item, title: editText }
                        : { ...item }
                )
            );
            setCanEdit(false);
        } else {
            alert("Task field cannot be empty!!!");
        }
    };

    const delete_task = () => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            setTasks((tasks) =>
                tasks.filter((item) => item.id !== taskitem.id)
            );
        }
    };

    return (
        <section
            className="task_item_main"
            style={
                isLastItem ? { marginBottom: "0px" } : { marginBottom: "10px" }
            }
        >
            <div className="t_i_m_w">
                <div className="t_i_m_f_ta">
                    {canEdit ? (
                        <form
                            onSubmit={(e) => edit_text(e)}
                            className="t_i_m_f"
                        >
                            <input
                                type={"text"}
                                placeholder={"Edit task..."}
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className="t_i_m_f_ti"
                            />
                            <div className="t_i_m_f_b_w">
                                <button type="submit" className="t_i_m_f_b">
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    className="t_i_m_f_b"
                                    id="t_i_m_f_b"
                                    onClick={cancel_edit_text}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    ) : taskitem?.isCompleted ? (
                        <s className="t_i_m_t">{taskitem?.title}</s>
                    ) : (
                        <p className="t_i_m_t">{taskitem?.title}</p>
                    )}
                    <p className="t_i_m_ta">
                        {getCustomTimeAgo({ date_num: taskitem?.id })}
                    </p>
                </div>
                <div className="t_i_m_i_w">
                    <div className={"t_i_m_i"} id={"t_i_m_i_1"}>
                        <MdEdit
                            size={25}
                            color={"rgb(87, 165, 255)"}
                            onClick={enable_disable_edit_text}
                        />
                    </div>
                    <div className={"t_i_m_i"} id={"t_i_m_i_2"}>
                        <MdDelete
                            size={25}
                            color={"rgb(200, 0, 0)"}
                            onClick={delete_task}
                        />
                    </div>
                    <div className={"t_i_m_i"} id={"t_i_m_i_3"}>
                        <MdDone
                            size={25}
                            color={"rgb(0, 200, 0)"}
                            onClick={complete_task}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TaskItem;
