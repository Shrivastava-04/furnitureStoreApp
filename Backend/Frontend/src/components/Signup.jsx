import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
function Signup() {
  const [authUser, setAuthUser] = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Sign Up Successfull!");
          setAuthUser({});
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="h-screen flex items-center justify-center dark:bg-slate-900 dark:text-white">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Sign Up</h3>
              <div className="mt-4 space-y-2 dark:bg-slate-900 dark:text-white">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Full Name"
                  className="w-80 px-3 py-2 border outline-none rounded-md dark:text-black"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && <span>*This field is required</span>}
              </div>
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
                {errors.email && <span>*This field is required</span>}
              </div>
              <div className="mt-4 space-y-2 dark:bg-slate-900 dark:text-white">
                <span>Create a Strong Password</span>
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
              <div className="mt-5 flex justify-around dark:bg-slate-900 dark:text-white">
                <button className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-700 duration-300">
                  Sign Up
                </button>
                <p className="text-xl">
                  Already User?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
