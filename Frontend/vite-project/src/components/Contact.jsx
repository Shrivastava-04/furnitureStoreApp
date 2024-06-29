import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="h-screen flex items-center justify-center dark:bg-slate-900 dark:text-white">
        <div className="modal-box dark:bg-slate-900 dark:text-white border dark:shadow-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 flex flex-col items-start justify-center" method="dialog">
          <h3 className="font-bold text-4xl">Contact us!</h3>
          <div>
            <span>Name</span>
            <br />
            <input type="text"
            placeholder="Enter your name"
            className="w-80 px-3 py-2 border outline-none rounded-md dark:text-black"
            {...register("fullname", { required: true })}
            />
            <br />
              {errors.fullname && (<span>*This field is required</span>
              )}
          </div>
          <div>
            <span>Email</span>
            <br />
            <input type="email"
            placeholder="Email Adress"
            className="w-80 px-3 py-2 border outline-none rounded-md dark:text-black"
            {...register("email", { required: true })}
            />
            <br />
              {errors.email && (<span>*This field is required</span>
              )}
          </div>
          <div>
            <span>Message</span>
            <br />
            <textarea className="w-80 px-3 py-2 border outline-none rounded-md dark:text-black" placeholder="Enter the Message"
            {...register("text", { required: true })}
            ></textarea>
            
            <br />
            <button className="bg-blue-500 mt-5 px-4 py-2 text-white rounded-md hover:bg-blue-700 duration-300">Submit</button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
