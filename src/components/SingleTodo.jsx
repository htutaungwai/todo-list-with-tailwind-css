// HOOKS
import { useRef, useEffect } from "react";

// COMPONENTS
import {
  checkTodo,
  removeSingleTodo,
  selectTodo,
} from "../features/todosSlice/todosSlice";

// REDUX HOOKS
import { useDispatch } from "react-redux";

// REDUCERS
import { revealEditPage } from "../features/showPagesSlice/revealSlice";

const SingleTodo = ({ obj, mood }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(HTMLInputElement || null);

  const onClickHandler = (event) => {
    // IF USE CLICKS ON INPUT TAG
    if (event && inputRef.current === event) {
      setTimeout(() => {
        dispatch(removeSingleTodo(obj.id));
      }, 2000);
      return;
    }

    // IF USER CLICKS ON DIV
    dispatch(selectTodo(obj.id));
    dispatch(revealEditPage());
  };

  return (
    <li
      className={`mb-2 border-b-2`}
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
            dispatch(checkTodo(obj.id));
          }}
        />

        <label className={`${obj.checked ? "underline" : ""} font-medium`}>
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
