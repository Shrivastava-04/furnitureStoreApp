import React from "react";
import banner from "../../public/Banner.jpg";
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-12 md:my-10 dark:bg-slate-900 dark:text-white">
        <div className="w-full md:w-1/2 order-2 md:order-1 pt-12 md:pt-32 dark:bg-slate-900 dark:text-white">
          <div className="space-y-12">
            <h1 className="text-5xl font-bold">
              Crafted for Comfort,
              <span className="text-blue-500"> Designed for Style</span>
            </h1>
            <p className="text-1md">
              Welcome to FurniEase, where every piece of furniture is crafted to
              bring style and comfort into your home. Explore our stunning
              collections of tables, chairs, sofas, and more. Enjoy exclusive
              deals and seamless online shopping with free delivery. Make your
              home a masterpiece today!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow dark:text-black"
                placeholder="Email"
              />
            </label>
          </div>
          <button className="btn btn-primary mt-3 hover:bg-gray-200 hover:text-black dark:hover:bg-slate-800 dark:hover:text-white border-none">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 mt-2 md:mt-9 md:ml-2 py-2 md:py-9 md:px-2">
          <img src={banner} alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
