/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { useCallback, useEffect, useState } from 'react';
import { Size, useWindowSize } from '../../Utils/Hooks/useWindowSize';
import CommonRoundedButton from '../CommonRoundedButton';
import MainFilterComponent from '../HomeFIlterComponent';
import logo from '../../Assets/Images/logo.svg';
import language from '../../Assets/Icons/language.svg';
import userprofile from '../../Assets/Icons/userprofile.svg';

interface NavBarProps {
    homeComponent: boolean;
}

function NavBar({ homeComponent } : NavBarProps) {
  const size: Size = useWindowSize();
  const [fixedNav, setFixedNav] = useState<boolean>(true);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const scrollTop:number = window.scrollY;
  const [
    scrollDirection,
    setScrollDirection,
  ] = useState<number>(window.scrollY);

  function getMinHeight(): number {
    if (size.width > 1540) {
      if (!fixedNav) return 8;
      return 65;
    }
    if (size.width > 1024) {
      if (!fixedNav) return 14;
      return 65;
    }
    if (size.width > 960 && size.width <= 1024) {
      if (!fixedNav) return 6;
      return 65;
    }
    if (size.width > 767 && size.width <= 960) {
      if (!fixedNav) return 8;
      return 65;
    }
    if (!fixedNav) return 10;
    return 60;
  }

  const handleNavigation = useCallback((e) => {
    if (homeComponent) {
      const window = e.currentTarget;
      if (scrollDirection > window.scrollY && scrollTop < 50) {
        setFixedNav(true);
      } else if (scrollDirection < window.scrollY) {
        setFixedNav(false);
      }
      setScrollDirection(window.scrollY);
    }
  }, [scrollDirection, scrollTop, homeComponent]);

  useEffect(() => {
    setScrollDirection(window.scrollY);
    window.addEventListener('scroll', handleNavigation);
    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <nav
      className={`
        transition-all
        duration-500
        ease-in-out
        ${homeComponent
        ? fixedNav
          ? 'home-image max-h-[65vh] h-[65vh] bg-center bg-no-repeat bg-cover relative'
          : 'home-image-scrolling overflow-hidden fixed top-0 left-0 right-0 z-50 shadow-xl'
        : 'home-image-other bg-center bg-no-repeat bg-cover'}`}
      style={{ height: `${homeComponent ? getMinHeight() : '10'}vh` }}
    >
      <div className="flex items-center justify-between w-full pt-3 px-4">
        <img src={logo} className="icon w-12 h-12 ml-2" alt="Logo" />
        <button
          type="button"
          className="menu-icon ml-2"
          onClick={() => setOpenMenu(!openMenu)}
          style={{ display: `${size.width < 480 ? 'block' : 'none'}` }}
        >
          <svg
            height={48}
            width={48}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className={`fixed-menu ${openMenu ? '' : 'hidden overflow-hidden transform scale-0'} fixed top-0 left-0 right-0 bottom-0 z-40 h-full w-full shadow-xl transition-all duration-300 ease-in-out`}>
          <div className="relative h-full w-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 z-50 flex items-end flex-col">
              <button
                className="menu-icon"
                type="button"
                onClick={() => setOpenMenu(!openMenu)}
              >
                <svg
                  width={54}
                  height={54}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#D32424"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ul className="px-4 py-3 bg-drop-white flex flex-col mt-2 space-y-3">
                <li className="text-drop-primary font-semibold">Become a Provider</li>
                <li className="text-drop-primary font-semibold">Language</li>
                <li className="text-drop-primary font-semibold">My Account</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="items-center mr-2"
          style={{ display: `${size.width < 767 ? 'none' : 'flex'}` }}
        >
          <CommonRoundedButton>
            Become a Provider
          </CommonRoundedButton>
          <img className="icon w-12 h-12 ml-2" src={language} alt="Language Icon" />
          <img className="icon w-12 h-12 ml-2" src={userprofile} alt="User Profile Icon" />
        </div>
      </div>

      <div style={{ display: `${homeComponent ? 'block' : 'none'}` }}>
        <MainFilterComponent />
      </div>
    </nav>
  );
}

export default NavBar;
