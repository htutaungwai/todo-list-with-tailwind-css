import React from "react";

// REACT-REDUX
import { useSelector } from "react-redux";

const Footer = () => {
  const { mood } = useSelector((state) => state.theme);

  return (
    <footer
      className={`${
        mood === "light" ? "bg-zinc-100" : "bg-slate-900"
      } w-full h-full poppins text-center text-sm my-auto pt-1 -mt-5 shadow-2xl  border-t-2 z-[10]"`}
    >
      <p>
        Crafted by
        <a href="#" className="line">
          @htutaungwai
        </a>
      </p>
    </footer>
  );
};

export default Footer;

// <AddTaskBtn setShowAddTodo={setShowAddTodo} showAddTodo={showAddTodo} />
