import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {BsSearch} from "react-icons/bs"

const Header = () => {
  return (
    <>
      {/* Header Top Strip code Start */}
      <header className='header-top-strip py-3 '>
        <div className='container-xxl'>
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0  '>Free Shipping over ₹499 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0  '>Hotline: <a className='text-white' href="tel:+91 8447767283">+91 8447767283</a></p>
            </div>
          </div>
        </div>
      </header>
      {/* Header Top Strip code End Here */}


      {/* Header Upper part code Start */}
      <header className='header-upper py-3 '>
        <div className='container-xxl'>
          <div className="row align-items-center ">
            <div className="col-2">
              <h2><Link className='text-white'>On4All</Link></h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input type="text" className="form-control py-2 " placeholder="Search Your Products Here..." aria-label="Search Your Products Here..." aria-describedby="basic-addon2" />
                  <span className="input-group-text p-3 " id="basic-addon2"><BsSearch className='fs-6' /></span>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </header>
      {/* Header Upper part code End Here */}


    </>
  )
}

export default Header
