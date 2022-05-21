/* eslint-disable max-len */
import React from 'react';
import './HomeFeatured.scss';

function HomeFeatured() {
  return (
    <div className="featured-grid grid gap-8 grid-cols-1 sm:grid-cols-2 grid-rows-2 mt-8 md:mt-28 h-[55rem] md:h-[50vh] xl:h-screen 2xl:h-[60vh] relative px-8 xl:px-0">
      <div className="one h-72 sm:h-auto col-span-2 sm:col-span-1 sm:row-span-2 bg-center bg-no-repeat bg-cover rounded-3xl" />
      <div className="two h-72 sm:h-auto col-span-2 sm:col-span-1 bg-center bg-no-repeat bg-cover rounded-3xl" />
      <div className="three h-72 sm:h-auto col-span-2 sm:col-span-1 bg-center bg-no-repeat bg-cover rounded-3xl" />
    </div>
  );
}

export default HomeFeatured;
