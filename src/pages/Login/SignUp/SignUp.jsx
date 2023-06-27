import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Player } from "@lottiefiles/react-lottie-player";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hook/useAuth";
import useTitle from "../../../Hook/useTitle";
import login from "../../../assets/21372-launch-yourself.json";
import SocialLogin from "../../../components/SocialLogin";

const SignUp = () => {
  useTitle('SignUp')
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const [error, setError] = useState('')
  const password = watch("password");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const createUser = result.user;
      console.log(createUser);
      updateUserProfile(data.name, data.photo)
        .then(() => {
          const user = {
            name: data.name,
            email: data.email,
            photo: data.photo,
            address: data.address,
            gender: data.gender,
            phone: data.phoneNumber,
          };
          console.log(user);
          fetch("https://summer-camp-sever.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User signup successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => setError(error.message));
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <section className="dark:bg-gray-800 bg-indigo-50 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex w-full  lg:w-1/2 flex-col justify-center p-6 text-center rounded-sm lg:text-left">
            <div className="w-full  p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
              <h2 className="mb-3 text-3xl font-semibold text-center">
                Sign Up to your account
              </h2>
              <p className="text-sm text-center dark:text-gray-400">
                Already have account?
                <Link
                  to={"/login"}
                  rel="noopener noreferrer"
                  className="focus:underline ps-3 hover:underline"
                >
                  Sign in here
                </Link>
              </p>
              <SocialLogin />
              <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-400" />
                <p className="px-3 dark:text-gray-400">OR</p>
                <hr className="w-full dark:text-gray-400" />
              </div>
              <div className="flex justify-center">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full p-8  rounded-lg shadow-md"
                >
                  <div className="mb-4">
                    <label className="block mb-2 text-lg" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded"
                      type="text"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-lg" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded"
                      type="email"
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        This field is required and must be a valid email address
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-lg" htmlFor="password">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        className="w-full px-4 py-2 border rounded"
                        type={showPassword ? "text" : "password"}
                        {...register("password", {
                          required: true,
                          minLength: 6,
                          pattern:
                            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/,
                        })}
                      />
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        onClick={togglePasswordVisibility}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                      />
                    </div>
                    {errors.password && (
                      <span className="text-red-500">
                        Password must be at least 6 characters long and contain
                        at least one uppercase letter, one lowercase letter, one
                        digit, and one special character
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      className="block mb-2 text-lg"
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded"
                      type="password"
                      {...register("confirmPassword", {
                        required: true,
                        validate: (value) =>
                          value === password || "The passwords do not match",
                      })}
                    />
                    {errors.confirmPassword && (
                      <span className="text-red-500">
                        {errors.confirmPassword.message}
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-lg" htmlFor="photoUrl">
                      Photo URL
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded"
                      type="text"
                      {...register("photo", { required: true })}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-lg" htmlFor="gender">
                      Gender
                    </label>
                    <select
                      className="w-full px-4 py-2 border rounded"
                      {...register("gender", { required: true })}
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    {errors.gender && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-lg" htmlFor="phoneNumber">
                      Phone Number
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded"
                      type="tel"
                      {...register("phoneNumber", { required: true })}
                    />
                    {errors.phoneNumber && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-lg" htmlFor="address">
                      Address
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border rounded"
                      {...register("address", { required: true })}
                    />
                    {errors.address && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="px-4 w-full py-2 text-lg text-white bg-blue-500 rounded hover:bg-blue-600"
                  >
                    Register
                  </button>
                </form>
                {error && <span className="text-red-500">{error}</span>}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 w-full lg:w-1/2 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
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

export default SignUp;
