import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm.js";
import Todo from "./Todo";
import {v4 as uuid } from "uuid";

function TodoList(){
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        let newTodo = { ...todo, id: uuid()};
        setTodos(todos => [...todos, newTodo]);
    };

    const removeTodo = id => {
        setTodos(todos.filter(t => t.id !== id));
    };

    const renderBoxes = () => {
        return(
            <ul>
                {todos.map(todo => (
                    <Todo id={todo.id} task={todo.task} removeTodo={removeTodo} />
                ))}
            </ul>

        );
    };



    return (
        <div className="TodoList">
            <NewTodoForm addTodo={addTodo} />
            {renderBoxes()}
        </div>

    );
};

export default TodoList;
