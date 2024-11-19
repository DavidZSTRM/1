import React from "react";
import './TaskSearch.css';
import { TaskContext } from "../TaskContext";

function TaskSearch(){
    const {searchValue, setSearchValue} = React.useContext(TaskContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return(
        <input 
            className='task-search' 
            placeholder='Search tasks..' 
            value={searchValue}
            onChange={onSearchValueChange}/>
    );
}

export {TaskSearch};