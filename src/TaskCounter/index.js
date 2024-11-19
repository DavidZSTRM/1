import React from "react";
import './TaskCounter.css'
import { TaskContext } from "../TaskContext";


function TaskCounter(){
    const {totalTask, completedTask} = React.useContext(TaskContext);
    return(
        <h2 className="TaskCounter">Has completado {completedTask} Tareas de {totalTask}</h2>
    );
}

export {TaskCounter};