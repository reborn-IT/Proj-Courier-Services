/* eslint-disable max-len,no-console,implicit-arrow-linebreak */
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import GoogleLogin from "react-google-login";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  CommonRoundedButton,
  FormInput,
  LoadingSpinner,
} from "../../Components";
import { isEmailValid, IsPasswordValid } from "../../Utils/Validations";

// API service
import UserService from "../../Services/userService";

const notifyError = (error: string) =>
  toast.error(error, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });

type InputTypes = {
  emailAddress: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<InputTypes>();
  const formRef = useRef<HTMLFormElement>(document.createElement("form"));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [googleAuthID, setGoogleAuthID] = useState<string | null>("");

  const HandleSuccess = () => {
    // eslint-disable-next-line no-alert
    // alert('Login Success');
  };
  const HandleFailure = () => {
    // eslint-disable-next-line no-alert
    // alert('Login Failed');
  };

  // Getting the google auth ID
  useEffect(() => {
    const { googleauthid } = process.env;
    if (googleauthid) {
      setGoogleAuthID(googleauthid);
    } else setGoogleAuthID(null);
  }, []);

  async function registerUser(data: InputTypes) {
    setLoading(true);
    const response = await UserService.registerUser({
      role: "ROLE_PUBLIC_USER",
      email: data.emailAddress,
      password: data.password,
    });
    if (response && response.status === 201) {
      setLoading(false);
      navigate("/profile");
    } else if (response && response.errorCode === 409) {
      notifyError(
        "An account is already associated with this email address. Please log in",
      );
      setLoading(false);
    } else {
      notifyError("Something went wrong");
      setLoading(false);
    }
  }

  const onSubmit = (data: InputTypes) => {
    if (!isEmailValid(data.emailAddress)) {
      setError("emailAddress", {
        type: "manual",
        message: "Invalid Email address",
      });
      notifyError("Invalid Email address");
      return;
    }
    clearErrors("emailAddress");

    if (!IsPasswordValid(data.password)) {
      setError("password", {
        type: "manual",
        message: "Password should have at least 6 characters",
      });
      notifyError("Password should have at least 6 characters");
      return;
    }
    clearErrors("password");

    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords does not match",
      });
      notifyError("Passwords does not match");
      return;
    }
    clearErrors("confirmPassword");

    registerUser(data);
  };

  return (
    <div className="container h-screen relative overflow-hidden w-full">
      <ToastContainer
        toastClassName="border border-2 border-red-500"
        style={{
          borderStyle: "solid",
        }}
      />
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
        className="shadow-lg w-full h-full xl:h-[95%] 2xl:h-[90%] bg-drop-white rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-end"
      >
        <div className="flex-1" />
        <div className="form flex-1 md:h-3/5 xl:h-full xl:-ml-20 2xl:-ml-0 2xl:pr-8 py-4 px-6 xl:px-0 rounded-xl xl:rounded-none w-[90%] md:w-[80%] xl:w-1/2 xl:max-w-[40%] 2xl:max-w-full 2xl:w-full flex flex-col justify-center absolute top-1/2 xl:top-0 left-1/2 xl:left-0 transform -translate-x-1/2 xl:-translate-x-0 -translate-y-1/2 xl:-translate-y-0 xl:relative bg-drop-white/10 backdrop-blur-lg xl:backdrop-blur-0">
          <h2 className="text-4xl text-drop-primary font-semibold">
            Create Account
          </h2>
          {loading ? (
            <div className="w-full h-full flex items-center justify-center">
              <LoadingSpinner />
            </div>
          ) : (
            <form
              ref={formRef}
              className="mt-5 2xl:mt-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormInput
                icon={<i className="bi bi-at" />}
                label="Your Email"
                input={{
                  type: "text",
                  placeholder: "Enter your email address",
                }}
                extraTailwindCss={`mb-3 2xl:mb-5 bg-transparent xl:bg-drop-white ${
                  errors.emailAddress &&
                  "ring-2 ring-red-500 border-0 placeholder:text-red-500"
                }`}
                extra={register("emailAddress", {
                  required: "Email cannot be empty",
                })}
                errorStylesTailwind={errors.emailAddress && "text-red-500"}
              />
              <FormInput
                icon={<i className="bi bi-fingerprint" />}
                label="Your Password"
                input={{
                  type: "password",
                  placeholder: "Enter your password",
                }}
                extraTailwindCss={`mb-3 2xl:mb-5 bg-transparent xl:bg-drop-white ${
                  errors.password &&
                  "ring-2 ring-red-500 border-0 placeholder:text-red-500"
                }`}
                extra={register("password", {
                  required: "Password cannot be empty",
                })}
                errorStylesTailwind={errors.password && "text-red-500"}
              />
              <FormInput
                icon={<i className="bi bi-fingerprint" />}
                label="Confirm Your Password"
                input={{
                  type: "password",
                  placeholder: "Re-enter your password",
                }}
                extraTailwindCss={`mb-3 2xl:mb-5 bg-transparent xl:bg-drop-white ${
                  errors.confirmPassword &&
                  "ring-2 ring-red-500 border-0 placeholder:text-red-500"
                }`}
                extra={register("confirmPassword")}
                errorStylesTailwind={errors.confirmPassword && "text-red-500"}
              />
              <CommonRoundedButton
                ClickHandler={() => {
                  formRef.current.dispatchEvent(
                    new Event("submit", { bubbles: true, cancelable: true }),
                  );
                }}
                extraTailwindClasses="mt-3 w-full active:scale-95 transform transition-all duration-200"
              >
                Register
              </CommonRoundedButton>
              <p className="mt-2">
                Already have an account?
                <Link to="/login" className="ml-2 text-drop-blue font-medium">
                  Login
                </Link>
              </p>
              <p className="py-3 2xl:py-5 text-center text-drop-primary font-medium">
                Or
              </p>
              <div className="flex justify-center">
                {googleAuthID && (
                  <GoogleLogin
                    clientId={googleAuthID}
                    buttonText="Login with Google"
                    onSuccess={HandleSuccess}
                    onFailure={HandleFailure}
                    cookiePolicy="single_host_origin"
                    render={(renderProps) => (
                      <button
                        type="button"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="px-5 py-3 md:py-4 rounded-full border text-blue-600 w-auto whitespace-nowrap flex items-center cursor-pointer"
                      >
                        <i className="bi bi-google" />
                        <p className="ml-2">Signup with Google</p>
                      </button>
                    )}
                  />
                )}
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
