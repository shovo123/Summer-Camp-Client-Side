import React from "react";
import useAxiosSecurity from "../../../Hook/useAxiosSecurity";
import { FaChalkboardTeacher, FaTrashAlt, FaUserShield } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [axiosSecurity] = useAxiosSecurity();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecurity.get("/users");
    return res.data;
  });
  const handleMakeAdmin = (user) => {
    fetch(`https://summer-camp-sever.vercel.app/users/admin/${user._id}`, {
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
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructors = (user) => {
    fetch(
      `https://summer-camp-sever.vercel.app/users/instructors/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructors Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (user) => {
    console.log(user._id);
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
        fetch(`https://summer-camp-sever.vercel.app/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your User has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-full">
      <h2 className="text-xl text-center font-semibold text-green-700 my-4 ">
        ---Manage User----
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="bg-indigo-300 text-md font-semibold">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin Role</th>
              <th>Instructors Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                    disabled
                    className="btn btn-ghost bg-gray-500  text-white"
                  >
                    <FaUserShield />
                  </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-orange-600  text-white"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "instructors" ? (
                    <button
                    disabled
                    className="btn btn-ghost bg-gray-400  text-white"
                  >
                    <FaChalkboardTeacher />
                  </button>
                  ) : (
                    <button
                      onClick={() => handleMakeInstructors(user)}
                      className="btn btn-ghost bg-orange-600  text-white"
                    >
                      <FaChalkboardTeacher />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
