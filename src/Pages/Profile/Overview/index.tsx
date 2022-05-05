/* eslint-disable max-len */
import React from 'react';
import { CommonRoundedButton } from '../../../Components';
import UserImage from '../../../Assets/Images/user.png';

function Overview() {
  return (
    <div className="profile flex flex-col justify-center items-center mt-12 md:mt-20">
      <div className="user-img w-[16rem] lg:w-[20rem] h-[16rem] lg:h-[20rem] rounded-full overflow-hidden transition-all duration-300">
        <img src={UserImage} alt="User" className="object-cover" />
      </div>

      <div className="information mt-8">
        <h2 className="text-drop-primary font-semibold text-2xl md:text-4xl lg:text-5xl text-center">Tharindu Kumesh</h2>
        <div className="flex text-sm md:text-base items-center justify-between text-drop-grey mt-2">
          <p>created at 2nd May, 2022</p>
          <p className="ml-3 md:ml-5">
            <i className="bi bi-geo-alt-fill mr-1 md:mr-2" />
            Negombo
          </p>
        </div>
      </div>

      <CommonRoundedButton
        extraTailwindClasses="transition-all transform scale-100 active:scale-90 duration-100 mt-10"
      >
        <div className="flex items-center">
          <p>Edit Profile</p>
          <i className="bi bi-arrow-right-short ml-2 text-xl" />
        </div>
      </CommonRoundedButton>

    </div>
  );
}

export default Overview;
