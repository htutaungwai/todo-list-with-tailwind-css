// REACT STATES
import { useState, useEffect } from "react";

// COMPONENTS
import SingleTodo from "../SingleTodo";

// REACT-REDUX
import { useSelector } from "react-redux";

// FUNCTIONS
import { primeDateGenerator } from "../../utils/dateFunction";
import { isObjectEmpty } from "../../utils/objFunctions";

// COMPONENTS
import NoTodos from "./NoTodos";
import TodoFilter from "./TodoFilter/TodoFilter";

// ICONS
import { BsCalendar3 } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";

const SortedTodoList = () => {
  // STATES
  const todos = useSelector((state) => state.todo.todos);
  const { mood } = useSelector((state) => state.theme);

  // since REDUX state cannot be mutable
  const mutableTodos = [...todos];

  // SEARCH STATE
  const [searchValue, setSearchValue] = useState("");

  // generating a sorted object
  const primeSortedObject = primeDateGenerator(mutableTodos);

  // SEARCH HANDLER
  const searchHandler = (value) => {
    setSearchValue(value);
  };

  return (
    <div
      className={`w-full h-full max-w-xl  poppins flex flex-col overflow-y-scroll overflow-x-hidden  ${
        mood === "light" ? "bg-zinc-50" : "bg-black  text-white"
      }`}
    >
      {/* SEARCH AND SORT BY SECTION */}
      <div>
        <div className="">
          <input
            type="text"
            placeholder="search todo"
            onChange={(e) => {
              searchHandler(e.target.value.toString().toLowerCase());
            }}
          />

          <button className="bg-red-500">
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>

      {/* Displaying TODOs*/}
      {!isObjectEmpty(primeSortedObject) ? (
        <>
          <ul className="poppins capitalize px-10 py-5">
            {Object.entries(primeSortedObject).map(([key, value]) => {
              return (
                <div key={key}>
                  <div className="flex w-full min-w-full flex-row bg-zinc-200 justify-center items-center relative">
                    <h2 className="text-xl font-extrabold    text-center rounded-sm py-1">
                      {key}
                    </h2>
                    <BsCalendar3 className="absolute right-6" />
                  </div>

                  {Object.entries(value).map(([monthKey, monthValue]) => {
                    return (
                      <div key={monthKey}>
                        <h3 className="font-semibold text-red-500 py-2">
                          {monthKey}
                        </h3>
                        {monthValue.length !== 0 &&
                          monthValue
                            .filter((item) =>
                              searchValue.toLocaleLowerCase() === ""
                                ? item
                                : item.title
                                    .toLocaleLowerCase()
                                    .includes(searchValue)
                            )
                            .map((obj) => {
                              return <SingleTodo obj={obj} key={obj.id} />;
                            })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </ul>
        </>
      ) : (
        <NoTodos />
      )}
    </div>
  );
};

export default SortedTodoList;
