import React from 'react';
import './CommonRoundedButton.scss';

export interface CommonRoundedButtonProps {
  label: string
}

function CommonRoundedButton({ label }) {
  return (
    <button type="button" className="become-provider">{label}</button>
  );
}

export default CommonRoundedButton;
