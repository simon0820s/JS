import React from 'react';
import './TodoItem.css';

function TodoItem(props){

    const onDelete=()=>{
        alert("todo eliminado "+props.text);
    };
    return(
        <li className={`TodoItem ${props.completed && 'TodoItem--check'}`}>
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}onClick={props.onComplete}>√</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
        <span className='Icon Icon-delete' onClick={props.onDelete}>X</span>
        </li>
    );
}

export { TodoItem };