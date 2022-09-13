import React from 'react';

function Todo({ todo, toggleComplete, removeTodo }) {
    function handleCheckboxClick(){
        toggleComplete(todo.id)
    }
    function handleRemoveClick () {
        removeTodo(todo.id);
    }
    return (
        <div style= {{ display: "flex" }}>
        {/* flex makes the list items display horizontally */}
        <input type="checkbox" onClick={handleCheckboxClick}/>
        <ul
        style={{
            color:"white",
            textDecoration: todo.completed ? "line-through" : null        }}
            >
            {/* ternary operator ? is same as if-else statement */}
            {todo.task}
            </ul>
        <button onClick={handleRemoveClick}> REMOVE </button>
        </div>
    );
}

export default Todo;