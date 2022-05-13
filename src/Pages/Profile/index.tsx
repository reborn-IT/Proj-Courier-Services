/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import {
  Outlet, Link, useLocation, useNavigate,
} from 'react-router-dom';
import { NavBar } from '../../Components';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Footer } from '../../Lib';

function Profile() {
  const { pathname } = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tabLocation, setTabLocation] = useState<number>(null);
  const navigate = useNavigate();
  useEffect(() => {
    switch (pathname) {
      case '/profile/overview':
        setTabLocation(1);
        break;
      case '/profile/favorites':
        setTabLocation(2);
        break;
      case '/profile/filterlog':
        setTabLocation(3);
        break;
      case '/profile':
        navigate('overview');
        break;
      default:
        break;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main-wrapper bg-drop-white w-full overflow-x-hidden box-border min-h-screen">
      <NavBar homeComponent={false} />

      <div className="w-[95vw] md:w-[80vw] xl:w-[60vw] 2xl:w-[40vw] mx-auto">
        {/* TAB NAVIGATION */}
        <nav className="mt-28 md:mt-[7.5rem] 2xl:mt-40">
          <ul className="relative flex items-center">
            <li className="option-aside border border-sky-500 flex justify-center" style={{ width: '33.33%' }}>
              <Link to="overview" className={`flex px-4 items-center text-base md:text-xl hover:text-drop-primary transition-colors duration-300 font-semibold ${tabLocation === 1 ? 'text-drop-primary' : 'text-drop-grey'}`}>
                <i className="bi bi-person-circle sm:mr-2 md:mr-3 text-2xl sm:text-lg md:text-2xl" />
                <p className="hidden sm:block">Profile</p>
              </Link>
            </li>
            <li className="option-aside border border-sky-500 flex justify-center" style={{ width: '33.33%' }}>
              <Link to="favorites" className={`flex px-4 items-center text-base md:text-xl hover:text-drop-primary transition-colors duration-300 font-semibold ${tabLocation === 2 ? 'text-drop-primary' : 'text-drop-grey'}`}>
                <i className="bi bi-heart-fill sm:mr-2 md:mr-3 text-2xl sm:text-lg md:text-2xl" />
                <p className="hidden sm:block">Favorites</p>
              </Link>
            </li>
            <li className="option-aside border border-sky-500 flex justify-center" style={{ width: '33.33%' }}>
              <Link to="filterlog" className={`flex px-4 items-center text-base md:text-xl hover:text-drop-primary transition-colors duration-300 font-semibold ${tabLocation === 3 ? 'text-drop-primary' : 'text-drop-grey'}`}>
                <i className="bi bi-card-checklist sm:mr-2 md:mr-3 text-2xl sm:text-lg md:text-2xl" />
                <p className="hidden sm:block">Filter Log</p>
              </Link>
            </li>
            <span className="z-20 absolute -bottom-4 sm:-bottom-2 md:-bottom-4 bg-drop-light-grey left-0 h-1 transform transition-all duration-500 rounded-full w-full">
              <span className={`bg-drop-primary absolute top-0 bottom-0 ${tabLocation === 1 ? 'left-0' : tabLocation === 2 ? 'left-1/2 -translate-x-1/2' : 'right-0'} right-0 h-1 transform transition-all duration-500 rounded-full`} style={{ width: '33.33%' }} />
            </span>
          </ul>
        </nav>
        {/* END TAB NAVIGATION */}

        <Outlet />
      </div>

      <section className="wrapper footer h-auto bg-drop-primary w-[98%] mx-auto mt-16 xl:mt-8 mb-2 md:mb-5 relative container rounded-3xl">
        <Footer />
      </section>
    </main>
  );
}

export default Profile;

export { default as Overview } from './Overview';
export { default as Favorites } from './Favorites';
export { default as FilterLog } from './FilterLog';
