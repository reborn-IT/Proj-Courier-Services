import React, { useState } from 'react';
import './dropdownform.scss';
import DownArrowIcon from '../../Assets/Icons/downArrow.svg';

interface DropDownForm {
    title: string;
}

function DropDownForm({ title }: DropDownForm) {
  const [revealed, setRevealed] = useState<boolean>(false);

  return (
    <button
      type="button"
      className="button-dropdown filter-container-maxw"
      onClick={() => setRevealed(!revealed)}
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
