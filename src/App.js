import React, { useState } from "react";
import TodoItem from "./components/todoItem/TodoItem";
import TodoForm from "./components/todoForm/TodoForm";
import './App.css';

function App() {
  // Our list of todo items and a function to update them
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isComplete: false,
    },
    { 
      text: "Meet friend for lunch",
      isComplete: false,
    },
    {
      text: "Meet friend for lunch",
      isComplete: false,
    },
    {
      text: "Meet friend for lunch",
      isComplete: false,
    },
    {
      text: "Build really cool todo app",
      isComplete: false,
    },
    {
      text: "One more thing...",
      isComplete: false,
    },
    ]);

    // This will call our setTodo function to update our list of todos
  function addTodo(text) {
    // event.preventDefault()
    // console.log("Found target")
    // let myTodos = todos;
    // myTodos.push()
    // setTodos(myTodos)
    // setTodos((prevTodos) => [...prevTodos, todo])

    setTodos([...todos, { text }])
    // WE use spread syntax here to add our new todo to our list of old todos
  }


  const completeToDo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  // Our regular HTML with ReactComponents
  // We know which element is React because it starts with a capital
  return (
    <div className="app">
      <h1>My todo list</h1>
      {todos.map((todo, index) => 
        <TodoItem 
        todo={todo} 
        key={index} 
        index={index} 
        completeToDo={completeToDo} 
        removeTodo={removeTodo}/>
      )}
      <TodoForm addTodo={addTodo} />
    </div>
    
  )
}

export default App;
