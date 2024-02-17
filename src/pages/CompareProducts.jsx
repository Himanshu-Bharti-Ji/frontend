import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Color from '../components/Color';

function CompareProducts() {
    return (
        <>
            <Meta title={"On4All | Compare Products"} />
            <BreadCrumb title="Compare Products" />

            <div className="compare-products-wrapper py-5 home-wrapper-2">
                <div className="container-1640">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-products-card position-relative ">
                                <img className='position-absolute cross img-fluid ' src="images/cross.svg" alt="cross" />
                                <div className="product-card-image">
                                    <img className='img-fluid' src="images/smartwatch.jpg" alt="smartwatch" />
                                </div>
                                <div className="compare-products-details">
                                    <h5 className="title">LEAF WATCH WIRELESS BT CALLING SMART WATCH-CARBON BLACK</h5>
                                    <h6 className="price mb-3 ">₹2,199</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5 className='mb-0'>Brand : </h5>
                                            <p className='mb-0'>Leaf</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className='mb-0'>Type : </h5>
                                            <p className='mb-0'>Leaf</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className='mb-0'>Availability : </h5>
                                            <p className='mb-0'>Leaf</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className='mb-0'>Color : </h5>
                                            <Color />
                                        </div>
                                        <div className="product-detail">
                                            <h5 className='mb-0'>Size : </h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-products-card position-relative ">
                                <img className='position-absolute cross img-fluid ' src="images/cross.svg" alt="cross" />
                                <div className="product-card-image">
                                    <img className='img-fluid' src="images/smartwatch.jpg" alt="smartwatch" />
                                </div>
                                <div className="compare-products-details">
                                    <h5 className="title">LEAF WATCH WIRELESS BT CALLING SMART WATCH-CARBON BLACK</h5>
                                    <h6 className="price mb-3 ">₹2,199</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5 className='mb-0'>Brand : </h5>
                                            <p className='mb-0'>Leaf</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className='mb-0'>Type : </h5>
                                            <p className='mb-0'>Leaf</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className='mb-0'>Availability : </h5>
                                            <p className='mb-0'>Leaf</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className='mb-0'>Color : </h5>
                                            <Color />
                                        </div>
                                        <div className="product-detail">
                                            <h5 className='mb-0'>Size : </h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProducts
