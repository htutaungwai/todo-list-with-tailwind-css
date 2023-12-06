// MANTINE HOOK
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, ScrollArea } from "@mantine/core";

// REACT-REDUX
import { useDispatch, useSelector } from "react-redux";

// REACT
import { useEffect } from "react";

// REVEAL SLICE REDUCER
import { revealSideBar } from "../../features/showPagesSlice/revealSlice";

function SideBar() {
  const [opened, { open, close }] = useDisclosure(false);
  const sideBarState = useSelector((state) => state.reveal.sideBar);
  const dispatch = useDispatch();

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
        position="right"
        opened={opened}
        onClose={() => {
          dispatch(revealSideBar(false));
          close();
        }}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        <h1>hello world</h1>
      </Drawer>
    </>
  );
}

export default SideBar;
