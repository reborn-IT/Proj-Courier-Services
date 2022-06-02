/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import React from 'react';
import { TEXT, NUMBER, TEL } from '../../Utils/constants';

interface IFilterMenuInput {
    type: TEXT | NUMBER | TEL;
    placeholder: string;
    extraTailwindCSS?: string;
    onChangeHandler?: (e) => void;
    value?: string | number;
    styles?: object;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    extraAttributes?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  return (
    <input
      ref={innerRef}
      type={type}
      className={`border border-drop-grey rounded-lg p-4 ${extraTailwindCSS}`}
      style={{
        width: 'calc(100% - 2rem)',
        ...styles,
      }}
      placeholder={placeholder}
      onChange={(e) => onChangeHandler && onChangeHandler(e)}
      value={value}
      {...extraAttributes}
    />
  );
}

FilterMenuInput.defaultProps = {
  extraTailwindCSS: '',
  // eslint-disable-next-line no-console
  onChangeHandler: () => { console.warn('Add Onchange Handler'); },
  value: '',
  styles: {},
  extraAttributes: '',
  innerRef: null,
};

export default FilterMenuInput;
