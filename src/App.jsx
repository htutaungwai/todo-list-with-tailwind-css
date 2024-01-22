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
import SideBar from "./components/SideBar/SideBar";
import StatsBar from "./components/StatsBar/StatsBar";

// REACT_ROUTER_DOM
import { Outlet, Link } from "react-router-dom";

function App() {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [todos, setTodos] = useState(dataTodos);
  const { mood } = useSelector((state) => state.theme);

  return (
    <div
      className={`min-h-screen min-w-screen w-screen h-screen flex flex-col ${
        mood === "dark" ? " bg-slate-700 text-white" : "text-black bg-white"
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
      <div className=" w-full h-[96%] min-h-[96%] ">
        {/* This is H1 heading */}
        <h1 className={`text-xl text-red-500 font-bold text-center pt-4 `}>
          TodoList
        </h1>
        <StatsBar />

        <Outlet />

        {/* ADD TASK BUTTON  */}
      </div>

      <SideBar />
      <Footer />
    </div>
  );
}

export default App;
