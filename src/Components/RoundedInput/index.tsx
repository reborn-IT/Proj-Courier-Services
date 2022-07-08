/* eslint-disable max-len */
import React from "react";
import { TEXT, NUMBER } from "../../Utils/constants";

interface IRoundedInput {
  type: TEXT | NUMBER;
  placeholder: string;
  onChange: (e) => void;
}

function RoundedInput({ type, placeholder, onChange }: IRoundedInput) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      className="rounded-input ml-2 md:ml-0 flex-1 border border-drop-primary rounded-full p-3 md:p-4 text-sm md:text-base"
    />
  );
}

export default RoundedInput;
