import React from "react";
import { FaBook, FaHistory, FaHome, FaListAlt, FaPenSquare, FaShoppingBag, FaShoppingCart, FaTasks, FaUserSecret, FaUsersCog } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import useAuth from "../Hook/useAuth";
import useInstructors from "../Hook/useInstructors";

const Dashboard = () => {
  const {user} = useAuth()
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructors();
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full bg-indigo-50 flex flex-col mx-auto py-10">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 h-full bg-base-200 text-base-content">
            <div className="flex justify-center">
            <div className="avatar online">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} />
              </div>
            </div>
            </div>
            <div className="text-center">
            <h2 className="my-2 text-md font-semibold">{user.displayName}</h2>
            <h2 className="text-md font-semibold">{user.email}</h2>
            </div>
            <hr  className="my-4 border-t-2 border-black"/>
            {isAdmin &&
              (isAdmin ? (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/manageClass"
                      aria-label="ManageClasses"
                      title="ManageClasses"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      <FaTasks/>
                      Manage Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/ManageUsers"
                      aria-label="ManageUsers"
                      title="ManageUsers"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      <FaUsersCog/>
                      Manage Users
                    </NavLink>
                  </li>
                </>
              ) : null)}
            {isInstructor &&
              (isInstructor ? (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/addClass"
                      aria-label="AddClass"
                      title="AddClass"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      <FaPenSquare/>
                      Add a Class
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/MyClasses"
                      aria-label="MyClasses"
                      title="MyClasses"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      <FaListAlt/>
                      My Classes
                    </NavLink>
                  </li>
                </>
              ) : null)}
            {!isAdmin && !isInstructor ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/MySelectedClasses"
                    aria-label="MySelectedClasses"
                    title="MySelectedClasses"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <FaShoppingCart/>
                    My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/MyEnrolledClasses"
                    aria-label="MyEnrolledClasses"
                    title="MyEnrolledClasses"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <FaShoppingBag/>
                    My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/paymentHistory"
                    aria-label="payment"
                    title="payment"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <FaHistory/>
                    Payment History
                  </NavLink>
                </li>
              </>
            ) : null}
          <hr  className="my-4 border-t-2 border-black"/>
            <li>
              <NavLink
                to="/"
                aria-label="home"
                title="home"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                <FaHome/>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instructors"
                aria-label="instructors"
                title="instructors"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                <FaUserSecret/>
                Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/classes"
                aria-label="classes"
                title="classes"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                <FaBook/>
                Classes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
