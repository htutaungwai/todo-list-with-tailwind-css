import { useSelector, useDispatch } from "react-redux";
import "./TodoList.css";

import StatsBar from "./StatsBar";
import SingleTodo from "./SingleTodo";

const ToodList = ({ setTodos }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const { mood } = useSelector((state) => state.theme);

  return (
    <div className="h-5/6 w-full ">
      {/* This is H1 heading */}
      <h1 className={`text-3xl text-red-500 font-bold text-center pt-5 `}>
        TODO LIST
      </h1>

      {/* STATS BAR */}
      <StatsBar mood={mood} todos={todos} />

      <div
        className={`w-full h-full max-w-xl max-h-[84%]  poppins flex flex-col overflow-scroll overflow-x-hidden  ${
          mood === "light" ? "bg-zinc-50" : "bg-black  text-white"
        }`}
      >
        <ul className="poppins capitalize px-10 py-5">
          {todos.length > 0 &&
            todos.map((obj) => {
              return <SingleTodo obj={obj} mood={mood} key={obj.id} />;
            })}
        </ul>
      </div>
    </div>
  );
};

export default ToodList;
