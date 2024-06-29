import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <a href="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </a>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2 dark:bg-slate-900 dark:text-white">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-2 border outline-none rounded-md dark:text-black"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (<span>*This field is required</span>
              )}
            </div>
            <div className="mt-4 space-y-2 dark:bg-slate-900 dark:text-white">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-2 border outline-none rounded-md dark:text-black"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span>*This field is required</span>}
            </div>
            <div className="mt-3 flex justify-around dark:bg-slate-900 dark:text-white">
              <button className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-700 duration-300">
                Login
              </button>
              <p>
                New user?{" "}
                <Link to="/signup" className="text-blue-500 underline cursor-pointer hover:bg-blue-700 duration-300">
                Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
