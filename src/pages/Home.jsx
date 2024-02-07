import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5 '>
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner p-3 position-relative  ">
                <img className='img-fluid rounded-3 ' src="images/main-banner-1.jpg" alt="Main Banner image" />
                <div className="main-banner-content position-absolute ">
                  <h4>SUPPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From ₹82975.44 or ₹3456.89/mo.<br/>for 24 mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                <div className="small-banner p-3 position-relative  ">
                  <img className='img-fluid rounded-3 ' src="images/catbanner-01.jpg" alt="Small Banner image" />
                  <div className="small-banner-content position-absolute ">
                    <h4>BEST SALE</h4>
                    <h5>Laptops Max</h5>
                    <p>From ₹141116.39 or <br /> ₹5367.24/mo.</p>
                  </div>
                </div>
                <div className="small-banner p-3 position-relative  ">
                  <img className='img-fluid rounded-3 ' src="images/catbanner-02.jpg" alt="Small Banner image" />
                  <div className="small-banner-content position-absolute ">
                    <h4>15% OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p>Shop the latest band <br /> styles and colors.</p>
                  </div>
                </div>
                <div className="small-banner p-3 position-relative  ">
                  <img className='img-fluid rounded-3 ' src="images/catbanner-03.jpg" alt="Small Banner image" />
                  <div className="small-banner-content position-absolute ">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy IPad Air</h5>
                    <p>From ₹49752.04 or <br /> ₹4145.45/mo.</p>
                  </div>
                </div>
                <div className="small-banner p-3 position-relative  ">
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
    </>
  )
}

export default Home
