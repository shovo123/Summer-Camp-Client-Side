import { useQuery } from "@tanstack/react-query";

import useAxiosSecurity from "../../../Hook/useAxiosSecurity";
import { FaCheck, FaEdit, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageClass = () => {
  const [axiosSecurity] = useAxiosSecurity();

  const { data: allClass = [], refetch } = useQuery(["allClass"], async () => {
    const res = await axiosSecurity.get("/allClasses");
    return res.data;
  });
  const handleMakeApproved = (item) => {
    console.log(item);
    fetch(`https://summer-camp-sever.vercel.app/approved/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `This class is Approved Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeDenied = (item) => {
    console.log(item);
    fetch(`https://summer-camp-sever.vercel.app/denied/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `This class is denied Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <h2 className="text-xl text-center font-semibold text-green-700 my-4 ">
        ---Manage Classes----
      </h2>
      <div className="overflow-x-auto bg-indigo-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-indigo-400 text-white">
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Price</th>
              <th>Available seats</th>
              <th>Status</th>
              <th>Approved</th>
              <th> Deny</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {allClass.map((item, index) => (
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
                <td>{item.InstructorName}</td>
                <td>{item.InstructorEmail}</td>
                <td>$ {item.price}</td>
                <td className="text-center">{item.seats}</td>
                <th>{item.status}</th>
                <td className="text-center">
                  {item?.status === "approved" || item?.status === "denied" ? (
                    <button
                      disabled
                      className={"bg-gray-600 text-xl p-2 rounded-full"}
                    >
                      <FaCheck />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeApproved(item)}
                      className={
                        "bg-success text-xl p-2 rounded-full cursor-pointer"
                      }
                    >
                      <FaCheck />
                    </button>
                  )}
                </td>
                <td className="text-center">
                  {item?.status === "denied" || item?.status === "approved" ? (
                    <button
                      disabled
                      className={"bg-gray-600 text-xl p-2 rounded-full"}
                    >
                      <FaTimes />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeDenied(item)}
                      className={
                        "bg-error text-xl p-2 rounded-full cursor-pointer"
                      }
                    >
                      <FaTimes />
                    </button>
                  )}
                </td>
                <td>
                  <Link to={`/dashboard/feedback/${item._id}`}>
                    <button className="flex justify-between gap-1 items-center">
                      <FaEdit className="text-xl" />
                      Feedback
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
