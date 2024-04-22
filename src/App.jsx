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
import Spinner from "./components/Loading/Spinner";

// REACT_ROUTER_DOM
import { Outlet, useNavigate } from "react-router-dom";

// RTKQuery
import { useCheckStatusQuery } from "./features/usersApiSlice/usersApiSlice";
// REDUCER
import { revealLoading } from "./features/showPagesSlice/revealSlice";
import { resetState } from "./app/root/rootActions";

// Auth Slice
import { logout } from "./features/authSlice/authSlice";

function App() {
  // LOCAL state
  const [showAddTodo, setShowAddTodo] = useState(false);
  // data
  const [todos, setTodos] = useState(dataTodos);
  // use navigate and dispatch
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // GLOBAL STATE
  const { mood } = useSelector((state) => state.theme);
  const { userInfo } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.reveal);

  const { data: status, error, isLoading, refetch } = useCheckStatusQuery();

  const logoutHandler = () => {
    console.log("Logged out");
    dispatch(resetState());

    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const status = await refetch();
        console.log("userInfo :", userInfo);
        if ((!status.isLoading && !status.isSuccess) || !userInfo)
          logoutHandler();
      } catch (error) {
        logoutHandler();
      }
    };
    fetchData();
  }, [status]);

  useEffect(() => {
    dispatch(revealLoading(isLoading));
  }, [isLoading]);

  return (
    <>
      {loading && <Spinner />}
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
    </>
  );
}

export default App;
