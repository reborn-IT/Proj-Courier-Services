/* eslint-disable max-len */
import React, { useState } from 'react';
import './ResultCard.scss';
import { Link } from 'react-router-dom';
import image from '../../Assets/Images/featuredOne.svg';

interface IResultCard {
  title: string;
  address: string;
  rating: number;
  website: string;
}

function ResultCard({
  title, address, rating, website,
}: IResultCard) {
  const [fav, setFav] = useState<boolean>(false);
  return (
    <Link to="button" className="card-flex">
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* <img src={image} alt="" /> */}
      </div>
      <div className="content">
        <div className="rating-fav">
          <p className="rating">
            {rating}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 20 20" fill="#FE7B01">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
          </p>

          <button
            type="button"
            className="fav-btn"
            onClick={() => setFav(!fav)}
          >
            {
                  !fav ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none" viewBox="0 0 24 24" stroke="#D32424" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>

                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 20 20" fill="#D32424">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  )
              }
          </button>
        </div>

        <h3 className="title">
          {title}
        </h3>
        <p className="address">{address}</p>
        <ul className="services">
          <li>One Day Service</li>
          <span>|</span>
          <li>24x7 Customer Service</li>
          <span>|</span>
          <li>Special Parcel Delivery</li>
        </ul>
        <div className="contact">
          <a href="domex.lk">{website}</a>
          <p>
            Hotline
            {' '}
            <span>031 22 45 456</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ResultCard;
