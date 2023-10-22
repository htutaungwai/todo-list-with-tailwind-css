// ICONS
import { AiOutlinePlusCircle } from "react-icons/ai";

// COMPONENTS
import TodoFilter from "./TodoFilter";

// REACT- REDUX
import { useDispatch } from "react-redux";

// REDUCERS
import { addTodo } from "../../../features/todosSlice/todosSlice";
import { revealEditPage } from "../../../features/showPagesSlice/revealSlice";

const SearchBar = ({ setSearchValue }) => {
  const dispatch = useDispatch();
  return (
    <div className="sticky top-0 bg-zinc-50 z-10 shadow-md">
      <div className="">
        <input
          type="text"
          placeholder="search todo"
          onChange={(e) => {
            setSearchValue(e.target.value.toString().toLowerCase());
          }}
        />

        <button
          className="bg-red-500"
          onClick={() => {
            dispatch(
              addTodo({
                title: "new todo",
                description: "new todo",
                checked: false,
                date: null,
              })
            );

            dispatch(revealEditPage(true));
          }}
        >
          <AiOutlinePlusCircle />
        </button>
      </div>

      <TodoFilter />
    </div>
  );
};

export default SearchBar;
