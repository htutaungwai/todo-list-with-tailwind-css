import React from "react";

import TodoForm from "./TodoForm";
import { motion } from "framer-motion";
import { GrFormClose } from "react-icons/gr";

const addTodo = ({ showAddTodo, setShowAddTodo, todos, setTodos }) => {
  return (
    <motion.div
      initial={{ opacity: 0, opacity: 0.1 }}
      animate={{ opacity: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute   w-screen h-screen duration-300 ease-in-out delay-200 transition-all backdrop-brightness-50 flex justify-center items-center"
    >
      <div
        className=" w-full h-full absolute"
        id="outside"
        onClick={(e) => {
          if (e.target.id === "outside") setShowAddTodo(false);
        }}
      ></div>
      <div
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

        <TodoForm todos={todos} setTodos={setTodos} />
      </div>
    </motion.div>
  );
};

export default addTodo;
