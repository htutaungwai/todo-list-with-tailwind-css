import React, { useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState({ title: null, status: null });

  const addNewTodo = () => {
    const { title, status } = newTodo;
    if (title === null || title === "" || status === null || status === "")
      return;
    console.log("made it here");
    setTodos([...todos, newTodo]);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addNewTodo();
      }}
    >
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={(e) => {
          setNewTodo({ ...newTodo, title: e.target.value });
        }}
      />

      <label htmlFor="status">Status:</label>
      <select
        name="status"
        id="status"
        form="statusform"
        onChange={(e) => {
          setNewTodo({ ...newTodo, status: e.target.value });
        }}
      >
        <option value="complete">complete</option>
        <option value="incomplete">incomplete</option>
      </select>
      <button>+</button>
    </form>
  );
};

export default TodoForm;
