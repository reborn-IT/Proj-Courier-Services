import React from 'react';
import CommonRoundedButton,
{
  CommonButtonActions,
} from '../CommonRoundedButton';
import './MainFilterComponent.scss';

function MainFilterComponent() {
  return (
    <div className="filter-container">
      <CommonRoundedButton>
        View Nearby Services
      </CommonRoundedButton>
      <p className="text-bold">Or</p>
      <CommonRoundedButton
        action={CommonButtonActions.OPEN_FILTER}
      >
        Start Filtering
      </CommonRoundedButton>
    </div>
  );
}

export default MainFilterComponent;
