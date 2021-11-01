import React, { useState } from 'react'
import {FaTimes} from 'react-icons/fa';

const TodoItem = ({
  todoItem,
  deleteTodoItem,
  toggleCheck,
  theme
}) => {

  const handleRemove = () => {
    deleteTodoItem(todoItem.id);
  };

  const handleToggleCheck = () => {
    toggleCheck(todoItem.id);
  };

  return (
    <div
      className="todo-item"
      style={
        theme === "dark"
          ? { background: "#25273D", borderBottom: "1px solid #393A4B" }
          : {}
      }
    >
      <span
        role="checkbox"
        aria-checked={todoItem.isDone}
        className={`todo-checkbox ${todoItem.isDone && "checkbox-checked"}`}
        onClick={handleToggleCheck}
        style={theme === "dark" ? { border: "1px solid #393A4B" } : {}}
      ></span>
      <p
        className={`todo-text  ${todoItem.isDone && "item-checked"}`}
        style={theme === "dark" ? { color: "#C8CBE7" } : {}}
      >
        {todoItem.text}
      </p>

      <svg
        class="todo-remove-btn"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        onClick={handleRemove}
      >
        <path
          fill="#494C6B"
          fill-rule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>

    </div>
  );
};

export default TodoItem
