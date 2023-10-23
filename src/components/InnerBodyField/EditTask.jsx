import React, { useEffect, useState } from "react";
import { DateTimePicker } from "@mantine/dates";
import { useSelector, useDispatch } from "react-redux";
import {
  updateTodo,
  updateSelectedTodo,
} from "../../features/todosSlice/todosSlice";

import { revealEditPage } from "../../features/showPagesSlice/revealSlice";
import Tiptap from "../Tiptap/Tiptap";
import MenuBar from "../Tiptap/MenuBar";

const EditWeb = () => {
  const dispatch = useDispatch();
  const { title, description, checked, date, id, content } = useSelector(
    (state) => state.todo.selectedTodo
  );

  const onChangeHandler = (value, name) => {
    const typicalObject = {
      id: id,
      name,
      value,
    };
    //
    dispatch(updateTodo(typicalObject));
  };

  console.log(content);
  return (
    <div className="w-full h-full max-h-full overflow-x-hidden overflow-y-scroll bg-zinc-50 absolute top-0 md:block md:relative p-4 z-20">
      <input
        type="text"
        value={title}
        onChange={(e) => {
          onChangeHandler(e.target.value, "TITLE");
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

      <br />
      <br />
      <br />
      <br />

      <MenuBar />
    </div>
  );
};

export default EditWeb;
