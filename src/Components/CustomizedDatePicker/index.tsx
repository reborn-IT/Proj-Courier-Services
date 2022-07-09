import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function CustomizedDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [clicked, setClicked] = useState(false);

  const handleSelect = (ranges: any) => {
    // eslint-disable-next-line no-console
    console.warn("ttttpp ", typeof ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    setClicked(!clicked);
  };

  const selectionRange = {
    key: "selection",
    startDate,
    endDate,
  };
  return (
    <DateRangePicker
      ranges={[selectionRange]}
      minDate={new Date()}
      rangeColors={["#525298"]}
      onChange={handleSelect}
    />
  );
}

export default CustomizedDatePicker;
