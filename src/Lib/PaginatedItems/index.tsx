/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { ResultCard } from '../../Components';
import './PaginatedItems.scss';

interface IPaginatedItems {
    itemsPerPage: number;
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

interface IItems {
    currentItems: IResultCardData[];
}

function Items({ currentItems }: IItems) {
  return (
    <div className="results-cards-wrapper lg:max-h-[80vh] lg:overflow-y-auto flex flex-col w-full">
      {currentItems && currentItems.map(({
        title,
        address,
        rating,
        website,
      }) => (
        <ResultCard
          title={title}
          address={address}
          rating={rating}
          website={website}
        />
      ))}
    </div>
  );
}

function PaginatedItems({ itemsPerPage }: IPaginatedItems) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(RESULTSCARD_DATA.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(RESULTSCARD_DATA.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % RESULTSCARD_DATA.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items
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
