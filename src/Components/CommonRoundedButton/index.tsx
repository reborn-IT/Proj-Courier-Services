/* eslint-disable react/require-default-props */
import React from 'react';
import './CommonRoundedButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterMenuState } from '../../Features/Slices/FilterMenu';
import { RootStateInterface } from '../../App/RootState';

export interface CommonRoundedButtonProps {
  label: string;
  styles?: object;
  action?: string;
}

function CommonRoundedButton({
  label,
  styles,
  action,
}: CommonRoundedButtonProps) {
  // eslint-disable-next-line max-len
  const filterMenuOpened = useSelector<RootStateInterface, boolean>((state) => state.FilterMenuReducer.filterMenuOpened);
  const dispatch = useDispatch();
  const OpenFilerMenu = () => {
    if (action === 'openfilter') {
      dispatch(changeFilterMenuState({ filterMenuOpened: !filterMenuOpened }));
    }
  };

  return (
    <button
      type="button"
      className="become-provider"
      style={{ ...styles }}
      onClick={() => OpenFilerMenu()}
    >
      {label}

    </button>
  );
}

export default CommonRoundedButton;
