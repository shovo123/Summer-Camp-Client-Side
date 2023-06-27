import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import Classes from "../pages/Classes/Classes";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import Payment from "../pages/Dashboard/Payment/Payment";
import EnrolledClass from "../pages/Dashboard/EnrolledClass/EnrolledClass";
import PaymentHistory from "../pages/Dashboard/paymentHistory/PpaymentHistory";
import Feedback from "../components/Feedback/Feedback";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "ManageUsers",
        element: <AdminRoute><ManageUsers /></AdminRoute>,
      },
      {
        path: "manageClass",
        element: <AdminRoute><ManageClass /></AdminRoute>,
      },
      {
        path: "feedback/:id",
        element: <Feedback />,
        loader: ({ params }) =>
          fetch(`https://summer-camp-sever.vercel.app/feedback/${params.id}`),
      },
      {
        path: "addClass",
        element: <InstructorRoute><AddClass /></InstructorRoute>,
      },
      {
        path: "myClasses",
        element:<InstructorRoute> <MyClasses /></InstructorRoute>,
      },
      {
        path: "MySelectedClasses",
        element: <PrivateRoute> <MySelectedClass /></PrivateRoute>,
      },
      {
        path: "payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(
            `https://summer-camp-sever.vercel.app/singleClass/${params.id}`
          ),
      },
      {
        path: "MyEnrolledClasses",
        element: <PrivateRoute><EnrolledClass /></PrivateRoute>,
      },
      {
        path: "paymentHistory",
        element: <PrivateRoute><PaymentHistory /></PrivateRoute>,
      },
    ],
  },
]);
export default router;
