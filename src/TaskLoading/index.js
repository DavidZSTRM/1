import React from "react";
import "./TaskLoading.css"

function TaskLoading() { 
    return ( 
        <div className="Loading Task-container"> 
        <span className="Loading Task-completeIcon"></span> 
        <p className="Loading Task-text">Cargando Tareas...</p> 
        <span className="Loading Task-deleteIcon"></span> </div> 
        ); 
    }

export { TaskLoading };

