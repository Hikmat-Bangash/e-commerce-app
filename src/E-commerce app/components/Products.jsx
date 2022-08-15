import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from "react-router-dom";
import Aos from 'aos'
import Footer from "../Footer/Footer";

const Products = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);
  let componentMount = true;
//-------------- FOR SCROLLING ANIMATION ---------
useEffect(() => {
  Aos.init({duration: 1000});

}, [])
//--------- SCROLLING ANIMATION SECTION ENDED --------


  useEffect(() => {
    const getProducts = async () => {
      setloading(true);
      const products = await fetch("http://fakestoreapi.com/products");

      if (componentMount) {
        setdata(await products.clone().json());
        setfilter(await products.json());
        setloading(false);
      }

      return () => {
        componentMount = false;
      };

    };

    getProducts();
  }, []);

  // FILTERING PRODUCTS
  const Productfilter = (cat) =>{
       const update = data.filter((x)=>x.category === cat);
       setfilter(update)
  }
  // loading part
  const Loading = () => {
    return(
     <>
        <div className="col-md-3">
          <Skeleton  height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
    </>
    )
  };
  // showing products
  const Showproducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5">
          <button className="btn-sm btn btn-outline-dark me-1" onClick={()=>setfilter(data)}>All</button>
          <button className="btn-sm btn btn-outline-dark me-1" onClick={()=>Productfilter("men's clothing")} >Men's</button>
          <button className="btn-sm btn btn-outline-dark me-1" onClick={()=>Productfilter("women's clothing")}>Women's</button>
          <button className="btn-sm btn btn-outline-dark me-1" onClick={()=>Productfilter("jewelery")}>Jewelery</button>
          <button className="btn-sm btn btn-outline-dark me-1" onClick={()=>Productfilter("electronics")}>Elect</button>
          </div>
          {filter.map((pro) => {
            return (
              <>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8" key={pro.id} data-aos="zoom-in">
                <div className="card text-center p-4 mb-2" key={pro.id} >
                  <img src={pro.image} className="card-img-top"height={"250px"} alt={pro.title} />
                  <div className="card-body">
                    <h5 className="card-title">{pro.title.substring(0,12)}</h5>
                    <p className="lead fw-bold">
                      ${pro.price}
                    </p>
                    <Link to={`${pro.id}`} className="btn btn-outline-primary">
                      Book Now
                    </Link>
                  </div>
                </div>
                </div>
              </>
            );
          })}

          {/* Paste it again for dublication */}

          {filter.map((pro) => {
            return (
              <>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8" key={pro.id} data-aos="zoom-in">
                <div className="card text-center p-4 mb-2" key={pro.id} >
                  <img src={pro.image} className="card-img-top" height={"250px"} alt={pro.title} />
                  <div className="card-body">
                    <h5 className="card-title">{pro.title.substring(0,12)}</h5>
                    <p className="lead fw-bold">
                      ${pro.price}
                    </p>
                    <Link to={`${pro.id}`} className="btn btn-outline-primary">
                      Book Now
                    </Link>
                  </div>
                </div>
                </div>
              </>
            );
          })}
      </>
    );
  };

  return (
    <>
      <div id="products" className="container my-5">
        <div className="row py-4">
          <div className="col-12">
            <h5 className="display-6 fw-bolder text-center text-danger "> HKB Products</h5>
            <hr />
          </div>
        </div>

        <div className="row d-flex justify-content-center my-4">
          {loading ? <Loading /> : <Showproducts />}
        </div>
       
      </div>
      {/* {loading ? "" :  <Footer/>} */}
    </>
  );
};

export default Products;
