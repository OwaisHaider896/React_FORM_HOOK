import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function App() {
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="">
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" p-6 w-1/2 m-2 bg-blue-300 rounded-lg "
        >
          <h1 className=" italic underline  text-center mb-2 font-bold text-2xl">
            Personal Information
          </h1>
          <label className="block mb-2" htmlFor="Name">
            First Name
          </label>
          <input
            className="p-2 w-full rounded"
            name="firstname"
            type="text"
            ref={register({ required: true })}
          />
          {errors.firsname && <span>required</span>}
          <label className="block mb-2 " htmlFor="Father's Name">
            Last Name
          </label>
          <input
            className="p-2 w-full rounded"
            name="lastname"
            ref={register({ required: true })}
            type="text"
          />

          <label className="block mb-2 " htmlFor="Mobile No">
            Mobile No.
          </label>
          <input
            className="p-2 w-full rounded"
            name="mobileNo"
            ref={register({ required: true })}
            type="text"
          />

          <label className="block mb-2" htmlFor="Email">
            Email
          </label>
          <input
            className="p-2 w-full rounded"
            name="email"
            ref={register({
              required: "Email is required",
              pattern: { value: !/\S+@\S+\.\S+/, message: "Email is invalid" }
            })}
            type="email"
          />

          {errors.email && <span>Email is Invalid </span>}

          <label className="block mb-2" htmlFor="Address">
            Address
          </label>
          <input
            className="p-2 w-full rounded"
            name="address"
            ref={register({ required: true })}
            type="text"
          />

          <button
            className="font-bold bg-red-400 mb-2  px-4 mt-4 py-2 rounded "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
