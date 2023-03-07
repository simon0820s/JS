import React from "react";
import './TodoCounter.css';

function TodoCounter({total,completed}){
    return (
        <h2 className="TodoCounter">you did completed {completed} of {total} Todos</h2>
    );  
}

export {TodoCounter};