// ICONS
import { AiOutlinePlusCircle } from "react-icons/ai";

// REACT- REDUX
import { useDispatch, useSelector } from "react-redux";

// REDUCERS
import { addTodo } from "../../../features/todosSlice/todosSlice";
import {
  revealEditPage,
  revealSideBar,
} from "../../../features/showPagesSlice/revealSlice";

import { Menu, Button, Tooltip } from "@mantine/core";

import { FaSortAmountDown } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";

const SearchBar = ({ setSearchValue }) => {
  // MIGHT DELETE LATOR
  const sideBarState = useSelector((state) => state.reveal.sideBar);
  // MIGHT DELETE LATOR
  const dispatch = useDispatch();
  return (
    <div className="sticky top-0 bg-zinc-50 z-10 shadow-md">
      <div className="">
        <input
          type="text"
          placeholder="search todo"
          onChange={(e) => {
            setSearchValue(e.target.value.toString().toLowerCase());
          }}
        />

        <button
          className="bg-red-500"
          onClick={() => {
            dispatch(
              addTodo({
                title: "new todo",
                description: "new todo",
                checked: false,
                date: null,
              })
            );

            dispatch(revealEditPage());
          }}
        >
          <AiOutlinePlusCircle />
        </button>
        <button
          onClick={() => {
            dispatch(revealSideBar(!sideBarState));
          }}
        >
          toggle
        </button>
      </div>

      <Menu shadow="lg" width={200}>
        <Menu.Target>
          <Tooltip label="sorted by">
            <Button color="red">
              <FaSortAmountDown />
            </Button>
          </Tooltip>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Sorted By</Menu.Label>
          <Menu.Item rightSection={<BsCheckLg color="red" />}>Title</Menu.Item>
          <Menu.Item>Date Updated</Menu.Item>
          <Menu.Item>Date Created</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default SearchBar;
