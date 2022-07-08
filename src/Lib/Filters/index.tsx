/* eslint-disable max-len */
import React, { useState } from "react";
import "./filters.scss";
import Switch from "react-switch";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import DropDownForm from "../../Components/DropDownForm";
import CustomizedDatePicker from "../../Components/CustomizedDatePicker";
import CommonRoundedButton, {
  CommonButtonActions,
} from "../../Components/CommonRoundedButton";
import SearchableDropDown from "../../Components/SearchableDropDown";
import ConfirmationModal from "../ConfirmationModal";
import MapBox from "../../Components/MapBox";
import { useExpandedContext } from "../../Components/DropDownForm/DropDownStateProvider";
import { ExpandActionTypes } from "../../Components/DropDownForm/DropDownReducer";
import { getSaveModalState } from "../../Store/SaveFilterModal/selectors";
import FilterMenuInput from "../../Components/FilterMenuInput";

enum ExpandButtonState {
  VIEW_ALL = "View all...",
  SHOW_LESS = "Show less...",
}

function Filters() {
  const { state } = useExpandedContext();
  const [scheduled, setScheduled] = useState<boolean>(false);
  const [isImmediateCourier, setIsImmediateCourier] = useState<boolean>(false);
  const [viewAllButtonState, setViewAllButtonState] =
    useState<ExpandButtonState>(ExpandButtonState.VIEW_ALL);
  const [serviceInput, setServiceInput] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [natureArray, setNatureArray] = useState<string[]>([]);
  const servicesAPI = [
    "Fragile",
    "Confidential",
    "Documents",
    "Tender",
    "Bulk",
    "Stationary",
  ];
  const priceListAPI = [
    "Price High to Low",
    "Average Price",
    "Price Low to High",
  ];
  const PrimaryLocationDataAPI = ["Home", "Office", "Work"];
  const SaveFilterModalOpened = useSelector(getSaveModalState);
  const [services, setServices] = useState<string[]>(servicesAPI);
  const [expandServices, setExpandServices] = useState<boolean>(true);
  const [arrivingpointAddressChecked, setArrivepointAddressChecked] =
    useState<boolean>(false);

  const [arriveMarkOnMap, setArriveMarkOnMap] = useState<boolean>(false);

  const [DestinationpointAddressChecked, setDestinationpointAddressChecked] =
    useState<boolean>(false);

  const [DestinationMarkOnMap, setDestinationMarkOnMap] =
    useState<boolean>(false);

  const filterServices = (needle: string) => {
    const query: string = needle.toLowerCase();
    setServices(
      servicesAPI.filter(
        (item: string) => item.toLowerCase().indexOf(query) >= 0,
      ),
    );
  };

  const setNewServicesList = (e) => {
    // eslint-disable-next-line no-sequences, no-unused-expressions
    setServiceInput(e.currentTarget.value);
    if (e.currentTarget.value === "") {
      setServices(servicesAPI);
      setExpandServices(true);
    } else {
      filterServices(serviceInput);
    }
  };

  const handleArriveMarkOnMap = () => {
    setArriveMarkOnMap(!arriveMarkOnMap);
  };

  const handleArriveSwitchAddress = () => {
    setArrivepointAddressChecked(!arrivingpointAddressChecked);
  };

  const handleDestinationMarkOnMap = () => {
    setDestinationMarkOnMap(!DestinationMarkOnMap);
  };

  const handleDestinationSwitchAddress = () => {
    setDestinationpointAddressChecked(!DestinationpointAddressChecked);
  };

  const handleNatureArray = (item: string) => {
    if (natureArray.includes(item)) {
      setNatureArray(natureArray.filter((element: string) => element !== item));
      setServices(
        services
          .filter((element) => element !== item)
          .concat(services.filter((element) => element === item)),
      );
    } else {
      setServices(
        services
          // eslint-disable-next-line no-nested-ternary
          .sort((a, b) => (a === item ? -1 : b === item ? 1 : 0)),
      );
      setNatureArray((oldArray: string[]) => [...oldArray, item]);
    }
  };

  const handleExpandButton = () => {
    setExpandServices(!expandServices);
    if (viewAllButtonState === ExpandButtonState.VIEW_ALL) {
      setViewAllButtonState(ExpandButtonState.SHOW_LESS);
    } else {
      setViewAllButtonState(ExpandButtonState.VIEW_ALL);
    }
  };

  return (
    <>
      <div
        className="confirm-modal"
        style={{ display: `${SaveFilterModalOpened ? "block" : "none"}` }}
      >
        <ConfirmationModal />
      </div>
      <div
        className="filters rounded-3xl py-4 bg-drop-white overflow-y-auto absolute w-full md:w-4/5 h-full md:h-3/4 z-50 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-200 ease-in-out"
        style={{ display: `${SaveFilterModalOpened ? "none" : "block"}` }}
      >
        <h1 className="text-drop-primary text-5xl font-semibold max-w-[95%] mx-auto">
          Filters
        </h1>
        <div className="nature-parcel">
          <DropDownForm
            title="Nature of the parcel"
            trigger={ExpandActionTypes.SET_EXPANDED_NATURE}
            payload={!state.natureExpanded}
          />
          <div
            className="content-forms mt-4 bg-drop-lightest-grey py-4"
            style={{ display: `${state.natureExpanded ? "none" : "block"}` }}
          >
            <form className="content-form   px-6">
              <FilterMenuInput
                type="text"
                placeholder="search for nature of the parcel"
                onChangeHandler={(e) => setNewServicesList(e)}
                value={serviceInput}
              />
            </form>

            <div className="checkboxes flex flex-col mt-4   px-6">
              {expandServices
                ? services.slice(0, 4).map((item) => (
                    <motion.div
                      layout
                      key={item}
                      className="checkbox flex items-center mb-2 self-start"
                    >
                      <input
                        id="one"
                        type="checkbox"
                        checked={natureArray.includes(item)}
                        onChange={() => handleNatureArray(item)}
                        className="m-0 mr-2 bg-drop-white w-4 h-4 rounded grid place-items-center transition-all duration-300 ease-in-out cursor-pointer"
                      />
                      <span>{item}</span>
                    </motion.div>
                  ))
                : services.map((item) => (
                    <motion.div
                      layout
                      key={item}
                      className="checkbox flex items-center mb-2 self-start"
                    >
                      <input
                        id="one"
                        type="checkbox"
                        checked={natureArray.includes(item)}
                        onChange={() => handleNatureArray(item)}
                      />
                      <span>{item}</span>
                    </motion.div>
                  ))}

              <button
                type="button"
                className="link-button font-semibold text-drop-blue self-start"
                onClick={() => handleExpandButton()}
              >
                {viewAllButtonState}
              </button>
            </div>
          </div>
        </div>

        <div className="weight">
          <DropDownForm
            title="Weight in kilograms"
            trigger={ExpandActionTypes.SET_EXPANDED_WEIGHT}
            payload={!state.weightExpanded}
          />
          <div
            className="content-forms mt-4 bg-drop-lightest-grey py-4"
            style={{ display: `${state.weightExpanded ? "none" : "block"}` }}
          >
            <form className="content-form   px-6">
              <FilterMenuInput
                type="number"
                placeholder="Weight in kilograms"
              />
            </form>
          </div>
        </div>

        <div className="parcels-count">
          <DropDownForm
            title="How many parcels"
            trigger={ExpandActionTypes.SET_EXPANDED_PARCEL}
            payload={!state.parcelCountExpanded}
          />
          <div
            className="content-forms mt-4 bg-drop-lightest-grey py-4"
            style={{
              display: `${state.parcelCountExpanded ? "none" : "block"}`,
            }}
          >
            <form className="content-form   px-6">
              <FilterMenuInput type="number" placeholder="Quantity" />
            </form>
          </div>
        </div>

        <div className="pickup-point">
          <DropDownForm
            title="Pickup point"
            trigger={ExpandActionTypes.SET_EXPANDED_PICKUP}
            payload={!state.pickupExpanded}
          />
          <div
            className="content-forms mt-4 bg-drop-lightest-grey py-4"
            style={{ display: `${state.pickupExpanded ? "none" : "block"}` }}
          >
            <form className="content-form   px-6">
              <SearchableDropDown
                data={PrimaryLocationDataAPI}
                placeholder="- Select Starting Location -"
                reset={!(arriveMarkOnMap || arrivingpointAddressChecked)}
                createmode={false}
              />
            </form>
            <div className="checkboxes flex flex-col mt-4   px-6">
              <div className="checkbox flex items-center mb-2 self-start">
                <input
                  id="one"
                  type="checkbox"
                  onChange={() => handleArriveSwitchAddress()}
                  className="m-0 mr-2 bg-drop-white w-4 h-4 rounded grid place-items-center transition-all duration-300 ease-in-out cursor-pointer"
                />
                <span>Address</span>
              </div>
            </div>
            <form
              className="content-form   px-6"
              style={{
                display: `${arrivingpointAddressChecked ? "block" : "none"}`,
              }}
            >
              <FilterMenuInput
                type="text"
                placeholder="Address Line 1"
                extratailwindcss="mb-3"
              />
              <FilterMenuInput
                type="text"
                placeholder="Address Line 2"
                extratailwindcss="mb-3"
              />
              <FilterMenuInput
                type="text"
                placeholder="City"
                extratailwindcss="mb-3"
              />
              <FilterMenuInput type="number" placeholder="Postal Code" />
            </form>

            <div className="checkboxes flex flex-col mt-4   px-6">
              <div className="checkbox flex items-center mb-2 self-start">
                <input
                  id="one"
                  type="checkbox"
                  onChange={() => handleArriveMarkOnMap()}
                  className="m-0 mr-2 bg-drop-white w-4 h-4 rounded grid place-items-center transition-all duration-300 ease-in-out cursor-pointer"
                />
                <span>Mark on map</span>
              </div>
            </div>

            <div
              className="map h-[40vh]  px-6"
              style={{
                display: `${arriveMarkOnMap ? "block" : "none"}`,
              }}
            >
              <MapBox />
            </div>
          </div>
        </div>

        <div className="destination-point">
          <DropDownForm
            title="Destination point"
            trigger={ExpandActionTypes.SET_EXPANDED_DESTINATION}
            payload={!state.destinationExpanded}
          />
          <div
            className="content-forms mt-4 bg-drop-lightest-grey py-4"
            style={{
              display: `${state.destinationExpanded ? "none" : "block"}`,
            }}
          >
            <form className="content-form   px-6">
              <SearchableDropDown
                data={PrimaryLocationDataAPI}
                placeholder="- Select Destination Location -"
                reset={
                  !(DestinationMarkOnMap || DestinationpointAddressChecked)
                }
                createmode={false}
              />
            </form>
            <div className="checkboxes flex flex-col mt-4   px-6">
              <div className="checkbox flex items-center mb-2 self-start">
                <input
                  id="one"
                  type="checkbox"
                  className="m-0 mr-2 bg-drop-white w-4 h-4 rounded grid place-items-center transition-all duration-300 ease-in-out cursor-pointer"
                  onChange={() => handleDestinationSwitchAddress()}
                />
                <span>Address</span>
              </div>
            </div>
            <form
              className="content-form   px-6"
              style={{
                display: `${DestinationpointAddressChecked ? "block" : "none"}`,
              }}
            >
              <FilterMenuInput
                type="text"
                placeholder="Address Line 1"
                extratailwindcss="mb-3"
              />
              <FilterMenuInput
                type="text"
                placeholder="Address Line 2"
                extratailwindcss="mb-3"
              />
              <FilterMenuInput
                type="text"
                placeholder="City"
                extratailwindcss="mb-3"
              />
              <FilterMenuInput type="number" placeholder="Postal Code" />
            </form>

            <div className="checkboxes flex flex-col mt-4   px-6">
              <div className="checkbox flex items-center mb-2 self-start">
                <input
                  id="one"
                  type="checkbox"
                  onChange={() => handleDestinationMarkOnMap()}
                  className="m-0 mr-2 bg-drop-white w-4 h-4 rounded grid place-items-center transition-all duration-300 ease-in-out cursor-pointer"
                />
                <span>Mark on map</span>
              </div>
            </div>

            <div
              className="  px-6 map h-[40vh]"
              style={{
                display: `${DestinationMarkOnMap ? "block" : "none"}`,
              }}
            >
              <MapBox />
            </div>
          </div>
        </div>

        <div className="scheduled">
          <div className="dropdown-flex max-w-[96.5%] mx-auto">
            <DropDownForm title="Scheduled" />
            <div className="toggle-switch" style={{ marginTop: "1.5rem" }}>
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
            className="content-forms mt-4 bg-drop-lightest-grey py-4   px-6"
            style={{
              padding: "2rem",
              display: `${scheduled ? "block" : "none"}`,
            }}
          >
            <CustomizedDatePicker />
          </div>
        </div>

        <div className="immediate-courier">
          <div className="dropdown-flex max-w-[96.5%] mx-auto">
            <DropDownForm title="Immediate Courier?" />
            <div className="toggle-switch" style={{ marginTop: "1.5rem" }}>
              <Switch
                checked={isImmediateCourier}
                onColor="#525298"
                checkedIcon={false}
                uncheckedIcon={false}
                height={25}
                width={47}
                onChange={() => setIsImmediateCourier(!isImmediateCourier)}
              />
            </div>
          </div>
          <div
            className="content-forms mt-4 bg-drop-lightest-grey py-4   px-6"
            style={{
              padding: "2rem",
              display: `${isImmediateCourier ? "block" : "none"}`,
            }}
          >
            <p className="font-semibold text-drop-grey text-sm">
              Extra charges may apply.
            </p>
          </div>
        </div>

        <div className="cost">
          <DropDownForm
            title="Cost"
            trigger={ExpandActionTypes.SET_EXPANDED_COST}
            payload={!state.costExpanded}
          />
          <div
            className="content-forms mt-4 bg-drop-lightest-grey py-4"
            style={{ display: `${state.costExpanded ? "none" : "block"}` }}
          >
            <form className="content-form   px-6">
              <SearchableDropDown
                data={priceListAPI}
                placeholder={priceListAPI[0]}
                reset
                createmode={false}
              />
            </form>
          </div>
        </div>

        <div className="buttons">
          <CommonRoundedButton
            styles={{ backgroundColor: "#D32424", marginRight: "1rem" }}
            action={CommonButtonActions.CLOSE_FILTER}
          >
            Cancel
          </CommonRoundedButton>
          <CommonRoundedButton action={CommonButtonActions.OPEN_MODAL}>
            Done
          </CommonRoundedButton>
        </div>
      </div>
    </>
  );
}

export default Filters;
