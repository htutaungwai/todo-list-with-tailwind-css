import { Menu, Button, Tooltip } from "@mantine/core";

import { FaSortAmountDown } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
export default function TodoFilter() {
  return (
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
  );
}
