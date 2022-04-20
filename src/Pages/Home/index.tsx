import React, { useEffect } from 'react';
import './Home.scss';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import {
  Footer,
  Filters,
  Testimonial,
  HomeFeatured,
  FAQ,
} from '../../Lib';
import {
  StateProvider,
} from '../../Components/DropDownForm/DropDownStateProvider';
import { NavBar } from '../../Components';
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
