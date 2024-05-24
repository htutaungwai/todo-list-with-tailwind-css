import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { addTodo } from "../features/todosSlice/todosSlice";

const TodoForm = ({ setShowAddTodo }) => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const inputRef = useRef(HTMLElement || null);
  const [newTodo, setNewTodo] = useState({
    title: null,
    checked: false,
    status: true,
    description: "",
    id: Math.floor(Math.random() * 99999999),
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // FUNCTIONS
  function addNewTodo() {
    // const { title, status } = newTodo;
    // if (title === null || title === "" || status === null || status === "") {
    //   return;
    // }
    // dispatch(addTodo(newTodo));
    // setShowAddTodo(false);
  }

  // COMPONENTS
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
          ref={inputRef}
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
            setNewTodo({
              ...newTodo,
              status: e.target.value === "complete" ? true : false,
            });
          }}
        >
          <option value="complete">complete</option>
          <option value="incomplete">incomplete</option>
        </select>
        <br />
        <br />
        <label
          htmlFor="message"
          className="block mb-2 text-md font-medium  text-gray-900 dark:text-white"
        >
          Description:
        </label>
        <textarea
          id="message"
          rows="4"
          className="block ml-3 lg:mx-auto lg:w-11/12 mt-2 p-2.5 w-5/6 text-sm text-gray-900 shadow-md bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
          onChange={(e) => {
            setNewTodo({ ...newTodo, description: e.target.value });
          }}
        ></textarea>

        <button className=" bg-red-600 py-2 px-4 text-white rounded-full absolute bottom-10 left-1/2 -translate-x-1/2">
          submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
