// REACT_ROUTER_DOM
import { useLocation, useNavigate, Outlet } from "react-router-dom";

// REACT
import { useEffect } from "react";

const RootTodos = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/todos") navigate("/todos/all");
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootTodos;
