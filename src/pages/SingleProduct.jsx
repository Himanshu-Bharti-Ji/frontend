import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard';

function SingleProduct() {
    return (
        <>
            <Meta title={"On4All | Product Name"} />
            <BreadCrumb title="Product Name" />

            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-1640">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>


            <div className="description-wrapper py-5 home-wrapper-2">
                    <div className="container-1640">
                        <div className="row">
                            <div className="col-12">
                                <div className="bg-white p-3 ">
                                    <h4>Description</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic incidunt iure, adipisci consequatur rerum quia saepe corporis illo provident impedit, esse fugit quasi quidem repudiandae nulla, dolore ut dolores eos?</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            <section className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container-1640">
                    <div className="row">
                        <div className="col-12"></div>

                    </div>
                </div>
            </section>

            <section className='popular-wrapper py-5 home-wrapper-2'>
                <div className="container-1640">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Popular Products</h3>
                        </div>
                        <div className='d-flex flex-wrap justify-content-between gap-4'>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct
