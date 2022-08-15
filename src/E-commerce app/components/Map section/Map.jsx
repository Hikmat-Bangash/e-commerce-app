import React, { useEffect } from 'react'
import './map.css'
import Aos from 'aos'

const Map = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
 
}, []) 

  return (
    <>
    <div className="bgcolr">
    <div className="container">
        <div className="row direc">
        <h1 class="heading">
          Get <span>Direction</span>
        </h1>
        </div>
      <div className="row py-2">
          <div className="col-6" data-aos="fade-down-right">
          {/* <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe> */}
          
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105610.23704487827!2d71.96884652486604!3d34.18930180116996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38deca20e7a77bd9%3A0xcede96de9f847fd5!2sMardan%2C%20Khyber%20Pakhtunkhwa%2023200%2C%20Pakistan!5e0!3m2!1sen!2s!4v1648747970967!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="col-6" data-aos="fade-down-left">
             <div className="right-section">
                 <img src="https://www.digitalcommerce360.com/wp-content/uploads/2020/08/Two-thirds-of-consumers-have-increased-online-shopping-because-of-the-coronavirus.png" alt="online store-pic" />
             
             </div>
          </div>
      </div>
</div>
</div>
    </>
  )
}

export default Map