/* eslint-disable max-len */
import React from 'react';
import { TEXT, NUMBER } from '../../Utils/constants';

interface IFilterMenuInput {
    type: TEXT | NUMBER;
    placeholder: string;
    // eslint-disable-next-line react/require-default-props
    extratailwindcss?: string;
    // eslint-disable-next-line react/require-default-props
    onChangeHandler?: (e) => void;
    // eslint-disable-next-line react/require-default-props
    value?: string | number;
}

function FilterMenuInput({
  type,
  placeholder,
  extratailwindcss,
  onChangeHandler,
  value,
}: IFilterMenuInput) {
  return (
    <input
      type={type}
      className={`border border-drop-grey rounded-lg p-4 ${extratailwindcss}`}
      style={{
        width: 'calc(100% - 2rem)',
      }}
      placeholder={placeholder}
      onChange={(e) => onChangeHandler(e)}
      value={value}
    />
  );
}

export default FilterMenuInput;
