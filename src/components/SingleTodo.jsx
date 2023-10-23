// HOOKS
import { useRef, useEffect } from "react";

// COMPONENTS
import {
  removeSingleTodo,
  selectTodo,
  updateCheckTodo,
} from "../features/todosSlice/todosSlice";

// REDUX HOOKS
import { useDispatch, useSelector } from "react-redux";

// REDUCERS
import { revealEditPage } from "../features/showPagesSlice/revealSlice";

const SingleTodo = ({ obj }) => {
  const selectedTodo = useSelector((state) => state.todo.selectedTodo);

  const dispatch = useDispatch();
  const inputRef = useRef(HTMLInputElement || null);

  const onClickHandler = (event) => {
    // IF USE CLICKS ON INPUT TAG
    if (event && inputRef.current === event) {
      setTimeout(() => {
        if (selectedTodo?.id === obj.id) {
          dispatch(revealEditPage(false));
        }
        dispatch(removeSingleTodo(obj.id));
      }, 2000);
      return;
    }

    // IF USER CLICKS ON DIV
    dispatch(selectTodo(obj.id));
    dispatch(revealEditPage(false));

    dispatch(revealEditPage(true));
  };

  return (
    <li
      className={`mb-2 border-b-2 hover:bg-zinc-200 ease-in transition-all rounded-md`}
      onClick={(e) => {
        onClickHandler(e.target);
      }}
    >
      <div>
        <input
          ref={inputRef}
          className="accent-red-500 mr-2"
          type="checkbox"
          id={obj.id}
          name={obj.id}
          checked={obj.checked}
          onChange={() => {
            dispatch(updateCheckTodo(obj.id));
          }}
        />

        {/* TITLE */}

        <label className={`${obj.checked ? "line-through" : ""} font-medium`}>
          {obj.title}
        </label>

        <p className="text-xs text-gray-500 my-2 pl-6">
          {obj.description.length > 150
            ? obj.description.substring(0, 150) + `...`
            : obj.description}
        </p>
      </div>
    </li>
  );
};

export default SingleTodo;
