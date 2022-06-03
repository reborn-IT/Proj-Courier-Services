/* eslint-disable max-len */
import React from 'react';
import { TEXT, NUMBER } from '../../Utils/constants';

interface IRoundedInput {
    type: TEXT | NUMBER;
    placeholder: string;
    onChange: (e) => void;
    extraTailwindClasses?: string;
    value: string;
}

function RoundedInput({
  type, placeholder, onChange, value, extraTailwindClasses,
}: IRoundedInput) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      value={value}
      className={`rounded-input ml-2 md:ml-0 flex-1 border border-drop-primary rounded-full p-3 md:p-4 text-sm md:text-base ${extraTailwindClasses}`}
    />
  );
}

RoundedInput.defaultProps = {
  extraTailwindClasses: '',
};

export default RoundedInput;
