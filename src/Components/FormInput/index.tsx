/* eslint-disable max-len */
import React from 'react';

interface InputInterface {
    placeholder: string;
    OnChange?: () => void;
    defaultValue?: string;
}

interface FormInputInterface {
    label: string;
    icon: JSX.Element;
    input: InputInterface;
    extraTailwindCss?: string;
}

function FormInput({
  icon, input, label, extraTailwindCss,
}: FormInputInterface) {
  return (
    <>
      <p className="block mb-2 font-medium text-drop-grey">{label}</p>
      <div className="relative text-drop-primary">
        <div className="absolute text-xl inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {icon}
        </div>
        <input onChange={() => input.OnChange && input.OnChange()} type="text" className={`border w-full border-drop-primary text-gray-900 rounded-xl focus:ring-blue-500 focus:border-blue-500 block pl-10 pr-5 py-4 ${extraTailwindCss}`} placeholder={input?.placeholder} />
      </div>
    </>
  );
}

FormInput.defaultProps = {
  extraTailwindCss: '',
};

export default FormInput;
