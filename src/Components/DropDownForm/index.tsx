/* eslint-disable max-len */
import React, { useState } from 'react';
import DownArrowIcon from '../../Assets/Icons/downArrow.svg';
import { ExpandActionTypes } from './DropDownReducer';
import { useExpandedContext } from './DropDownStateProvider';

interface DropDownForm {
    title: string;
    // eslint-disable-next-line react/require-default-props
    trigger?: ExpandActionTypes,
    // eslint-disable-next-line react/require-default-props
    payload?: boolean,
}

function DropDownForm({ title, trigger, payload }: DropDownForm) {
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
      className="flex items-start mt-6 w-full max-w-[95%] mx-auto"
      onClick={() => ExpandForm()}
    >
      <img
        src={DownArrowIcon}
        alt="Down Arrow Icon"
        className={`transition-all duration-300 ease-in-out w-7 transform ${revealed ? 'rotate-180' : 'rotate-0'}`}
      />
      <p className="ml-4 font-semibold text-drop-grey text-xl">{title}</p>
    </button>
  );
}

export default DropDownForm;
