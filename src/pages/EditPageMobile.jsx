import React from "react";
import { DateTimePicker } from "@mantine/dates";

// REDUX HOOKS
import { useSelector, useDispatch } from "react-redux";

const EditPage = () => {
  const selectedTodo = useSelector((state) => state.todo.selectedTodo);

  return (
    <div className="md:hidden">
      {/* WEB */}
      <div>
        <DateTimePicker
          valueFormat="DD MMM YYYY hh:mm A"
          label="Pick date and time"
          placeholder="Pick date and time"
        />
      </div>

      {/* @@@ MOBILE START */}
      <div className="w-screen h-screen md:hidden  absolute bg-zinc-100 ">
        ;
      </div>

      {/*  @@@ MOBILE ENDS*/}
    </div>
  );
};

export default EditPage;
