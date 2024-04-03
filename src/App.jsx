// HOOKS
import { useState, useEffect } from "react";

// REDUX HOOKS
import { useSelector, useDispatch } from "react-redux";

// CSS STYLING
import "./index.css";

// INITIAL DATAS
import dataTodos from "./data/dataTodos";

// COMPONENTS
import AddTodo from "./components/AddTodo";
import AddTaskBtn from "./components/AddTaskBtn";
// we don't use AddTaskBtn
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";
import StatsBar from "./components/StatsBar/StatsBar";

// REACT_ROUTER_DOM
import { Outlet, useNavigate } from "react-router-dom";

// RTKQuery
import { useSignupMutation } from "./features/usersApiSlice/usersApiSlice";

function App() {
  // LOCAL state
  const [showAddTodo, setShowAddTodo] = useState(false);

  // data
  const [todos, setTodos] = useState(dataTodos);

  // use navigate
  const navigate = useNavigate();

  // GLOBAL STATE
  const { mood } = useSelector((state) => state.theme);
  const { userInfo } = useSelector((state) => state.auth);

  console.log(userInfo);

  useEffect(() => {
    function isAuthenticated() {
      // Check if the authentication cookie is present
      const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("todoist_jwt="));

      return !!authToken;
    }

    if (!userInfo && isAuthenticated) {
      navigate("/login");
    } else {
      console.log("no user info");
    }
  }, [userInfo, navigate]);

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

      {userInfo && <SideBar />}
      <Footer />
    </div>
  );
}

export default App;
