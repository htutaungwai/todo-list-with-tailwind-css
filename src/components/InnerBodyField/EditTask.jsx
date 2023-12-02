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
      <textarea
        type="text title"
        className="w-full rounded-md text-2xl sourceCode p-2 font-semibold  h-24 resize-none"
        ref={titleRef}
        value={title}
        onChange={(e) => {
          onChangeHandler(e.target.value, "TITLE");
        }}
      />

      <DateTimePicker
        value={new Date(dateCreated)}
        valueFormat="DD MMM YYYY hh:mm A"
        label="Deadline 💀"
        placeholder="Pick date and time"
        onChange={(e) => {
          onChangeHandler(e.toISOString(), "CREATED");
        }}
      />

      <button
        onClick={() => {
          dispatch(revealEditPage(false));
        }}
      >
        X
      </button>

      <br />
      <br />
      <br />
      <br />

      <MenuBar />
    </div>
  );
};

export default EditWeb;
