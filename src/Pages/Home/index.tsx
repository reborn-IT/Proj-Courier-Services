/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
      className="main-wrapper bg-drop-white w-full overflow-x-hidden box-border"
    >
      <ToastContainer />
      <NavBar homeComponent />
      <div
        className="fixed top-0 left-0 right-0 bottom-0 h-full w-full shadow-xl transition-all duration-150 ease-in-out z-50"
        style={{ display: `${modalState ? 'block' : 'none'}` }}
      >
        <StateProvider>
          <Filters />
        </StateProvider>
      </div>

      <section className="container">
        <HomeFeatured />
      </section>

      <section className="wrapper h-72 max-h-[60vh] xl:max-h-[80vh] sm:h-[80vh] mt-10 sm:mt-[16rem] w-[98%] mx-auto relative testimonial-wrapper rounded-3xl container">
        <Testimonial />
      </section>

      <section className="wrapper faq-wrapper py-8 h-auto bg-drop-green w-[98%] mx-auto mt-5 lg:mt-14 xl:mt-24 relative container rounded-3xl">
        <FAQ />
      </section>

      <section className="wrapper footer h-auto bg-drop-primary w-[98%] mx-auto mt-8 mb-5 relative container rounded-3xl">
        <Footer />
      </section>
    </main>
  );
}

export default Home;
