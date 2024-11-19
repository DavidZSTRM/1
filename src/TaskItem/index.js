import React from "react";
import './TaskItem.css';


function TaskItem(props) {


  return (
    <li className={`task-item ${props.completed ? 'completed' : ''}`}>
      {/* Botón para verificar */}
      <span 
      onClick={props.onComplete}
      >
      O
      </span>

      {/* Texto de la tarea */}
      <p>{props.text}</p>

      {/* Botón para borrar */}
      <span 
      onClick={props.onDelete}>
      X
      </span>
    </li>
  );
}

export { TaskItem };
