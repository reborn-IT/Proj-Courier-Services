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
    description: string;
    address: string;
    bannerURL: string;
    rating: number;
    website: string;
}

export const RESULTSCARD_DATA: IResultCardData[] = [
  {
    id: 1,
    title: 'Domex Courier Service',
    description: 'With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.',
    address: '432/C, Galle Road, Pelmadulla',
    bannerURL: 'https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80',
    rating: 3.5,
    website: 'domex.lk',
  },
  {
    id: 2,
    title: 'Pronto Courier Service',
    description: 'With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.',
    address: 'No:5, School Lane, Gampaha',
    bannerURL: 'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
    rating: 3.1,
    website: 'pronto.lk',
  },
  {
    id: 3,
    title: 'Koombiyo Courier Service',
    description: 'With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.',
    address: 'Colombo - Batticaloa Hwy, Pelmadulla',
    bannerURL: 'https://images.unsplash.com/photo-1572195577046-2f25894c06fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    rating: 1.8,
    website: 'koombiyo.lk',
  },
  {
    id: 4,
    title: 'Kaputas Courier Service',
    description: 'With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.',
    address: 'PATHULPANA, Ratnapura',
    bannerURL: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    rating: 5.0,
    website: 'kaputas.gov',
  },
  {
    id: 5,
    title: 'Trango Courier Service',
    description: 'With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.',
    address: 'Mahalla Rd, Ruwanwella',
    bannerURL: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    rating: 2.2,
    website: 'trango.me',
  },
  {
    id: 6,
    title: 'Levis Courier Service',
    description: 'With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.',
    address: '66/20 New, Ratnapura Road, Avissawella 10700',
    bannerURL: 'https://images.unsplash.com/photo-1449247666642-264389f5f5b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    rating: 4.7,
    website: 'levis.cart',
  },
  {
    id: 7,
    title: 'Pandora Courier Service',
    description: 'With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.',
    address: '16 Ward Pl, Colombo 00700',
    bannerURL: 'https://images.unsplash.com/photo-1549194388-f61be84a6e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    rating: 4.8,
    website: 'pandora.nirupama',
  },
  {
    id: 8,
    title: 'Vietnam Courier Service',
    description: 'With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.',
    address: '200/2 Cotta Rd, Colombo 00800',
    bannerURL: 'https://images.unsplash.com/photo-1551825687-f9de1603ed8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    rating: 1.2,
    website: 'vietnam.vn',
  },
  {
    id: 9,
    title: 'Craco Courier Service',
    description: 'With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.',
    address: '590 Colombo - Galle Main Rd, Colombo 00300',
    bannerURL: 'https://images.unsplash.com/photo-1624008915317-cb3ad69b16ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    rating: 0.9,
    website: 'craco.lk',
  },
  {
    id: 10,
    title: 'Soulte Courier Service',
    description: 'With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.',
    address: '3 Alfred Pl, Colombo 00300',
    bannerURL: 'https://images.unsplash.com/photo-1607273685680-6bd976c5a5ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
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
    <div className="results-cards-wrapper flex flex-col w-full px-4">
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
