// CSS
import "./TodoList.css";

// TodoList Field
import SortedTodoList from "./TodoListField/SortedTodoList";
import InnerBodyField from "./InnerBodyField/InnerBodyField";

// REA

const ToodList = () => {
  return (
    <div className="h-[84%] max-h-[84%] flex ">
      {/* FILTER BAR */}

      {/* TODOLIST SORTED */}
      <SortedTodoList />

      {/* INNER BODY FIELD */}
      <InnerBodyField />
    </div>
  );
};

export default ToodList;
