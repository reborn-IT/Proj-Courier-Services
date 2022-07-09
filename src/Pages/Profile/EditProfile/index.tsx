/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CommonRoundedButton, FilterMenuInput } from "../../../Components";
import UserImage from "../../../Assets/Images/user-placeholder.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

interface AddNewAddressI {
  id: number;
  title: string;
  lineOne: string;
  lineTwo: string;
  town: string;
}

function EditProfile() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<number>(0);
  const [addressLineOne, setAddressLineOne] = useState<string>("");
  const [addressLineTwo, setAddressLineTwo] = useState<string>("");
  const [city, setCity] = useState<string>("");
  // Add another address section
  const [newAddress, setNewAddress] = useState<boolean>(false);
  const [addressTitle, setAddressTitle] = useState<string>("");
  const [anotherAddressLineOne, setAnotherAddressLineOne] =
    useState<string>("");
  const [anotherAddressLineTwo, setAnotherAddressLineTwo] =
    useState<string>("");
  const [anotherAddressCity, setAnotherAddressCity] = useState<string>("");
  const [anotherAddresses, setAnotherAddresses] = useState<AddNewAddressI[]>(
    [],
  );

  const navigate = useNavigate();

  // Ref

  const addressTitleRef = useRef<any>(null);
  const addressLineOneRef = useRef<any>(null);
  const addressLineTwoRef = useRef<any>(null);
  const addressCityRef = useRef<any>(null);

  // Clear Inputs
  function clearInputsHandler() {
    addressTitleRef.current.value = "";
    addressLineOneRef.current.value = "";
    addressLineTwoRef.current.value = "";
    addressCityRef.current.value = "";

    setAddressTitle("");
    setAnotherAddressLineOne("");
    setAnotherAddressLineTwo("");
    setAnotherAddressCity("");
  }

  function addNewItem() {
    let addressID: number;
    if (anotherAddresses.length >= 1) {
      addressID = anotherAddresses[anotherAddresses.length - 1].id + 1;
    } else {
      addressID = 1;
    }

    const currentArray = [
      ...anotherAddresses,
      {
        id: addressID,
        title: addressTitle,
        lineOne: anotherAddressLineOne,
        lineTwo: anotherAddressLineTwo,
        town: anotherAddressCity,
      },
    ];
    setAnotherAddresses(currentArray);
    setNewAddress(false);
    clearInputsHandler();
  }

  return (
    <div className="profile flex flex-col justify-center items-center mt-12 md:mt-20 2xl:mt-36">
      <h3 className="mb-3 text-3xl font-semibold text-drop-primary">
        Edit Profile
      </h3>
      <div className="user-img w-[16rem] lg:w-[20rem] h-[16rem] lg:h-[20rem] rounded-full overflow-hidden transition-all duration-300">
        <img src={UserImage} alt="User" className="object-cover" />
      </div>

      {/* Image Upload */}
      <div className="flex justify-center items-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-drop-primary border-dashed cursor-pointer hover:bg-gray-100"
        >
          <div className="flex flex-col justify-center items-center pt-5 pb-6">
            <svg
              className="mb-3 w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold mr-2">Click to upload</span>
              or drag and drop
            </p>
            <p className="text-xs text-gray-500">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      {/* End of Image Upload */}

      <form className="content-form w-full mt-4">
        <FilterMenuInput
          type="text"
          placeholder="First Name"
          extraTailwindCSS="w-full"
          styles={{
            width: "100%",
          }}
          onChangeHandler={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <FilterMenuInput
          type="text"
          placeholder="Last Name"
          extraTailwindCSS="w-full mt-3"
          styles={{
            width: "100%",
          }}
          onChangeHandler={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <FilterMenuInput
          type="tel"
          placeholder="Phone Number"
          extraTailwindCSS="w-full mt-3"
          extraAttributes={{
            pattern:
              /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/,
            required: true,
          }}
          styles={{
            width: "100%",
          }}
          value={phoneNumber}
          onChangeHandler={(e) => setPhoneNumber(e.target.value)}
        />
        {/* Primary Address */}
        <p className="mt-4 mb-2 text-drop-primary font-semibold">
          Primary Address
        </p>
        <FilterMenuInput
          type="text"
          placeholder="Line 1"
          extraTailwindCSS="w-full"
          styles={{
            width: "100%",
          }}
          onChangeHandler={(e) => setAddressLineOne(e.target.value)}
          value={addressLineOne}
        />
        <FilterMenuInput
          type="text"
          placeholder="Line 2"
          extraTailwindCSS="w-full mt-3"
          styles={{
            width: "100%",
          }}
          onChangeHandler={(e) => setAddressLineTwo(e.target.value)}
          value={addressLineTwo}
        />
        <FilterMenuInput
          type="text"
          placeholder="City"
          extraTailwindCSS="w-full mt-3"
          styles={{
            width: "100%",
          }}
          onChangeHandler={(e) => setCity(e.target.value)}
          value={city}
        />
      </form>

      {/* Secondary Address */}

      {/* Add Another Address */}

      <form className="w-full mt-6">
        <div className="flex items-center justify-between w-full">
          <p className="text-drop-primary font-semibold">Another Address</p>
          <button
            onClick={() => setNewAddress(!newAddress)}
            type="button"
            className={`hover:scale-110 active:scale-90 transition-all duration-300 transform ${
              newAddress ? "rotate-[135deg]" : "rotate-0"
            }`}
          >
            <i className="bi bi-plus-circle-fill text-3xl text-drop-primary" />
          </button>
        </div>
        <div className={`${newAddress ? "block" : "hidden"} w-full mt-5`}>
          <FilterMenuInput
            type="text"
            placeholder="Title"
            innerRef={addressTitleRef}
            extraTailwindCSS="w-full"
            styles={{
              width: "100%",
            }}
            onChangeHandler={(e) => setAddressTitle(e.target.value)}
            value={addressTitle}
          />
          <FilterMenuInput
            type="text"
            innerRef={addressLineOneRef}
            placeholder="Line 1"
            extraTailwindCSS="w-full mt-3"
            styles={{
              width: "100%",
            }}
            onChangeHandler={(e) => setAnotherAddressLineOne(e.target.value)}
            value={anotherAddressLineOne}
          />
          <FilterMenuInput
            type="text"
            innerRef={addressLineTwoRef}
            placeholder="Line 2"
            extraTailwindCSS="w-full mt-3"
            styles={{
              width: "100%",
            }}
            onChangeHandler={(e) => setAnotherAddressLineTwo(e.target.value)}
            value={anotherAddressLineTwo}
          />
          <FilterMenuInput
            type="text"
            innerRef={addressCityRef}
            placeholder="City"
            extraTailwindCSS="w-full mt-3"
            styles={{
              width: "100%",
            }}
            onChangeHandler={(e) => setAnotherAddressCity(e.target.value)}
            value={anotherAddressCity}
          />
          <div className="flex items-center space-x-4 w-full justify-center">
            <CommonRoundedButton
              extraTailwindClasses="transition-all transform scale-100 active:scale-90 duration-100 mt-10 bg-drop-red"
              ClickHandler={() => clearInputsHandler()}
            >
              <div className="flex items-center">
                <p>Clear Inputs</p>
              </div>
            </CommonRoundedButton>
            <CommonRoundedButton
              extraTailwindClasses="transition-all transform scale-100 active:scale-90 duration-100 mt-10"
              // Change Later
              ClickHandler={() => addNewItem()}
            >
              <div className="flex items-center">
                <p>Add New Address</p>
              </div>
            </CommonRoundedButton>
          </div>
        </div>
        <div
          className={`flex mt-7 p-5 flex-col ${
            anotherAddresses.length >= 1
              ? "justify-start items-start min-h-64"
              : "justify-center items-center h-64"
          } w-full bg-gray-50 rounded-lg border-2 border-drop-primary border-dashed`}
        >
          {anotherAddresses.length < 1 ? (
            <>
              <p className="italic text-sm font-semibold text-drop-grey">
                Add Another address, save your time when filtering.
              </p>
              <p className="italic text-drop-textshaded text-xs">
                (Added addresses will appear here.)
              </p>
            </>
          ) : (
            anotherAddresses.map(({ id, title, lineOne, lineTwo, town }) => (
              <div
                key={id}
                className="w-full text-drop-grey mb-2 flex shadow items-center bg-drop-white px-3 py-3 rounded-md"
              >
                <p className="font-bold text-lg">{title}</p>
                <p className="ml-4 text-sm text-drop-grey/90">
                  {lineOne} , {lineTwo} , {town}
                </p>
              </div>
            ))
          )}
        </div>
      </form>

      <div className="flex items-center space-x-4">
        <CommonRoundedButton
          extraTailwindClasses="transition-all transform scale-100 active:scale-90 duration-100 mt-10 bg-drop-red"
          ClickHandler={() => navigate(-1)}
        >
          <p>Go Back</p>
        </CommonRoundedButton>
        <CommonRoundedButton extraTailwindClasses="transition-all transform scale-100 active:scale-90 duration-100 mt-10">
          <div className="flex items-center">
            <p>Update Profile</p>
          </div>
        </CommonRoundedButton>
      </div>
    </div>
  );
}

export default EditProfile;
