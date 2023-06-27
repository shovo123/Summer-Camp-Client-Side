import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"

const PopularClass = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const res = axios
      .get("https://summer-camp-sever.vercel.app/approvedClass")
      .then((res) => setClasses(res.data));
  }, []);
  return (
    <div className=' py-5 mx-auto'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold my-5 text-center capitalize border-b-4 border-blue-700 inline-block px-6'>Our Popular Classes</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {classes.slice(0,6).map((item) => (
          <motion.div
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
            key={item._id}
            className="card card-compact border-2 border-red-400 mx-auto w-full dark:bg-gray-500 shadow-xl"
          >
            <figure className='px-5 pt-5'>
              <img className="w-screen rounded-xl h-80" src={item.photo} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {item?.className}</h2>
              <h2 className="card-title">
                Instructor: {item?.InstructorName}
              </h2>
              <h2 className="card-title">Seats: {item?.seats}</h2>
              <h2 className="card-title">Enrolled: {item?.enrolled}</h2>
              <h2 className="card-title">Price: $ {item?.price}</h2>
              <div className="card-actions items-end">
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;