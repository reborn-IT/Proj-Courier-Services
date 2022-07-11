/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import React, { ChangeEvent } from "react";
import { NUMBER, TEL, TEXT } from "../../Utils/constants";

interface IFilterMenuInput {
  type: TEXT | NUMBER | TEL;
  placeholder: string;
  extraTailwindCSS?: string;
  onChangeHandler: (e: any) => void;
  value: string | number | null;
  styles?: object;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extraAttributes?: any;
  innerRef?: React.Ref<any>;
}
function FilterMenuInput({
  type,
  placeholder,
  extraTailwindCSS,
  onChangeHandler,
  value,
  styles,
  extraAttributes,
  innerRef,
}: IFilterMenuInput) {
  function takeValue(e: ChangeEvent<HTMLInputElement>) {
    onChangeHandler(e);
  }

  return (
    <input
      ref={innerRef}
      type={type}
      className={`border border-drop-grey rounded-lg p-4 ${extraTailwindCSS}`}
      style={{
        width: "calc(100% - 2rem)",
        ...styles,
      }}
      placeholder={placeholder}
      value={value}
      onWheel={(e) => e.currentTarget.blur()}
      onChange={(e: ChangeEvent<HTMLInputElement>) => takeValue(e)}
      {...extraAttributes}
    />
  );
}

FilterMenuInput.defaultProps = {
  extraTailwindCSS: "",
  styles: {},
  extraAttributes: "",
  innerRef: null,
};

export default FilterMenuInput;
