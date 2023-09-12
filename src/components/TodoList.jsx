import "./TodoList.css";

const ToodList = ({ todos, setTodos }) => {
  return (
    <div>
      <h1>TODOS</h1>
      <ul>
        {todos.length > 0 &&
          todos.map((obj) => {
            return (
              <li key={obj.id}>
                <label
                  htmlFor={obj.id}
                  className={obj.checked ? "underline" : ""}
                >
                  {obj.title}
                </label>
                <input
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
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ToodList;
