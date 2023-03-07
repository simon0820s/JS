import React from "react";
import './TodoButton.css'

function TodoButton(){
    const onClickB=()=> {
        alert("deberia abrir el modal");
    };



    return (
        <button
        className="TodoButton"
        onClick={onClickB}

        >
            +
        </button>
    );
}

export {TodoButton}