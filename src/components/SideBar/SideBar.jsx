// MANTINE HOOK
import { useDisclosure } from "@mantine/hooks";
import { Drawer, CloseButton } from "@mantine/core";

// REACT-REDUX
import { useDispatch, useSelector } from "react-redux";

// REACT
import { useEffect } from "react";

// REVEAL SLICE REDUCER
import { revealSideBar } from "../../features/showPagesSlice/revealSlice";

// ICONS
import {
  IoPersonCircleSharp,
  IoTrash,
  IoSparkles,
  IoCheckmarkCircleSharp,
  IoCellular,
} from "react-icons/io5";

function SideBar() {
  // useDisclosure hook inherited from MANTINE
  const [opened, { open, close }] = useDisclosure(false);

  // SideBar global state
  const sideBarState = useSelector((state) => state.reveal.sideBar);

  //use dispatch
  const dispatch = useDispatch();

  // THEME
  const { mood } = useSelector((state) => state.theme);

  // TASK SECTIONS
  const sections = [
    {
      name: "completed",
      icon: <IoCheckmarkCircleSharp className="text-green-400" />,
      href: "/tasks/completed",
    },
    {
      name: "deleted",
      icon: <IoTrash className="text-red-600" />,
      href: "/tasks/deleted",
    },
    {
      name: "favourites",
      icon: <IoSparkles className="text-yellow-400" />,
      href: "/tasks/favourites",
    },
    {
      name: "ongoing",
      icon: <IoCellular className="text-blue-700" />,
      href: "/tasks/ongoing",
    },
  ];

  useEffect(() => {
    if (sideBarState) {
      open();
    } else {
      close();
    }
  }, [sideBarState]);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => {
          dispatch(revealSideBar(!sideBarState));
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
              <h2 className="font-bold">Htut Aung Wai</h2>
              <p className="text-gray-500">htutaungway@gmail.com</p>
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
                <li
                  className={`${
                    mood === "light" ? "hover:bg-red-50" : "hover:bg-slate-800"
                  } w-full  py-1 rounded-sm cursor-pointer px-2 hover:backdrop-blur-md  ease-in-out transition-all flex flex-row  items-center gap-2`}
                >
                  {section.icon}
                  <h5 className="text-sm capitalize">{section.name}</h5>
                </li>
              );
            })}
          </ul>

          {/* DIVISION LINE */}
          <div
            className={`${
              mood === "light" ? "bg-black" : "bg-white"
            } w-full h-[1px] my-2`}
          ></div>

          <button className="mt-3 w-full  py-1 rounded-md cursor-pointer px-2 hover:backdrop-blur-md bg-red-500 ease-in-out transition-all  text-white poppins">
            Sign Out
          </button>
        </div>
      </Drawer>
    </>
  );
}

export default SideBar;
