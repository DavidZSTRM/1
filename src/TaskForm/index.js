import React from "react";
import { TaskContext } from "../TaskContext";
import './TaskForm.css'

function TaskForm(){
    const [newTaskValue, setNewTaskValue] = React.useState('');
    const {
        addTask,
        setOpenModal,
    } = React.useContext(TaskContext);

    const onChange = (event) => {
        setNewTaskValue(event.target.value);

    };
    
    const onCancel = () => {
        setOpenModal(false)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTask(newTaskValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Ingresa tu nueva Tarea</label>
            <textarea
                value={newTaskValue}
                onChange={onChange}
                placeholder="Ingresa tu Tarea"            
            />
            <div className="TaskForm-buttonContainer">
                <button
                    type="button"
                    className="TaskForm-button TaskForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TaskForm-button TaskForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TaskForm};