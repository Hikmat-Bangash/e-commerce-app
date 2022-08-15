import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { IconButton, Tooltip } from '@material-ui/core'
import './payment.css'
const Payment = () => {

	const [product, setproduct] = useState([])
	const {prdct} = useParams();

//----- use navigate method definition -------
const navigate = useNavigate();
//---- handling method -----
const handling = ()=>{
	navigate(-1);
}


	useEffect(() => {
    
		const getProducts = async() =>{
			const products = await fetch(`http://fakestoreapi.com/products/${prdct}`);
			const response = await products.json();
			setproduct(response)    
		}
		// calling method
		 getProducts();
	  }, [])

   console.log(product);



  return (
    <>
      <section className="credit-card">
		 <div className="container">
			 {/* for taking one step back button */}
		 <div className="back float-left" > 
              <Tooltip title="go back" arrow>
                  <IconButton	>
                  <i class="fa fa-arrow-left" aria-hidden="true" onClick={handling}></i>
                </IconButton>
                </Tooltip>                
              </div>

			<div className="card-holder">
			  <div className="card-box bg-news">
		       <div className="row">
				<div className="col-lg-6">
				<div className="row">
				 <div className="img-box col-6">
				   {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="img-fluid" /> */}
				   <img src={product.image} className="img-fluid" style={{width:"250px", height: "270px"}}/>
				 </div>
				 <div className="prdctdetail col-4 h-50">
					 <h6 className='display-7 text-white fw-bold py-3' >{product.title}</h6>
					 <h6 className='display-7 text-white fw-bold'style={{marginTop: "180px"}}>$ {product.price}</h6>
				 </div>
				 </div>
				 </div>
				
 
				<div className="col-lg-6">				
				<form>
				  <div className="card-details">
					<h3 className="title">Credit Card Details</h3>
					<div className="row">
					  <div className="form-group col-sm-7">
					   <div className="inner-addon right-addon">
						<label for="card-holder">Card Holder</label>
                       
						<input id="card-holder" type="text" className="form-control" placeholder="Card Holder" aria-label="Card Holder" aria-describedby="basic-addon1"/>
					   </div>	
					  </div>
					  <div className="form-group col-sm-5">
						<label for="">Expiration Date</label>
						<div className="input-group expiration-date ">
						  <input type="text" className="form-control" placeholder="MM" aria-label="MM" aria-describedby="basic-addon1"/>
						  <span className="date-separator">/</span>
						  <input type="text" className="form-control" placeholder="YY" aria-label="YY" aria-describedby="basic-addon1"/>
						</div>
					  </div>
					  <div className="form-group col-sm-8">
					   <div className="inner-addon right-addon">
						<label for="card-number">Card Number</label>
                        
						<input id="card-number" type="text" className="form-control" placeholder="Card Number" aria-label="Card Holder" aria-describedby="basic-addon1"/>
					   </div>	
					  </div>
					  <div className="form-group col-sm-4">
						<label for="cvc">CVC</label>
						<input id="cvc" type="text" className="form-control" placeholder="CVC" aria-label="Card Holder" aria-describedby="basic-addon1"/>
					  </div>
					  <div className="form-group col-sm-12">
						<button type="button" className="btn btn-primary btn-block proceedBTN">Proceed</button>
					  </div>
					</div>
				  </div>
				</form>				
				
				</div>
		  
		       </div>
			  </div>
			</div>		 
			
		 </div>
		</section>
    
    </>
  )
}

export default Payment