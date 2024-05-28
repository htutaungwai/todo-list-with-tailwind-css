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
//------ we don't use AddTaskBtn-----------
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";
import StatsBar from "./components/StatsBar/StatsBar";
import Spinner from "./components/Loading/Spinner";

// REACT_ROUTER_DOM
import { Outlet, useNavigate } from "react-router-dom";

// RTKQuery
import { useCheckStatusQuery } from "./features/usersApiSlice/usersApiSlice";
import { useGetAllPostsQuery } from "./features/PostApiSlice/PostApiSlice";

// REDUX-REDUCER
import {
  revealEditPage,
  revealLoading,
} from "./features/showPagesSlice/revealSlice";
import {
  resetRefetchState,
  setRefetchState,
  triggerRefetch,
} from "./features/refetchSlice/refetchSlice";
import { updateTodosArray } from "./features/todosSlice/todosSlice";
import { resetState } from "./app/root/rootActions";

// Auth Slice
import { logout } from "./features/authSlice/authSlice";

// Toast
import toast, { Toaster } from "react-hot-toast";

function App() {
  // LOCAL state
  const [showAddTodo, setShowAddTodo] = useState(false);
  // data

  // use navigate and dispatch
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // GLOBAL STATE
  const { mood } = useSelector((state) => state.theme);
  const { userInfo } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.reveal);
  const todos = useSelector((state) => state.todo.todos);

  const { totalRefetch, isTriggerRefetchSuccess } = useSelector(
    (state) => state.refetch
  );

  const { data: status, error, isLoading, refetch } = useCheckStatusQuery();
  const {
    data: posts,
    error: getAllPostError,
    isLoading: isGetAllPostLoading,
    isSuccess: isGetAllPostSuccess,
    refetch: getAllPostRefetch,
  } = useGetAllPostsQuery();

  const logoutHandler = () => {
    console.log("Logged out");
    dispatch(resetState());

    dispatch(logout());
    navigate("/login");
  };

  // user authenticating
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

  // data fetching
  useEffect(() => {
    try {
      dispatch(resetRefetchState());
      getAllPostRefetch();
      console.log("RFETCHING DATA>>>>>>>>>>>>>>>>>>>>>>");
      console.log(isGetAllPostSuccess);
    } catch (error) {
      dispatch(setRefetchState("ERROR"));
      toast.error("Fetching failed.");
    }
  }, [totalRefetch]);

  useEffect(() => {
    console.log("RENDERING SRT");
    if (isGetAllPostSuccess) {
      dispatch(updateTodosArray(posts));
      dispatch(setRefetchState("SUCCESS"));
      toast.success("SUCCESSFUL REFETCH");
    }
  }, [isGetAllPostSuccess, posts]);

  useEffect(() => {
    if (isLoading || isGetAllPostLoading) dispatch(revealLoading(isLoading));
  }, [isLoading, isGetAllPostLoading]);

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={true} />
      {loading && <Spinner />}
      <div
        className={`min-h-screen min-w-screen w-screen h-screen flex flex-col ${
          mood === "dark" ? " bg-slate-700 text-white" : "text-black bg-white"
        }`}
      >
        {/* Show Todo Start END */}
        {/* {showAddTodo && (
          <AddTodo
            setShowAddTodo={setShowAddTodo}
            showAddTodo
            todos={todos}
            setTodos={setTodos}
          />
        )} */}
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
