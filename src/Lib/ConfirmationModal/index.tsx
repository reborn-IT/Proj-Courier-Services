/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateInterface } from '../../App/RootState';
import CommonRoundedButton from '../../Components/CommonRoundedButton';
import SearchableDropDown from '../../Components/SearchableDropDown';
import { changeSaveFilterModalState } from '../../Features/Slices/FilterMenu';
import './ConfirmationModal.scss';

function ConfirmationModal() {
  // eslint-disable-next-line max-len
  const filterMenuOpened = useSelector<RootStateInterface, boolean>((state) => state.FilterMenuReducer.filterMenuOpened);
  const dispatch = useDispatch();
  const CloseModal = () => {
    dispatch(changeSaveFilterModalState({
      filterMenuOpened,
      SaveFilterModalOpened: false,
    }));
  };
  const titleListAPI = [
    'Fragile Special Delivery Office Panadura',
    'Documents Delivery Office Panadura',
    'Cake Delivery Home',
  ];
  return (
    <div className="modal">
      <div className="row">
        <h4>Save filter data?</h4>
        <button
          type="button"
          className="close-btn"
          onClick={() => CloseModal()}
        >
          <svg
            width="71"
            height="71"
            viewBox="0 0 71 71"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.6898 5.91431H48.3385C58.3673 5.91431 65.0827 12.9551 65.0827 23.4276V47.6002C65.0827 58.0431 58.3673 65.081 48.3385 65.081H22.6898C12.661 65.081 5.91602 58.0431 5.91602 47.6002V23.4276C5.91602 12.9551 12.661 5.91431 22.6898 5.91431ZM44.4039 44.3726C45.4098 43.3698 45.4098 41.7427 44.4039 40.7369L39.1381 35.471L44.4039 30.2022C45.4098 29.1993 45.4098 27.5427 44.4039 26.5368C43.3981 25.5281 41.771 25.5281 40.7356 26.5368L35.4993 31.7997L30.2335 26.5368C29.1981 25.5281 27.571 25.5281 26.5652 26.5368C25.5593 27.5427 25.5593 29.1993 26.5652 30.2022L31.831 35.471L26.5652 40.7073C25.5593 41.7427 25.5593 43.3698 26.5652 44.3726C27.0681 44.8756 27.7485 45.1448 28.3993 45.1448C29.0798 45.1448 29.7306 44.8756 30.2335 44.3726L35.4993 39.1394L40.7652 44.3726C41.2681 44.9081 41.9189 45.1448 42.5698 45.1448C43.2502 45.1448 43.901 44.8756 44.4039 44.3726Z"
              fill="#D32424"
            />
          </svg>
        </button>
      </div>
      <p>Save your filter data, so you can directly see and access them in your profile.</p>
      <form action="" method="post" className="form">
        <p>Title</p>
        <SearchableDropDown
          placeholder="Create or Select Titlt For Save Filter Data"
          data={titleListAPI}
          reset
          createmode
        />

        <div className="row button-row">
          <CommonRoundedButton label="No, Just Let me in" />
          <CommonRoundedButton
            label="Save"
            styles={{ backgroundColor: '#D32424', marginRight: '1rem' }}
          />
        </div>
      </form>
    </div>
  );
}

export default ConfirmationModal;
