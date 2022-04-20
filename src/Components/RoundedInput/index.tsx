import React from 'react';
import './RoundedInput.scss';
import { TEXT, NUMBER } from '../../Utils/constants';

interface IRoundedInput {
    type: TEXT | NUMBER;
    placeholder: string;
    onChange: (e) => void;
}

function RoundedInput({
  type, placeholder, onChange,
}: IRoundedInput) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      className="rounded-input"
    />
  );
}

export default RoundedInput;
