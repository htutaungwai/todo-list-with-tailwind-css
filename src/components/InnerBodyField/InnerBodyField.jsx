import React from "react";

// COMPONENTS
import EditTask from "./EditTask";
import AddTask from "./AddTask";

// REDUX HOOKS
import { useSelector } from "react-redux";

const InnerBodyField = () => {
  const showEditPage = useSelector((state) => state.reveal.editPage);
  const selectedTodo = useSelector((state) => state.todo.selectedTodo);

  console.log("selectedTodo: ", selectedTodo);
  return <>{showEditPage && selectedTodo !== null && <EditTask />}</>;
};

export default InnerBodyField;
