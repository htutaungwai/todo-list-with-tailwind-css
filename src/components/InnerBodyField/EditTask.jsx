// REACT
import { useEffect, useRef } from "react";

// MANTINE DATE
import { DateTimePicker } from "@mantine/dates";

// REACT-REDUX
import { useSelector, useDispatch } from "react-redux";

// REDUX SLICE
import { updateTodo } from "../../features/todosSlice/todosSlice";

// REVEAL SLICE
import { revealEditPage } from "../../features/showPagesSlice/revealSlice";

// COMPONENTS
import MenuBar from "../Tiptap/MenuBar";

// ICONS
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const EditWeb = () => {
  const dispatch = useDispatch();
  const { title, description, checked, dateCreated, id, content } = useSelector(
    (state) => state.todo.selectedTodo
  );
  const titleRef = useRef(HTMLElement);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const onChangeHandler = (value, name) => {
    const typicalObject = {
      id: id,
      name,
      value,
    };
    dispatch(updateTodo(typicalObject));
  };

  return (
    <div className="w-full h-full max-h-full overflow-x-hidden overflow-y-scroll bg-zinc-200 md:bg-zinc-50 absolute top-0 md:block md:relative p-4 z-20 ">
      <div className="relative bg-zinc-100 w-full  pt-10">
        <button
          onClick={() => {
            dispatch(revealEditPage(false));
          }}
          className="absolute top-0 right-0"
        >
          <IoCloseSharp color="red" className="text-3xl font-extrabold" />
        </button>
      </div>
      <div className=" mt-5 relative">
        <div className="absolute -top-3 -left-2 text-xl ">
          <FaQuoteLeft />
        </div>

        <div className="absolute bottom-0 right-1 text-xl ">
          <FaQuoteRight />
        </div>
        <textarea
          type="text title"
          className="w-full rounded-md text-2xl sourceCode p-2 font-semibold  h-24 resize-none before:content-['hello-world'] "
          ref={titleRef}
          value={title}
          onChange={(e) => {
            onChangeHandler(e.target.value, "TITLE");
          }}
        />
      </div>

      <DateTimePicker
        value={new Date(dateCreated)}
        valueFormat="DD MMM YYYY hh:mm A"
        label="Deadline 💀"
        placeholder="Pick date and time"
        onChange={(e) => {
          onChangeHandler(e.toISOString(), "CREATED");
        }}
      />

      <br />

      <br />

      <MenuBar />
    </div>
  );
};

export default EditWeb;
