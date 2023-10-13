// ICONS
import { AiOutlinePlusCircle } from "react-icons/ai";

// SLICES

// REACT-REDUX
import { useSelector } from "react-redux";

const SearchBar = () => {
  const todos = useSelector((state) => state.todo.todos);

  const searchHandler = (value) => {
    const filteredTodos = todos.filter((todo) => {
      const { title, description } = todo;

      if (title.includes(value)) {
        return todo;
      } else if (description.includes(value)) {
        return todo;
      } else {
        return;
      }
    });

    console.log(filteredTodos);
  };

  // state.

  return (
    <div className="">
      <input
        type="text"
        placeholder="search todo"
        onChange={(e) => {
          searchHandler(e.target.value.toString());
        }}
      />

      <button className="bg-red-500">
        <AiOutlinePlusCircle />
      </button>
    </div>
  );
};

export default SearchBar;
