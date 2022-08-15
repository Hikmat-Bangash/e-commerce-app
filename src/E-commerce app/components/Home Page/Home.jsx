import React from "react";
import Footer from "../../Footer/Footer";
import Map from "../Map section/Map";
import Services from "../OurServices/Services";
import Review from "../Review/Review";
import Steps from "../steps/Steps";
// import Products from "../Products";
import "./Homepage.css";

const Home = () => {
  return (
    <>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner slider">
          <div className="carousel-item active">
            <img
              src="/assets/1.jpg"
              alt="Los Angeles"
              className="d-block w-100"
              // style={{ width: "100vw", height: "90vh"}}
            />
          </div>

          <div className="carousel-item slider">
            <img
              src="/assets/2.jpg"
              alt="Chicago"
              className="d-block w-100"
              // style={{ width: "100vw", height: "90vh"}}
            />
          </div>
          
          <div className="carousel-item slider">
            <img
              src="/assets/3.jpg"
              alt="New York"
              className="d-block w-100"
              // style={{ width: "100vw", height: "90vh"}}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon slider_btn"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon slider_btn"></span>
        </button>
      </div>

      <Services/>
      <hr/>
     <Review/>
      <hr/>
      <Steps/>
      <Map/>
      <Footer/>
     

    </>
  );
};

export default Home;
