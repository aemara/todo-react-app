import React, { useState } from 'react'
import {FaTimes} from 'react-icons/fa';

const TodoItem = ({
  todoItem,
  deleteTodoItem,
  toggleCheck
}) => {
  const handleRemove = () => {
    deleteTodoItem(todoItem.id);
  };

  const handleToggleCheck = () => {
    toggleCheck(todoItem.id);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todoItem.isDone}
        onClick={handleToggleCheck}
      ></input>
      <p class="todo-text">{todoItem.text}</p>

      <FaTimes className="todo-remove-btn" onClick={handleRemove} />
    </div>
  );
};

export default TodoItem
