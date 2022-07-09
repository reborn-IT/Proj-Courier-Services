/* eslint-disable max-len */
import { useState } from "react";
import DownArrowIcon from "../../Assets/Icons/downArrow.svg";
import { ExpandActionTypes } from "./DropDownReducer";
import { useExpandedContext } from "./DropDownStateProvider";

interface IDropDownForm {
  title: string;
  trigger: ExpandActionTypes;
  payload: boolean;
}

function DropDownForm({ title, trigger, payload }: IDropDownForm) {
  const [revealed, setRevealed] = useState<boolean>(false);
  const { action } = useExpandedContext();

  const ExpandForm = () => {
    setRevealed(!revealed);
    action({
      type: trigger,
      payload,
    });
  };

  return (
    <button
      type="button"
      className="flex items-center mt-6 w-full max-w-[95%] mx-auto"
      onClick={() => ExpandForm()}
    >
      <img
        src={DownArrowIcon}
        alt="Down Arrow Icon"
        className={`transition-all duration-300 ease-in-out w-5 transform ${
          revealed ? "rotate-180" : "rotate-0"
        }`}
      />
      <p className="ml-4 font-semibold text-drop-grey text-xl">{title}</p>
    </button>
  );
}

DropDownForm.defaultProps = {
  // trigger: ExpandActionTypes.SET_EXPANDED_NATURE,
  // payload: false,
};

export default DropDownForm;
