/* eslint-disable max-len */
import React, { useState } from 'react';
import { RoundedInput } from '../../../Components';
import { PaginatedItems } from '../../../Lib';

function FilterLog() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchInput, setSearchInput] = useState<string>(null);
  const searchHandler = (value: string) => {
    setSearchInput(value);
  };
  return (
    <div className="mt-12 md:mt-12">
      <RoundedInput
        onChange={(e) => searchHandler(e.target.value)}
        placeholder="Search for courier services..."
        type="text"
        extraTailwindClasses="w-full"
      />
      <p className="mt-5 font-semibold text-drop-textshaded mb-6">Showing 10 of 291 results</p>
      <PaginatedItems cardType="filterlogcard" itemsPerPage={5} />
    </div>
  );
}

export default FilterLog;
