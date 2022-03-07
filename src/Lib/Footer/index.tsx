import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Images/logoFooter.svg';
import NewsletterInput from '../../Components/NewsletterInput';

function Footer() {
  return (
    <footer className="footer-content-wrapper">
      <div className="logo flex-1">
        <img src={Logo} alt="Logo" style={{ width: '8rem' }} />
      </div>
      <div className="links flex-1">
        <h4>Links</h4>
        <ul>
          {
                [
                  'Courier Services',
                  'Site Map',
                  'How It Works?',
                  'FAQ',
                  'Contact Us'].map(((item) => (
                    <li key={item} className="link">
                      <Link to="/courier">{item}</Link>
                    </li>
                )
                ))
            }
        </ul>
      </div>
      <div className="services flex-1">
        <h4>Links</h4>
        <ul>
          {
                [
                  'Courier Services',
                  'Site Map',
                  'How It Works?',
                  'FAQ',
                  'Contact Us'].map(((item) => (
                    <li key={item} className="link">
                      <Link to="/courier">{item}</Link>
                    </li>
                )
                ))
            }
        </ul>

      </div>
      <div className="newsletter flex-1">
        <h4>Newsletter</h4>
        <p>Subsribe to our newsletter and never miss latest updates.</p>
        <NewsletterInput />
      </div>
    </footer>
  );
}

export default Footer;
