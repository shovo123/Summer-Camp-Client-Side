import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecurity from "../../../Hook/useAxiosSecurity";
import Swal from "sweetalert2";

const image_secret_token = import.meta.env.VITE_image_secret_token;
const AddClass = () => {
  const {user} = useAuth()
  const [axiosSecurity] = useAxiosSecurity()
  const { register, handleSubmit,reset } = useForm();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_secret_token}`;
  const onSubmit = data => {
    const formData = new FormData();
    formData.append("image", data.photo[0]);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
    .then((res) => res.json())
    .then((imageResponse) => {
      console.log(imageResponse);
      if (imageResponse.success) {
        const photo = imageResponse.data.display_url;
        data.photo = photo
        data.status = 'pending'
        data.enrolled = 0
        const seats = parseFloat(data.seats)
        data.seats = seats   
        console.log(data);   
        axiosSecurity.post("/addedClass", data).then((data) => {
          console.log("after posting new class item", data.data);
          if (data.data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  }
  return (
    <div>
      <h2 className="text-xl text-center font-semibold my-4  text-green-700 ">
        ---Added Classes----
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-10/12 mx-auto">
          <p className="my-2">Class name</p>
          <input
            type="text"
            {...register("className", { required: true })}
            placeholder="Class Name"
            className="input input-bordered "
          />
        </div>
        <div className="form-control w-10/12 mx-auto">
          <p className="my-2">Class Image</p>
          <input
            type="file"
            {...register("photo", { required: true })}
            placeholder="Photo Url"
            className="file-input file-input-bordered file-input-primary w-full "
          />
        </div>
        <div className="form-control w-10/12 mx-auto">
          <p className="my-2">Instructor name</p>
          <input
            type="text"
            {...register("InstructorName", { required: true })}
            value={user?.displayName}
            placeholder="Instructor name"
            className="input input-bordered "
          />
        </div>
        <div className="form-control w-10/12 mx-auto">
          <p className="my-2">Instructor Email</p>
          <input
            type="text"
            {...register("InstructorEmail", { required: true })}
            value={user?.email}
            placeholder="Instructor Email"
            className="input input-bordered "
          />
        </div>
        <div className="form-control w-10/12 mx-auto">
          <p className="my-2">Available seats</p>
          <input
            type="text"
            {...register("seats", { required: true })}
            placeholder="Available seats"
            className="input input-bordered "
          />
        </div>
        <div className="form-control w-10/12 mx-auto">
          <p className="my-2">Price</p>
          <input
            type="text"
            {...register("price", { required: true })}
            placeholder="Price"
            className="input input-bordered "
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary my-2">Added Class</button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;