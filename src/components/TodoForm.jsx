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
      className="pl-4 "
      onSubmit={(e) => {
        e.preventDefault();
        addNewTodo();
      }}
    >
      <label htmlFor="title" className="font-semibold pr-4">
        Title:
      </label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={(e) => {
          setNewTodo({ ...newTodo, title: e.target.value });
        }}
      />
      <br />
      <br />
      <label htmlFor="status" className="font-semibold pr-4">
        Status:
      </label>
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
      <button className=" bg-red-600 py-2 px-4 text-white rounded-full">
        submit
      </button>
    </form>
  );
};

export default TodoForm;
