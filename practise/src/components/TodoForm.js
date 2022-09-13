import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// when I import just uuid, it gives an error so I updated the version number


 function TodoForm({addTodo}) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });
    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        //the prevent default method is used for stopping the browser reload/refresh when submit button is clicked.
        if (todo.task.trim()) {
            addTodo({...todo, id: uuidv4() });
            //trim method gets rid of the white space
            //I npm i'd uuid and this package automatically generates an id
            //if statement only gets called, if the todos task is not empty
        setTodo ({...todo, task: ""});
            //resets the task input
        }

    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            name="task"
            type="text"
            value={todo.task}
            onChange={handleTaskInputChange}
        />
        <button type="submit">Submit</button> 
    </form>
  );
}
export default TodoForm;