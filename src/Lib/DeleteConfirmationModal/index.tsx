/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { CommonRoundedButton, ModalCloseButton } from '../../Components';

interface LinksI {
    id: number;
    linkName: string;
    linkTo: string;
    color?: string;
}

interface DeleteConfirmationModalI {
    openState: boolean;
    description: [string, string];
    links: LinksI[];
    closeHandler: () => void;
}

function DeleteConfirmationModal({
  openState, description, links, closeHandler,
}: DeleteConfirmationModalI) {
  return (
    <div className={`${openState ? 'block' : 'hidden'} rounded-2xl p-8 bg-drop-white z-50 overflow-y-auto h-auto drop-shadow-2xl fixed top-1/2 left-1/2 transform -translate-x-1/2`}>
      <div className="flex items-center justify-between">
        <h4 className="text-4xl text-drop-primary font-semibold">{description[0]}</h4>
        <ModalCloseButton ClickHandler={() => closeHandler()} />
      </div>
      <p className="text-base lg:text-xl font-semibold my-8 text-drop-grey">{description[1]}</p>
      <div className="flex items-center justify-end">
        {
        links.map(({
          id, linkName, linkTo, color,
        }) => (

          <CommonRoundedButton key={id} extraTailwindClasses={`mr-4 ${color}`}>
            <Link to={linkTo}>
              {linkName}
            </Link>
          </CommonRoundedButton>
        ))
      }
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
