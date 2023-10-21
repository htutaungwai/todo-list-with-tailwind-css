// ICONS
import { AiOutlinePlusCircle } from "react-icons/ai";

// COMPONENTS
import TodoFilter from "./TodoFilter";

const SearchBar = ({ setSearchValue }) => {
  return (
    <div>
      <div className="">
        <input
          type="text"
          placeholder="search todo"
          onChange={(e) => {
            setSearchValue(e.target.value.toString().toLowerCase());
          }}
        />

        <button className="bg-red-500">
          <AiOutlinePlusCircle />
        </button>
      </div>

      <TodoFilter />
    </div>
  );
};

export default SearchBar;
