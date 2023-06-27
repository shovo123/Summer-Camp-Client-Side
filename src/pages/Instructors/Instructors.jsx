import axios from "axios";
import React, { useEffect, useState } from "react";
import useTitle from "../../Hook/useTitle";

const Instructors = () => {
  useTitle('Instructors')
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    const res = axios
      .get("https://summer-camp-sever.vercel.app/instructors")
      .then((res) => setInstructor(res.data));
  }, []);
  console.log(instructor);
  return (
    <div className=" py-5">
      <div
        className="hero bg-cover h-96"
        style={{
          backgroundImage: `url("https://static.wixstatic.com/media/1dfbbe_f5b68692d22448dda2fd99894a04d845~mv2_d_3866_2489_s_4_2.jpg/v1/fill/w_1000,h_644,al_c,q_85,usm_0.66_1.00_0.01/1dfbbe_f5b68692d22448dda2fd99894a04d845~mv2_d_3866_2489_s_4_2.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">
              A World of Imagination and Play!"
            </h1>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {instructor.map((item) => (
          <div key={item?._id} className="card w-96 border-2 border-red-400 shadow-xl">
            <figure className="px-5 pt-5">
              <img
                src={item?.photo}
                alt="Shoes"
                className="rounded-xl h-80 w-screen bg-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
