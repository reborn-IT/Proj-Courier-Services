/* eslint-disable max-len */
import React from 'react';
import StarIcon from '../../Assets/Icons/star.svg';
import { Size, useWindowSize } from '../../Utils/Hooks/useWindowSize';

export interface TestimonialLargeProps {
    review: string
    author: string
    starCount: number
    topPos: number
    rightPos: number
    rightBiased: boolean
}

function TestimonialXL({
  review, author, starCount, topPos, rightPos, rightBiased,
}: TestimonialLargeProps) {
  const size: Size = useWindowSize();
  return (
    <div
      className="absolute bg-no-repeat bg-cover bg-center testimonial-card-xl w-56 2xl:w-72 h-[20rem] 2xl:h-[26rem] rounded-2xl px-3 pb-3 flex items-end overflow-hidden"
      style={{
        top: `${topPos}rem`,
        left: `${rightBiased ? `${rightPos}rem` : 'auto'}`,
        right: `${rightBiased ? 'auto' : `${rightPos}rem`}`,
        display: `${size.width < 480 ? 'none' : 'flex'}`,
      }}
    >
      <div className="flex flex-col items-center justify-center h-auto w-full bg-drop-white rounded-2xl px-4 py-3 text-sm text-center font-semibold">
        <p className="mb-2 text-drop-gold text-md">{review}</p>
        <p className="mb-2 text-drop-grey">
          -
          {' '}
          {author}
          {' '}
          -
        </p>
        <div className="stars flex items-center">
          {
                Array.from(Array(starCount).keys()).map((key) => (
                  <img key={key} src={StarIcon} alt="star icon" />
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default TestimonialXL;
