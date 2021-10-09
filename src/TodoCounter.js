import React from "react";
import './TodoCounter.css';


function TodoCounter(props){
    return (
        <h2 className="TodoCounter">Has completado {props.completos.length} de {props.incompletos.length} TODOs</h2>
    );
}

export {TodoCounter};