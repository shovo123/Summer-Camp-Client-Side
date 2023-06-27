import React from "react";
import useAxiosSecurity from "../../../Hook/useAxiosSecurity";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hook/useAuth";
import { FaEdit } from "react-icons/fa";

const MyClasses = () => {
  const { user } = useAuth();
  const [axiosSecurity] = useAxiosSecurity();

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecurity.get(`/myClass/${user?.email}`);
    return res.data;
  });
  return (
    <div>
      <h2 className="text-xl text-center font-semibold text-green-700 my-4 ">
        ---My Classes----
      </h2>
      <div className="overflow-x-auto bg-indigo-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-indigo-400 text-white">
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Enrolled Students</th>
              <th>Feedback</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.className}</td>
                <td>$ {item.price}</td>
                <th>{item.status}</th>
                <td className="text-center">
                  {item?.enrolled ? item?.enrolled : "0"}
                </td>
                <td>{item?.status === "approved" || item?.status === "pending" ? 'No feedback' : item?.status === "denied" ? item?.feedback : 'no feedback' }</td>
                <td>
                  <button className="flex justify-between gap-1 items-center"><FaEdit className="text-xl"/> Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
