import React, { useEffect } from 'react';
import './Home.scss';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import HomeFeatured from '../../Lib/HomeFeatured';
import Testimonial from '../../Lib/Testimonial';
import FAQ from '../../Lib/FAQ';
import Footer from '../../Lib/Footer';
import 'react-toastify/dist/ReactToastify.css';
import Filters from '../../Lib/Filters';
import {
  StateProvider,
} from '../../Components/DropDownForm/DropDownStateProvider';
import NavBar from '../../Components/NavBar';
import { getModalState } from '../../Store/FilterMenuModal/selectors';

function Home() {
  const modalState: boolean | null = useSelector(getModalState);

  useEffect(() => {
    if (modalState) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [modalState]);

  return (
    <main
      className="main-wrapper"
    >
      <ToastContainer />
      <NavBar homeComponent />
      <div
        className="filter-menu"
        style={{ display: `${modalState ? 'block' : 'none'}` }}
      >
        <StateProvider>
          <Filters />
        </StateProvider>
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
