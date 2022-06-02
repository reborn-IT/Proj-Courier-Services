/* eslint-disable max-len */
import React, { useRef, useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useSelector } from 'react-redux';
import { RoundedInput } from '../../../Components';
import { PaginatedItems, DeleteConfirmationModal } from '../../../Lib';

import 'bootstrap-icons/font/bootstrap-icons.css';
import { getDeletingFilterLogList } from '../../../Store/DeletingFilterCards/selectors';

function FilterLog() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchInput, setSearchInput] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState<boolean>(false);
  const filterLogRef = useRef(null);
  const currentDeletingList = useSelector(getDeletingFilterLogList);
  const searchHandler = (value: string) => {
    setSearchInput(value);
  };

  function deleteHandler() {
    if (currentDeletingList) {
      if (currentDeletingList?.length >= 1) { setOpenDeleteConfirmation(true); }
    }
    disableBodyScroll(filterLogRef.current);
  }

  return (
    <>
      <DeleteConfirmationModal
        openState={openDeleteConfirmation}
        closeHandler={() => {
          setOpenDeleteConfirmation(false);
          enableBodyScroll(filterLogRef.current);
        }}
        description={['Delete?', 'Do you want to delete selected filter logs?']}
        links={[
          {
            id: 1,
            linkName: 'Cancel',
            linkTo: '',
          },
          {
            id: 2,
            linkName: 'Delete',
            linkTo: '',
            color: 'bg-drop-red',
          },
        ]}
      />
      <div className="mt-12 md:mt-12">
        <RoundedInput
          onChange={(e) => searchHandler(e.target.value)}
          placeholder="Search for courier services..."
          type="text"
          value={searchInput}
          extraTailwindClasses="w-full"
        />
        <div
          style={{
            borderStyle: 'solid',
          }}
          className="flex items-center justify-between pb-1 mb-3 border-b-2 border-drop-scrollbar/80"
        >
          <p className="mt-5 font-semibold text-drop-textshaded mb-6">Showing 10 of 291 results</p>
          <div className="flex items-center space-x-4">
            <button type="button" onClick={() => deleteHandler()} ref={filterLogRef} disabled={!isDeleting} className={`text-drop-red text-2xl ${isDeleting ? 'cursor-pointer' : 'disabled:opacity-60 disabled:cursor-not-allowed'}`}>
              <i className="bi bi-trash3" />
            </button>
            <button type="button" onClick={() => setIsDeleting(!isDeleting)} className="text-drop-grey text-2xl">
              <i className="bi bi-three-dots-vertical" />
            </button>
          </div>
        </div>
        <PaginatedItems deleting={isDeleting} cardType="filterlogcard" itemsPerPage={5} />
      </div>
    </>
  );
}

export default FilterLog;
