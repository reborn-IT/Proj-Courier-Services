/* eslint-disable max-len */
import React, { useState } from 'react';

const LIST_VALUES = [
  {
    id: 1,
    value: 'Rating High to Low',
    icon: 'bi-caret-up-fill',
  },
  {
    id: 2,
    value: 'Rating Low to High',
    icon: 'bi-caret-down-fill',
  },
];

function StaticDropDownRounded() {
  const [listOpened, setListOpened] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(null);
  return (
    <button
      type="button"
      className="searchable-dropdown relative mt-5 md:mt-0 text-sm md:text-base"
      onClick={() => setListOpened(!listOpened)}
    >
      <div className="flex flex-col items-center absolute right-4 top-1/2 transform -translate-y-1/2 text-drop-primary">
        <i className="bi bi-caret-up -mb-1" />
        <i className="bi bi-caret-down" />
      </div>
      <input
        type="text"
        className="border border-drop-primary w-full md:w-auto p-3 md:p-4 rounded-full placeholder:text-drop-primary"
        placeholder="Rating High to Low"
        value={selectedValue}
      />
      <ul
        className={`price-list absolute -bottom-1/2 left-0 right-0 bg-drop-white text-drop-grey overflow-hidden flex-col rounded-lg ${listOpened ? 'flex' : 'hidden'}`}
      >
        {
          LIST_VALUES.map(({ id, value, icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setSelectedValue(value)}
              className="capitalize flex items-center space-x-2 px-4 py-3 transition-all duration-100 ease-linear text-left hover:bg-drop-blue hover:text-white"
            >
              <p>{value}</p>
              <i className={`bi ${icon}`} />
            </button>

          ))
        }
      </ul>
    </button>
  );
}

export default StaticDropDownRounded;
