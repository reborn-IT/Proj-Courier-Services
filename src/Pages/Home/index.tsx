/* eslint-disable no-nested-ternary */
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

function Home() {
  const size: Size = useWindowSize();
  const [fixedNav, setFixedNav] = useState<boolean>(true);

  function getMinHeight(): number {
    if (size.width > 1024) {
      if (!fixedNav) return 14;
      return 65;
    }
    if (size.width > 960 && size.width <= 1024) {
      return 6;
    }
    if (size.width > 767 && size.width <= 960) {
      return 8;
    }
    return 0;
  }

  const [scrollDirection, setScrollDirection] = useState(window.scrollY);
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
          <div className="right-top">
            <RoundedButton label="Become a Provider" />
            <img className="icon" src={language} alt="Language Icon" />
            <img className="icon" src={userprofile} alt="User Profile Icon" />
          </div>
        </div>

        <div>
          <MainFilterComponent />
        </div>
      </nav>

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
