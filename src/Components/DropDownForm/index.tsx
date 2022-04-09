import React, { useState } from 'react';
import './dropdownform.scss';
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
      className="button-dropdown filter-container-maxw"
      onClick={() => ExpandForm()}
    >
      <img
        src={DownArrowIcon}
        alt="Down Arrow Icon"
        style={{
          width: '1.7rem',
          transform: `rotate(${revealed ? '180deg' : '0'})`,
        }}
      />
      <p>{title}</p>
    </button>
  );
}

export default DropDownForm;
