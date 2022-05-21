/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GoogleLogin from 'react-google-login';
import { Design } from '../../Components/Icons';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CommonRoundedButton, FormInput } from '../../Components';

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};

function Register() {
  const HandleSuccess = () => {
    // eslint-disable-next-line no-alert
    alert('Login Success');
  };
  const HandleFailure = () => {
    // eslint-disable-next-line no-alert
    alert('Login Failed');
  };

  const mapboxAPI = process.env.googleauthid;

  return (
    <div className="container h-screen relative overflow-hidden w-full">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
        className="shadow-lg w-full h-full xl:h-[95%] 2xl:h-[90%] bg-drop-white rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-end"
      >
        <motion.div variants={thumbnailVariants} className="transform scale-[120%] md:scale-100 lg:scale-100 lg:ml-10 xl:ml-0 xl:scale-[65%] 2xl:scale-100 flex-1 flex items-center justify-center w-full h-full">
          <Design transition={transition} />
        </motion.div>
        <div className="form flex-1 md:h-3/5 xl:h-full xl:-ml-20 2xl:-ml-0 2xl:pr-8 py-4 px-6 xl:px-0 rounded-xl xl:rounded-none w-[90%] md:w-[80%] xl:w-1/2 xl:max-w-[40%] 2xl:max-w-full 2xl:w-full flex flex-col justify-center absolute top-1/2 xl:top-0 left-1/2 xl:left-0 transform -translate-x-1/2 xl:-translate-x-0 -translate-y-1/2 xl:-translate-y-0 xl:relative bg-drop-white/10 backdrop-blur-lg xl:backdrop-blur-0">
          <h2 className="text-4xl text-drop-primary font-semibold">Create Account</h2>
          <form className="mt-5 2xl:mt-8">
            <FormInput
              icon={<i className="bi bi-at" />}
              label="Your Email"
              input={{
                placeholder: 'Enter your email address',
              }}
              extraTailwindCss="mb-3 2xl:mb-5 bg-transparent xl:bg-drop-white"
            />
            <FormInput
              icon={<i className="bi bi-fingerprint" />}
              label="Your Password"
              input={{
                placeholder: 'Enter your password',
              }}
              extraTailwindCss="mb-3 2xl:mb-5 bg-transparent xl:bg-drop-white"
            />
            <FormInput
              icon={<i className="bi bi-fingerprint" />}
              label="Confirm Your Password"
              input={{
                placeholder: 'Re-enter your password',
              }}
              extraTailwindCss="mb-3 2xl:mb-5 bg-transparent xl:bg-drop-white"
            />
            <CommonRoundedButton extraTailwindClasses="mt-3 w-full active:scale-95 transform transition-all duration-200">
              Register
            </CommonRoundedButton>
            <p className="mt-2">
              Already have an account?
              <Link to="/login" className="ml-2 text-drop-blue font-medium">
                Login
              </Link>

            </p>
            <p className="py-3 2xl:py-5 text-center text-drop-primary font-medium">Or</p>
            <div className="flex justify-center">
              <GoogleLogin
                clientId={mapboxAPI}
                buttonText="Login with Google"
                onSuccess={HandleSuccess}
                onFailure={HandleFailure}
                cookiePolicy="single_host_origin"
                render={(renderProps) => (
                  <button type="button" onClick={renderProps.onClick} disabled={renderProps.disabled} className="px-5 py-3 md:py-4 rounded-full border text-blue-600 w-auto whitespace-nowrap flex items-center cursor-pointer">
                    <i className="bi bi-google" />
                    <p className="ml-2">Signup with Google</p>
                  </button>
                )}
              />
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;
