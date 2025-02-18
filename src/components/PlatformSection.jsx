import React from 'react';
import platform1 from '../assets/platform1.png'
import platform2 from '../assets/platform2.png'
import platform3 from '../assets/platform3.png'
import platform4 from '../assets/platform4.png'
import platform5 from '../assets/platform5.png'
import platform6 from '../assets/platform6.png'

const PlatformsSection = () => {
    return (
        <section className="platforms-section py-5 text-center">
            
            <div className="container">
                <span className=" mb-3 fw-semibold" style={{color:'lightgray'}}>Adtask AI works with:</span>
                <div className="row justify-content-center mt-5">
                    <div className="col-auto p-4 ">
                        <div className="platform-box">
                            <img src={platform1} alt="Google Ads" />
                        </div>
                    </div>
                    <div className="col-auto p-4 ">
                        <div className="platform-box">
                            <img src={platform2} alt="TikTok" />
                        </div>
                    </div>
                    <div className="col-auto p-4 ">
                        <div className="platform-box">
                            <img src={platform3} alt="Meta" />
                        </div>
                    </div>
                    <div className="col-auto p-4 ">
                        <div className="platform-box">
                            <img src={platform4} alt="LinkedIn" />
                        </div>
                    </div>
                    <div className="col-auto p-4 ">
                        <div className="platform-box">
                            <img src={platform5} alt="Amazon" />
                        </div>
                    </div>
                    <div className="col-auto p-4 ">
                        <div className="platform-box">
                            <img src={platform6} alt="X" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformsSection;
