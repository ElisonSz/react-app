import React from "react";
import './TodoCounter.css';


function TodoCounter({total,completos}){
    return (
        <h2 className="TodoCounter">Has completado {completos} de {total} TODOs</h2>
    );
}

export {TodoCounter};