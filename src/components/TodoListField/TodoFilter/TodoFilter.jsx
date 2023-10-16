// // ICONS
import { AiOutlinePlusCircle } from "react-icons/ai";

const TodoFilter = () => {
  const searchHandler = () => {};

  return (
    <div>
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
    </div>
  );
};

export default TodoFilter;

// const filteredTodos = todos.filter((todo) => {
//   const { title, description } = todo;

//   if (title.includes(value)) {
//     return todo;
//   } else if (description.includes(value)) {
//     return todo;
//   } else {
//     return;
//   }
// });
