import React from 'react';
import StarIcon from '../../Assets/Icons/star.svg';

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
  return (
    <div
      className="testimonial-card testimonial-card-xl"
      style={{
        top: `${topPos}rem`,
        left: `${rightBiased ? rightPos : 'auto'}rem`,
        right: `${rightBiased ? 'auto' : rightPos}rem`,
      }}
    >
      <div className="column-centered-flex review-testimonial">
        <p>{review}</p>
        <p>
          -
          {' '}
          {author}
          {' '}
          -
        </p>
        <div className="stars">
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
