// COMPONENTS
import SingleTodo from "../SingleTodo";

// REACT-REDUX
import { useSelector } from "react-redux";

// DATE GENERATOR
import { primeDateGenerator } from "../../utils/dateFunction";
import { isObjectEmpty } from "../../utils/objFunctions";
import NoTodos from "./NoTodos";
import TodoFilter from "./TodoFilter/TodoFilter";

const SortedTodoList = () => {
  // STATES
  const todos = useSelector((state) => state.todo.todos);
  const { mood } = useSelector((state) => state.theme);

  // since REDUX state cannot be mutable
  const mutableTodos = [...todos];

  // generating a sorted object
  const primeSortedObject = primeDateGenerator(mutableTodos);

  return (
    <div
      className={`w-full h-full max-w-xl  poppins flex flex-col overflow-y-scroll overflow-x-hidden  ${
        mood === "light" ? "bg-zinc-50" : "bg-black  text-white"
      }`}
    >
      {/* TODO FILTER */}

      {/* <TodoFilter /> */}

      {!isObjectEmpty(primeSortedObject) ? (
        <ul className="poppins capitalize px-10 py-5">
          {Object.entries(primeSortedObject).map(([key, value]) => {
            return (
              <div key={key}>
                <h2 className="text-xl font-extrabold  bg-zinc-200  text-center rounded-sm py-1">
                  {key}
                </h2>

                {Object.entries(value).map(([monthKey, monthValue]) => {
                  return (
                    <div key={monthKey}>
                      <h3 className="font-semibold text-red-500 py-2">
                        {monthKey}
                      </h3>
                      {monthValue.length !== 0 &&
                        monthValue.map((obj) => {
                          return (
                            <SingleTodo obj={obj} mood={mood} key={obj.id} />
                          );
                        })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </ul>
      ) : (
        <NoTodos />
      )}
    </div>
  );
};

export default SortedTodoList;
