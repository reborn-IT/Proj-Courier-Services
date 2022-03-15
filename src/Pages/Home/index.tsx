import React, { useCallback, useEffect, useState } from 'react';
import './Home.scss';
import { ToastContainer } from 'react-toastify';
import logo from '../../Assets/Images/logo.svg';
import language from '../../Assets/Icons/language.svg';
import userprofile from '../../Assets/Icons/userprofile.svg';
import RoundedButton from '../../Components/CommonRoundedButton';
import MainFilterComponent from '../../Components/HomeFIlterComponent';
import HomeFeatured from '../../Lib/HomeFeatured';
import Testimonial from '../../Lib/Testimonial';
import FAQ from '../../Lib/FAQ';
import Footer from '../../Lib/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { Size, useWindowSize } from '../../Utils/Hooks/useWindowSize';
import Filters from '../../Lib/Filters';

function Home() {
  const size: Size = useWindowSize();
  const [fixedNav, setFixedNav] = useState<boolean>(true);

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

  const [
    scrollDirection,
    setScrollDirection,
  ] = useState<number>(window.scrollY);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const scrollTop = window.scrollY;

  const handleNavigation = useCallback((e) => {
    const window = e.currentTarget;
    if (scrollDirection > window.scrollY && scrollTop < 50) {
      setFixedNav(true);
    } else if (scrollDirection < window.scrollY) {
      setFixedNav(false);
    }
    setScrollDirection(window.scrollY);
  }, [scrollDirection, scrollTop]);

  useEffect(() => {
    setScrollDirection(window.scrollY);
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <main className="main-wrapper">
      <ToastContainer />
      <nav
        className={`
        transition-height
        ${fixedNav ? 'home-image' : 'home-image-scrolling'}`}
        style={{ height: `${getMinHeight()}vh` }}
      >
        <div className="flex-row">
          <img src={logo} className="icon" alt="Logo" />
          <button
            type="button"
            className="menu-icon"
            onClick={() => setOpenMenu(!openMenu)}
            style={{ display: `${size.width < 480 ? 'block' : 'none'}` }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
          <div className={`fixed-menu ${openMenu ? '' : 'hidden'}`}>
            <div className="relative">
              <div className="middle-menu">
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
                <ul>
                  <li>Become a Provider</li>
                  <li>Language</li>
                  <li>My Account</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="right-top"
            style={{ display: `${size.width < 767 ? 'none' : 'block'}` }}
          >
            <RoundedButton label="Become a Provider" />
            <img className="icon" src={language} alt="Language Icon" />
            <img className="icon" src={userprofile} alt="User Profile Icon" />
          </div>
        </div>

        <div>
          <MainFilterComponent />
        </div>
      </nav>
      <div className="filter-menu">
        <Filters />
      </div>

      <section className="container">
        <HomeFeatured />
      </section>

      <section className="wrapper testimonial-wrapper">
        <Testimonial />
      </section>

      <section className="wrapper faq-wrapper">
        <FAQ />
      </section>

      <section className="wrapper footer">
        <Footer />
      </section>
    </main>
  );
}

export default Home;
