/* eslint-disable max-len */
import React, { useState } from 'react';

enum SearchableDropDownEnums {
  CREATE_NEW_TITLE = 'Create new title'
}

export interface IDropDownData {
  id: number;
  title: string;
}

interface SearchableDropDownInterface {
  data: IDropDownData[];
  placeholder: string;
  reset: boolean;
  createMode: boolean;
}

function SearchableDropDown({
  data,
  placeholder,
  reset,
  createMode,
}: SearchableDropDownInterface) {
  const [input, setInput] = useState<string>('');
  const [ListOpened, setListOpened] = useState<boolean>(true);
  const [List, setList] = useState<IDropDownData[]>(data);
  const [createModeStatus, setCreateModeStatus] = useState<boolean>(false);

  const filterList = (needle: string) => {
    const query: string = needle.toLowerCase();
    const sortedData = data
      .filter(({ title }) => title.toLowerCase().indexOf(query) >= 0);
    if (createMode) {
      if (sortedData.length === 0) {
        setCreateModeStatus(true);
      }
    }
    setList(sortedData);
  };

  const setNewList = (e) => {
    setInput(e.currentTarget.value);
    if (e.currentTarget.value === '') {
      setList(data);
    } else {
      filterList(input);
    }
  };

  const setChecked = (item: string) => {
    setInput(item);
    setListOpened(true);
  };

  const inputHandler = (e) => {
    setNewList(e);
    if (createModeStatus) {
      setList(
        (oldList) => [...oldList, { id: oldList[oldList.length].id + 1, title: SearchableDropDownEnums.CREATE_NEW_TITLE }],
      );
    }
  };

  const buttonClickHandler = (item: string) => {
    if (item === SearchableDropDownEnums.CREATE_NEW_TITLE) {
      setChecked(input);
    } else {
      setChecked(item);
    }
  };

  return (
    <div
      className="searchable-dropdown relative"
      style={{
        width: 'calc(100% - 2rem)',
      }}
    >
      <svg
        className="h-6 w-6 absolute top-4 right-6 z-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
      <input
        type="text"
        className="border border-drop-primary p-4 rounded-xl w-full"
        placeholder={placeholder}
        onFocus={() => setListOpened(false)}
        onChange={(e) => inputHandler(e)}
        value={reset ? input : ''}
        style={{
          width: 'width: calc(100% - 2rem)',
        }}
      />

      <ul
        className={`price-list bg-drop-white text-drop-grey overflow-hidden flex-col rounded-lg ${ListOpened ? 'hidden' : 'flex'}`}
      >
        {
                  List.map(({ id, title }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => buttonClickHandler(title)}
                      className={`capitalize px-4 py-3 transition-all duration-100 ease-linear text-left hover:bg-drop-blue hover:text-white ${
                        title === SearchableDropDownEnums.CREATE_NEW_TITLE
                          ? 'text-drop-white bg-drop-blue'
                          : ''}`}
                    >
                      {title}

                    </button>
                  ))
                }
      </ul>
    </div>
  );
}

export default SearchableDropDown;
