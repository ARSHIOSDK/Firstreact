import React, { useState } from 'react';
import TodoList from './Pages/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text) return;
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };
  console.log(...todos)

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <input
        type="text"
        placeholder="Add a new todo"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
}

export default App;
