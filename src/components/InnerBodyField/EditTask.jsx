// Custom CSS
import "./EditTask.css";

// REACT
import { useEffect, useRef } from "react";

// MANTINE
import { DateTimePicker } from "@mantine/dates";
import { Tooltip, Button, MultiSelect } from "@mantine/core";

// REACT-REDUX
import { useSelector, useDispatch } from "react-redux";

// REDUX SLICE
import { updateTodo } from "../../features/todosSlice/todosSlice";

// REVEAL SLICE
import { revealEditPage } from "../../features/showPagesSlice/revealSlice";

// COMPONENTS
import RichTextEditor from "../Tiptap/RichTextEditor";

// ICONS
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import {
  MdBookmarkAdd,
  MdBookmarkAdded,
  MdArrowRightAlt,
} from "react-icons/md";

const EditWeb = () => {
  const dispatch = useDispatch();
  const { mood } = useSelector((state) => state.theme);

  const { title, dateCreated, id } = useSelector(
    (state) => state.todo.selectedTodo
  );
  const titleRef = useRef(HTMLElement);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const autoResizeHandler = () => {
    const scrollHeight = titleRef.current.scrollHeight;
    titleRef.current.style.height = `${scrollHeight}px`;
  };

  const onChangeHandler = (value, name) => {
    const typicalObject = {
      id: id,
      name,
      value,
    };

    dispatch(updateTodo(typicalObject));
  };

  return (
    <div
      className={`${
        mood === "light" ? "bg-zinc-200 md:bg-zinc-50" : "bg-slate-700"
      } w-full h-full max-h-full overflow-x-hidden overflow-y-scroll  absolute top-0 md:block md:relative p-4 z-20 `}
    >
      <div className="relative w-full  pt-4 flex items-top justify-end gap-4">
        <Tooltip label="Add to Favourite">
          <button>
            <MdBookmarkAdd className="text-xl font-bold text-gray-400 hover:text-yellow-300" />
          </button>
        </Tooltip>

        <Tooltip label="Close the tab">
          <button
            onClick={() => {
              dispatch(revealEditPage(false));
            }}
          >
            <IoCloseSharp color="red" className="text-3xl font-extrabold" />
          </button>
        </Tooltip>
      </div>
      <div className=" mt-5 relative">
        {/* QUOTE icons*/}

        <div className="absolute -top-3 -left-2 text-xl ">
          <FaQuoteLeft className="text-red-500" />
        </div>

        <div className="absolute bottom-0 right-1 text-xl ">
          <FaQuoteRight className="text-red-500" />
        </div>

        {/* TITLE */}
        <textarea
          className={`w-full rounded-md text-2xl text-black sourceCode p-2 font-semibold resize-none`}
          ref={titleRef}
          value={title}
          onKeyUp={autoResizeHandler}
          onChange={(e) => {
            onChangeHandler(e.target.value, "TITLE");
          }}
        />
      </div>

      <div className="flex items-center gap-3">
        <DateTimePicker
          value={new Date(dateCreated)}
          valueFormat="DD MMM YYYY hh:mm A"
          label="From "
          placeholder="Pick date and time"
          onChange={(e) => {
            onChangeHandler(e.toISOString(), "CREATED");
          }}
        />

        <MdArrowRightAlt className="text-2xl translate-y-2" />

        <DateTimePicker
          value={new Date(dateCreated)}
          valueFormat="DD MMM YYYY hh:mm A"
          label="To"
          placeholder="Pick date and time"
          onChange={(e) => {
            onChangeHandler(e.toISOString(), "CREATED");
          }}
        />
      </div>

      <MultiSelect
        label="Your favorite libraries"
        placeholder="Pick value"
        data={["React", "Angular", "Vue", "Svelte", "Node Js"]}
        searchable
        onKeyDown={(event) => {
          if (event.key === 13 || event.key === "Enter") {
            return;
          }
          console.log(event.target.value);
        }}
      />

      <br />

      <RichTextEditor />

      <Button variant="filled" color="green">
        Mark as completed
      </Button>
    </div>
  );
};

export default EditWeb;
