import React from "react";

// COMPONENTS
import EditTask from "./EditTask";
import AddTask from "./AddTask";

// REDUX HOOKS
import { useSelector } from "react-redux";

const InnerBodyField = () => {
  const showEditPage = useSelector((state) => state.reveal.editPage);

  return <>{showEditPage && <EditTask />}</>;
};

export default InnerBodyField;
