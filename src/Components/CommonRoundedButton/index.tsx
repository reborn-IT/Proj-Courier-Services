/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
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
  ClickHandler?: () => void;
  extraTailwindClasses?: string;
  motionDiv?: boolean;
}

function CommonRoundedButton({
  children,
  styles,
  action,
  extraTailwindClasses,
  motionDiv,
  ClickHandler,
}: CommonRoundedButtonProps) {
  const filterMenuOpened = useSelector(getModalState);
  const saveMenuOpened = useSelector(getSaveModalState);
  const dispatch = useDispatch();
  const HandleFilerMenu = async () => {
    switch (action) {
      case CommonButtonActions.OPEN_FILTER:
        dispatch(fetchModalStateRequest(true));
        break;
      case CommonButtonActions.CLOSE_FILTER:
        if (filterMenuOpened) { dispatch(fetchModalStateRequest(false)); }
        break;
      case CommonButtonActions.OPEN_MODAL:
        await dispatch(fetchModalStateRequest(false));
        if (saveMenuOpened) { dispatch(fetchSaveModalStateRequest(true)); }
        break;
      default: break;
    }
    if (ClickHandler) { ClickHandler(); }
  };
  if (motionDiv) {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        className={`become-provider px-5 py-3 md:py-4 rounded-full bg-drop-primary text-drop-white w-auto whitespace-nowrap ${extraTailwindClasses}`}
        style={{ ...styles }}
        onClick={() => HandleFilerMenu()}
      >
        {children}
      </motion.button>
    );
  }
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

CommonRoundedButton.defaultProps = {
  styles: {},
  action: '',
  extraTailwindClasses: '',
  motionDiv: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ClickHandler: () => {},
};

export default CommonRoundedButton;
