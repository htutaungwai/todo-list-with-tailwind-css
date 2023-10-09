import React from "react";

// COMPONENTS
import EditWeb from "./EditWeb";

// REDUX HOOKS
import { useSelector } from "react-redux";

const InnerBodyField = () => {
  const showEditPage = useSelector((state) => state.reveal.editPage);

  return <>{showEditPage && <EditWeb />}</>;
};

export default InnerBodyField;
