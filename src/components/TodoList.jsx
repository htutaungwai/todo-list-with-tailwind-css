// CSS
import "./TodoList.css";

// COMPONENTS
import StatsBar from "./StatsBar";
import SortedTodoList from "./TodoListField/SortedTodoList";
import InnerBodyField from "./InnerBodyField/InnerBodyField";

const ToodList = () => {
  return (
    <div className=" w-full h-[96%] min-h-[96%] ">
      {/* This is H1 heading */}
      <h1 className={`text-xl text-red-500 font-bold text-center pt-4 `}>
        TODO LIST
      </h1>

      {/* STATS BAR */}
      <StatsBar />

      {/* INNER BODY */}
      <div className="h-[84%] max-h-[84%] flex ">
        {/* FILTER BAR */}

        {/* TODOLIST SORTED */}
        <SortedTodoList />

        {/* INNER BODY FIELD */}
        <InnerBodyField />
      </div>
    </div>
  );
};

export default ToodList;
