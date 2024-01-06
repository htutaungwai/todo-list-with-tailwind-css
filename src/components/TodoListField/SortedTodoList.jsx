// REACT STATES
import { useState, useEffect } from "react";

// COMPONENTS
import SingleTodo from "../SingleTodo";

// REACT-REDUX
import { useSelector } from "react-redux";
import NoTodos from "./NoTodos";
import SearchBar from "./TodoFilter/SearchBar";

// FUNCTIONS
import { primeObjectGenearator } from "../../utils/dateFunction";
import { isObjectEmpty } from "../../utils/objFunctions";

// BOOTSTRAP ICONS
import { BsCalendar3, BsClockHistory } from "react-icons/bs";
import { MdOutlineAbc } from "react-icons/md";

const SortedTodoList = () => {
  // STATES
  const todos = useSelector((state) => state.todo.todos);
  const { mood } = useSelector((state) => state.theme);

  // since REDUX state cannot be mutable
  const mutableTodos = [...todos];

  // SEARCH STATE and SORT STATE
  const [searchValue, setSearchValue] = useState("");
  const [searchState, setSearchState] = useState(false);
  const [sortBy, setSortBy] = useState("CREATED");

  // generating a sorted object
  const primeSortedObject = primeObjectGenearator(mutableTodos, sortBy);

  // to check if there any keyword in the serachbar
  useEffect(() => {
    if (searchValue === "") {
      setSearchState(false);
      return;
    }

    setSearchState(true);
  }, [searchValue]);

  // function for sortBy icons
  function sortbyIcons(sortByState) {
    switch (sortByState) {
      case "UPDATED":
        return <BsClockHistory className="absolute right-6" />;
      case "TITLE":
        return <MdOutlineAbc className="absolute right-6 text-4xl" />;

      default:
        return <BsCalendar3 className="absolute right-6" />;
    }
  }

  return (
    <div
      className={`w-full h-full max-w-xl  poppins flex flex-col overflow-y-scroll overflow-x-hidden relative   ${
        mood === "light" ? "text-black" : "  text-white"
      }`}
    >
      {/* SEARCH AND SORT BY SECTION */}

      {/* Displaying TODOs*/}
      {!isObjectEmpty(primeSortedObject) ? (
        <>
          <SearchBar
            setSearchValue={setSearchValue}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <ul
            className={`${
              mood === "light" ? "bg-zinc-50" : "bg-slate-800"
            } poppins capitalize px-10 py-5`}
          >
            {Object.entries(primeSortedObject).map(([key, value]) => {
              return (
                <div key={key}>
                  {!searchState && (
                    <div
                      className={`${
                        mood === "light" ? "bg-zinc-200" : "bg-slate-900"
                      } flex w-full min-w-full flex-row  justify-center items-center relative`}
                    >
                      <h2 className="text-xl font-extrabold text-center rounded-sm py-1">
                        {key}
                      </h2>
                      {sortbyIcons(sortBy)}
                    </div>
                  )}

                  {Object.entries(value).map(([monthKey, monthValue]) => {
                    return (
                      <div key={monthKey}>
                        {!searchState && (
                          <h3 className="font-semibold text-red-500 py-2">
                            {monthKey}
                          </h3>
                        )}

                        <div>
                          {monthValue.length !== 0 &&
                            monthValue
                              .filter((item) =>
                                !searchState
                                  ? item
                                  : item.title
                                      .toLocaleLowerCase()
                                      .includes(searchValue)
                                  ? item
                                  : item.description
                                      .toLocaleLowerCase()
                                      .includes(searchValue)
                              )
                              .map((obj) => {
                                return (
                                  <SingleTodo
                                    obj={obj}
                                    key={obj.id}
                                    sortBy={sortBy}
                                  />
                                );
                              })}
                        </div>
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
