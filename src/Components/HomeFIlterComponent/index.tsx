/* eslint-disable max-len */
import React from "react";
import CommonRoundedButton, {
  CommonButtonActions,
} from "../CommonRoundedButton";

function MainFilterComponent() {
  return (
    <div className="filter-container bg-drop-white flex flex-col md:flex-row items-center justify-between p-5 rounded-3xl absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-10 shadow-lg">
      <CommonRoundedButton>View Nearby Services</CommonRoundedButton>
      <p className="text-bold font-semibold text-drop-grey px-3 mt-2 md:mt-0">
        Or
      </p>
      <CommonRoundedButton action={CommonButtonActions.OPEN_FILTER}>
        Start Filtering
      </CommonRoundedButton>
    </div>
  );
}

export default MainFilterComponent;
