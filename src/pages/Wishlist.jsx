import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';


// importing images
import cross from "../images/cross.svg"
import smartwatch from "../images/smartwatch.jpg"





function Wishlist() {
    return (
        <>
            <Meta title={"On4All | Wishlist"} />
            <BreadCrumb title="Wishlist" />

            <div className="wish-list-wrapper py-5 home-wrapper-2">
                <div className="container-1640">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img className='position-absolute cross img-fluid ' src={cross} alt="cross" />
                                <div className="wishlist-card-image">
                                    <img className='img-fluid' src={smartwatch} alt="smartwatch" />
                                </div>
                            </div>
                            <div className="wishlist-card-details">
                                    <h5 className="title">LEAF WATCH WIRELESS BT CALLING SMART WATCH-CARBON BLACK</h5>
                                    <h6 className="price mb-3 ">₹2,199</h6>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img className='position-absolute cross img-fluid ' src={cross} alt="cross" />
                                <div className="wishlist-card-image">
                                    <img className='img-fluid' src={smartwatch} alt="smartwatch" />
                                </div>
                            </div>
                            <div className="wishlist-card-details">
                                    <h5 className="title">LEAF WATCH WIRELESS BT CALLING SMART WATCH-CARBON BLACK</h5>
                                    <h6 className="price mb-3 ">₹2,199</h6>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img className='position-absolute cross img-fluid ' src={cross} alt="cross" />
                                <div className="wishlist-card-image">
                                    <img className='img-fluid' src={smartwatch} alt="smartwatch" />
                                </div>
                            </div>
                            <div className="wishlist-card-details">
                                    <h5 className="title">LEAF WATCH WIRELESS BT CALLING SMART WATCH-CARBON BLACK</h5>
                                    <h6 className="price mb-3 ">₹2,199</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist
