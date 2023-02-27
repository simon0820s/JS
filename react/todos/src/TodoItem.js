import React from "react";
import './TodoItem.css'

function TodoItem(props){
    return (
        <li>
            <span>C</span>
            <p className="text">{props.text}</p>
            <span>X</span>
        </li>
    );
}

export {TodoItem};