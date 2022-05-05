/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { CommonRoundedButton, MapBox, NavBar } from '../../Components';
import RoundedInput from '../../Components/RoundedInput';
import { Footer, PaginatedItems } from '../../Lib';
import { Size, useWindowSize } from '../../Utils/Hooks/useWindowSize';
import './Results.scss';

function Results() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchInput, setSearchInput] = useState<string>(null);
  const [isSmallFilterButton, setIsSmallFilterButton] = useState<boolean>(false);
  const size: Size = useWindowSize();

  useEffect(() => {
    if (size.width < 480) {
      // eslint-disable-next-line no-console
      console.warn('Small Filter Button');

      setIsSmallFilterButton(true);
    }
    // eslint-disable-next-line no-console
    console.warn('Not a Small Filter Button', size.width);
  }, [size]);

  return (
    <main className="main-wrapper bg-drop-white w-full overflow-x-hidden box-border">
      <NavBar homeComponent={false} />
      <div className="flex-container search-wrapper container md:mx-auto">
        <RoundedInput
          type="text"
          placeholder="Search for courier services..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div className="mr-1 md:mr-2" />
        <CommonRoundedButton
          styles={{ padding: '1rem', paddingLeft: '1.2rem', paddingRight: '1.2rem' }}
        >
          <svg className="h-5 md:h-6 w-5 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </CommonRoundedButton>
        <div className="mr-1 md:mr-2" />
        <CommonRoundedButton>
          <div className="flex-container">
            <svg className="md:mr-2 h-5 md:h-6 w-5 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            {
              !isSmallFilterButton ? (
                <p>Filters</p>
              ) : null
            }
          </div>
        </CommonRoundedButton>
      </div>
      <div
        className="container results-map-wrapper mt-0 relative lg:ml-6 xl:ml-auto"
        style={{
          marginTop: 0,
        }}
      >
        <div className="results-cards w-[90%] mx-auto lg:mx-0 lg:w-1/2 2xl:w-3/5">
          <PaginatedItems cardType="resultcard" itemsPerPage={4} />
        </div>
      </div>

      <div className="map min-w-[40vw] bg-drop-green absolute right-0 top-[20%] xl:top-1/4 2xl:top-[22%] hidden lg:flex items-center justify-center overflow-hidden z-50 rounded-l-3xl transition-all duration-300 ease-in-out">
        <MapBox />
      </div>

      <section className="wrapper footer h-auto bg-drop-primary w-[98%] mx-auto mt-16 xl:mt-8 mb-2 md:mb-5 relative container rounded-3xl">
        <Footer />
      </section>

    </main>
  );
}

export default Results;
