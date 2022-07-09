/* eslint-disable max-len */
import React, { useState } from "react";
import "./filters.scss";
import Switch from "react-switch";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import DropDownForm from "../../Components/DropDownForm";
import CustomizedDatePicker from "../../Components/CustomizedDatePicker";
import CommonRoundedButton, {
  CommonButtonActions,
} from "../../Components/CommonRoundedButton";
import SearchableDropDown, {
  IDropDownData,
} from "../../Components/SearchableDropDown";
import ConfirmationModal from "../ConfirmationModal";
import { useExpandedContext } from "../../Components/DropDownForm/DropDownStateProvider";
import { ExpandActionTypes } from "../../Components/DropDownForm/DropDownReducer";
import { getSaveModalState } from "../../Store/SaveFilterModal/selectors";
import FilterMenuInput from "../../Components/FilterMenuInput";
import { fetchSaveModalStateRequest } from "../../Store/SaveFilterModal/actions";

enum ExpandButtonState {
  VIEW_ALL = "View all...",
  SHOW_LESS = "Show less...",
}

function Filters() {
  const { state } = useExpandedContext();
  const [scheduled, setScheduled] = useState<boolean>(false);
  const [isImmediateCourier, setIsImmediateCourier] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [viewAllButtonState, setViewAllButtonState] =
    useState<ExpandButtonState>(ExpandButtonState.VIEW_ALL);
  const [serviceInput, setServiceInput] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [natureArray, setNatureArray] = useState<string[]>([]);
  const servicesAPI: IDropDownData[] = [
    {
      id: 1,
      title: "Fragile",
    },
    {
      id: 2,
      title: "Confidential",
    },
    {
      id: 3,
      title: "Documents",
    },
    {
      id: 4,
      title: "Tender",
    },
    {
      id: 5,
      title: "Bulk",
    },
    {
      id: 6,
      title: "Stationary",
    },
  ];
  const priceListAPI: IDropDownData[] = [
    {
      id: 1,
      title: "Price High to Low",
    },
    {
      id: 2,
      title: "Average Price",
    },
    {
      id: 3,
      title: "Price Low to High",
    },
  ];
  const PickupPointLocationAPI: IDropDownData[] = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Office",
    },
    {
      id: 3,
      title: "Work",
    },
  ];
  const DestinationPointLocationAPI: IDropDownData[] = [
    {
      id: 4,
      title: "Home",
    },
    {
      id: 5,
      title: "Office",
    },
    {
      id: 6,
      title: "Work",
    },
  ];
  const SaveFilterModalOpened = useSelector(getSaveModalState);
  const [services, setServices] = useState<IDropDownData[]>(servicesAPI);
  const [expandServices, setExpandServices] = useState<boolean>(true);
  const [arrivingPointAddressChecked, setArrivePointAddressChecked] =
    useState<boolean>(false);

  const [DestinationPointAddressChecked, setDestinationPointAddressChecked] =
    useState<boolean>(false);

  const filterServices = (needle: string) => {
    const query: string = needle.toLowerCase();
    setServices(
      servicesAPI.filter(
        ({ title }) => title.toLowerCase().indexOf(query) >= 0,
      ),
    );
  };

  const [weight, setWeight] = useState<number>(0);
  const [parcelCount, setParcelCount] = useState<number>(0);

  function numberInputHandler(value: any) {
    let checkedValue;

    const regExp = /^[0-9\b]+$/;
    if (value === "" || regExp.test(value)) {
      checkedValue = value;
    }

    return checkedValue;
  }

  function simpleFunc() {
    // eslint-disable-next-line no-console
    // console.log('hello');
  }

  const setNewServicesList = (e: any) => {
    // eslint-disable-next-line no-sequences, no-unused-expressions
    setServiceInput(e.currentTarget.value);
    if (e.currentTarget.value === "") {
      setServices(servicesAPI);
      setExpandServices(true);
    } else {
      filterServices(serviceInput);
    }
  };

  const handleArriveSwitchAddress = () => {
    setArrivePointAddressChecked(!arrivingPointAddressChecked);
  };

  function saveModalHandler() {
    dispatch(fetchSaveModalStateRequest(true));
  }

  const handleDestinationSwitchAddress = () => {
    setDestinationPointAddressChecked(!DestinationPointAddressChecked);
  };

  const handleNatureArray = (item: string) => {
    if (natureArray.includes(item)) {
      setNatureArray(natureArray.filter((element: string) => element !== item));
      setServices(
        services
          .filter(({ title }) => title !== item)
          .concat(services.filter(({ title }) => title === item)),
      );
    } else {
      setServices(
        services
          // eslint-disable-next-line no-nested-ternary
          .sort((a, b) => (a.title === item ? -1 : b.title === item ? 1 : 0)),
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
                ? services.slice(0, 4).map(({ id, title }) => (
                    <motion.div
                      layout
                      key={id}
                      className="checkbox flex items-center mb-2 self-start"
                    >
                      <input
                        id="one"
                        type="checkbox"
                        checked={natureArray.includes(title)}
                        onChange={() => handleNatureArray(title)}
                        className="m-0 mr-2 bg-drop-white w-4 h-4 rounded grid place-items-center transition-all duration-300 ease-in-out cursor-pointer"
                      />
                      <span>{title}</span>
                    </motion.div>
                  ))
                : services.map(({ id, title }) => (
                    <motion.div
                      layout
                      key={id}
                      className="checkbox flex items-center mb-2 self-start"
                    >
                      <input
                        id="one"
                        type="checkbox"
                        checked={natureArray.includes(title)}
                        onChange={() => handleNatureArray(title)}
                      />
                      <span>{title}</span>
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
            <form className="content-form px-6">
              <FilterMenuInput
                type="number"
                onChangeHandler={(e) =>
                  setWeight(numberInputHandler(e.target.value))
                }
                placeholder="Weight in kilograms"
                value={weight}
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
              <FilterMenuInput
                type="number"
                placeholder="Quantity"
                onChangeHandler={(e) =>
                  setParcelCount(numberInputHandler(e.target.value))
                }
                value={parcelCount}
              />
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
                data={PickupPointLocationAPI}
                placeholder="- Select Starting Location -"
                reset={!arrivingPointAddressChecked}
                createMode={false}
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
                display: `${arrivingPointAddressChecked ? "block" : "none"}`,
              }}
            >
              <FilterMenuInput
                type="text"
                placeholder="Address Line 1"
                onChangeHandler={() => simpleFunc()}
                value={weight}
                extraTailwindCSS="mb-3"
              />
              <FilterMenuInput
                type="text"
                placeholder="Address Line 2"
                onChangeHandler={() => simpleFunc()}
                value={weight}
                extraTailwindCSS="mb-3"
              />
              <FilterMenuInput
                type="text"
                placeholder="City"
                onChangeHandler={() => simpleFunc()}
                value={weight}
                extraTailwindCSS="mb-3"
              />
              <FilterMenuInput
                type="number"
                onChangeHandler={() => simpleFunc()}
                value={weight}
                placeholder="Postal Code"
              />
            </form>
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
                data={DestinationPointLocationAPI}
                placeholder="- Select Destination Location -"
                reset={!DestinationPointAddressChecked}
                createMode={false}
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
                display: `${DestinationPointAddressChecked ? "block" : "none"}`,
              }}
            >
              <FilterMenuInput
                type="text"
                placeholder="Address Line 1"
                onChangeHandler={() => simpleFunc()}
                value={weight}
                extraTailwindCSS="mb-3"
              />
              <FilterMenuInput
                type="text"
                placeholder="Address Line 2"
                onChangeHandler={() => simpleFunc()}
                value={weight}
                extraTailwindCSS="mb-3"
              />
              <FilterMenuInput
                type="text"
                placeholder="City"
                onChangeHandler={() => simpleFunc()}
                value={weight}
                extraTailwindCSS="mb-3"
              />
              <FilterMenuInput
                type="number"
                onChangeHandler={() => simpleFunc()}
                value={weight}
                placeholder="Postal Code"
              />
            </form>
          </div>
        </div>

        <div className="scheduled">
          <div className="dropdown-flex max-w-[96.5%] mx-auto">
            <DropDownForm
              title="Scheduled"
              payload
              trigger={ExpandActionTypes.SET_EXPANDED_NATURE}
            />
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
            <DropDownForm
              title="Immediate Courier?"
              payload
              trigger={ExpandActionTypes.SET_EXPANDED_NATURE}
            />
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
                placeholder={priceListAPI[0].title}
                reset
                createMode={false}
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
          <CommonRoundedButton ClickHandler={() => saveModalHandler()}>
            Done
          </CommonRoundedButton>
        </div>
      </div>
    </>
  );
}

export default Filters;
