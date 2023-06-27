import React from "react";
import usePayment from "../../../Hook/usePayment";

const EnrolledClass = () => {
  const [paymentClass] = usePayment();
  console.log(paymentClass);
  return (
    <div>
      <h2 className="text-xl text-center font-semibold text-green-700 my-4 ">
        ---My Enrolled Class----
      </h2>
      <h3 className="text-3xl my-2">Enrolled Class: {paymentClass.length}</h3>
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
              <th>Available seats</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {paymentClass.map((item, index) => (
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
                <td className="text-center">{item.seats}</td>
                <td>$ {item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClass;
