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
          ? 'right-aligned-text'
          : 'column-centered-flex'}`}
      >
        <div
          style={{ width: 'auto' }}
          className={`
      column-centered-flex`}
        >
          <h3 className="highlighted-title">Become a Service Provider</h3>
          <p className="linebreaked-description">
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
          : size.width <= 1024 && size.width > 960 ? 20
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
      <div className="testimonial-card testimonial-card-m" />
      <div className="testimonial-card testimonial-card-m" />
      <div className="testimonial-card testimonial-card-m" />
      <div className="testimonial-card testimonial-card-m" />
    </>
  );
}

export default Testimonial;
