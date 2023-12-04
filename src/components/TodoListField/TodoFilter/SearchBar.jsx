// ICONS
import { AiOutlinePlusCircle } from "react-icons/ai";

// REDUCERS
import { addTodo } from "../../../features/todosSlice/todosSlice";
import { revealEditPage } from "../../../features/showPagesSlice/revealSlice";

// MANTINE
import { Menu, Button, Tooltip } from "@mantine/core";

// ICONS
import { FaSortAmountDown, FaCheckDouble } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";

// REACT-REDUX
import { useDispatch } from "react-redux";

const SearchBar = ({ setSearchValue, sortBy, setSortBy }) => {
  const dispatch = useDispatch();
  // SORTBY HANDLER
  const sortByHandler = (option) => {
    if (option !== "" || option !== null) setSortBy(option);
  };
  return (
    <div className="sticky top-0 bg-zinc-50 z-10 shadow-md">
      <div className="flex items-center pl-8 py-1 ">
        <input
          className="basis-4/6 p-1 rounded-sm"
          type="text"
          placeholder="search todo"
          onChange={(e) => {
            setSearchValue(e.target.value.toString().toLowerCase());
          }}
        />

        <button
          className="bg-gray-500 w-9 h-9 -ml-1 rounded-sm flex items-center justify-center"
          onClick={() => {
            dispatch(
              addTodo({
                title: "new todo",
                description: "new todo",
                checked: false,
                date: null,
              })
            );
            dispatch(revealEditPage(false));

            setTimeout(() => {
              dispatch(revealEditPage(true));
            }, 300);
          }}
        >
          <AiOutlinePlusCircle className="text-white text-2xl" />
        </button>

        <Menu shadow="lg" width={200}>
          <Menu.Target>
            <Tooltip label="sorted by">
              <Button color="red" className="ml-2">
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
    </div>
  );
};

export default SearchBar;
