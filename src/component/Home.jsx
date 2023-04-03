import React from "react";
import img1 from "../assets/R.jpg";
import Products from "./Products";

const Home = () => {
  return (
    <div classNameName="hero">
      <div className="card bg-dark text-white border-0">
        <img src={img1} className="card-img" alt="..." height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div classNameName="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              New Season Arrivals
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
