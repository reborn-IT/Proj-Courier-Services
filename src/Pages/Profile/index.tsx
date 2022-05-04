/* eslint-disable max-len */
import React, { useState } from 'react';
import { CommonRoundedButton, NavBar } from '../../Components';
import 'bootstrap-icons/font/bootstrap-icons.css';
import UserImage from '../../Assets/Images/user.png';

function Profile() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selected, setSelected] = useState<boolean>(true);
  return (
    <main className="main-wrapper bg-drop-white w-full overflow-x-hidden box-border h-screen">
      <NavBar homeComponent={false} />

      <div className="w-[95vw] md:w-[80vw] xl:w-[60vw] 2xl:w-[40vw] mx-auto">
        {/* TAB NAVIGATION */}
        <nav className="mt-8 md:mt-16">
          <ul className="relative flex items-center">
            <li className="option-aside border border-sky-500 flex justify-center" style={{ width: '33.33%' }}>
              <button type="button" className={`flex px-4 items-center text-base md:text-xl hover:text-drop-primary transition-colors duration-300 font-semibold ${selected ? 'text-drop-primary' : 'text-drop-grey'}`}>
                <i className="bi bi-person-circle sm:mr-2 md:mr-3 text-2xl sm:text-lg md:text-2xl" />
                <p className="hidden sm:block">Profile</p>
              </button>
            </li>
            <li className="option-aside border border-sky-500 flex justify-center" style={{ width: '33.33%' }}>
              <button type="button" className="flex px-4 items-center text-base md:text-xl hover:text-drop-primary transition-colors duration-300 font-semibold text-drop-grey">
                <i className="bi bi-heart-fill sm:mr-2 md:mr-3 text-2xl sm:text-lg md:text-2xl" />
                <p className="hidden sm:block">Favorites</p>
              </button>
            </li>
            <li className="option-aside border border-sky-500 flex justify-center" style={{ width: '33.33%' }}>
              <button type="button" className="flex px-4 items-center text-base md:text-xl hover:text-drop-primary transition-colors duration-300 font-semibold text-drop-grey">
                <i className="bi bi-card-checklist sm:mr-2 md:mr-3 text-2xl sm:text-lg md:text-2xl" />
                <p className="hidden sm:block">Filter Log</p>
              </button>
            </li>
            <span className="z-50 absolute -bottom-4 sm:-bottom-2 md:-bottom-4 bg-drop-primary left-0 h-1 transform transition-all duration-500 rounded-full" style={{ width: '33.33%' }} />
            <span className="z-40 absolute -bottom-4 sm:-bottom-2 md:-bottom-4 bg-drop-light-grey left-0 h-1 transform transition-all duration-500 rounded-full w-full" />
          </ul>
        </nav>
        {/* END TAB NAVIGATION */}
        <div className="profile flex flex-col justify-center items-center mt-12 md:mt-20">
          <div className="user-img w-[16rem] lg:w-[20rem] h-[16rem] lg:h-[20rem] rounded-full overflow-hidden transition-all duration-300">
            <img src={UserImage} alt="User" className="object-cover" />
          </div>

          {/* INFORMATION */}
          <div className="information mt-8">
            <h2 className="text-drop-primary font-semibold text-2xl md:text-4xl lg:text-5xl text-center">Tharindu Kumesh</h2>
            <div className="flex items-center justify-between text-drop-grey mt-2">
              <p>created at 2nd May, 2022</p>
              <p>
                <i className="bi bi-geo-alt-fill mr-2" />
                Negombo
              </p>
            </div>
          </div>
          {/* END INFORMATION */}

          <CommonRoundedButton extraTailwindClasses="transition-all transform scale-100 active:scale-90 duration-100 mt-10">
            <div className="flex items-center">
              <p>Edit Profile</p>
              <i className="bi bi-arrow-right-short ml-2 text-xl" />
            </div>
          </CommonRoundedButton>

        </div>
      </div>
    </main>
  );
}

export default Profile;
