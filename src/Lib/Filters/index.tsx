import React, { useState } from 'react';
import './filters.scss';
import Switch from 'react-switch';
import DropDownForm from '../../Components/DropDownForm';
import CustomizedDatePicker from '../../Components/CustomizedDatePicker';
import CommonRoundedButton from '../../Components/CommonRoundedButton';
import SearchableDropDown from '../../Components/SearchableDropDown';

function Filters() {
  const [scheduled, setScheduled] = useState<boolean>(false);
  const [serviceInput, setServiceInput] = useState<string>('');
  const servicesAPI = [
    'Fragile', 'Confidential', 'Documents', 'Tender', 'Bulk', 'Stationary',
  ];
  const priceListAPI = [
    'Price High to Low',
    'Average Price',
    'Price Low to High',
  ];
  const [services, setServices] = useState<string[]>(servicesAPI);
  const [expandServices, setExpandServices] = useState<boolean>(true);

  const filterServices = (needle: string) => {
    const query: string = needle.toLowerCase();
    setServices(servicesAPI.filter(
      (item: string) => item.toLowerCase().indexOf(query) >= 0,
    ));
  };

  const setNewServicesList = (e) => {
    // eslint-disable-next-line no-sequences, no-unused-expressions
    setServiceInput(e.currentTarget.value);
    if (e.currentTarget.value === '') {
      setServices(servicesAPI);
      setExpandServices(true);
    } else {
      filterServices(serviceInput);
    }
  };

  return (
    <div
      className="filters"
    >
      <h1 className="filter-container-maxw">Filters</h1>
      <div className="nature-parcel">
        <DropDownForm title="Nature of the parcel" />
        <div className="content-forms">
          <form
            action="/"
            method="post"
            className="content-form filter-container-maxw"
          >
            <input
              type="text"
              placeholder="search for nature of the parcel"
              onChange={(e) => setNewServicesList(e)}
              value={serviceInput}
            />
          </form>

          <div className="checkboxes filter-container-maxw">
            {
              expandServices
                ? services.slice(0, 4).map((item) => (
                  <div key={item} className="checkbox">
                    <input id="one" type="checkbox" />
                    <span>
                      {item}
                    </span>
                  </div>
                ))
                : services.map((item) => (
                  <div key={item} className="checkbox">
                    <input id="one" type="checkbox" />
                    <span>
                      {item}
                    </span>
                  </div>
                ))
              }

            <button
              type="button"
              className="link-button"
              onClick={() => setExpandServices(!expandServices)}
            >
              View all...
            </button>
          </div>
        </div>
      </div>

      <div className="weight">
        <DropDownForm title="Weight in kilograms" />
        <div className="content-forms">
          <form
            action="/"
            method="post"
            className="content-form filter-container-maxw"
          >
            <input
              type="number"
              placeholder="Weight in kilograms"
            />
          </form>
        </div>
      </div>

      <div className="parcels-count">
        <DropDownForm title="How many parcels" />
        <div className="content-forms">
          <form
            action="/"
            method="post"
            className="content-form filter-container-maxw"
          >
            <input
              type="number"
              placeholder="Quantity"
            />
          </form>
        </div>
      </div>

      <div className="pickup-point">
        <DropDownForm title="Pickup point" />
        <div className="content-forms">
          <form
            action="/"
            method="post"
            className="content-form filter-container-maxw"
          >
            <input
              type="text"
              placeholder="Select primary location"
            />
          </form>
          <div className="checkboxes filter-container-maxw">
            <div className="checkbox">
              <input id="one" type="checkbox" />
              <span>
                Address
              </span>
            </div>
          </div>
          <form
            action="/"
            method="post"
            className="content-form filter-container-maxw"
          >
            <input
              type="text"
              placeholder="Address Line 1"
              className="inputs-many"
            />
            <input
              type="text"
              placeholder="Address Line 2"
              className="inputs-many"
            />
            <input
              type="text"
              placeholder="City"
              className="inputs-many"
            />
            <input
              type="text"
              placeholder="Postal Code"
            />
          </form>

          <div className="checkboxes filter-container-maxw">
            <div className="checkbox">
              <input id="one" type="checkbox" />
              <span>
                Mark on map
              </span>
            </div>
          </div>

          <div className="filter-container-maxw">
            <iframe
              title="start-map"
            // eslint-disable-next-line max-len
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.695937374642!2d79.92410741404936!3d6.926902020265613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25766a02febfd%3A0x5b68a0c35531ff9e!2sNational%20Institute%20of%20Mental%20Health!5e0!3m2!1sen!2slk!4v1647346672672!5m2!1sen!2slk"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="destination-point">
        <DropDownForm title="Destination point" />
        <div className="content-forms">
          <form
            action="/"
            method="post"
            className="content-form filter-container-maxw"
          >
            <input
              type="text"
              placeholder="Select primary location"
            />
          </form>
          <div className="checkboxes filter-container-maxw">
            <div className="checkbox">
              <input id="one" type="checkbox" />
              <span>
                Address
              </span>
            </div>
          </div>
          <form
            action="/"
            method="post"
            className="content-form filter-container-maxw"
          >
            <input
              type="text"
              placeholder="Address Line 1"
              className="inputs-many"
            />
            <input
              type="text"
              placeholder="Address Line 2"
              className="inputs-many"
            />
            <input
              type="text"
              placeholder="City"
              className="inputs-many"
            />
            <input
              type="text"
              placeholder="Postal Code"
            />
          </form>

          <div className="checkboxes filter-container-maxw">
            <div className="checkbox">
              <input id="one" type="checkbox" />
              <span>
                Mark on map
              </span>
            </div>
          </div>

          <div className="filter-container-maxw">
            <iframe
              title="start-map"
            // eslint-disable-next-line max-len
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.695937374642!2d79.92410741404936!3d6.926902020265613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25766a02febfd%3A0x5b68a0c35531ff9e!2sNational%20Institute%20of%20Mental%20Health!5e0!3m2!1sen!2slk!4v1647346672672!5m2!1sen!2slk"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="scheduled">
        <div className="dropdown-flex">
          <DropDownForm title="Scheduled" />
          <div className="toggle-switch" style={{ marginTop: '1.5rem' }}>
            <Switch
              checked={scheduled}
              onColor="#525298"
              checkedIcon={false}
              uncheckedIcon={false}
              height={25}
              width={47}
              onChange={() => setScheduled(!scheduled)}
            />
          </div>
        </div>
        <div
          className="content-forms filter-container-maxw"
          style={{ padding: '2rem' }}
        >
          <CustomizedDatePicker />
        </div>
      </div>

      <div className="immediate-courier">
        <div className="dropdown-flex">
          <DropDownForm title="Immediate Courier?" />
          <div className="toggle-switch" style={{ marginTop: '1.5rem' }}>
            <Switch
              checked={scheduled}
              onColor="#525298"
              checkedIcon={false}
              uncheckedIcon={false}
              height={25}
              width={47}
              onChange={() => setScheduled(!scheduled)}
            />
          </div>
        </div>
        <div
          className="content-forms filter-container-maxw"
          style={{ padding: '2rem' }}
        >
          <p className="charges-text">Extra charges may apply.</p>
        </div>
      </div>

      <div className="cost">
        <DropDownForm title="Cost" />
        <div className="content-forms">
          <form
            action="/"
            method="post"
            className="content-form filter-container-maxw"
          >
            <SearchableDropDown data={priceListAPI} />
          </form>
        </div>
      </div>

      <div className="buttons">
        <CommonRoundedButton
          label="Cancel"
          styles={{ backgroundColor: '#D32424', marginRight: '1rem' }}
        />
        <CommonRoundedButton label="Done" />
      </div>

    </div>
  );
}

export default Filters;
