/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import language from "../../Assets/Icons/language.svg";
import userprofile from "../../Assets/Icons/userprofile.svg";
import logo from "../../Assets/Images/logo.svg";
import { getNavigationBarStatus } from "../../Store/NavigationBar/selectors";
import { Size, useWindowSize } from "../../Utils/Hooks/useWindowSize";
import CommonRoundedButton from "../CommonRoundedButton";
import MainFilterComponent from "../HomeFIlterComponent";
import ModalCloseButton from "../ModalCloseButton";

interface NavBarProps {
  homeComponent: boolean;
  // eslint-disable-next-line react/require-default-props
  navBarPhoto?: string;
}

function NavBar({ homeComponent, navBarPhoto }: NavBarProps) {
  const size: Size = useWindowSize();
  const control = useAnimation();
  const navigationBarStatus = useSelector(getNavigationBarStatus);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const navVariants: Variants = {
    normal: {
      height: `${size.width && size.width < 1025 ? "45vh" : "65vh"}`,
      position: "relative",
    },
    scrolling: {
      height: "auto",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
    },
    courierPage: {
      height: "65vh",
      position: "relative",
      backgroundImage: `url(${navBarPhoto})`,
    },
  };

  useEffect(() => {
    if (homeComponent && navigationBarStatus) {
      control.start(navigationBarStatus);
    }
  }, [control, navigationBarStatus, homeComponent]);

  return (
    <motion.nav
      initial={`${
        homeComponent ? "normal" : navBarPhoto ? "courierPage" : "scrolling"
      }`}
      variants={navVariants}
      animate={control}
      className={`
        rounded-none lg:rounded-3xl
        home-image-other bg-center bg-no-repeat bg-cover
        `}
    >
      <div className="flex items-center justify-between w-full px-4 py-3">
        <Link to="/">
          <img src={logo} className="icon w-12 h-12 ml-2" alt="Logo" />
        </Link>
        <button
          type="button"
          className="menu-icon ml-2 text-white"
          onClick={() => setOpenMenu(!openMenu)}
          style={{
            display: `${size.width && size.width < 480 ? "block" : "none"}`,
          }}
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
        <div
          className={`fixed-menu ${
            openMenu ? "" : "hidden overflow-hidden transform scale-0"
          } fixed top-0 left-0 right-0 bottom-0 z-40 h-full w-full shadow-xl transition-all duration-300 ease-in-out`}
        >
          <div className="relative h-full w-full backdrop-blur-md">
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-4/5 z-50 flex items-end flex-col transition-all duration-300">
              <ModalCloseButton ClickHandler={() => setOpenMenu(!openMenu)} />
              <ul className="px-6 rounded-md py-6 bg-drop-white flex flex-col mt-2 space-y-3 w-full h-full">
                <li className="text-drop-primary font-semibold">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-drop-primary font-semibold">
                  Become a Provider
                </li>
                <li className="text-drop-primary font-semibold">
                  Switch Language
                </li>
                <li className="text-drop-primary font-semibold">
                  <Link to="/profile">My Account</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`items-center mr-2 ${homeComponent ? "flex" : "none"}`}
          style={{
            display: `${size.width && size.width < 767 ? "none" : "flex"}`,
          }}
        >
          <CommonRoundedButton>Become a Provider</CommonRoundedButton>
          <img
            className="icon w-12 h-12 ml-2"
            src={language}
            alt="Language Icon"
          />
          <Link to="/profile">
            <img
              className="icon w-12 h-12 ml-2"
              src={userprofile}
              alt="User Profile Icon"
            />
          </Link>
        </div>
      </div>

      <div
        style={{
          display: `${
            homeComponent && navigationBarStatus === "normal" ? "block" : "none"
          }`,
        }}
      >
        <MainFilterComponent />
      </div>
    </motion.nav>
  );
}

export default NavBar;
