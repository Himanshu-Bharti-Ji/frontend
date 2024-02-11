import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5 '>
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative  ">
                <img className='img-fluid rounded-3 ' src="images/main-banner-1.jpg" alt="Main Banner image" />
                <div className="main-banner-content position-absolute ">
                  <h4>SUPPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From ₹82975.44 or ₹3456.89/mo.<br />for 24 mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                <div className="small-banner position-relative  ">
                  <img className='img-fluid rounded-3 ' src="images/catbanner-01.jpg" alt="Small Banner image" />
                  <div className="small-banner-content position-absolute ">
                    <h4>BEST SALE</h4>
                    <h5>Laptops Max</h5>
                    <p>From ₹141116.39 or <br /> ₹5367.24/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative  ">
                  <img className='img-fluid rounded-3 ' src="images/catbanner-02.jpg" alt="Small Banner image" />
                  <div className="small-banner-content position-absolute ">
                    <h4>15% OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p>Shop the latest band <br /> styles and colors.</p>
                  </div>
                </div>
                <div className="small-banner position-relative  ">
                  <img className='img-fluid rounded-3 ' src="images/catbanner-03.jpg" alt="Small Banner image" />
                  <div className="small-banner-content position-absolute ">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy IPad Air</h5>
                    <p>From ₹49752.04 or <br /> ₹4145.45/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative  ">
                  <img className='img-fluid rounded-3 ' src="images/catbanner-04.jpg" alt="Small Banner image" />
                  <div className="small-banner-content position-absolute ">
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPods Max</h5>
                    <p>High-fidelity playback & <br />ultra-low distortion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='home-wrapper-2 py-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service.png" alt="Free Shipping" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over ₹499</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-02.png" alt="Daily Serprise Offers" />
                  <div>
                    <h6>Daily Serprise Offers</h6>
                    <p className='mb-0'>Save up to 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-03.png" alt="Support 24/7" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-04.png" alt="Affordable Prices" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory direct price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-05.png" alt="Secure Payments" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% protected payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap  justify-content-center align-items-center ">
                <div className='d-flex gap align-items-center  justify-content-between '>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className='d-flex gap align-items-center justify-content-between  '>
                  <div>
                    <h6>Smart TVs</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="Smart Tv" />
                </div>
                <div className='d-flex gap align-items-center justify-content-between  '>
                  <div>
                    <h6>Computer & Laptops</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/laptop.jpg" alt="Computer & Laptops" />
                </div>
                <div className='d-flex gap align-items-center  justify-content-between '>
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="Headphones" />
                </div>
                <div className='d-flex gap align-items-center  justify-content-between '>
                  <div>
                    <h6>Portable Speakers</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/speaker.jpg" alt="Speakers" />
                </div>
                <div className='d-flex gap align-items-center justify-content-between '>
                  <div>
                    <h6>Accesories</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/acc.jpg" alt="Accesories" />
                </div>
                <div className='d-flex gap align-items-center justify-content-between  '>
                  <div>
                    <h6>Home Appliances</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/homeapp.jpg" alt="Home Appliances" />
                </div>
                <div className='d-flex gap-30 align-items-center justify-content-between  '>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img style={{ width: "110px", height: "110px" }} src="images/smartwatch.jpg" alt="Watches" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='marque-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25 '>
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25 '>
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25 '>
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25 '>
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25 '>
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25 '>
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25 '>
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25 '>
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
