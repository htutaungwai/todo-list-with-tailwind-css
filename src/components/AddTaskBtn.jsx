import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todosSlice/todosSlice";
const AddTaskBtn = () => {
  const dispatch = useDispatch();
  return (
    <div className=" flex justify-center items-center flex-col    max-w-xl h-full ">
      <button
        className="rounded-full bg-red-500 w-32 text-white font-bold py-2 uppercase shadow-xl transition ease-in-out  hover:bg-red-600 text-sm block"
        onClick={() => {
          dispatch(
            addTodo({
              title: "first todo",
              description: "first todo",
              content: "<h2>first todo</h2>",
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
