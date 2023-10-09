import React, { useEffect, useState } from "react";
import { DateTimePicker } from "@mantine/dates";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTodo,
  updateTodo,
  updateSelectedTodo,
} from "../../features/todosSlice/todosSlice";

import { revealEditPage } from "../../features/showPagesSlice/revealSlice";

const EditWeb = () => {
  const dispatch = useDispatch();
  const { title, description, checked, date, id } = useSelector(
    (state) => state.todo.selectedTodo
  );

  const onChangeHandler = (value, name) => {
    const typicalObject = {
      id: id,
      name,
      value,
    };
    dispatch(updateTodo(typicalObject));
    dispatch(updateSelectedTodo(typicalObject));
  };

  return (
    <div className="w-full h-full bg-zinc-50  absolute top-0 md:block md:relative">
      <input
        type="text"
        value={title}
        onChange={(e) => {
          onChangeHandler(e.target.value, "TITLE");
        }}
      />

      <textarea
        type="text"
        value={description}
        onChange={(e) => {
          onChangeHandler(e.target.value, "DESCRIPTION");
        }}
      />

      <DateTimePicker
        value={new Date(date)}
        valueFormat="DD MMM YYYY hh:mm A"
        label="Pick date and time"
        placeholder="Pick date and time"
        onChange={(e) => {
          onChangeHandler(e.toISOString(), "DATE");
        }}
      />

      <button
        onClick={() => {
          dispatch(revealEditPage(false));
        }}
      >
        X
      </button>
    </div>
  );
};

export default EditWeb;
