/* eslint-disable max-len */
import React, { useState } from 'react';
import { CommonRoundedButton, MapBox, NavBar } from '../../Components';
import RoundedInput from '../../Components/RoundedInput';
import { Footer, PaginatedItems } from '../../Lib';
import './Results.scss';

function Results() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchInput, setSearchInput] = useState<string>(null);

  return (
    <main className="main-wrapper">
      <NavBar homeComponent={false} />
      <div className="flex-container search-wrapper container">
        <RoundedInput
          type="text"
          placeholder="Search for courier services..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div className="space-1" />
        <CommonRoundedButton
          styles={{ padding: '1rem', paddingLeft: '1.2rem', paddingRight: '1.2rem' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </CommonRoundedButton>
        <div className="space-2" />
        <CommonRoundedButton>
          <div className="flex-container">
            <svg className="space-half" width={22} height={22} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <p>Filters</p>
          </div>
        </CommonRoundedButton>
      </div>
      <div
        className="container results-map-wrapper"
        style={{
          marginTop: 0,
        }}
      >
        <div className="results-cards-wrapper">
          <PaginatedItems itemsPerPage={4} />
        </div>
      </div>

      <div className="map">
        <MapBox />
      </div>

      <section className="wrapper footer">
        <Footer />
      </section>

    </main>
  );
}

export default Results;
