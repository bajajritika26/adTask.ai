import React from "react";
import rect from "../assets/Rectangle 5.png";
import transform from "../assets/transform.png"
import logo from "../assets/adTask.ai.png"
import startTrial from "../assets/startTrial.png"
const HeroSection = () => {
  return (
    <div className="position-relative d-flex align-items-center justify-content-center" style={{width: "100%",height: "100vh"}} >
      {/* Background Image */}
      <img 
        src={rect} 
        className="w-100 img-fluid " 
        alt="" 
        style={{ objectFit: "cover", height: "100%" }} 
      />

      {/* Overlay Content */}
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white" >
        <img src={transform} alt="" style={{opacity:1}} />
        <img src={logo} alt="" style={{margin:'60px',opacity:0.1}}/>
        <p className="fs-6 mt-3 px-5" style={{color:"lightgray"}}>
          Stop struggling with marketing decisions. Our AI assistant analyzes
          your business, creates personalized strategies, and helps you execute
          them - all in real-time.
        </p>
        <img src={startTrial} alt="" className="mt-3" />
        <p className="mt-3 " style={{fontSize:"12px",color:"lightgray",opacity:0.7}}>Try AdTask AI free for 30 days</p>
      </div>
    </div>
  );
};

export default HeroSection;
