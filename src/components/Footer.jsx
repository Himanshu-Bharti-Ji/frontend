import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      {/* Footer Upper part code Start */}
      <footer className='py-4'>
        <div className="container-1640">
          <div className="row align-items-center ">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center ">
                <img src="images/newsletter.png" alt="newsletter image" />
                <h2 className='mb-0 text-white '>Sign up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
            <div className="input-group">
                <input type="text" className="form-control py-1 " placeholder="Your Email" aria-label="Your Email" aria-describedby="basic-addon2" />
                <span className="input-group-text p-2 " id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Upper part code End Here */}


      {/* Footer Middle part code Start */}
      <footer className='py-3'>
        <div className="container-1640">
          <div className="row">
            <div className="col-4">
              <h4 className='mb-4 text-white '>Contact Us</h4>
              <div>
                <address className='text-white'>
                  H No : F-110 Kondli, <br/> Delhi <br/> Pincode : 110096 
                </address>
                <a className='mt-3 d-block mb-1 text-white ' href="tel:+91 8447767283">+91 8447767283</a>
                <a className='mt-2 d-block mb-2 text-white ' href="mailto:himanshubhartisoe@gmail.com">himanshubhartisoe@gmail.com</a>
                <div className="social-icons d-flex align-items-center gap-30">
                  <a className='text-white fs-4' target='_blank' href="https://www.linkedin.com/in/himanshu-bharti-ji/">
                    <BsLinkedin/>
                  </a>
                  <a className='text-white fs-4' target='_blank' href="https://github.com/Himanshu-Bharti-Ji/">
                    <BsGithub/>
                  </a>
                  <a className='text-white fs-4' target='_blank' href="https://www.instagram.com/himanshu_bharti_ji/">
                    <BsInstagram/>
                  </a>
                  <a className='text-white fs-4' target='_blank' href="">
                  <BsYoutube/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='mb-4 text-white '>Information</h4>
              <div className='footer-links d-flex flex-column '>
                <Link className='text-white mb-1 py-2 '>Privacy Policy</Link>
                <Link className='text-white mb-1 py-2 '>Refund Policy</Link>
                <Link className='text-white mb-1 py-2 '>Shipping Policy</Link>
                <Link className='text-white mb-1 py-2 '>Terms & Conditions</Link>
                <Link className='text-white mb-1 py-2 '>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='mb-4 text-white '>Account</h4>
              <div className='footer-links d-flex flex-column '>
                <Link className='text-white mb-1 py-2 '>Search</Link>
                <Link className='text-white mb-1 py-2 '>About Us</Link>
                <Link className='text-white mb-1 py-2 '>Faq</Link>
                <Link className='text-white mb-1 py-2 '>Contact</Link>
                <Link className='text-white mb-1 py-2 '>Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='mb-4 text-white '>Quick Links</h4>
              <div className='footer-links d-flex flex-column '>
                <Link className='text-white mb-1 py-2 '>Accessories</Link>
                <Link className='text-white mb-1 py-2 '>Laptops</Link>
                <Link className='text-white mb-1 py-2 '>Headphones</Link>
                <Link className='text-white mb-1 py-2 '>Tablets</Link>
                <Link className='text-white mb-1 py-2 '>Smart Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Middle part code End Here */}


      {/* Footer Bottom part code Start */}
      <footer className='py-4'>
        <div className="container-1640">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white ">&copy; {new Date().getFullYear()} Powered by On4All ~ An E-commerce Website</p>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Bottom part code End Here */}
    </>
  )
}

export default Footer
