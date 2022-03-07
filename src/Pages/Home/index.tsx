import React from 'react';
import './Home.scss';
import { ToastContainer } from 'react-toastify';
import { useInView } from 'react-intersection-observer';
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

function Home() {
  const [homeFeaturedRef, HomeFeaturedInView] = useInView({ threshold: 0.5 });
  return (
    <main className="main-wrapper">
      <ToastContainer />
      <nav
        className={`
        home-image ${HomeFeaturedInView ? '' : 'home-image-neutral'}`}
      >
        <div className="flex-row">
          <img src={logo} className="icon" alt="Logo" />
          <div className="right-top">
            <RoundedButton label="Become a Provider" />
            <img className="icon" src={language} alt="Language Icon" />
            <img className="icon" src={userprofile} alt="User Profile Icon" />
          </div>
        </div>

        <MainFilterComponent />
      </nav>

      <div className="invisible-part" ref={homeFeaturedRef} />

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

      {/* <footer className="wrapper">
        <Footer />
      </footer> */}
    </main>
  );
}

export default Home;
