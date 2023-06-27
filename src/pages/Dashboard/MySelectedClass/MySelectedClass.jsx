import React from "react";
import useCardClass from "../../../Hook/useCardClass";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Payment from "../Payment/Payment";
import Swal from "sweetalert2";

const MySelectedClass = () => {
  const [cardClass, refetch] = useCardClass();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://summer-camp-sever.vercel.app/deleteToClass/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <h2 className="text-xl text-center font-semibold text-green-700 my-4 ">
        ---My Selected Class----
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
              <th>Action</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {cardClass.map((item, index) => (
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
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
                <td>
                  <Link to={`/dashboard/payment/${item._id}`}>
                    <button className="btn btn-success">PAY</button>
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

export default MySelectedClass;
