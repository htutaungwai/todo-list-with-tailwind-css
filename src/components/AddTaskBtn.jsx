import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
const AddTaskBtn = ({ setShowAddTodo, showAddTodo }) => {
  return (
    <div className=" flex justify-center items-center flex-col  h-1/6 max-w-xl ">
      <button
        className="rounded-full bg-red-500 w-32 text-white font-bold py-2 uppercase shadow-xl transition ease-in-out  hover:bg-red-600  text-sm block"
        onClick={() => {
          setShowAddTodo(!showAddTodo);
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
