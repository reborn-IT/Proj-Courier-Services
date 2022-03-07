import React from 'react';
import './Home.scss';
import logo from '../../Assets/Images/logo.svg';
import language from '../../Assets/Icons/language.svg';
import userprofile from '../../Assets/Icons/userprofile.svg';
import RoundedButton from '../../Components/CommonRoundedButton';
import MainFilterComponent from '../../Components/HomeFIlterComponent';
import HomeFeatured from '../../Lib/HomeFeatured';
import Testimonial from '../../Lib/Testimonial';

function Home() {
  return (
    <main className="main-wrapper">
      <div className="home-image">
        <div className="flex-row">
          <img src={logo} className="icon" alt="Logo" />
          <div className="right-top">
            <RoundedButton label="Become a Provider" />
            <img className="icon" src={language} alt="Language Icon" />
            <img className="icon" src={userprofile} alt="User Profile Icon" />
          </div>
        </div>

        <MainFilterComponent />
      </div>

      <section className="container">
        <HomeFeatured />
      </section>

      <section className="testimonial-wrapper">
        <Testimonial />
      </section>
    </main>
  );
}

export default Home;
