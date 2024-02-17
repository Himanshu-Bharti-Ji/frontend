import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <Meta title={"On4All | Sign Up"} />
            <BreadCrumb title="Sign Up" />

            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-1640">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-4'>Sign Up</h3>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type="text" name='name' placeholder='Full name' className="form-control" />
                                    </div>
                                    <div>
                                        <input type="email" name='email' placeholder='Email' className="form-control" />
                                    </div>
                                    <div>
                                        <input type="tel" name='phone' placeholder='Phone No.' className="form-control" />
                                    </div>
                                    <div className='mt-1'>
                                        <input type="password" name='password' placeholder='Password' className="form-control" />
                                    </div>
                                    <div>
                                        <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                                            <button className="button border-0 signup">Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
