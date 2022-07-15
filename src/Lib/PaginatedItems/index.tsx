/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { CustomCheckBox, FilterLogCard, ResultCard } from "../../Components";
import "./PaginatedItems.scss";
import { RESULTCARD, FILTERLOGCARD } from "../../Utils/constants";
import "bootstrap-icons/font/bootstrap-icons.css";
import { IFilterLogCardData } from "../../Components/FilterLogCard";
import { fetchDeletingFilterLogListRequest } from "../../Store/DeletingFilterCards/actions";
import { getDeletingFilterLogList } from "../../Store/DeletingFilterCards/selectors";
import { ResponseObject } from "../../Services/api/apiManager";
import serviceProviderService from "../../Services/serviceProviderService";

interface IPaginatedItems {
  itemsPerPage: number;
  cardType: RESULTCARD | FILTERLOGCARD;
  deleting: boolean;
}

export interface IResultCardData {
  id: number;
  name: string;
  description: string;
  address: string;
  bannerURL: string;
  rating: number;
  website: string;
  hotline: string;
  serviceDto: {
    id: number;
    service: string;
  }[];
}

// export const RESULTSCARD_DATA: IResultCardData[] = [
//   {
//     id: 1,
//     name: "Domex Courier Service",
//     description:
//       "With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.",
//     address: "432/C, Galle Road, Pelmadulla",
//     bannerURL:
//       "https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
//     rating: 3.5,
//     website: "domex.lk",
//   },
//   {
//     id: 2,
//     name: "Pronto Courier Service",
//     description:
//       "With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.",
//     address: "No:5, School Lane, Gampaha",
//     bannerURL:
//       "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
//     rating: 3.1,
//     website: "pronto.lk",
//   },
//   {
//     id: 3,
//     name: "Koombiyo Courier Service",
//     description:
//       "With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.",
//     address: "Colombo - Batticaloa Hwy, Pelmadulla",
//     bannerURL:
//       "https://images.unsplash.com/photo-1572195577046-2f25894c06fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
//     rating: 1.8,
//     website: "koombiyo.lk",
//   },
//   {
//     id: 4,
//     name: "Kaputas Courier Service",
//     description:
//       "With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.",
//     address: "PATHULPANA, Ratnapura",
//     bannerURL:
//       "https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     rating: 5.0,
//     website: "kaputas.gov",
//   },
//   {
//     id: 5,
//     name: "Trango Courier Service",
//     description:
//       "With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.",
//     address: "Mahalla Rd, Ruwanwella",
//     bannerURL:
//       "https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
//     rating: 2.2,
//     website: "trango.me",
//   },
//   {
//     id: 6,
//     name: "Levis Courier Service",
//     description:
//       "With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.",
//     address: "66/20 New, Ratnapura Road, Avissawella 10700",
//     bannerURL:
//       "https://images.unsplash.com/photo-1449247666642-264389f5f5b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
//     rating: 4.7,
//     website: "levis.cart",
//   },
//   {
//     id: 7,
//     name: "Pandora Courier Service",
//     description:
//       "With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.",
//     address: "16 Ward Pl, Colombo 00700",
//     bannerURL:
//       "https://images.unsplash.com/photo-1549194388-f61be84a6e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
//     rating: 4.8,
//     website: "pandora.nirupama",
//   },
//   {
//     id: 8,
//     name: "Vietnam Courier Service",
//     description:
//       "With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.",
//     address: "200/2 Cotta Rd, Colombo 00800",
//     bannerURL:
//       "https://images.unsplash.com/photo-1551825687-f9de1603ed8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
//     rating: 1.2,
//     website: "vietnam.vn",
//   },
//   {
//     id: 9,
//     name: "Craco Courier Service",
//     description:
//       "With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.",
//     address: "590 Colombo - Galle Main Rd, Colombo 00300",
//     bannerURL:
//       "https://images.unsplash.com/photo-1624008915317-cb3ad69b16ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     rating: 0.9,
//     website: "craco.lk",
//   },
//   {
//     id: 10,
//     name: "Soulte Courier Service",
//     description:
//       "With experience and the aptitude of serving the nation for over a decade, The stability and the accuracy gained through our vast years of service and experience, Domex functions with the highest confidence in widest coverage, security and the rapid delivery of your important documents and packages.",
//     address: "3 Alfred Pl, Colombo 00300",
//     bannerURL:
//       "https://images.unsplash.com/photo-1607273685680-6bd976c5a5ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     rating: 4.9,
//     website: "soulte.ma",
//   },
// ];

// const FILTER_LOG_DATA: IFilterLogCardData[] = [
//   {
//     id: 1,
//     title: "Fragile Special Delivery Office Panadura",
//     weight: 3.4,
//     scheduled: true,
//     to: "Kalmunai",
//     from: "Panadura",
//     cost: "High to Low",
//     date: "2022/03/12",
//     time: "09.23 a.m",
//   },
//   {
//     id: 2,
//     title: "Fragile Special Delivery Office Panadura",
//     weight: 3.4,
//     scheduled: true,
//     to: "Kalmunai",
//     from: "Panadura",
//     cost: "High to Low",
//     date: "2022/03/12",
//     time: "09.23 a.m",
//   },
//   {
//     id: 3,
//     title: "Fragile Special Delivery Office Panadura",
//     weight: 3.4,
//     scheduled: true,
//     to: "Kalmunai",
//     from: "Panadura",
//     cost: "High to Low",
//     date: "2022/03/12",
//     time: "09.23 a.m",
//   },
//   {
//     id: 4,
//     title: "Fragile Special Delivery Office Panadura",
//     weight: 3.4,
//     scheduled: true,
//     to: "Kalmunai",
//     from: "Panadura",
//     cost: "High to Low",
//     date: "2022/03/12",
//     time: "09.23 a.m",
//   },
//   {
//     id: 5,
//     title: "Fragile Special Delivery Office Panadura",
//     weight: 3.4,
//     scheduled: true,
//     to: "Kalmunai",
//     from: "Panadura",
//     cost: "High to Low",
//     date: "2022/03/12",
//     time: "09.23 a.m",
//   },
//   {
//     id: 6,
//     title: "Fragile Special Delivery Office Panadura",
//     weight: 3.4,
//     scheduled: true,
//     to: "Kalmunai",
//     from: "Panadura",
//     cost: "High to Low",
//     date: "2022/03/12",
//     time: "09.23 a.m",
//   },
//   {
//     id: 7,
//     title: "Fragile Special Delivery Office Panadura",
//     weight: 3.4,
//     scheduled: true,
//     to: "Kalmunai",
//     from: "Panadura",
//     cost: "High to Low",
//     date: "2022/03/12",
//     time: "09.23 a.m",
//   },
//   {
//     id: 8,
//     title: "Fragile Special Delivery Office Panadura",
//     weight: 3.4,
//     scheduled: true,
//     to: "Kalmunai",
//     from: "Panadura",
//     cost: "High to Low",
//     date: "2022/03/12",
//     time: "09.23 a.m",
//   },
//   {
//     id: 9,
//     title: "Fragile Special Delivery Office Panadura",
//     weight: 3.4,
//     scheduled: true,
//     to: "Kalmunai",
//     from: "Panadura",
//     cost: "High to Low",
//     date: "2022/03/12",
//     time: "09.23 a.m",
//   },
//   {
//     id: 10,
//     title: "Fragile Special Delivery Office Panadura",
//     weight: 3.4,
//     scheduled: true,
//     to: "Kalmunai",
//     from: "Panadura",
//     cost: "High to Low",
//     date: "2022/03/12",
//     time: "09.23 a.m",
//   },
// ];

const FILTER_LOG_DATA: IFilterLogCardData[] = [
  {
    id: 1,
    title: "Fragile Special Delivery Office Panadura",
    weight: 3.4,
    scheduled: true,
    to: "Kalmunai",
    from: "Panadura",
    cost: "High to Low",
    date: "2022/03/12",
    time: "09.23 a.m",
  },
  {
    id: 2,
    title: "Fragile Special Delivery Office Panadura",
    weight: 3.4,
    scheduled: true,
    to: "Kalmunai",
    from: "Panadura",
    cost: "High to Low",
    date: "2022/03/12",
    time: "09.23 a.m",
  },
  {
    id: 3,
    title: "Fragile Special Delivery Office Panadura",
    weight: 3.4,
    scheduled: true,
    to: "Kalmunai",
    from: "Panadura",
    cost: "High to Low",
    date: "2022/03/12",
    time: "09.23 a.m",
  },
  {
    id: 4,
    title: "Fragile Special Delivery Office Panadura",
    weight: 3.4,
    scheduled: true,
    to: "Kalmunai",
    from: "Panadura",
    cost: "High to Low",
    date: "2022/03/12",
    time: "09.23 a.m",
  },
  {
    id: 5,
    title: "Fragile Special Delivery Office Panadura",
    weight: 3.4,
    scheduled: true,
    to: "Kalmunai",
    from: "Panadura",
    cost: "High to Low",
    date: "2022/03/12",
    time: "09.23 a.m",
  },
  {
    id: 6,
    title: "Fragile Special Delivery Office Panadura",
    weight: 3.4,
    scheduled: true,
    to: "Kalmunai",
    from: "Panadura",
    cost: "High to Low",
    date: "2022/03/12",
    time: "09.23 a.m",
  },
  {
    id: 7,
    title: "Fragile Special Delivery Office Panadura",
    weight: 3.4,
    scheduled: true,
    to: "Kalmunai",
    from: "Panadura",
    cost: "High to Low",
    date: "2022/03/12",
    time: "09.23 a.m",
  },
  {
    id: 8,
    title: "Fragile Special Delivery Office Panadura",
    weight: 3.4,
    scheduled: true,
    to: "Kalmunai",
    from: "Panadura",
    cost: "High to Low",
    date: "2022/03/12",
    time: "09.23 a.m",
  },
  {
    id: 9,
    title: "Fragile Special Delivery Office Panadura",
    weight: 3.4,
    scheduled: true,
    to: "Kalmunai",
    from: "Panadura",
    cost: "High to Low",
    date: "2022/03/12",
    time: "09.23 a.m",
  },
  {
    id: 10,
    title: "Fragile Special Delivery Office Panadura",
    weight: 3.4,
    scheduled: true,
    to: "Kalmunai",
    from: "Panadura",
    cost: "High to Low",
    date: "2022/03/12",
    time: "09.23 a.m",
  },
];

interface IItems {
  resultCards?: IResultCardData[];
  filterLogCards?: IFilterLogCardData[];
  cardType: RESULTCARD | FILTERLOGCARD;
  deleting: boolean;
}

function Items({ cardType, resultCards, filterLogCards, deleting }: IItems) {
  const dispatch = useDispatch();
  const currentDeletingList = useSelector(getDeletingFilterLogList);

  function deleteFilterLogHandler(id: number) {
    const deletingItem = {
      id,
    };
    let currentArray = currentDeletingList;
    if (currentArray) {
      const contains = currentDeletingList?.some(
        (item) => JSON.stringify({ id }) === JSON.stringify(item),
      );
      if (contains) {
        currentArray = currentArray.filter((item) => item.id !== id);
      } else {
        currentArray = [...currentArray, deletingItem];
      }
    } else {
      currentArray = [];
      currentArray.push(deletingItem);
    }
    dispatch(fetchDeletingFilterLogListRequest(currentArray));
  }

  return (
    <div className="results-cards-wrapper flex flex-col w-full px-4">
      {cardType === "resultcard"
        ? resultCards &&
          resultCards.map(
            ({ id, name: title, address, rating, website, serviceDto }) => (
              <ResultCard
                resultID={id}
                key={id}
                title={title}
                address={address}
                rating={rating && 0}
                website={website}
                services={serviceDto}
              />
            ),
          )
        : filterLogCards &&
          filterLogCards.map(
            ({ id, title, weight, scheduled, to, from, cost, date, time }) => (
              <div key={id} className="flex items-center justify-between">
                <div
                  className={`${
                    deleting ? "flex" : "hidden"
                  } items-center mr-5`}
                >
                  <CustomCheckBox
                    id={id}
                    key={id}
                    onChangeHandler={() => deleteFilterLogHandler(id)}
                  />
                </div>
                <FilterLogCard
                  id={id}
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
              </div>
            ),
          )}
    </div>
  );
}

Items.defaultProps = {
  resultCards: [],
  filterLogCards: [],
};

function PaginatedItems({ itemsPerPage, cardType, deleting }: IPaginatedItems) {
  // const [currentItems, setCurrentItems] = useState(null);
  const [resultCards, setResultCards] = useState<IResultCardData[]>([]);
  const [filterLogCards, setFilterLogCards] = useState<IFilterLogCardData[]>(
    [],
  );
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [serviceProviderData, setServiceProviderData] =
    useState<ResponseObject | void | null>(null);

  useEffect(() => {
    async function getServiceProviderData() {
      setServiceProviderData(
        await serviceProviderService.getAllServiceProviders(),
      );
    }
    getServiceProviderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    switch (cardType) {
      case "resultcard":
        setResultCards(
          serviceProviderData?.data?.body.slice(itemOffset, endOffset),
        );
        // eslint-disable-next-line no-unsafe-optional-chaining
        setPageCount(
          // eslint-disable-next-line no-unsafe-optional-chaining
          Math.ceil(serviceProviderData?.data?.body.length / itemsPerPage),
        );
        break;
      case "filterlogcard":
        setFilterLogCards(FILTER_LOG_DATA.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(FILTER_LOG_DATA.length / itemsPerPage));
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, itemsPerPage, cardType, serviceProviderData]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset =
      // eslint-disable-next-line no-unsafe-optional-chaining
      (event.selected * itemsPerPage) % serviceProviderData?.data?.body.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items
        cardType={cardType}
        resultCards={resultCards}
        filterLogCards={filterLogCards}
        deleting={deleting}
      />
      <div className="pagination mt-4 text-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="Previous"
          renderOnZeroPageCount={undefined}
        />
      </div>
    </>
  );
}

export default PaginatedItems;
