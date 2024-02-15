import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function ProductCard() {
    return (
        <div className='col-2'>
            <Link className="product-card position-relative ">
                <div className="wishlist-icon position-absolute ">
                    <Link><img src="images/wish.svg" alt="" /></Link>
                </div>
                <div className="product-image">
                    <img className='img-fluid ' src="images/boat-headphone.jpg" alt="product image" />  
                </div>
                <div className="product-details">
                    <h6 className="brand">boAt</h6>
                    <h5 className="product-title">
                        Headphnoes bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className="price">₹2,799</p>
                </div>
                <div className="action-bar position-absolute ">
                    <div className="d-flex flex-column gap-15">
                        <Link>
                        <img src="images/prodcompare.svg" alt="prodcompare" />
                        </Link>
                        <Link>
                        <img src="images/view.svg" alt="view" />
                        </Link>
                        <Link>
                        <img src="images/add-cart.svg" alt="add cart" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
