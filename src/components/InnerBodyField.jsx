import React from "react";

// COMPONENTS
import EditWeb from "../pages/EditWeb";

// REDUX HOOKS
import { useSelector } from "react-redux";
console.log(new Date());

const InnerBodyField = () => {
  const showEditPage = useSelector((state) => state.reveal.editPage);

  return <>{showEditPage && <EditWeb />}</>;
};

export default InnerBodyField;
