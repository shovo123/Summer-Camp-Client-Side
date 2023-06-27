import React from "react";
import { Link, useRouteError } from "react-router-dom";
import useTitle from "../../Hook/useTitle";
import errorPic from "../../assets/404.gif";

const ErrorPage = () => {
  useTitle('ErrorPage')
  const { error, status } = useRouteError();

  return (
    <section className="flex items-center h-screen p-16 mb-10 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img className="w-1/2" src={errorPic} alt="errorPage" />
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-primary text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;