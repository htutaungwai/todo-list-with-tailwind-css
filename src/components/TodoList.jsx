import "./TodoList.css";

const ToodList = ({ todos, setTodos }) => {
  return (
    <div className="h-5/6 w-full ">
      {/* This is H1 heading */}
      <h1 className="text-3xl text-red-500 font-bold text-center pt-5 ">
        TODO LIST
      </h1>

      <div className="border-black shadow-md mb-1  pt-2 flex pb-1 pl-4 items-center gap-2 rounded-sm">
        <h1 className="font-bold capitalize">Todos</h1>
        <h1 className="text-white bg-red-600 rounded px-2 py-1">3</h1>
      </div>
      <div className="w-full h-full max-w-xl max-h-[84%]  poppins flex flex-col overflow-scroll overflow-x-hidden  bg-zinc-50">
        <ul className="poppins capitalize px-10 py-5 ">
          {todos.length > 0 &&
            todos.map((obj) => {
              return (
                <li key={obj.id} className="mb-2 border-b-2">
                  <div>
                    <input
                      className="accent-red-500 mr-2"
                      type="checkbox"
                      id={obj.id}
                      name={obj.id}
                      checked={obj.checked}
                      onChange={() => {
                        const newState = todos.map((todo) => {
                          if (obj.id === todo.id)
                            return { ...todo, checked: !obj.checked };

                          return todo;
                        });

                        setTodos([...newState]);
                      }}
                    />

                    <label
                      htmlFor={obj.id}
                      className={`${
                        obj.checked ? "underline" : ""
                      } font-medium`}
                    >
                      {obj.title}
                    </label>

                    <p className="text-xs text-gray-500 my-2 pl-6">
                      {obj.description.length > 150
                        ? obj.description.substring(0, 150) + `...`
                        : obj.description}
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default ToodList;
