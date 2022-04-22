/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Images/logoFooter.svg';
import NewsletterInput from '../../Components/NewsletterInput';

function Footer() {
  return (
    <footer className="footer-content-wrapper flex flex-col sm:flex-row border-2 border-red-600 mx-auto px-6 py-8 lg:py-12 xl:py-12 h-full justify-between lg:font-semibold text-drop-white">
      <div className="max-w-[98vw] sm:max-w-full flex-1">
        <img src={Logo} alt="Logo" style={{ width: '8rem' }} />
      </div>
      <div className="flex flex-row sm:flex-col items-center sm:items-start justify-around mt-12 sm:mt-0 sm:justify-start h-full flex-1 max-w-[98vw] sm:max-w-full">
        <h4 className="mb-4 text-xl">Links</h4>
        <ul>
          {
                [
                  'Courier Services',
                  'Site Map',
                  'How It Works?',
                  'FAQ',
                  'Contact Us'].map(((item) => (
                    <li key={item} className="link mt-4">
                      <Link to="/courier">{item}</Link>
                    </li>
                )
                ))
            }
        </ul>
      </div>
      <div className="flex flex-row sm:flex-col items-center sm:items-start justify-around mt-12 sm:mt-0 sm:justify-start h-full flex-1 max-w-[98vw] sm:max-w-full">
        <h4 className="mb-4 text-xl">Links</h4>
        <ul>
          {
                [
                  'Courier Services',
                  'Site Map',
                  'How It Works?',
                  'FAQ',
                  'Contact Us'].map(((item) => (
                    <li key={item} className="link mt-4">
                      <Link to="/courier">{item}</Link>
                    </li>
                )
                ))
            }
        </ul>
      </div>
      <div className="flex flex-col items-center md:items-start justify-start h-full flex-1 text-center mt-6 md:mt-0 sm:text-left">
        <h4 className="mb-4 text-xl font-semibold">Newsletter</h4>
        <p className="mb-5">Subsribe to our newsletter and never miss latest updates.</p>
        <NewsletterInput />
      </div>
    </footer>
  );
}

export default Footer;
