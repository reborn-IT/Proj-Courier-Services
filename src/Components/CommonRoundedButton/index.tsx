/* eslint-disable react/require-default-props */
import React from 'react';
import './CommonRoundedButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeFilterMenuState,
  changeSaveFilterModalState,
} from '../../Features/Slices/FilterMenu';
import { RootStateInterface } from '../../App/RootState';

export enum CommonButtonActions {
  OPEN_FILTER= 'OPEN_FILTER',
  CLOSE_FILTER = ' CLOSE_FILTER',
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL'
}

export interface CommonRoundedButtonProps {
  label: string;
  styles?: object;
  action?: CommonButtonActions;
}

function CommonRoundedButton({
  label,
  styles,
  action,
}: CommonRoundedButtonProps) {
  // eslint-disable-next-line max-len
  const filterMenuOpened = useSelector<RootStateInterface, boolean>((state) => state.FilterMenuReducer.filterMenuOpened);
  // eslint-disable-next-line max-len
  const saveFilterMenuOpened = useSelector<RootStateInterface, boolean>((state) => state.FilterMenuReducer.SaveFilterModalOpened);
  const dispatch = useDispatch();
  const HandleFilerMenu = () => {
    switch (action) {
      case CommonButtonActions.OPEN_FILTER:
      case CommonButtonActions.CLOSE_FILTER:
        dispatch(changeFilterMenuState({
          filterMenuOpened: !filterMenuOpened,
          SaveFilterModalOpened: saveFilterMenuOpened,
        }));
        break;
      case CommonButtonActions.OPEN_MODAL:
        dispatch(changeSaveFilterModalState({
          filterMenuOpened,
          SaveFilterModalOpened: !saveFilterMenuOpened,
        }));
        break;
      default: break;
    }
  };

  return (
    <button
      type="button"
      className="become-provider"
      style={{ ...styles }}
      onClick={() => HandleFilerMenu()}
    >
      {label}

    </button>
  );
}

export default CommonRoundedButton;
