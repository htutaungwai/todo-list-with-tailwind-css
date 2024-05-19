import React from "react";

// ICONS
import { BsFillPlusSquareFill } from "react-icons/bs";

// REACT-REDUX
import { useDispatch } from "react-redux";

// REDUX actions
import { addTodo } from "../features/todosSlice/todosSlice";

// RTK query

const AddTaskBtn = () => {
  const dispatch = useDispatch();
  return (
    <div className=" flex justify-center items-center flex-col    max-w-xl h-full ">
      <button
        className="rounded-full bg-red-500 w-32 text-white font-bold py-2 uppercase shadow-xl transition ease-in-out  hover:bg-red-600 text-sm block"
        onClick={() => {
          dispatch(
            addTodo({
              title: "First todo",
              description: "First todo",
              content: "<p>".repeat(15) + "</p>",
              checked: false,
            })
          );
        }}
      >
        <p className="flex gap-2 justify-center">
          Add Task
          <BsFillPlusSquareFill className="mt-1" />
        </p>
      </button>
    </div>
  );
};

export default AddTaskBtn;
