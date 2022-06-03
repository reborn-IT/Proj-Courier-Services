/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { useParams } from 'react-router-dom';
import {
  CommonRoundedButton, NavBar, ReviewCard, StaticDropDownRounded,
} from '../../../Components';
import './Result.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CourierService from '../../../Components/CourierService';
import { Footer, CourierServiceModal } from '../../../Lib';
import RoundedInput from '../../../Components/RoundedInput';
import { ICourierServiceModal } from '../../../Lib/CourierServiceModal';
import { fetchCourierServiceLabelStateRequest } from '../../../Store/CourierServiceModal/actions';
import { IReviewCard } from '../../../Components/ReviewCard';
import useLazyLoad from '../../../Utils/Hooks/useLazyLoad';
import { RESULTSCARD_DATA } from '../../../Lib/PaginatedItems';
import ReviewForm from '../../../Lib/ReviewForm';
import { fetchReviewCardStateRequest } from '../../../Store/ReviewCard/actions';

const REVIEW_CATEGORIES = [
  {
    id: 1,
    category: 'Excellent',
    percentage: 67,
  },
  {
    id: 2,
    category: 'Great',
    percentage: 33,
  },
  {
    id: 3,
    category: 'Average',
    percentage: 78,
  },
  {
    id: 4,
    category: 'Poor',
    percentage: 98,
  },
  {
    id: 5,
    category: 'Bad',
    percentage: 44,
  },
];

const SERVICES_LIST = [
  {
    id: 1,
    title: 'One Day Service',
    description: 'If you feel that your document or package needs to be delivered with high priority, this is the service for you. Within Colombo (1-15) we ensure that your packages of utmost importance will be delivered on the same day. (T & C applied)',
  },
  {
    id: 2,
    title: '24x7 Customer Care',
    description: 'If you feel that your document or package needs to be delivered with high priority, this is the service for you. Within Colombo (1-15) we ensure that your packages of utmost importance will be delivered on the same day. (T & C applied)',
  },
  {
    id: 3,
    title: 'Courier Mail Bag Service',
    description: 'If you feel that your document or package needs to be delivered with high priority, this is the service for you. Within Colombo (1-15) we ensure that your packages of utmost importance will be delivered on the same day. (T & C applied)',
  },
  {
    id: 4,
    title: 'Security Products',
    description: 'If you feel that your document or package needs to be delivered with high priority, this is the service for you. Within Colombo (1-15) we ensure that your packages of utmost importance will be delivered on the same day. (T & C applied)',
  },
  {
    id: 5,
    title: 'Cash on Delivery',
    description: 'If you feel that your document or package needs to be delivered with high priority, this is the service for you. Within Colombo (1-15) we ensure that your packages of utmost importance will be delivered on the same day. (T & C applied)',
  },
  {
    id: 6,
    title: 'Corporate Mail Room Management',
    description: 'If you feel that your document or package needs to be delivered with high priority, this is the service for you. Within Colombo (1-15) we ensure that your packages of utmost importance will be delivered on the same day. (T & C applied)',
  },
  {
    id: 7,
    title: 'Weekend Services',
    description: 'If you feel that your document or package needs to be delivered with high priority, this is the service for you. Within Colombo (1-15) we ensure that your packages of utmost importance will be delivered on the same day. (T & C applied)',
  },
  {
    id: 8,
    title: 'Logistics Support Service',
    description: 'If you feel that your document or package needs to be delivered with high priority, this is the service for you. Within Colombo (1-15) we ensure that your packages of utmost importance will be delivered on the same day. (T & C applied)',
  },
  {
    id: 9,
    title: 'Same Day Delivery',
    description: 'If you feel that your document or package needs to be delivered with high priority, this is the service for you. Within Colombo (1-15) we ensure that your packages of utmost importance will be delivered on the same day. (T & C applied)',
  },
];

const SAMPLE_REVIEWS: IReviewCard[] = [
  {
    id: 1,
    name: 'Kavishi Liyanagamage',
    profileUrl: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    date: '2022/09/23',
    time: '12.34 PM',
    description: "Possibly the fault of the sender, I'm supposed to receiver a free sample but am getting charged sales tax on it.",
    rating: 3,
    photos: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
    ],
  },
  {
    id: 2,
    name: 'Tharindu Kumesh',
    profileUrl: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    date: '2012/04/12',
    time: '09.34 AM',
    description: "Tried to contact FedEx by Email twice. Only received automatic replies. I tried to use the web feedback form. But that refused to 'submit' wihout any clear indication of why. I just sent a third e-mail to a different address, not holding my breathe that it will be dealt with. So far the only thing that they seem to be capable of doing is sending me the sales tax bill",
    rating: 1,
    photos: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
    ],
  },
  {
    id: 3,
    name: 'Tharindu Kumesh',
    profileUrl: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    date: '2012/04/12',
    time: '09.34 AM',
    description: "Tried to contact FedEx by Email twice. Only received automatic replies. I tried to use the web feedback form. But that refused to 'submit' wihout any clear indication of why. I just sent a third e-mail to a different address, not holding my breathe that it will be dealt with. So far the only thing that they seem to be capable of doing is sending me the sales tax bill",
    rating: 1,
    photos: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
    ],
  },
  {
    id: 4,
    name: 'Tharindu Kumesh',
    profileUrl: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    date: '2012/04/12',
    time: '09.34 AM',
    description: "Tried to contact FedEx by Email twice. Only received automatic replies. I tried to use the web feedback form. But that refused to 'submit' wihout any clear indication of why. I just sent a third e-mail to a different address, not holding my breathe that it will be dealt with. So far the only thing that they seem to be capable of doing is sending me the sales tax bill",
    rating: 1,
    photos: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
    ],
  },
  {
    id: 5,
    name: 'Tharindu Kumesh',
    profileUrl: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    date: '2012/04/12',
    time: '09.34 AM',
    description: "Tried to contact FedEx by Email twice. Only received automatic replies. I tried to use the web feedback form. But that refused to 'submit' wihout any clear indication of why. I just sent a third e-mail to a different address, not holding my breathe that it will be dealt with. So far the only thing that they seem to be capable of doing is sending me the sales tax bill",
    rating: 1,
    photos: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
    ],
  },
  {
    id: 6,
    name: 'Tharindu Kumesh',
    profileUrl: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    date: '2012/04/12',
    time: '09.34 AM',
    description: "Tried to contact FedEx by Email twice. Only received automatic replies. I tried to use the web feedback form. But that refused to 'submit' wihout any clear indication of why. I just sent a third e-mail to a different address, not holding my breathe that it will be dealt with. So far the only thing that they seem to be capable of doing is sending me the sales tax bill",
    rating: 1,
    photos: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
    ],
  },
  {
    id: 7,
    name: 'Tharindu Kumesh',
    profileUrl: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    date: '2012/04/12',
    time: '09.34 AM',
    description: "Tried to contact FedEx by Email twice. Only received automatic replies. I tried to use the web feedback form. But that refused to 'submit' wihout any clear indication of why. I just sent a third e-mail to a different address, not holding my breathe that it will be dealt with. So far the only thing that they seem to be capable of doing is sending me the sales tax bill",
    rating: 1,
    photos: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
    ],
  },
  {
    id: 8,
    name: 'Tharindu Kumesh',
    profileUrl: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    date: '2012/04/12',
    time: '09.34 AM',
    description: "Tried to contact FedEx by Email twice. Only received automatic replies. I tried to use the web feedback form. But that refused to 'submit' wihout any clear indication of why. I just sent a third e-mail to a different address, not holding my breathe that it will be dealt with. So far the only thing that they seem to be capable of doing is sending me the sales tax bill",
    rating: 1,
    photos: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
    ],
  },
  {
    id: 9,
    name: 'Tharindu Kumesh',
    profileUrl: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    date: '2012/04/12',
    time: '09.34 AM',
    description: "Tried to contact FedEx by Email twice. Only received automatic replies. I tried to use the web feedback form. But that refused to 'submit' wihout any clear indication of why. I just sent a third e-mail to a different address, not holding my breathe that it will be dealt with. So far the only thing that they seem to be capable of doing is sending me the sales tax bill",
    rating: 1,
    photos: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1650987188752-33bc6c079772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      },
    ],
  },
];

const NUM_PER_PAGE = 3;
const TOTAL_PAGES = 3;

function Result() {
  const [fav, setFav] = useState<boolean>(false);
  const dispatch = useDispatch();
  const params = useParams();
  const [selectedService, setSelectedService] = useState<ICourierServiceModal>({
    title: '',
    description: '',
  });
  const triggerRef = useRef(null);
  const onGrabData = (currentPage) => new Promise((resolve) => {
    setTimeout(() => {
      const data2 = SAMPLE_REVIEWS.slice(((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE, NUM_PER_PAGE * (currentPage % TOTAL_PAGES));
      resolve(data2);
    }, 1000);
  });

  const options = {

  };

  const { data, loading } = useLazyLoad({ triggerRef, onGrabData, options });

  const ServiceItemHandler = async (title: string, description: string) => {
    dispatch(fetchCourierServiceLabelStateRequest(true));
    setSelectedService({
      title,
      description,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);

  function reviewCardHandler() {
    dispatch(fetchReviewCardStateRequest(true));
  }

  function favHandler(state: boolean) {
    setFav(state);
  }

  return (
    <main>
      <NavBar
        homeComponent={false}
        navBarPhoto={RESULTSCARD_DATA[parseInt(params.resultId, 10) - 1].bannerURL}
      />
      <section className="container px-5 xl:px-0 mx-auto mt-6">
        <div className="content-para">
          <div className="title flex items-center text-4xl lg:text-6xl justify-between font-semibold text-drop-grey mb-3">
            <h1>{RESULTSCARD_DATA[parseInt(params.resultId, 10) - 1].title}</h1>
            {
                !fav
                  ? (
                    <button type="button" className="active:scale-75 transform transition-all hover:scale-110" onClick={() => favHandler(true)}>
                      <i className="bi bi-heart text-drop-red" />
                    </button>
                  ) : (
                    <button type="button" className="active:scale-75 transform transition-all hover:scale-110" onClick={() => favHandler(false)}>
                      <i className="bi bi-heart-fill text-drop-red" />
                    </button>
                  )
            }
          </div>
          <p>{RESULTSCARD_DATA[parseInt(params.resultId, 10) - 1].description}</p>
        </div>

        {/* Services */}
        <div className="services mt-5">
          <h3 className="text-2xl font-semibold text-drop-grey">Services</h3>
          <div className="flex flex-wrap mt-3">
            {
              SERVICES_LIST.map(({ id, title, description }) => (
                <CourierService onClickHandler={() => ServiceItemHandler(title, description)} key={id} serviceName={title} optionalTailwindCss="mb-3 mr-3" />
              ))
            }
          </div>
        </div>

        {/* Contact Information */}
        <div className="contact mt-5">
          <h3 className="text-2xl font-semibold text-drop-grey">Services</h3>
          <div className="mt-3 flex flex-col space-y-4">
            <p>
              Web:
              {' '}
              <span><a href="/domex.lk" className="text-drop-blue">Domex.lk</a></span>
            </p>
            <p>
              Hotline:
              {' '}
              <span><a href="tel:0777 123 456" className="text-drop-blue">0777 123 456</a></span>
            </p>
            <p>
              Nearest Branch:
              {' '}
              <span><button type="button" className="text-drop-blue">Negombo</button></span>
            </p>
            <p>
              Branch Contact No:
              {' '}
              <span><a href="tel:0777 123 456" className="text-drop-blue">0777 123 456</a></span>
            </p>
            <p>
              Address:
              {' '}
              <span><button type="button" className="text-drop-blue">No 90, Madampella Road, Negombo</button></span>
            </p>
          </div>
        </div>

        {/* Reviews */}
        <div className="reviews mt-10 mb-36">
          <h3 className="text-3xl font-semibold text-drop-grey">
            Customer Reviews
            {' '}
            <span className="text-drop-primary">2365+</span>
          </h3>

          <div className="bars mt-8">
            {
                  REVIEW_CATEGORIES.map(({ id, category, percentage }) => (
                    <div key={id} className="flex space-x-5 items-center text-drop-primary font-semibold text-xl mb-2">
                      <input
                        id="one"
                        type="checkbox"
                        className="h-5 w-5 rounded-lg -ml-1"
                      />
                      <p className="w-28">{category}</p>
                      <div className="bar flex-1 h-3 lg:h-5 rounded-full bg-drop-lightest-grey relative overflow-hidden">
                        <div
                          className="absolute left-0 top-0 bottom-0 h-full bg-drop-primary rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <p>
                        {percentage}
                        %
                      </p>
                    </div>
                  ))
              }
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-8 mb-10">
            <div className="flex items-center space-x-3 md:space-x-2 flex-1">
              <RoundedInput onChange={() => {}} placeholder="Search Reviews..." type="text" />
              <CommonRoundedButton>
                <p>Search</p>
              </CommonRoundedButton>
            </div>
            <StaticDropDownRounded />
          </div>

          {/* Review Form */}
          <div className="w-full flex flex-col items-center my-12">
            <p className="text-5xl font-semibold text-drop-grey">
              How is your experience with
              {' '}
              <span className="text-drop-primary">
                {RESULTSCARD_DATA[parseInt(params.resultId, 10) - 1].title}
                ?
              </span>
            </p>
            <p className="mt-4 mb-5 text-xl font-semibold text-drop-grey">Great feedbacks, towards more clarity. Add yours.</p>
            <CommonRoundedButton ClickHandler={() => reviewCardHandler()}>
              Add My Review
            </CommonRoundedButton>
          </div>

          <ReviewForm />

          {/* Review Loader */}
          {
            data.map(({
              id, name, profileUrl, date, time, rating, description, photos,
            }) => (
              <ReviewCard
                key={id}
                name={name}
                profileUrl={profileUrl}
                date={date}
                time={time}
                rating={rating}
                description={description}
                photos={photos}
                additionalTailwindCss="mb-5"
              />
            ))
          }
          <div ref={triggerRef} className={classNames({ visible: loading }, 'trigger')} />
        </div>

        {/* Courier Service Modal */}
        <CourierServiceModal
          title={selectedService.title}
          description={selectedService.description}
        />

        {/* Footer */}
        <section className="wrapper footer h-auto bg-drop-primary mx-auto mt-8 mb-5 relative container rounded-3xl">
          <Footer />
        </section>
      </section>
    </main>
  );
}

export default Result;
