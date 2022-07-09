/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import * as React from "react";
import { InputTypes } from "../../Utils/constants";

interface InputInterface {
  placeholder: string;
  OnChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  type: InputTypes;
}

interface FormInputInterface {
  label: string;
  icon: JSX.Element;
  input: InputInterface;
  extraTailwindCss?: string;
  extra?: any;
  errorStylesTailwind?: string;
}

function FormInput({
  icon,
  input,
  label,
  extraTailwindCss,
  extra,
  errorStylesTailwind,
}: FormInputInterface) {
  return (
    <>
      <p className="block mb-2 font-medium text-drop-grey">{label}</p>
      <div className="relative text-drop-primary">
        <div
          className={`absolute text-xl inset-y-0 left-0 flex items-center pl-3 pointer-events-none ${errorStylesTailwind}`}
        >
          {icon}
        </div>
        <input
          onChange={(e) => input.OnChange && input.OnChange(e)}
          type={input.type}
          className={`border w-full border-drop-primary text-gray-900 rounded-xl focus:ring-blue-500 focus:border-blue-500 block pl-10 pr-5 py-4 ${extraTailwindCss} ${errorStylesTailwind}`}
          placeholder={input?.placeholder}
          value={input.defaultValue}
          {...extra}
        />
      </div>
    </>
  );
}

FormInput.defaultProps = {
  extraTailwindCss: "",
  extra: {},
  errorStylesTailwind: "",
};

export default FormInput;
