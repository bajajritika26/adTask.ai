import React from "react";
import allServices from "../assets/AllServices.png"
import servicesHead from "../assets/servicesHead.png"
import leftLine from "../assets/leftLine.png";
import rightLine from "../assets/rightLine.png";
import servicesIpad from "../assets/ServicesIpad.png"
import servicesAndroid from "../assets/ServicesAndroid.png"
import ContactUs from "../assets/contactUs.png"


const ServicesSection = () => {


  return (
    <div className="d-flex flex-column align-items-center text-center" style={{ color: "white", minHeight: "100vh", padding: "50px 20px" }}>
      {/* Services Header */}

      <img src={servicesHead} alt="" className="mb-2" />
      <div className="heading-container d-flex align-items-center gap-5 justify-content-around">
        <img src={leftLine} alt="" className="line-image " style={{  height: "4px" }} />
        <div className="text-center">
          <h2 className=" mb-2 " >Innovative Services</h2>
          <h2 className="" style={{  color: "#7687B5" }}>for Growth.</h2>
        </div>
        <img src={rightLine} alt="" className="line-image" style={{ height: "4px" }} />
      </div>


      {/* Service Boxes Container */}
      <div className="d-flex flex-wrap justify-content-center">
        <img src={allServices} alt="" className="d-none d-lg-block" style={{ marginTop: "-50px" }} />

        <img src={servicesIpad} alt="" className="d-none d-md-block d-lg-none" style={{ marginTop: "-300px" }} />

        <img src={servicesAndroid} alt="" className="d-block d-md-none" />
      </div>


      {/* Contact Button */}
      <div><img src={ContactUs} alt="" />
      </div>

    </div>
  );
};

export default ServicesSection;
