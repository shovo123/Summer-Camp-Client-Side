import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const googleHandleLogin = () => {
    googleLogin()
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        const user = { name: loginUser.displayName, email: loginUser.email, photo: loginUser.photoURL};
        fetch("https://summer-camp-sever.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from);
          });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="my-6 space-y-4">
        <button
          onClick={googleHandleLogin}
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Login with Google</p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
