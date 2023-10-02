import React from "react";
import { DateTimePicker } from "@mantine/dates";
import { useSelector } from "react-redux";

const EditWeb = () => {
  const { title, description, checked, date } = useSelector(
    (state) => state.todo.selectedTodo
  );

  return (
    <div className="w-full h-full bg-zinc-50  absolute top-0 md:block md:relative">
      <h1>title: {title}</h1>
      <br />
      <p>description: {description}</p>
      <br />
      <p>checked: {`${checked}`}</p>
      <br />
      <p>date: {date}</p>

      <DateTimePicker
        valueFormat="DD MMM YYYY hh:mm A"
        label="Pick date and time"
        placeholder="Pick date and time"
        onChange={(e) => {
          console.log(e);
        }}
      />
    </div>
  );
};

export default EditWeb;
