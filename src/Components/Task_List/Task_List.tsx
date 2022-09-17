import React, { FC, Dispatch } from "react";
import { Task } from "../../Models/Tasks/Tasks";
import TaskItem from "../Task_Item/Task_Item";
import "./Task_List.scss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

interface TaskListProps {
    tasks: Task[];
    setTasks: Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: FC<TaskListProps> = ({ tasks, setTasks }) => {
    return (
        <div className="task_list_main">
            {tasks?.length > 0 ? (
                <div className="t_l_m_sv_w">
                    <SimpleBar
                        forceVisible="y"
                        autoHide={false}
                        className="t_l_m_sv"
                    >
                        {[...tasks]?.reverse()?.map((taskitem, index) => (
                            <TaskItem
                                key={taskitem?.id}
                                taskitem={taskitem}
                                setTasks={setTasks}
                                isLastItem={tasks?.length - 1 === index}
                            />
                        ))}
                    </SimpleBar>
                </div>
            ) : (
                <h4 className="t_l_m_e">Empty!!!</h4>
            )}
        </div>
    );
};

export default TaskList;
