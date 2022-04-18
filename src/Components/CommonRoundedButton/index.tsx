/* eslint-disable react/require-default-props */
import React from 'react';
import './CommonRoundedButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getModalState } from '../../Store/FilterMenuModal/selectors';
import { getSaveModalState } from '../../Store/SaveFilterModal/selectors';
import { fetchModalStateRequest } from '../../Store/FilterMenuModal/actions';
import {
  fetchSaveModalStateRequest,
} from '../../Store/SaveFilterModal/actions';

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
  const filterMenuOpened = useSelector(getModalState);
  const saveMenuOpened = useSelector(getSaveModalState);
  const dispatch = useDispatch();
  const HandleFilerMenu = () => {
    switch (action) {
      case CommonButtonActions.OPEN_FILTER:
      case CommonButtonActions.CLOSE_FILTER:
        dispatch(fetchModalStateRequest(filterMenuOpened));
        break;
      case CommonButtonActions.OPEN_MODAL:
        dispatch(fetchSaveModalStateRequest(saveMenuOpened));
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
