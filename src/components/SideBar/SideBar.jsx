// MANTINE HOOK
import { useDisclosure } from "@mantine/hooks";
import { Drawer, CloseButton } from "@mantine/core";

// REACT-REDUX
import { useDispatch, useSelector } from "react-redux";

// REACT_ROUTER_DOM
import { Link, useNavigate } from "react-router-dom";

// REACT
import { useEffect } from "react";

// REDUCER
import { revealSideBar } from "../../features/showPagesSlice/revealSlice";
import { revealLoading } from "../../features/showPagesSlice/revealSlice";

// ICONS
import {
  IoPersonCircleSharp,
  IoTrash,
  IoSparkles,
  IoCheckmarkCircleSharp,
  IoCellular,
} from "react-icons/io5";

// MUTATION
import { useSignoutMutation } from "../../features/usersApiSlice/usersApiSlice";
// authSlice
import { logout } from "../../features/authSlice/authSlice";
import { resetState } from "../../app/root/rootActions";

function SideBar() {
  // Logout Mutation

  const [signout, { isLoading, isSuccess }] = useSignoutMutation();

  // useDisclosure hook inherited from MANTINE
  const [opened, { open, close }] = useDisclosure(false);

  // SideBar global state
  const { sideBar } = useSelector((state) => state.reveal);
  const { userInfo } = useSelector((state) => state.auth);
  const { mood } = useSelector((state) => state.theme);

  //use dispatch and navigate
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // TASK SECTIONS
  const sections = [
    {
      name: "completed",
      icon: <IoCheckmarkCircleSharp className="text-green-400" />,
      href: "/todos/completed",
    },
    {
      name: "deleted",
      icon: <IoTrash className="text-red-600" />,
      href: "/todos/deleted",
    },
    {
      name: "favourites",
      icon: <IoSparkles className="text-yellow-400" />,
      href: "/todos/favourites",
    },
    {
      name: "ongoing",
      icon: <IoCellular className="text-blue-700" />,
      href: "/todos/ongoing",
    },
  ];

  useEffect(() => {
    if (sideBar) {
      open();
    } else {
      close();
    }
  }, [sideBar]);

  useEffect(() => {
    dispatch(revealLoading(isLoading));
    if (!isLoading && isSuccess) {
      dispatch(resetState());
      setTimeout(() => {
        dispatch(logout());
        navigate("/login");
      }, 3000);
    }
  }, [isLoading]);

  // SIGN OUT HANDLER

  const signOutHandler = async () => {
    try {
      await signout();
    } catch (error) {
      console.log("Something Went Wrong");
      throw new Error("Something went wrong");
    }
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => {
          dispatch(revealSideBar(!sideBar));
        }}
        withCloseButton={false}
        position="right"
        styles={{
          content: {
            backgroundColor: mood === "light" ? "Window" : "ThreeDDarkShadow",
          },
        }}
      >
        <div
          className={`${
            mood === "light" ? "text-black" : "text-white"
          } flex flex-row items-center justify-between font-sans `}
        >
          <div className="flex flex-row gap-4 items-center">
            <span className=" text-4xl">
              <IoPersonCircleSharp />
            </span>
            <div>
              <h2 className="font-bold">
                {userInfo.name ? userInfo.name : "null"}
              </h2>
              <p className="text-gray-500">
                {userInfo.email ? userInfo.email : "null"}
              </p>
            </div>
          </div>
          <CloseButton
            size="lg"
            onClick={() => {
              dispatch(revealSideBar(false));
            }}
          />
        </div>

        <div className={`${mood === "light" ? "text-black" : "text-white"} `}>
          <ul className="w-full  h-auto flex flex-col gap-1 pt-5 ">
            {sections.map((section) => {
              return (
                <Link to={section.href} key={section.name}>
                  <li
                    className={`${
                      mood === "light"
                        ? "hover:bg-red-50"
                        : "hover:bg-slate-800"
                    } w-full  py-1 rounded-sm cursor-pointer px-2 hover:backdrop-blur-md  ease-in-out transition-all flex flex-row  items-center gap-2`}
                    onClick={() => {
                      dispatch(revealSideBar(false));
                    }}
                  >
                    {section.icon}
                    <h5 className="text-sm capitalize">{section.name}</h5>
                  </li>
                </Link>
              );
            })}
          </ul>

          {/* DIVISION LINE */}
          <div
            className={`${
              mood === "light" ? "bg-black" : "bg-white"
            } w-full h-[1px] my-2`}
          ></div>
          {/* DIVISION LINE */}

          <button
            className="mt-3 w-full  py-1 rounded-md cursor-pointer px-2 hover:backdrop-blur-md bg-red-500 ease-in-out transition-all  text-white poppins"
            onClick={signOutHandler}
          >
            Sign Out
          </button>
        </div>
      </Drawer>
    </>
  );
}

export default SideBar;
