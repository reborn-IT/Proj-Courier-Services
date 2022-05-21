/* eslint-disable max-len */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-nested-ternary */

import React from 'react';
import CommonRoundedButton from '../../Components/CommonRoundedButton';
import TestimonialXL from '../../Components/TestimonialXL';
import { Size, useWindowSize } from '../../Utils/Hooks/useWindowSize';
import './Testimonial.scss';

function Testimonial() {
  const size: Size = useWindowSize();
  return (
    <>
      <div className={`
      ${
        (size.width <= 768)
          ? 'right-aligned-text flex items-center justify-center w-full sm:w-auto sm:justify-end h-full sm:pr-8'
          : 'flex flex-col items-center justify-center h-full w-full'}`}
      >
        <div
          style={{ width: 'auto' }}
          className={`
          flex flex-col items-center justify-center h-full w-full`}
        >
          <h3 className="max-w-[80vw] sm:max-w-full text-2xl sm:text-xl md:text-3xl mb-5 font-semibold text-drop-grey">Become a Service Provider</h3>
          <p className="max-w-[80vw] md:max-w-[40vw] text-base md:text-xl text-center mb-5">
            Give extra publicity and increase sales by becoming a
            service provider.
          </p>
          <CommonRoundedButton>
            Get Started
          </CommonRoundedButton>
        </div>
      </div>

      <TestimonialXL
        review="DROP helped me to increase my sales."
        author="TLS Courier"
        starCount={5}
        topPos={
          size.width > 1024
            ? -10
            : size.width <= 1024 && size.width > 960 ? -10
              : size.width <= 960 && size.width > 767 ? -9
                : 0
        }
        rightPos={
          size.width > 1024
            ? 5
            : size.width <= 1024 && size.width > 960 ? 2
              : size.width <= 960 && size.width > 767 ? 1
                : 0
}
        rightBiased
      />
      <TestimonialXL
        review="I gained more web traffic beacase of DROP."
        author="grasshopers"
        starCount={5}
        topPos={size.width > 1024
          ? 4
          : size.width <= 1024 && size.width > 960 ? 16
            : size.width <= 960 && size.width > 767 ? 16
              : 0}
        rightPos={
          size.width > 1024
            ? 5
            : size.width <= 1024 && size.width > 960 ? 2
              : size.width <= 960 && size.width > 767 ? 1
                : 0
        }
        // rightBiased={false}
        rightBiased={size.width > 768 ? false : true}
      />
      <div className="transform scale-0 lg:scale-125 xl:scale-100 absolute bg-no-repeat bg-cover bg-center testimonial-card-m transition-all duration-500 ease-in-out left-4/5 lg:left-1/2 xl:left-1/3 2xl:left-1/2 -top-28 rounded-2xl w-36 2xl:w-56 h-52 2xl:h-72" />
      <div className="transform scale-0 lg:scale-125 xl:scale-100 absolute bg-no-repeat bg-cover bg-center testimonial-card-m transition-all duration-500 ease-in-out left-4/5 lg:left-1/2 xl:left-1/3 -top-28 rounded-2xl w-36 2xl:w-56 h-52 2xl:h-72" />
      <div className="transform scale-0 lg:scale-125 xl:scale-100 absolute bg-no-repeat bg-cover bg-center testimonial-card-m transition-all duration-500 ease-in-out left-4/5 lg:left-1/2 xl:left-1/3 -top-28 rounded-2xl w-36 2xl:w-56 h-52 2xl:h-72" />
    </>
  );
}

export default Testimonial;
