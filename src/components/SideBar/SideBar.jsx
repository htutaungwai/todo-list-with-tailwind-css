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
        className="bg-red-400"
      >
        <div className="flex flex-row items-center justify-between font-sans">
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

        <div className="">
          <ul className="w-full  h-auto flex flex-col gap-1 pt-5 ">
            <li className="w-full  py-1 rounded-sm cursor-pointer px-2 hover:backdrop-blur-md hover:bg-red-50 ease-in-out transition-all flex flex-row  items-center gap-2">
              <IoCheckmarkCircleSharp className="text-green-400" />
              <h5 className="text-sm">Completed</h5>
            </li>

            <li className="w-full  py-1 rounded-sm cursor-pointer px-2 hover:backdrop-blur-md hover:bg-red-50 ease-in-out transition-all flex flex-row  items-center gap-2">
              <IoTrash className="text-red-600" />
              <h5 className="text-sm">Deleted</h5>
            </li>

            <li className="w-full  py-1 rounded-sm cursor-pointer px-2 hover:backdrop-blur-md hover:bg-red-50 ease-in-out transition-all flex flex-row  items-center gap-2">
              <IoSparkles className="text-yellow-400" />
              <h5 className="text-sm">Favourites</h5>
            </li>

            <li className="w-full  py-1 rounded-sm cursor-pointer px-2 hover:backdrop-blur-md hover:bg-red-50 ease-in-out transition-all flex flex-row  items-center gap-2">
              <IoCellular className="text-blue-700" />
              <h5 className="text-sm">Ongoing</h5>
            </li>

            <div className="w-full bg-black h-[1px]"></div>

            <button className="mt-3 w-full  py-1 rounded-md cursor-pointer px-2 hover:backdrop-blur-md bg-red-500 ease-in-out transition-all  text-white poppins">
              Sign Out
            </button>
          </ul>
        </div>
      </Drawer>
    </>
  );
}

export default SideBar;
