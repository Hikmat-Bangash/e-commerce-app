import React, { useEffect } from "react";
import "./review.css";
import Aos from 'aos';

const Review = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
  
}, [])


  return (
    <>
    
     <div className="container">
      <section class="review" id="review">
        <h1 class="heading">
          
          Our Customers <span>Reviews</span>
        </h1>

        <div class="box-container">
          <div class="box" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"> 
            <img src="/assets/pic3.png" alt="review pic1" />
            <h3>Kriti kharbanda</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              delectus, ducimus facere quod ratione vel laboriosam? Est, maxime
              rem. Itaque.
            </p>
          </div>

          <div class="box" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
            <img src="/assets/pic1.png" alt="review pic1" />
            <h3> Karishma </h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              delectus, ducimus facere quod ratione vel laboriosam? Est, maxime
              rem. Itaque.
            </p>
          </div>

          <div class="box" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
            <img src="/assets/pic2.png" alt="review pic2" />
            <h3> Arman Malik</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              delectus, ducimus facere quod ratione vel laboriosam? Est, maxime
              rem. Itaque.
            </p>
          </div>
          <div class="box" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
            <img src="/assets/pic3.png" alt="review pic3" />
            <h3> Kriti Sanon</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              delectus, ducimus facere quod ratione vel laboriosam? Est, maxime
              rem. Itaque.
            </p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Review;
