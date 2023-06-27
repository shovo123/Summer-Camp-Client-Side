import { Player } from "@lottiefiles/react-lottie-player";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import useTitle from "../../../Hook/useTitle";
import login from "../../../assets/63787-secure-login.json";
import SocialLogin from "../../../components/SocialLogin";

const Login = () => {
  useTitle('Login')
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [error,setError] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { loginUser } = useAuth();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    loginUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => {
        setError(error.message)
        console.log(error.message);
      });
  };

  return (
    <div>
      <section className="dark:bg-gray-800 bg-indigo-50 dark:text-gray-100">
        <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex w-full lg:w-1/2 flex-col justify-center p-6 text-center rounded-sm lg:text-left">
            <div className="w-full  p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
              <h2 className="mb-3 text-3xl font-semibold text-center">
                Login to your account
              </h2>
              <p className="text-sm text-center dark:text-gray-400">
                Dont have account?
                <Link
                  to={"/signUp"}
                  rel="noopener noreferrer"
                  className="focus:underline ps-3 hover:underline"
                >
                  Sign up here
                </Link>
              </p>
              <SocialLogin />
              <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-400" />
                <p className="px-3 dark:text-gray-400">OR</p>
                <hr className="w-full dark:text-gray-400" />
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8 ng-untouched ng-pristine ng-valid"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">
                      Email address
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="leroy@jenkins.com"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="block mb-1 font-semibold"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={passwordVisible ? "text" : "password"}
                          id="password"
                          className="w-full px-3 py-2 border rounded"
                          {...register("password", {
                            required: true,
                            minLength: 6,
                            pattern:
                              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/,
                          })}
                        />
                        <button
                          type="button"
                          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                          onClick={togglePasswordVisibility}
                        >
                          {passwordVisible ? (
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.093 9.454a.648.648 0 01.912.183l1.675 2.241 3.05-3.823a.648.648 0 01.874-.091l.089.078c.29.256.32.699.091 1.002l-3.528 4.41a.648.648 0 01-.97.058l-1.874-1.582a.324.324 0 00-.444.005L4.138 12.39a.648.648 0 01-.968-.09l-1.41-1.882a.647.647 0 01.185-.903l2.138-1.452zm-.555-4.118A7.514 7.514 0 0110 3.333c.692 0 1.367.094 2.007.275l-1.91 2.588 1.707 1.152a5.3 5.3 0 00-1.804-.319 5.22 5.22 0 00-3.704 1.527l-1.91-1.23 1.74-2.208zm5.847-1.3c.307.086.58.253.8.496l1.734 2.207 1.735-2.207a1.162 1.162 0 011.6-.205l1.74 1.23-1.91 2.21a5.288 5.288 0 00-3.705-1.527 5.3 5.3 0 00-1.953.384l-1.733-2.207 1.664-2.109zM10 6.667c-.663 0-1.314-.072-1.94-.213l1.663-2.11-1.733-1.113A5.285 5.285 0 0010 6.667a5.3 5.3 0 001.952-.384l-1.733 2.208A3.165 3.165 0 0110 10c.886 0 1.72-.363 2.34-1.005l-1.733-2.208A5.299 5.299 0 0010 6.667z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.093 9.454a.648.648 0 01.912.183l1.675 2.241 3.05-3.823a.648.648 0 01.874-.091l.089.078c.29.256.32.699.091 1.002l-3.528 4.41a.648.648 0 01-.97.058l-1.874-1.582a.324.324 0 00-.444.005L4.138 12.39a.648.648 0 01-.968-.09l-1.41-1.882a.647.647 0 01.185-.903l2.138-1.452zm-.555-4.118A7.514 7.514 0 0110 3.333c.692 0 1.367.094 2.007.275l-1.91 2.588 1.707 1.152a5.3 5.3 0 00-1.804-.319 5.22 5.22 0 00-3.704 1.527l-1.91-1.23 1.74-2.208zm5.847-1.3c.307.086.58.253.8.496l1.734 2.207 1.735-2.207a1.162 1.162 0 011.6-.205l1.74 1.23-1.91 2.21a5.288 5.288 0 00-3.705-1.527 5.3 5.3 0 00-1.953.384l-1.733-2.207 1.664-2.109zM10 6.667c-.663 0-1.314-.072-1.94-.213l1.663-2.11-1.733-1.113A5.285 5.285 0 0010 6.667a5.3 5.3 0 001.952-.384l-1.733 2.208A3.165 3.165 0 0110 10c.886 0 1.72-.363 2.34-1.005l-1.733-2.208A5.299 5.299 0 0010 6.667z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <span className="text-red-500">
                          Password must be at least 6 characters long and
                          contain at least one uppercase letter, one lowercase
                          letter, one digit, and one special character
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full px-8  bg-blue-500 hover:bg-blue-600 text-white py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              {error && <span className="text-red-600">{error}</span>}
            </div>
          </div>
          <div className="flex items-center w-full lg:w-1/2 justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Player
              autoplay
              loop
              src={login}
              style={{ height: "100%", width: "100%" }}
            ></Player>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
