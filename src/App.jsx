import { useState } from "react";
import AddTodo from "./components/AddTodo";
import dataTodos from "./data/dataTodos";
import "./index.css";

import ToodList from "./components/TodoList";
import AddTaskBtn from "./components/AddTaskBtn";
function App() {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [todos, setTodos] = useState(dataTodos);

  return (
    <div className="min-h-screen min-w-screen w-screen h-screen flex flex-col">
      {/* Show Todo Start END */}
      {showAddTodo && (
        <AddTodo
          setShowAddTodo={setShowAddTodo}
          showAddTodo
          todos={todos}
          setTodos={setTodos}
        />
      )}
      {/* Show TODO END*/}

      {/* Todo List */}
      <ToodList todos={todos} setTodos={setTodos} />

      {/* ADD TASK BUTTON  */}
      <AddTaskBtn setShowAddTodo={setShowAddTodo} showAddTodo={showAddTodo} />
    </div>
  );
}

export default App;
