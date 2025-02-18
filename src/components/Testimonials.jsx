import React from "react";
import rect from "../assets/Rectangle 5.png";
import testimonial1 from "../assets/Testimonial1.png";
import testimonial2 from "../assets/Testimonial2.png";
import testimonial3 from "../assets/Testimonial3.png";
import testimonial4 from "../assets/Testimonial4.png";
import testimonial5 from "../assets/Testimonial5.png";
import testimonial6 from "../assets/Testimonial6.png";
import TestimonialsHead from "../assets/TestimonialsHead.png"
import leftLine from "../assets/leftLine.png";
import rightLine from "../assets/rightLine.png";



const Testimonials = () => {
  return (
    <div className="text-white features-section ">

      <img src={rect} alt="" className="background-image img-fluid" />


      <div className="features-container">
        {/* Title Section */}
        <div className="heading-container d-flex align-items-center gap-4 justify-content-around mb-3">
          <img src={leftLine} alt="" className="line-image " />
          <div className="text-center">
            <img src={TestimonialsHead} alt="Features" className=" mb-3" />
            <h2 className=" " >Trusted by</h2>
            <h2 className=" mb-4" style={{  color: "#7687B5" }}>satisfied clients</h2>
            <p className="">
              Discover how we've driven growth and innovation.
            </p>
          </div>
          <img src={rightLine} alt="" className="line-image" />
        </div>

        {/* Testimonials Grid */}
        <div className="container">
          <div className="row g-4 justify-content-center">
            {/* First Row */}
            <div className="col-md-4 d-flex justify-content-center">
              <img src={testimonial1} alt="Testimonial" className="img-fluid" />
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <img src={testimonial2} alt="Testimonial" className="img-fluid" />
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <img src={testimonial3} alt="Testimonial" className="img-fluid" />
            </div>

            {/* Second Row */}
            <div className="col-md-4 d-flex justify-content-center">
              <img src={testimonial4} alt="Testimonial" className="img-fluid" />
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <img src={testimonial5} alt="Testimonial" className="img-fluid" />
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <img src={testimonial6} alt="Testimonial" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
