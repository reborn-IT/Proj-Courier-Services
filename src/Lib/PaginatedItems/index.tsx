/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { FilterLogCard, ResultCard } from '../../Components';
import './PaginatedItems.scss';
import {
  RESULTCARD, FILTERLOGCARD, HIGH_TO_LOW, LOW_TO_HIGH, BEST_MATCH,
} from '../../Utils/constants';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { IFilterLogCardData } from '../../Components/FilterLogCard';

interface IPaginatedItems {
    itemsPerPage: number;
    cardType: RESULTCARD | FILTERLOGCARD;
}

interface IResultCardData {
    id: number;
    title: string;
    address: string;
    rating: number;
    website: string;
}

const RESULTSCARD_DATA: IResultCardData[] = [
  {
    id: 1,
    title: 'Domex Courier Service',
    address: '432/C, Galle Road, Pelmadulla',
    rating: 3.5,
    website: 'domex.lk',
  },
  {
    id: 2,
    title: 'Pronto Courier Service',
    address: 'No:5, School Lane, Gampaha',
    rating: 3.1,
    website: 'pronto.lk',
  },
  {
    id: 3,
    title: 'Koombiyo Courier Service',
    address: 'Colombo - Batticaloa Hwy, Pelmadulla',
    rating: 1.8,
    website: 'koombiyo.lk',
  },
  {
    id: 4,
    title: 'Kaputas Courier Service',
    address: 'PATHULPANA, Ratnapura',
    rating: 5.0,
    website: 'kaputas.gov',
  },
  {
    id: 5,
    title: 'Trango Courier Service',
    address: 'Mahalla Rd, Ruwanwella',
    rating: 2.2,
    website: 'trango.me',
  },
  {
    id: 6,
    title: 'Levis Courier Service',
    address: '66/20 New, Ratnapura Road, Avissawella 10700',
    rating: 4.7,
    website: 'levis.cart',
  },
  {
    id: 7,
    title: 'Pandora Courier Service',
    address: '16 Ward Pl, Colombo 00700',
    rating: 4.8,
    website: 'pandora.nirupama',
  },
  {
    id: 8,
    title: 'Vietnam Courier Service',
    address: '200/2 Cotta Rd, Colombo 00800',
    rating: 1.2,
    website: 'vietnam.vn',
  },
  {
    id: 9,
    title: 'Craco Courier Service',
    address: '590 Colombo - Galle Main Rd, Colombo 00300',
    rating: 0.9,
    website: 'craco.lk',
  },
  {
    id: 10,
    title: 'Soulte Courier Service',
    address: '3 Alfred Pl, Colombo 00300',
    rating: 4.9,
    website: 'soulte.ma',
  },
];

const FILTER_LOG_DATA: IFilterLogCardData[] = [
  {
    id: 1,
    title: 'Fragile Special Delivery Office Panadura',
    weight: 3.4,
    scheduled: true,
    to: 'Kalmunai',
    from: 'Panadura',
    cost: 'High to Low',
    date: '2022/03/12',
    time: '09.23 a.m',
  },
  {
    id: 2,
    title: 'Fragile Special Delivery Office Panadura',
    weight: 3.4,
    scheduled: true,
    to: 'Kalmunai',
    from: 'Panadura',
    cost: 'High to Low',
    date: '2022/03/12',
    time: '09.23 a.m',
  },
  {
    id: 3,
    title: 'Fragile Special Delivery Office Panadura',
    weight: 3.4,
    scheduled: true,
    to: 'Kalmunai',
    from: 'Panadura',
    cost: 'High to Low',
    date: '2022/03/12',
    time: '09.23 a.m',
  },
  {
    id: 4,
    title: 'Fragile Special Delivery Office Panadura',
    weight: 3.4,
    scheduled: true,
    to: 'Kalmunai',
    from: 'Panadura',
    cost: 'High to Low',
    date: '2022/03/12',
    time: '09.23 a.m',
  },
  {
    id: 5,
    title: 'Fragile Special Delivery Office Panadura',
    weight: 3.4,
    scheduled: true,
    to: 'Kalmunai',
    from: 'Panadura',
    cost: 'High to Low',
    date: '2022/03/12',
    time: '09.23 a.m',
  },
  {
    id: 6,
    title: 'Fragile Special Delivery Office Panadura',
    weight: 3.4,
    scheduled: true,
    to: 'Kalmunai',
    from: 'Panadura',
    cost: 'High to Low',
    date: '2022/03/12',
    time: '09.23 a.m',
  },
  {
    id: 7,
    title: 'Fragile Special Delivery Office Panadura',
    weight: 3.4,
    scheduled: true,
    to: 'Kalmunai',
    from: 'Panadura',
    cost: 'High to Low',
    date: '2022/03/12',
    time: '09.23 a.m',
  },
  {
    id: 8,
    title: 'Fragile Special Delivery Office Panadura',
    weight: 3.4,
    scheduled: true,
    to: 'Kalmunai',
    from: 'Panadura',
    cost: 'High to Low',
    date: '2022/03/12',
    time: '09.23 a.m',
  },
  {
    id: 9,
    title: 'Fragile Special Delivery Office Panadura',
    weight: 3.4,
    scheduled: true,
    to: 'Kalmunai',
    from: 'Panadura',
    cost: 'High to Low',
    date: '2022/03/12',
    time: '09.23 a.m',
  },
  {
    id: 10,
    title: 'Fragile Special Delivery Office Panadura',
    weight: 3.4,
    scheduled: true,
    to: 'Kalmunai',
    from: 'Panadura',
    cost: 'High to Low',
    date: '2022/03/12',
    time: '09.23 a.m',
  },
];

interface IItems {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    currentItems: any;
    cardType: RESULTCARD | FILTERLOGCARD;
}

function Items({ cardType, currentItems }: IItems) {
  return (
    <div className="results-cards-wrapper lg:max-h-[80vh] lg:overflow-y-auto flex flex-col w-full px-4">
      {
        cardType === 'resultcard'
          ? currentItems && currentItems.map(({
            id,
            title,
            address,
            rating,
            website,
          }) => (
            <ResultCard
              id={id}
              key={id}
              title={title}
              address={address}
              rating={rating}
              website={website}
            />
          )) : currentItems && currentItems.map(({
            id,
            title,
            weight,
            scheduled,
            to,
            from,
            cost,
            date,
            time,
          }) => (
            <FilterLogCard
              id={id}
              key={id}
              title={title}
              weight={weight}
              scheduled={scheduled}
              to={to}
              from={from}
              cost={cost}
              date={date}
              time={time}
              extraTailWindClasses="mb-3"
            />
          ))
}
    </div>
  );
}

function PaginatedItems({ itemsPerPage, cardType }: IPaginatedItems) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    switch (cardType) {
      case 'resultcard':
        setCurrentItems(RESULTSCARD_DATA.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(RESULTSCARD_DATA.length / itemsPerPage));
        break;
      case 'filterlogcard':
        setCurrentItems(FILTER_LOG_DATA.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(FILTER_LOG_DATA.length / itemsPerPage));
        break;
      default:
        break;
    }
  }, [itemOffset, itemsPerPage, cardType]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % RESULTSCARD_DATA.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items
        cardType={cardType}
        currentItems={currentItems}
      />
      <div className="pagination mt-4 text-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}

export default PaginatedItems;
