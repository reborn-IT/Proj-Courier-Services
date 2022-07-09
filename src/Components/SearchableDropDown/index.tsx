/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import { v4 as UniqueId } from "uuid";

enum SearchableDropDownEnums {
  CREATE_NEW_TITLE = "Create new title",
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
  const [uniqueKey, setUniqueKey] = useState<string>();
  const [input, setInput] = useState<string>("");
  const [List, setList] = useState<IDropDownData[]>(data);
  const [createModeStatus, setCreateModeStatus] = useState<boolean>(false);

  const filterList = (needle: string) => {
    const query: string = needle.toLowerCase();
    const sortedData = data.filter(
      ({ title }) => title.toLowerCase().indexOf(query) >= 0,
    );
    if (createMode) {
      if (sortedData.length === 0) {
        setCreateModeStatus(true);
      }
    }
    setList(sortedData);
  };

  const setNewList = (e: any) => {
    setInput(e.currentTarget.value);
    if (e.currentTarget.value === "") {
      setList(data);
    } else {
      filterList(input);
    }
  };

  const setChecked = (item: string) => {
    setInput(item);
  };

  const inputHandler = (e: any) => {
    setNewList(e);
    if (createModeStatus) {
      setList((oldList) => [
        ...oldList,
        {
          id: oldList[oldList.length].id + 1,
          title: SearchableDropDownEnums.CREATE_NEW_TITLE,
        },
      ]);
    }
  };

  const buttonClickHandler = (item: string) => {
    if (item === SearchableDropDownEnums.CREATE_NEW_TITLE) {
      setChecked(input);
    } else {
      setChecked(item);
    }
  };

  useEffect(() => {
    setUniqueKey(UniqueId());
  }, []);

  return (
    <>
      <button
        type="button"
        className="w-full"
        id={`dropdownDefault-${uniqueKey}`}
        data-dropdown-toggle={`dropdown-${uniqueKey}`}
      >
        <input
          type="text"
          className="border border-drop-primary p-4 rounded-xl w-full"
          placeholder={placeholder}
          onChange={(e) => inputHandler(e)}
          value={reset ? input : ""}
        />
      </button>
      <div
        id={`dropdown-${uniqueKey}`}
        style={{
          width: "calc(100% - 2rem)",
        }}
        className="price-list z-10 hidden bg-drop-white shadow-xl text-drop-grey overflow-hidden rounded-lg"
      >
        <ul
          className="py-1 text-sm text-gray-700 overflow-hidden"
          aria-labelledby={`dropdownDefault-${uniqueKey}`}
        >
          {List.map(({ id, title }) => (
            <button
              key={id}
              type="button"
              onClick={() => buttonClickHandler(title)}
              className={`capitalize block w-full px-4 py-3 transition-all duration-100 ease-linear text-left hover:bg-drop-blue hover:text-white ${
                title === SearchableDropDownEnums.CREATE_NEW_TITLE
                  ? "text-drop-white bg-drop-blue"
                  : ""
              }`}
            >
              {title}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchableDropDown;
