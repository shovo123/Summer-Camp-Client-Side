import moment from "moment";
import React from 'react';
import usePayment from '../../../Hook/usePayment';

const PaymentHistory = () => {
  const [paymentClass] = usePayment()
  return (
    <div>
       <h2 className="text-xl text-center font-semibold text-green-700 my-4 ">
        ---My Total Payments Class----
      </h2>
      <h3 className="text-3xl ms-5 my-2">Total Payments: {paymentClass.length}</h3>
      <div className="overflow-x-auto bg-indigo-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-indigo-400 text-white">
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>PAYENT DATE</th>
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
                <td>$ {item.price}</td>
                <td>{item.transactionId}</td>
                <td>{moment(item.createdAt).format("dddd, MMMM Do YYYY, h:mm a")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;