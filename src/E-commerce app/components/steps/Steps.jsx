import React, { useEffect } from 'react'
import './steps.css'
import Aos from 'aos'

const Steps = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
      
    }, [])

  return (
    <>

    <div className="container">

<div className="step-container">

<h1 className="heading">How it <span>Works</span></h1>

<section className="steps">

    <div className="box" data-aos="fade-right">
        <img src="https://image.shutterstock.com/image-vector/choose-product-online-color-icon-260nw-1536821891.jpg" alt=""/>
        <h5>Choose your favorite products</h5>
    </div>
    <div className="box" data-aos="fade-right">
        <img src="https://cdn3.vectorstock.com/i/1000x1000/57/07/pizza-food-delivery-icon-cartoon-style-vector-28085707.jpg" alt=""/>
        <h5>Free and fast delivery</h5>
    </div>
    <div className="box" data-aos="fade-left">
        <img src="/assets/step-3.jpg" alt=""/>
        <h5>Easy payments methods</h5>
    </div> 
    <div className="box" data-aos="fade-left">
        <img src="https://previews.123rf.com/images/photosvit/photosvit1910/photosvit191000213/131299863-enjoying-young-skin-happy-little-girl-touch-her-smooth-baby-skin-on-pink-background-small-child-with.jpg" alt=""/>
        <h5>and Finally, enjoy your products</h5>
    </div>

</section>

</div>
</div>
    
    </>
  )
}

export default Steps