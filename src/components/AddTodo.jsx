import React, { useEffect, useRef } from "react";

import TodoForm from "./TodoForm";

import { GrFormClose } from "react-icons/gr";

const addTodo = ({ showAddTodo, setShowAddTodo, todos, setTodos }) => {
  function useOutsideDivCloser(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowAddTodo(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(HTMLElement || null);
  useOutsideDivCloser(wrapperRef);
  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute  w-screen h-screen duration-300 ease-in-out delay-200 transition-all backdrop-brightness-50 flex justify-center items-center"
    >
      <div className=" w-full h-full absolute"></div>
      <div
        ref={wrapperRef}
        id="inside"
        className="bg-zinc-50 w-5/6 h-2/3 lg:w-1/3 relative pt-10 "
      >
        <button
          className="text-red-500 text-3xl font-bold absolute right-1 top-1 "
          onClick={() => {
            setShowAddTodo(false);
          }}
        >
          <GrFormClose />
        </button>

        {/* TODO FORM */}

        <TodoForm
          todos={todos}
          setTodos={setTodos}
          setShowAddTodo={setShowAddTodo}
        />
      </div>
    </div>
  );
};

export default addTodo;
