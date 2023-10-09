// HOOKS
import { useState } from "react";

// REDUX HOOKS
import { useSelector } from "react-redux";

// CSS STYLING
import "./index.css";

// INITIAL DATAS
import dataTodos from "./data/dataTodos";

// COMPONENTS
import AddTodo from "./components/AddTodo";
import ToodList from "./components/TodoList";
import AddTaskBtn from "./components/AddTaskBtn";
import Footer from "./components/Footer/Footer";

// DAY.JS
import dayjs from "dayjs";

function App() {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [todos, setTodos] = useState(dataTodos);
  const { mood } = useSelector((state) => state.theme);
  const showEditPage = useSelector((state) => state.reveal.editPage);

  return (
    <div
      className={`min-h-screen min-w-screen w-screen h-screen flex flex-col ${
        mood === "dark" ? " bg-zinc-800 text-white" : "text-black"
      }`}
    >
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
      <Footer />
    </div>
  );
}

export default App;
