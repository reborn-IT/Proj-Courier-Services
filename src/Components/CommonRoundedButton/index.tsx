/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React from 'react';
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  styles?: object;
  action?: CommonButtonActions;
  extraTailwindClasses?: string;
}

function CommonRoundedButton({
  children,
  styles,
  action,
  extraTailwindClasses,
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
      className={`become-provider px-5 py-3 md:py-4 rounded-full bg-drop-primary text-drop-white w-auto whitespace-nowrap ${extraTailwindClasses}`}
      style={{ ...styles }}
      onClick={() => HandleFilerMenu()}
    >
      {children}
    </button>
  );
}

export default CommonRoundedButton;
