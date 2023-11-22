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

const SearchBar = ({ setSearchValue, sortBy, setSortBy }) => {
  // MIGHT DELETE LATER
  const sideBarState = useSelector((state) => state.reveal.sideBar);
  // MIGHT DELETE LATER
  const dispatch = useDispatch();

  // SORTBY HANDLER

  const sortByHandler = (option) => {
    if (option !== "" || option !== null) setSortBy(option);
  };
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

            dispatch(revealEditPage(true));
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
          <Menu.Item
            rightSection={sortBy === "TITLE" && <BsCheckLg color="red" />}
            onClick={() => {
              sortByHandler("TITLE");
            }}
          >
            Title
          </Menu.Item>
          <Menu.Item
            rightSection={sortBy === "UPDATED" && <BsCheckLg color="red" />}
            onClick={() => {
              sortByHandler("UPDATED");
            }}
          >
            Date Updated
          </Menu.Item>
          <Menu.Item
            rightSection={sortBy === "CREATED" && <BsCheckLg color="red" />}
            onClick={() => {
              sortByHandler("CREATED");
            }}
          >
            Date Created
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default SearchBar;
