import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { changeTheme } from "../features/themeSlice/themeSlice";

const StatsBar = ({ todos, mood }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`border-black shadow-md mb-1 pt-1 pb-3 pl-4 flex z-0 gap-2 text-xs md:text-md md:gap-4
      }`}
    >
      {/* TOTAL */}
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

      {/* COMPLETED */}
      <div className="flex items-center gap-2">
        <h1 className="font-bold uppercase">completed</h1>
        <h1 className="text-white bg-emerald-400 rounded px-2 py-1 ">
          {todos.length}
        </h1>
      </div>

      <div
        className={`ml-auto mr-5 rounded-md border-slate-600 shadow-xl border-2 ${
          mood === "light" ? "bg-slate-800" : "bg-stone-100 "
        }`}
      >
        <button
          onClick={() => {
            dispatch(changeTheme());
          }}
          className="text-md p-2"
        >
          {mood === "dark" ? (
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
