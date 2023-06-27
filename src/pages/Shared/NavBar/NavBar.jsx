import React, { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import logo from '../../../assets/logo.png';

const NavBar = () => {
  const { user, logOutUser } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
};
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }
}, [isDarkMode]);
  const handleLogOut = () => {
    console.log("object");
    logOutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="instructors">Instructors</Link>
      </li>

      <li>
        <Link to="classes">Classes</Link>
      </li>

      {user ? (
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
      ) : null}
      <li>
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={80}
        />
      </li>
      <div className={`content ${isDarkMode ? 'dark' : 'light'}`}>
                {/* The rest of your web page content */}
            </div>
    </>
  );
  return (
    <div>
      <div className={`navbar bg-white shadow-lg ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu bg-white menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            <img  className="w-36" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          {!user ? (
            <li className="list-none pr-2">
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <li className="list-none pr-2">
              <Link onClick={handleLogOut}>LogOut</Link>
            </li>
          )}
          <div className="ps-2  dropdown dropdown-bottom">
            <label tabIndex={0} className="btn btn-accent btn-circle avatar">
              <div className="w-10 avatar rounded-full">
                {user ? (
                  <img title={user?.displayName} src={user?.photoURL} />
                ) : (
                  "login"
                )}
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
