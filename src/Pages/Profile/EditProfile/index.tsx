/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CommonRoundedButton, FilterMenuInput } from '../../../Components';
import UserImage from '../../../Assets/Images/user-placeholder.jpg';

function EditProfile() {
  const [firstName, setFirstName] = useState<string>(null);
  const [lastName, setLastName] = useState<string>(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [addressLineOne, setAddressLineOne] = useState<string>(null);
  const [addressLineTwo, setAddressLineTwo] = useState<string>(null);
  const [city, setCity] = useState<string>(null);
  return (
    <div className="profile flex flex-col justify-center items-center mt-12 md:mt-20">
      <h3 className="mb-3 text-3xl font-semibold text-drop-primary">Edit Profile</h3>
      <div className="user-img w-[16rem] lg:w-[20rem] h-[16rem] lg:h-[20rem] rounded-full overflow-hidden transition-all duration-300">
        <img src={UserImage} alt="User" className="object-cover" />
      </div>

      {/* Image Upload */}
      <div className="flex justify-center items-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100">
          <div className="flex flex-col justify-center items-center pt-5 pb-6">
            <svg className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold mr-2">Click to upload</span>
              or drag and drop
            </p>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      {/* End of Image Upload */}

      <form
        className="content-form w-full mt-4"
      >
        <FilterMenuInput
          type="text"
          placeholder="First Name"
          extratailwindcss="w-full"
          styles={{
            width: '100%',
          }}
          onChangeHandler={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <FilterMenuInput
          type="text"
          placeholder="Last Name"
          extratailwindcss="w-full mt-3"
          styles={{
            width: '100%',
          }}
          onChangeHandler={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <FilterMenuInput
          type="tel"
          placeholder="Phone Number"
          extratailwindcss="w-full mt-3"
          extraAttributes={
            {
              pattern: /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/,
              required: true,
            }
          }
          styles={{
            width: '100%',
          }}
          value={phoneNumber}
          onChangeHandler={(e) => setPhoneNumber(e.target.value)}
        />
        <p className="mt-4 mb-2 text-drop-primary font-semibold">Primary Address</p>
        <FilterMenuInput
          type="text"
          placeholder="Line 1"
          extratailwindcss="w-full"
          styles={{
            width: '100%',
          }}
          onChangeHandler={(e) => setAddressLineOne(e.target.value)}
          value={addressLineOne}
        />
        <FilterMenuInput
          type="text"
          placeholder="Line 2"
          extratailwindcss="w-full mt-3"
          styles={{
            width: '100%',
          }}
          onChangeHandler={(e) => setAddressLineTwo(e.target.value)}
          value={addressLineTwo}
        />
        <FilterMenuInput
          type="text"
          placeholder="City"
          extratailwindcss="w-full mt-3"
          styles={{
            width: '100%',
          }}
          onChangeHandler={(e) => setCity(e.target.value)}
          value={city}
        />
      </form>

      <div className="flex items-center space-x-4">
        <CommonRoundedButton
          extraTailwindClasses="transition-all transform scale-100 active:scale-90 duration-100 mt-10 bg-drop-red"
        >
          <Link to="/profile/overview" className="flex items-center">
            <p>Go Back</p>
          </Link>
        </CommonRoundedButton>
        <CommonRoundedButton
          extraTailwindClasses="transition-all transform scale-100 active:scale-90 duration-100 mt-10"
        >
          <div className="flex items-center">
            <p>Update Profile</p>
          </div>
        </CommonRoundedButton>
      </div>

    </div>
  );
}

export default EditProfile;
