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
    <div>
      <h1 className="text-xl text-center font-bold poppins mb-4">Add TODO</h1>
      <form
        className="pl-4 "
        onSubmit={(e) => {
          e.preventDefault();
          addNewTodo();
        }}
      >
        <label htmlFor="title" className="font-semibold pr-4 ">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="p-2 lg:w-4/5 shadow-md"
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
          className="p-2 lg:w-3/5 shadow-md"
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
        <br />
        <br />
        <label
          for="message"
          class="block mb-2 text-md font-medium  text-gray-900 dark:text-white"
        >
          Description:
        </label>
        <textarea
          id="message"
          rows="4"
          class="block ml-3 lg:mx-auto lg:w-11/12 mt-2 p-2.5 w-5/6 text-sm text-gray-900 shadow-md bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>

        <button className=" bg-red-600 py-2 px-4 text-white rounded-full absolute bottom-10 left-1/2 -translate-x-1/2">
          submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
