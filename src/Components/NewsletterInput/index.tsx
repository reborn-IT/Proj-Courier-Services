import React, { useRef } from 'react';
import './NewsletterInput.scss';
import { toast } from 'react-toastify';
import SendIcon from '../../Assets/Icons/send.svg';

const notify = () => toast.success(`
You have successfully subscriubed to our newsletter`, {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
});

const notifyError = () => toast.error('Please enter valid email address', {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
});

function NewsletterInput() {
  const newsletter = useRef(null);
  const handleSubscribe = () => {
    if (newsletter.current?.value === '') {
      notifyError();
    } else {
      notify();
    }
  };

  return (
    <div className="newsletter-wrapper">
      <input type="text" placeholder="Your Email" ref={newsletter} />
      <button type="button" onClick={() => handleSubscribe()}>
        <img src={SendIcon} alt="send icon" style={{ width: '2.2rem' }} />
      </button>
    </div>
  );
}

export default NewsletterInput;
