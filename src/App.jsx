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

// DAY.JS
import dayjs from "dayjs";

function App() {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [todos, setTodos] = useState(dataTodos);
  const { mood } = useSelector((state) => state.theme);
  const showEditPage = useSelector((state) => state.reveal.editPage);

  // PLAYGROUND

  // const primeObject = {};
  // const dates = [
  //   { id: 7, date: "Thu Jan 04 2024 00:00:00 GMT+0700 (Indochina Time)" },
  //   { id: 4, date: "Sun Oct 08 2023 00:00:00 GMT+0700 (Indochina Time)" },
  //   { id: 1, date: "Thu Oct 05 2023 00:00:00 GMT+0700 (Indochina Time)" },
  //   { id: 6, date: "Tue Oct 10 2023 00:00:00 GMT+0700 (Indochina Time)" },
  //   { id: 3, date: "Sat Oct 07 2023 00:00:00 GMT+0700 (Indochina Time)" },
  //   { id: 2, date: "Fri Oct 06 2023 00:00:00 GMT+0700 (Indochina Time)" },
  //   { id: 5, date: "Mon Oct 09 2023 00:00:00 GMT+0700 (Indochina Time)" },
  //   { id: 8, date: "Tue Oct 10 2023 12:21:00 GMT+0700 (Indochina Time)" },
  //   { id: 9, date: "Tue Oct 10 2023 01:06:00 GMT+0700 (Indochina Time)" },
  // ];

  // PLAYGROUND

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

      {/*-------SHOW EDIT PAGE MOBILE START------*/}

      {/* {showEditPage && <EditPage />} */}

      {/* ------- SHOW EDIT PAGE MOBILE END -------*/}

      {/* Todo List */}
      <ToodList todos={todos} setTodos={setTodos} />

      {/* ADD TASK BUTTON  */}
      <AddTaskBtn setShowAddTodo={setShowAddTodo} showAddTodo={showAddTodo} />
    </div>
  );
}

export default App;
