import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, ScrollArea } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
