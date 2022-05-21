/* eslint-disable max-len */
import React, { useState } from 'react';
import { HIGH_TO_LOW, LOW_TO_HIGH, BEST_MATCH } from '../../Utils/constants';
import './FilterLogCard.scss';

export interface IFilterLogCardData {
    id: number;
    title: string;
    weight: number;
    scheduled: boolean;
    from: string;
    to: string;
    cost: HIGH_TO_LOW | LOW_TO_HIGH | BEST_MATCH;
    date: string;
    time: string;
    // eslint-disable-next-line react/require-default-props
    extraTailWindClasses?: string;
}

function FilterLogCard({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id, title, weight, scheduled, from, to, cost, date, time, extraTailWindClasses,
}: IFilterLogCardData) {
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);
  const optionHandler = () => {
    setOptionsOpen(!optionsOpen);
  };
  return (
    <div
      className={`filter-log-card px-5 py-5 rounded-2xl bg-drop-white shadow-xl relative min-h-[9rem] overflow-hidden ${extraTailWindClasses}`}
    >
      <div className="title-bar flex items-center justify-between text-drop-grey">
        <h3 className="text-xl md:text-2xl font-semibold">
          {title}
        </h3>
        <button type="button" onMouseDown={() => optionHandler()} onBlur={() => optionHandler()} className="relative">
          <i
            className="bi bi-three-dots text-drop-grey text-2xl"
          />
          <ul
            className={`absolute min-w-[9rem] -bottom-20 right-0 border border-drop-primary z-30 flex flex-col bg-drop-white shadow-2xl rounded-lg overflow-hidden transform transition-transform duration-200 divide-y divide-drop-textshaded divide-opacity-40 ${optionsOpen ? 'scale-100' : 'scale-0'}`}
            style={{
              borderStyle: 'solid',
            }}
          >
            <li
              className="px-6 py-2 hover:bg-drop-primary hover:text-drop-white transition-all duration-200 block"
            >
              <button type="button">
                <i className="bi bi-pencil-square mr-2" />
                Update
              </button>
            </li>
            <li
              className="px-6 py-2 hover:bg-drop-red hover:text-drop-white transition-all duration-200 block"
              style={{
                borderStyle: 'solid',
              }}
            >
              <button type="button">
                <i className="bi bi-trash3 mr-2" />
                Delete
              </button>
            </li>
          </ul>
        </button>
      </div>
      <div className="detailed-row flex flex-wrap text-sm mt-6 mb-5 justify-between">
        <p>
          Weight:
          <span className="text-drop-blue font-semibold ml-1">
            {weight}
          </span>
        </p>
        <p>
          Scheduled:
          <span className="text-drop-blue font-semibold ml-1">
            {scheduled ? 'Yes' : 'N/A'}
          </span>
        </p>
        <p>
          To:
          <span className="text-drop-blue font-semibold ml-1">
            {to}
          </span>
        </p>
        <p>
          From:
          <span className="text-drop-blue font-semibold ml-1">
            {from}
          </span>
        </p>
        <p>
          Cost:
          <span className="text-drop-blue font-semibold ml-1">
            {cost}
          </span>
        </p>
      </div>
      <div className="absolute bottom-3 left-0 right-0 px-4 w-full flex items-center justify-end">
        <p className="text-xs font-semibold">
          {date}
          <span
            className="mr-2"
          />
          {time}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2 w-full bg-drop-primary" />
    </div>
  );
}

export default FilterLogCard;
