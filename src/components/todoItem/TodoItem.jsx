import React from "react";
import './todoItem.css'

function TodoItem(props) {
    const { todo, index, completeToDo, removeTodo } = props;
    return (
    <div className={`todo ${todo.isComplete ? "complete" : ""}`}>
        {todo.text}
        <div>
        <button onClick={() => completeToDo(index)}>Mark Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
        </div>
    </div>
    );
}

export default TodoItem;