// COMPONENTS
import SingleTodo from "../SingleTodo";

// REACT-REDUX
import { useSelector } from "react-redux";

// DATE GENERATOR
import { primeDateGenerator } from "../../utils/dateFunction";

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
      <ul className="poppins capitalize px-10 py-5">
        {primeSortedObject.length !== 0 &&
          Object.entries(primeSortedObject).map(([key, value]) => {
            return (
              <div key={key}>
                <h2>{key}</h2>

                {Object.entries(value).map(([monthKey, monthValue]) => {
                  return (
                    <div key={monthKey}>
                      <h1>{monthKey}</h1>
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
    </div>
  );
};

export default SortedTodoList;
