import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <>
     
     <footer >
    <div class="container">
        <div class="row d-flex align-item-center py-2 ">
           
           <div className="col-md-4 col-sm-12">
               <div className="foter">
           <h5 className="display-7 fw-bold " style={{color: "rgb(70, 216, 250)"}}> 💦HB Store</h5>
           </div>
           </div>

            <div class="col-md-4 col-sm-12">
              <div class="foter d-md-flex justify-content-md-center">
              <p class="copyright">@2022HB All Rights Reserved </p>
            </div> 
          </div>


            <div class="col-md-4 col-sm-8">
              <div class="foter">
            <ul class=" d-md-flex justify-content-md-end">
              <li><a href="#">
              <i class="ftricon fa fa-facebook-square" aria-hidden="true"></i>
                  </a></li>
                  <li><a href="#">
              <i class="ftricon fa fa-twitter-square" aria-hidden="true"></i>
                  </a></li>
                  <li><a href="#">
              <i class="ftricon fa fa-linkedin-square" aria-hidden="true"></i>
                  </a></li>
            </ul>
            </div>
            </div>
        </div>
    </div>
</footer>

    </>
  )
}

export default Footer