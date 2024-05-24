// ICONS
import { AiOutlinePlusCircle } from "react-icons/ai";

// REDUX-actions
import { selectTodo } from "../../../features/todosSlice/todosSlice";
import {
  revealLoading,
  revealEditPage,
} from "../../../features/showPagesSlice/revealSlice";
import { triggerRefetch } from "../../../features/refetchSlice/refetchSlice";

// MANTINE
import { Menu, Button, Tooltip } from "@mantine/core";

// ICONS
import { FaSortAmountDown, FaCheckDouble } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";

// RTK Query
import { useCreateNewPostMutation } from "../../../features/PostApiSlice/PostApiSlice";

// REACT-REDUX
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// HOOKS
import useCreateNewPostWithEffects from "../../../hooks/useCreateNewPostWithEffects";

// Toast
import { Bounce, ToastContainer } from "react-toastify";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ setSearchValue, sortBy, setSortBy }) => {
  // dispatch
  const dispatch = useDispatch();

  // custom hook
  const {
    createNewPost,
    newPost,
    createNewPostError,
    isCreateNewPostLoading,
    isCreateNewPostSuccess,
    isRefetchLoading,
    isRefetchSuccess,
    isCreateNewPostError,
  } = useCreateNewPostWithEffects();

  // THEME MOOD
  const { mood } = useSelector((state) => state.theme);

  // CEATE NEW POST MUTATION
  // const [
  //   createNewPost,
  //   {
  //     data: newPost,
  //     error: newCreatePostError,
  //     isLoading: isCreateNewPostLoading,
  //     isSuccess: isNewCreatePostSuccess,
  //     isError: isNewCreatePostError,
  //   },
  // ] = useCreateNewPostMutation();

  // handling new post function

  const handleCreateNewPost = async () => {
    try {
      dispatch(revealEditPage(false));
      await createNewPost({
        title: "new todo",
        description: "new todo",
        checked: false,
        date: null,
      });
    } catch (error) {
      console.log(error);
      console.log(createNewPostError);
    }
  };

  useEffect(() => {
    if (isCreateNewPostSuccess) {
      // toast.success("✨ Post Created Successfully!", {
      //   position: "top-left",
      //   autoClose: 1000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   transition: Bounce,
      // });
      toast("Post created successfully!", {
        icon: "✨",
      });
    }
  }, [isCreateNewPostSuccess, isCreateNewPostError]);

  // useEffect(() => {
  //   console.log("isCreateNewPostLoading use effect");
  //   if (isCreateNewPostLoading) dispatch(revealLoading(true));
  //   else {
  //     dispatch(revealLoading(false));
  //   }
  // }, [isCreateNewPostLoading]);

  // useEffect(() => {
  //   console.log("triggerRefetch useeffect");
  //   if (isNewCreatePostSuccess && newPost) {
  //     dispatch(triggerRefetch());
  //   }
  // }, [isNewCreatePostSuccess]);

  // SORTBY HANDLER
  const sortByHandler = (option) => {
    if (option !== "" || option !== null) setSortBy(option);
  };
  return (
    <div
      className={`${
        mood === "light" ? "bg-zinc-50" : "bg-slate-900"
      }  sticky top-0 py-2 z-20 shadow-md`}
    >
      {/* <ToastContainer
        position="top-left"
        autoClose={1000}
        limit={2}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      /> */}

      <Toaster position="bottom-center" reverseOrder={true} />

      <div className="flex items-center pl-8 py-1 ">
        <input
          className={`basis-4/6 p-1 rounded-sm text-black`}
          type="text"
          placeholder="search todo"
          onChange={(e) => {
            setSearchValue(e.target.value.toString().toLowerCase());
          }}
        />

        <button
          className="bg-gray-500 w-9 h-9 -ml-1 rounded-sm flex items-center justify-center"
          onClick={handleCreateNewPost}
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
