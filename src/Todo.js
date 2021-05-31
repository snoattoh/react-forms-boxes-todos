import React from "react";
import "./Todo.css";

function Todo({id, task, removeTodo}){

    return (
        <div className="Todo" key={id} >
            <p>{task}</p>
            <button onClick={() => removeTodo(id)}>X</button>
        </div>
    );
};

export default Todo;