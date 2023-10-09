// ICONS
import { IoIosPartlySunny } from "react-icons/io";

// COMPONENTS
import AddTaskBtn from "../AddTaskBtn";

const NoTodos = () => {
  return (
    <div className="w-full min-h-[95%] relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-1 text-center ">
        <IoIosPartlySunny className="m-auto text-8xl  text-zinc-200" />
        <h2 className="text-sm">What a beautiful day</h2>
        <p className="text-sm">you have nothing to do...</p>
        <br />
        <AddTaskBtn />
      </div>
    </div>
  );
};

export default NoTodos;
