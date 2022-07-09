/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable max-len */
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavBar } from "../../Components";
import { StateProvider } from "../../Components/DropDownForm/DropDownStateProvider";
import { FAQ, Filters, Footer, HomeFeatured, Testimonial } from "../../Lib";
import { getModalState } from "../../Store/FilterMenuModal/selectors";
import { fetchNavigationBarStatusRequest } from "../../Store/NavigationBar/actions";
import { SCROLLINGDOWN, SCROLLINGUP } from "../../Utils/constants";
import "./Home.scss";

function Home() {
  const modalState: boolean | null = useSelector(getModalState);
  const dispatch = useDispatch();
  const testimonialRef: any = useRef(null);

  const { ref, inView } = useInView();
  const [topTriggerRef1, inViewTopTrigger1] = useInView();
  const [topTriggerRef2, inViewTopTrigger2] = useInView();

  useEffect(() => {
    if (modalState) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [modalState]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [scrollDir, setScrollDir] = useState<SCROLLINGDOWN | SCROLLINGUP>(
    "scrolling_down",
  );

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling_down" : "scrolling_up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  useEffect(() => {
    if (scrollDir === "scrolling_down") {
      if (inView && inViewTopTrigger1) {
        window.scrollTo(
          0,
          testimonialRef.current?.offsetTop +
            testimonialRef.current?.clientHeight,
        );
        dispatch(fetchNavigationBarStatusRequest("scrolling"));
      } else {
        dispatch(fetchNavigationBarStatusRequest("normal"));
      }
    } else if (inViewTopTrigger2) {
      dispatch(fetchNavigationBarStatusRequest("normal"));
    } else {
      dispatch(fetchNavigationBarStatusRequest("scrolling"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, inViewTopTrigger2]);

  return (
    <main className="main-wrapper bg-drop-white w-full overflow-x-hidden box-border relative">
      <ToastContainer />
      <NavBar homeComponent />
      <div
        className="fixed top-0 left-0 right-0 bottom-0 h-full w-full shadow-xl transition-all duration-150 ease-in-out z-50"
        style={{ display: `${modalState ? "block" : "none"}` }}
      >
        <StateProvider>
          <Filters />
        </StateProvider>
      </div>

      <div
        className={`glass-bg fixed top-0 right-0 left-0 bottom-0 w-full h-full z-40 ${
          modalState ? "block" : "hidden"
        }`}
      />

      <section className="container relative">
        <div
          ref={topTriggerRef2}
          className="top-trigger top-10 w-full h-5 -z-50"
        />
        <HomeFeatured />
        <div
          ref={topTriggerRef1}
          className="top-trigger bottom-0 w-full h-5 -z-50"
        />
      </section>

      <div className="trigger-wrapper relative overflow-y-hidden">
        <section className="wrapper h-[36vh] xl:h-[60vh] md:mt-[12rem] lg:mt-[16rem] w-[98%] mx-auto relative testimonial-wrapper rounded-3xl container">
          <Testimonial />
          <div
            ref={testimonialRef}
            className="top-trigger bottom-0 w-full h-5 -z-50"
          />
        </section>

        <section className="wrapper faq-wrapper py-14 h-auto bg-drop-green w-[98%] mx-auto mt-8 md:mt-56 lg:mt-36 xl:mt-28 relative container rounded-3xl">
          <FAQ />
        </section>

        <section className="wrapper footer h-auto bg-drop-primary w-[98%] mx-auto mt-8 xl:mb-5 relative container rounded-3xl">
          <Footer />
        </section>
        <div
          ref={ref}
          className="absolute h-full left-0 w-full -z-50 bottom-0"
        />
      </div>
    </main>
  );
}

export default Home;
