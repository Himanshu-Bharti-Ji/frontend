import React from 'react'
import { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";

function SingleProduct() {
    const [orderedProduct, setOrderedProduct] = useState(true)
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
                            <h4>Description</h4>
                            <div className="description-content bg-white p-3 ">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, harum adipisci a suscipit saepe magni omnis iusto consequatur similique perferendis molestiae nam et. Reiciendis impedit iste quibusdam a consectetur officiis porro natus, nostrum at sapiente libero illum. Cupiditate, id deserunt? Perspiciatis assumenda itaque ad ea molestiae soluta illum eius esse, autem, odit ex placeat maiores tempore possimus alias sit voluptate. Necessitatibus aut dolores odit inventore! Explicabo, quo aut? Eos facilis ratione ipsa veniam amet. Laudantium nobis neque laborum tempora minus, optio at accusamus, minima facere ad fuga molestias nulla explicabo. Veniam quaerat at nisi quia vero quidem culpa, ipsam quos aliquid eos atque vel sit reprehenderit alias pariatur vitae! Et dolorem repellat dolor, expedita voluptatem alias placeat nihil doloribus harum ex eum numquam.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <section className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container-1640">
                    <div className="row">
                        <div className="col-12">
                            <h3>Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className="d-flex gap-10 align-items-center ">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {orderedProduct && <div>
                                        <a className='text-decoration-underline ' href="">Write a Review</a>
                                    </div>}
                                </div>
                                <div className="review-form py-4 ">
                                    <h4>Write a Review</h4>
                                    <form action="" className='d-flex flex-column gap-15'>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea className='w-100 form-control ' name="" id="" cols="30" rows="5" placeholder='Comments'></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end my-2  '>
                                            <button className="button border-0 ">Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews mt-4 ">
                                    <div className="review">
                                        <div className='d-flex align-items-center gap-10'>
                                            <h6 className="mb-0">Himanshu Bharti</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et consequatur mollitia quidem sed, iusto in velit accusantium quia, aliquid voluptatum, aut fuga repellat quae aperiam nostrum unde. Quaerat perferendis culpa, nostrum ut ad dolor alias similique explicabo a ex, laboriosam facere corrupti tempora fugit iusto.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
