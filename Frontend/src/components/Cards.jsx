import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3 ">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary bg-blue-500 border-none">
                NEW
              </div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div>
                <div className="badge badge-outline p-3">₹{item.price}</div>
                <div className="badge badge-outline hover:bg-blue-500 hover:text-white ml-1 p-3 cursor-pointer">
                  Buy Now
                </div>
              </div>
              <div className="badge badge-outline hover:bg-blue-500 hover:text-white p-3 cursor-pointer">
                {item.category}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
