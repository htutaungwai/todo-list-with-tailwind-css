// HOOKS
import { useRef, useEffect } from "react";

// LIBIARIES
import moment from "moment";

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

// ICONS
import { FaCheckDouble } from "react-icons/fa";

const SingleTodo = ({ obj, sortBy }) => {
  const selectedTodo = useSelector((state) => state.todo.selectedTodo);
  const editPageState = useSelector((state) => state.reveal.editPage);
  const { mood } = useSelector((state) => state.theme);

  // use dispatch
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

    // if user clicks for the same todo for twice
    if (selectedTodo?.id === obj.id) {
      dispatch(revealEditPage(!editPageState));
      return;
    }

    // if user clicks for a different todo
    dispatch(selectTodo(obj.id));
    dispatch(revealEditPage(false));

    setTimeout(() => {
      dispatch(revealEditPage(true));
    }, 300);
  };

  return (
    <li
      className={`${
        mood === "light"
          ? "hover:bg-zinc-200 "
          : "hover:bg-slate-700 border-b-slate-600"
      } mb-2 border-b-2  ease-in transition-all rounded-md`}
      onClick={(e) => {
        onClickHandler(e.target);
      }}
    >
      <div className="relative">
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
        <label
          className={` text-md ${
            obj.checked ? "line-through" : ""
          } font-medium`}
        >
          {obj.title.length > 38
            ? obj.title.substring(0, 38) + `...`
            : obj.title}
        </label>

        <br />

        {/* CATEGORY */}
        <div className="flex pl-4 p-1 gap-1">
          <div className="border-2 border-dotted  flex rounded-full border-red-700 p-[0.3%]">
            <span className=" bg-red-400 text-xs px-2 py-1 text-white rounded-full ">
              work
            </span>
          </div>

          <div className="border-2 border-dotted  flex rounded-full border-blue-700 p-[0.3%] ">
            <span className="text-xs bg-blue-400 px-2 py-1 text-white rounded-full ">
              school
            </span>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p
          className={`${
            mood === "light" ? "text-gray-500" : "text-gray-300"
          } text-xs  my-2 pl-6`}
        >
          {obj.description.length > 150
            ? obj.description.substring(0, 150) + `...`
            : obj.description}
        </p>

        {obj.id === selectedTodo?.id && (
          <span className="absolute right-5 text-xs text-black  top-1 mr-20">
            <FaCheckDouble color="red" />
          </span>
        )}

        {sortBy !== "UPDATED" && (
          <span
            className={`${
              mood === "light" ? "text-black" : "text-gray-300"
            }  absolute right-5 text-xs   top-1`}
          >
            {moment(obj.dateCreated).format("MMM Do YY")}
          </span>
        )}

        {sortBy === "UPDATED" && (
          <span className="absolute right-5 top-1 text-xs text-black">
            {moment(obj.dateUpdated).startOf("minute").fromNow()}
          </span>
        )}
      </div>
    </li>
  );
};

export default SingleTodo;
