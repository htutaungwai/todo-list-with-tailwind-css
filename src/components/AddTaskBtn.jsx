import React from "react";

// ICONS
import { BsFillPlusSquareFill } from "react-icons/bs";

// REACT-REDUX
import { useDispatch } from "react-redux";

// REDUX actions
// import { addTodo } from "../features/todosSlice/todosSlice";
import { revealEditPage } from "../features/showPagesSlice/revealSlice";

// RTK query
import useCreateNewPostWithEffects from "../hooks/useCreateNewPostWithEffects";

const AddTaskBtn = () => {
  // dispatch
  const dispatch = useDispatch();

  const { createNewPost, isCreateNewPostSuccess, isCreateNewPostError } =
    useCreateNewPostWithEffects();

  const handleCreateNewPost = async () => {
    try {
      dispatch(revealEditPage(false));

      await createNewPost({
        title: "new todo",
        description: "new todo",
        checked: false,
        date: null,
      });
      console.log(isCreateNewPostSuccess);
    } catch (error) {
      console.log(error);
      console.log(createNewPostError);
    }
  };

  return (
    <div className=" flex justify-center items-center flex-col    max-w-xl h-full ">
      <button
        className="rounded-full bg-red-500 w-32 text-white font-bold py-2 uppercase shadow-xl transition ease-in-out  hover:bg-red-600 text-sm block"
        onClick={handleCreateNewPost}
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
