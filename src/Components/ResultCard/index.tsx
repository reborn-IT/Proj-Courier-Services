/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../Assets/Images/featuredOne.svg';

interface IResultCard {
  id: number;
  title: string;
  address: string;
  rating: number;
  website: string;
}

function ResultCard({
  id, title, address, rating, website,
}: IResultCard) {
  const [fav, setFav] = useState<boolean>(false);
  return (
    <div className="card-flex relative">
      <button
        type="button"
        className="fav-btn absolute top-2 md:top-4 right-2 md:right-4 z-20"
        onClick={() => setFav(!fav)}
      >
        {
                  !fav ? (
                    <svg className="h-7 md:h-10 w-7 md:w-10" fill="none" viewBox="0 0 24 24" stroke="#D32424" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>

                  ) : (
                    <svg className="h-7 md:h-10 w-7 md:w-10" viewBox="0 0 20 20" fill="#D32424">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  )
              }
      </button>
      <Link to={`${id}`} className="flex items-center text-drop-grey shadow-xl mb-4 bg-drop-white overflow-hidden max-h-[8rem] md:max-h-[12rem] 2xl:max-h-[15rem] rounded-2xl">
        <div
          className="h-32 md:h-48 2xl:h-60 flex-1 w-40 bg-cover"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <div className="content py-8 px-4 flex-[3]">
          <div className="rating-fav flex items-center justify-between">
            <p className="rating flex items-center text-sm md:text-xl lg:text-base xl:text-xl">
              {rating}
              <span className="ml-1 mb-1">
                <svg className="w-6 h-6" viewBox="0 0 20 20" fill="#FE7B01">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
            </p>
          </div>

          <h3 className="title text-lg md:text-2xl mb-1 md:mb-2 xl:mb-4">
            {title}
          </h3>
          <p className="address text-xs md:text-base mb-1 md:mb-2 xl:mb-4">{address}</p>
          <ul className="services text-xs md:text-base hidden md:flex flex-wrap">
            <li>One Day Service</li>
            <span className="mx-2">|</span>
            <li>24x7 Customer Service</li>
            <span className="mx-2">|</span>
            <li>Special Parcel Delivery</li>
          </ul>
          <div className="text-xs md:text-sm mt-1 md:mt-0 contact flex items-center justify-between">
            <a href="domex.lk">{website}</a>
            <p>
              Hotline
              {' '}
              <span>031 22 45 456</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ResultCard;
