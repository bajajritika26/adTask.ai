import React from "react";
import feature1 from "../assets/Feature1.png";
import feature2 from "../assets/Feature2.png";
import feature3 from "../assets/Feature3.png";
import feature4 from "../assets/Feature4.png";
import features from "../assets/Features.png";
import leftLine from "../assets/leftLine.png";
import rightLine from "../assets/rightLine.png";
import rect from "../assets/Rectangle 5.png";

const FeaturesSection = () => {
  return (
    <section className="features-section  d-flex align-items-center justify-content-center">
   
        <img src={rect} alt="Background" className=" background-image  "  />
      
      <div className="features-container " style={{ margin: "auto"}}>
       
        <div className="heading-container d-flex align-items-center gap-2 justify-content-between">
          <img src={leftLine} alt="" className="line-image " />
          <div className="text-center">
            <img src={features} alt="Features" className="features-image mb-3" />
            <h2 className=" mb-2 " >Feature packed to make</h2>
            <h2 className=" mb-5" style={{color:"#7687B5"}}>Digital Marketing easier and affordable</h2>
            <p className="">
              Experience intelligent Features to optimize your marketing efforts
            </p>
          </div>
          <img src={rightLine} alt="" className="line-image" />
        </div>

        {/* Large Screen Layout */}
        <div className="grid-layout">
          <div className="feature-card">
            <img src={feature1} alt="Reach Target Audience" />
          </div>
          <div className="feature-card center-stack">
            <img src={feature2} alt="Marketing Made Easier" />
            <img src={feature3} alt="Smart Marketing Insights" />
          </div>
          <div className="feature-card">
            <img src={feature4} alt="Optimize Your Reach" />
          </div>
        </div>

        {/* iPad Layout (Images in a 2x2 Grid) */}
        <div className="flex-layout">
          <div className="feature-card"><img src={feature1} alt="Reach Target Audience" /></div>
          <div className="feature-card"><img src={feature4} alt="Optimize Your Reach" /></div>
          <div className="feature-card"><img src={feature2} alt="Marketing Made Easier" /></div>
          <div className="feature-card"><img src={feature3} alt="Smart Marketing Insights" /></div>
        </div>

        {/* Mobile Layout (Stacked) */}
        <div className="mobile-layout">
          <div className="feature-card"><img src={feature1} alt="Reach Target Audience" /></div>
          <div className="feature-card"><img src={feature4} alt="Optimize Your Reach" /></div>
          <div className="feature-card"><img src={feature2} alt="Marketing Made Easier" /></div>
          <div className="feature-card"><img src={feature3} alt="Smart Marketing Insights" /></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
