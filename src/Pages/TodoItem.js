import React from 'react';

function TodoItem({ todo, deleteTodo }) {
  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
