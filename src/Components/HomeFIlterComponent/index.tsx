import React from 'react';
import CommonRoundedButton from '../CommonRoundedButton';
import './MainFilterComponent.scss';

function MainFilterComponent() {
  return (
    <div className="filter-container">
      <CommonRoundedButton label="View Nearby Services" />
      <p className="text-bold">Or</p>
      <CommonRoundedButton label="Start Filtering" />
    </div>
  );
}

export default MainFilterComponent;
