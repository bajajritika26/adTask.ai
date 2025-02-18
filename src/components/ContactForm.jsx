import React from 'react';
import submit from '../assets/submit.png'
import address from "../assets/address.png"
import mail from "../assets/mail.png"
import phone from '../assets/phone.png'
import contactHead from '../assets/contactHead.png'
import circle from '../assets/circle.png'
const ContactForm = () => {
    return (
        <div
            className="container-fluid d-flex align-items-center justify-content-center"
            style={{minHeight: "100vh",flexDirection: 'column'}}>
            <img src={contactHead} alt='' />
            <div className="heading-container g-0  d-flex d-flex flex-column flex-md-row align-items-center justify-content-around ">
                {/* Left Section  */}
                <div
                    className="text-white d-flex align-items-center justify-content-center text-align-left features-section  "
                    style={{ backgroundSize: "cover", minHeight: "80vh", borderRadius: "10px 0 0 10px", flex: '1', textAlign: 'left' }}>
                    <img src={circle} alt='' className='background-image img-fluid' style={{top:50}}/>


                    <div className="w-100" style={{ padding: "30px", borderRadius: "10px" }}>
                        <div className="">
                            <h2 className="fw-semibold" >
                                Ask whatever you have
                            </h2>
                            <h2 className="fw-semibold mb-4" style={{  color: "#7687B5" }}>
                                in your mind now
                            </h2>
                            <p>
                                Whether you have questions or are ready to discuss your business,
                                we're here to help. Reach out today.
                            </p>
                        </div>
                        {/* Contact Details */}
                        <div className="mt-4">
                            <p className="mb-3 fs-6" style={{ color: "lightgray" }} >
                                <img src={mail} alt='' /> <small className='text-decoration-underline'>  contact@adtask.ai</small>
                            </p>
                            <p className='fs-6' style={{ color: "lightgray" }}>
                                <img src={phone} alt=''/><span><small> (969) 819-8061</small></span>
                            </p>
                            <p className='fs-6' style={{ color: "lightgray" }}>
                                <img src={address} alt=''/><span><small> San Francisco Bay Area </small></span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section (Form) */}
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                        flex: '1',
                        width:"100%"
                    }}
                >
                    <div className="card bg-transparent border-0 text-white p-4 w-100">
                        <form>
                            {/* Name Field */}
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label d-block text-start fw-bold" style={{ fontSize: "14px" }}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control bg-transparent text-white"
                                    id="name"
                                    style={{ border: "1px solid #7687B5" }}
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label d-block text-start fw-bold" style={{ fontSize: "14px" }}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control bg-transparent text-white"
                                    id="email"
                                    style={{ border: "1px solid #7687B5" }}
                                />
                            </div>

                            {/* Message Field */}
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label d-block text-start fw-bold" style={{ fontSize: "14px" }}>
                                    Message
                                </label>
                                <textarea
                                    className="form-control bg-transparent text-white"
                                    id="message"
                                    rows="3"
                                    style={{ border: "1px solid #7687B5" }}
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <img src={submit} alt='submit' />

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactForm;
