import React from "react";
import { DateTimePicker } from "@mantine/dates";

const EditWeb = () => {
  return (
    <div className="w-full h-full bg-red-600  absolute top-0 md:block md:relative">
      <DateTimePicker
        valueFormat="DD MMM YYYY hh:mm A"
        label="Pick date and time"
        placeholder="Pick date and time"
        onChange={(e) => {
          console.log(e);
        }}
      />
    </div>
  );
};

export default EditWeb;
