import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../Hook/useAdmin";
import useInstructors from "../../Hook/useInstructors";
import "./Classes.css";
import useCardClass from "../../Hook/useCardClass";
import useTitle from "../../Hook/useTitle";

const Classes = () => {
  useTitle('Classes')
  const [, refetch] = useCardClass();
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructors();
  const location = useLocation();
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const res = axios
      .get("https://summer-camp-sever.vercel.app/approvedClass")
      .then((res) => setClasses(res.data));
  }, []);
  const handleAddToClass = (item) => {
    const {
      InstructorEmail,
      InstructorName,
      className,
      photo,
      price,
      seats,
      _id,
    } = item;

    if (user && user?.email) {
      const classItem = {
        selectedClassId: _id,
        className,
        photo,
        price,
        email: user?.email,
        InstructorEmail,
        InstructorName,
        seats,
      };
      fetch("https://summer-camp-sever.vercel.app/addToClass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added The class.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          if (data.message) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${data.message}`,
              footer: '<a href="">Why do I have this issue?</a>',
            });
          }
        })
        .catch((error) => console.log(error));
    } else {
      Swal.fire({
        title: "Please login to Select class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="py-5">
      <div
        className="hero bg-cover h-96"
        style={{
          backgroundImage: `url("https://www.emotions.ae/wp-content/uploads/2019/05/classical-dance-class-kids.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">
              There are all Classes!"
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {classes.map((item) => (
          <div
            key={item._id}
            className="card border-2 border-red-400 card-compact w-full shadow-xl"
          >
            <figure className="pt-5 px-5">
              <img className="w-screen rounded-xl h-80" src={item.photo} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {item?.className}</h2>
              <h2 className="card-title">
                Instructor Name: {item?.InstructorName}
              </h2>
              <h2 className="card-title">Seats: {item?.seats}</h2>
              <h2 className="card-title">Price: $ {item?.price}</h2>
              <div className="card-actions items-end">
                <button
                  disabled={isInstructor || isAdmin || item.seats == "0"}
                  onClick={() => handleAddToClass(item)}
                  className={
                    item?.seats == "0"
                      ? "bgRed font-semibold"
                      : "btn btn-primary"
                  }
                >
                  Select Class
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
