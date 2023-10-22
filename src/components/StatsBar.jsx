import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../features/themeSlice/themeSlice";

const StatsBar = () => {
  // STATES
  const todos = useSelector((state) => state.todo.todos);
  const { mood } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div
      className={`border-black shadow-md mb-1 pt-1 pb-3 pl-4  z-0 flex  text-xs md:text-md md:gap-4
       }`}
    >
      {/* STATISTICS BAR START*/}

      <div className="  gap-2 hidden md:flex md:gap-4 ">
        <div className="flex items-center gap-2">
          <h1 className="font-bold capitalize">Total</h1>
          <h1 className="text-white bg-slate-500 rounded px-2 py-1">
            {todos.length}
          </h1>
        </div>

        {/* OVERDUE */}
        <div className="flex items-center gap-2">
          <h1 className="font-bold uppercase">Overdue</h1>
          <h1 className="text-white bg-red-600 rounded px-2 py-1">45</h1>
        </div>

        {/* ONGOING */}
        <div className="flex items-center gap-2">
          <h1 className="font-bold uppercase">Ongoing</h1>
          <h1 className="text-white bg-indigo-600 rounded px-2 py-1">17</h1>
        </div>

        {/* COMPLETED */}
        <div className="flex items-center gap-2">
          <h1 className="font-bold uppercase">completed</h1>
          <h1 className="text-white bg-emerald-400 rounded px-2 py-1 ">
            {todos.length}
          </h1>
        </div>
      </div>

      {/* STATISTICS BAR END*/}
      <div
        className={`ml-auto mr-5 rounded-md border-slate-600 shadow-xl border-2 ${
          mood === "dark" ? "bg-slate-800" : "bg-stone-200 "
        }`}
      >
        <button
          onClick={() => {
            dispatch(changeTheme());
          }}
          className="text-md p-2"
        >
          {mood === "light" ? (
            <BsSunFill className="text-yellow-500" />
          ) : (
            <BsMoonFill className=" text-slate-300" />
          )}
        </button>
      </div>
    </div>
  );
};

export default StatsBar;
