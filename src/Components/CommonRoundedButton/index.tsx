import React from 'react';
import './CommonRoundedButton.scss';

export interface CommonRoundedButtonProps {
  label: string;
  // eslint-disable-next-line react/require-default-props
  styles?: object;
}

function CommonRoundedButton({ label, styles }: CommonRoundedButtonProps) {
  return (
    <button
      type="button"
      className="become-provider"
      style={{ ...styles }}
    >
      {label}

    </button>
  );
}

export default CommonRoundedButton;
