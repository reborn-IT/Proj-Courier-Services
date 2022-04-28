/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface IPhotoProperties {
    id: number;
    url: string;
}

export interface IReviewCard {
    // eslint-disable-next-line react/require-default-props, react/no-unused-prop-types
    id?: number;
    name: string;
    profileUrl: string;
    date: string;
    time: string;
    rating: number;
    description: string;
    // eslint-disable-next-line react/require-default-props
    photos?: IPhotoProperties[];
    // eslint-disable-next-line react/require-default-props
    additionalTailwindCss?: string;
}

function ReviewCard({
  name, profileUrl, date, time, rating, description, photos, additionalTailwindCss,
}: IReviewCard) {
  return (
    <div className={`shadow-md px-8 py-5 rounded-xl ${additionalTailwindCss}`}>
      <div className="flex items-center justify-between">
        <div className="user flex items-center">
          <img src={profileUrl} alt="User" className="object-cover w-14 h-14 rounded-full" />
          <div className="text-drop-primary ml-3">
            <h4 className="text-xl font-semibold">{name}</h4>
            <p className="text-sm">
              {date}
              {' '}
              {time}
            </p>
          </div>
        </div>
        <div className="rating-container flex items-center space-x-2 text-drop-gold text-2xl">
          {[...Array(rating)].map((x, i) => <i key={i} className="bi bi-star-fill" />)}
          {[...Array(5 - rating)].map((x, i) => <i key={i} className="bi bi-star" />)}
        </div>
      </div>
      <p className="mt-4 text-drop-grey">
        {description}
      </p>
      <div className="mt-3 flex flex-wrap">
        {
              photos && photos?.map(({ id, url }) => (
                <img className="mr-3 mb-3 w-48 h-auto rounded-md object-cover" key={id} src={url} alt={`review-${id}`} />
              ))
          }
      </div>
    </div>
  );
}

export default ReviewCard;