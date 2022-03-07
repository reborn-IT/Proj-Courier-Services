import React from 'react';
import CommonRoundedButton from '../../Components/CommonRoundedButton';
import TestimonialXL from '../../Components/TestimonialXL';
import './Testimonial.scss';

function Testimonial() {
  return (
    <>
      <div className="column-centered-flex">
        <h3 className="highlighted-title">Become a Service Provider</h3>
        <p className="linebreaked-description">
          Give extra publicity and increase sales by becoming a
          service provider.
        </p>
        <CommonRoundedButton label="Get Started" />
      </div>

      <TestimonialXL
        review="DROP helped me to increase my sales."
        author="TLS Courier"
        starCount={5}
        topPos={-10}
        rightPos={5}
        rightBiased
      />
      <TestimonialXL
        review="I gained more web traffic beacase of DROP."
        author="grasshopers"
        starCount={5}
        topPos={4}
        rightPos={5}
        rightBiased={false}
      />
      <div className="testimonial-card testimonial-card-m" />
      <div className="testimonial-card testimonial-card-sm" />
    </>
  );
}

export default Testimonial;
