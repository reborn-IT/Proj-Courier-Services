import React, { useState } from 'react';
import './SearchableDropDown.scss';

enum SearchableDropDownEnums {
  CREATE_NEW_TITLE = 'Create new title'
}

interface SearchableDropDownInterface {
  data: string[];
  placeholder: string;
  reset: boolean;
  createmode: boolean;
}

function SearchableDropDown({
  data,
  placeholder,
  reset,
  createmode,
}: SearchableDropDownInterface) {
  const [input, setInput] = useState<string>('');
  const [ListOpened, setListOpened] = useState<boolean>(true);
  const [List, setList] = useState<string[]>(data);
  const [createModeStatus, setCreateModeStatus] = useState<boolean>(false);

  const filterList = (needle: string) => {
    const query: string = needle.toLowerCase();
    const sortedData = data
      .filter((item: string) => item.toLowerCase().indexOf(query) >= 0);
    if (createmode) {
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
        (oldList) => [...oldList, SearchableDropDownEnums.CREATE_NEW_TITLE],
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
    <div className="searchable-dropdown">
      <svg
        width={20}
        height={20}
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
        placeholder={placeholder}
        onFocus={() => setListOpened(false)}
        onChange={(e) => inputHandler(e)}
        value={reset ? input : ''}
      />

      <ul
        className={`price-list ${ListOpened ? 'hide' : ''}`}
      >
        {
                  List.map((item) => (
                    <button
                      type="button"
                      onClick={() => buttonClickHandler(item)}
                      className={`${
                        item === SearchableDropDownEnums.CREATE_NEW_TITLE
                          ? 'create-button'
                          : ''}`}
                    >
                      {item}

                    </button>
                  ))
                }
      </ul>
    </div>
  );
}

export default SearchableDropDown;
