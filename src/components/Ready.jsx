import React from "react";
import rect from '../assets/Rectangle 5.png'
import logo from '../assets/adTask.ai.png'
import startFreeTrial from "../assets/startTrialButton.png"
import scheduleButton from "../assets/scheduleButton.png"

const Ready = () => {
    return (
        <div
            className="d-flex align-items-center justify-content-center text-center flex-column "
            style={{
                width: "100%",
                padding: "20px",
            }}
        >
            <img src={logo} alt="" style={{ opacity: 0.1 }} />
            <div className="features-section " style={{ height: '80vh',padding:'100px' }}>

                <img src={rect} alt="" className="background-image" style={{ objectFit: 'contain',opacity:0.6 }} />
                <div className="" >
                    {/* Heading */}



                    <h2 className=" mb-2 " style={{ fontSize: "40px" }}>Are you ready to boost</h2>
                    <h2 className=" mb-5" style={{ fontSize: "40px", color: "#7687B5" }}>your Digital Presence?</h2>

                    {/* Buttons */}
                    <div className="mt-5 p-4 d-flex flex-column justify-content-center align-items-center gap-4" style={{opacity:"1"}}>
                    <img src={startFreeTrial} alt="" className="w-50 " style={{opacity:"1"}} />
                        <img src={scheduleButton} alt="" className="w-50 " style={{opacity:"1"}} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Ready;
