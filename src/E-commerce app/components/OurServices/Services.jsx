import React, { useEffect } from 'react'
import './Services.css'
import Aos from 'aos';

const Services = () => {

 useEffect(() => {
     Aos.init({duration: 1000});
   
 }, [])
 




  return (
    <>
    
    <div className="container">
<section class="speciality" id="speciality">

<h1 class="heading"> Our <span>Services</span> </h1>

<div class="box-container">

    <div class="box"  data-aos="flip-left">

        <img class="image" src="https://www.getnow.pk/wp-content/uploads/2015/09/other-4054-240772-1-zoom.jpg" alt="" />
        <div class="content">
            <img src="https://mpng.subpng.com/20180907/wqj/kisspng-printed-t-shirt-polo-shirt-sleeve-men-designer-shirts-png-images-transparent-backgro-5b9247519f84e8.1163494015363131696534.jpg" alt=""/>
            <h3>Men's Shirts</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
        </div>
    </div>
    <div class="box"  data-aos="flip-left">
        <img class="image" src="https://3.imimg.com/data3/HA/RV/MY-646899/ladies-shirts-500x500.jpg" alt=""/>
        <div class="content">
            <img src="https://www.pngitem.com/pimgs/m/515-5153812_ladies-t-shirt-design-hd-png-download.png" alt=""/>
            <h3>Women's Shirts</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
        </div>
    </div>
    <div class="box"  data-aos="flip-left">
        <img class="image" src="http://he.com.pk/wp-content/uploads/2015/02/bridal-jewellery-sets-with-price-in-pakistan.jpeg" alt=""/>
        <div class="content">
            <img src="https://wewarriors.life/pics/cdn0.rubylux.com/shops/1546589/e003270.1L.jpg" alt=""/>
            <h3>Jewellery</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
        </div>
    </div>
    <div class="box" data-aos="flip-left">
        <img class="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJldnXNNaYXBT_WEgYlbbdoDcb9uJg0olNa-B8M43fIUZzuggjXZphvAWIr9CsrdvkCLE&usqp=CAU" alt=""/>
        <div class="content">
            <img src="https://www.vhv.rs/dpng/d/490-4909659_electronic-transparent-background-png-transparent-background-electronics-transparent.png" alt=""/>
            <h3>Electronics</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
        </div>
    </div>

</div>

</section>
</div>
    </>
  )
}

export default Services