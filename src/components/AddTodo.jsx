import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const addTodo = ({ showAddTodo, setShowAddTodo, todos, setTodos }) => {
  return (
    <div>
      <button
        onClick={() => {
          setShowAddTodo(false);
        }}
      >
        close
      </button>

      {/* TODO FORM */}
      <div>
        <h1>Add TODO</h1>
        <TodoForm todos={todos} setTodos={setTodos} />
      </div>

      {/* TODO LIST */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default addTodo;
