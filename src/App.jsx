import { useState } from "react";
import AddTodo from "./components/AddTodo";
import dataTodos from "./data/dataTodos";
import "./index.css";

function App() {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [todos, setTodos] = useState(dataTodos);

  return (
    <div className="min-h-screen min-w-screen w-screen h-screen bg-[#F0F0F0] flex justify-center content-center flex-col">
      <h1 className="text-5xl text-red-500 font-bold"> TODO LIST</h1>
      {showAddTodo && (
        <AddTodo
          setShowAddTodo={setShowAddTodo}
          showAddTodo
          todos={todos}
          setTodos={setTodos}
        />
      )}

      <button
        onClick={() => {
          setShowAddTodo(!showAddTodo);
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default App;
