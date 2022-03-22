import React, { useState } from 'react';
import './SearchableDropDown.scss';

interface SearchableDropDownInterface {
  data: string[];
}

function SearchableDropDown({ data }: SearchableDropDownInterface) {
  const [input, setInput] = useState<string>('');
  const [ListOpened, setListOpened] = useState<boolean>(true);
  const [List, setList] = useState<string[]>(data);

  const filterList = (needle: string) => {
    const query: string = needle.toLowerCase();
    setList(data.filter(
      (item: string) => item.toLowerCase().indexOf(query) >= 0,
    ));
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
        placeholder="Price High to Low"
        onFocus={() => setListOpened(false)}
                // onBlur={() => setPriceListOpened(true)}
        onChange={(e) => setNewList(e)}
        value={input}
      />

      <ul
        className={`price-list ${ListOpened ? 'hide' : ''}`}
      >
        {
                  List.map((item) => (
                    <button
                      type="button"
                      onClick={() => setChecked(item)}
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
