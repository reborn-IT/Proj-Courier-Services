/* eslint-disable max-len */
import React, { useState } from "react";
import { RoundedInput } from "../../../Components";
import { PaginatedItems } from "../../../Lib";

function Favorites() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchInput, setSearchInput] = useState<string>("");
  const searchHandler = (value: string) => {
    setSearchInput(value);
  };
  return (
    <div className="mt-8 md:mt-12">
      <RoundedInput
        onChange={(e) => searchHandler(e.target.value)}
        placeholder="Search for courier services..."
        type="text"
        value=""
        extraTailwindClasses="w-full"
      />
      <p className="mt-5 font-semibold text-drop-textshaded mb-6">
        Showing 5 of 10 results
      </p>
      <PaginatedItems deleting={false} cardType="resultcard" itemsPerPage={5} />
    </div>
  );
}

export default Favorites;
