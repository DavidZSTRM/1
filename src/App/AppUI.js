import React from "react";
import { TaskContext } from "../TaskContext";
import {TaskCounter} from '../TaskCounter'
import {TaskSearch} from '../TaskSearch'
import {TaskList} from '../TaskList'
import {TaskItem} from '../TaskItem'
import { CreateTaskButton } from '../CreateTaskButton';
import { Modal } from "../Modal";
import { TaskForm } from "../TaskForm";
import { TaskError } from "../TaskError";
import { TaskLoading } from "../TaskLoading"; 
import { EmptyTask } from "../EmptyTask";


function AppUI(){
    const {
        error, 
        loading, 
        searchedTasks, 
        completeTask, 
        deleteTask,
        openModal,
        setOpenModal
    } = React.useContext(TaskContext)
    return(
    <React.Fragment>
      <TaskCounter />
      <TaskSearch />
        <TaskList>
            {loading && <TaskLoading />}
            {error && <TaskError error={error}/>}
            {(!loading && !searchedTasks.length) && <EmptyTask />}
    
            {searchedTasks.map( task =>(
              <TaskItem 
              key ={task.text} 
              text={task.text}
              completed={task.completed}
              onComplete={() => completeTask(task.text)}
              onDelete={() => deleteTask(task.text)}/>
            ))}
        </TaskList>
        {!!openModal&&(
            <Modal>
                <TaskForm>

                </TaskForm>
            </Modal>
        )}
      <CreateTaskButton 
        setOpenModal={setOpenModal}  
      />
    </React.Fragment>
    );
}

export {AppUI};