/* eslint-disable max-len */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { CommonRoundedButton } from '../../../Components';
import UserImage from '../../../Assets/Images/user.png';

function Overview() {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookie, setCookie, removeCookie] = useCookies(['user']);

  function logOut() {
    removeCookie('user');
    navigate('/');
  }

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

      <div className="flex items-center space-x-10">
        <CommonRoundedButton
          extraTailwindClasses="transition-all transform scale-100 active:scale-90 duration-100 mt-10"
          styles={{ backgroundColor: '#D32424', marginRight: '1rem' }}
          ClickHandler={() => logOut()}
        >
          <div className="flex items-center">
            <i className="bi bi-box-arrow-left mr-2 text-xl" />
            <p>Log out</p>
          </div>
        </CommonRoundedButton>
        <CommonRoundedButton
          extraTailwindClasses="transition-all transform scale-100 active:scale-90 duration-100 mt-10"
        >
          <Link to="/profile/edit" className="flex items-center">
            <p>Edit Profile</p>
            <i className="bi bi-arrow-right-short ml-2 text-xl" />
          </Link>
        </CommonRoundedButton>
      </div>

    </div>
  );
}

export default Overview;
