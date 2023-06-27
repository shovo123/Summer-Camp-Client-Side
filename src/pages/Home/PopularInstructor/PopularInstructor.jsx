import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const PopularInstructor = () => {
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    const res = axios
      .get("https://summer-camp-sever.vercel.app/instructors")
      .then((res) => setInstructor(res.data));
  }, []);
  return (
    <div className="py-5 mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold my-5 text-center uppercase border-b-4 border-blue-700 inline-block px-6">
          Our Popular Instructors
        </h2>
      </div>
      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {instructor.slice(0, 6).map((item) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={item?._id}
            className="card border-2 border-red-400 w-full mx-auto shadow-xl"
          >
            <figure className="px-5 pt-5">
              <img
                src={item?.photo}
                alt="Shoes"
                className="rounded-xl  h-80 w-screen bg-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.email}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
