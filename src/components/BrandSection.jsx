import React from 'react';
import workday from "../assets/Workday.png";
import google from "../assets/Google.png";
import salesFoce from "../assets/Salesforce.png";
import amazon from "../assets/Amazon.png";
import sony from "../assets/Sony.png";
import cocacola from "../assets/Cocacola.png";
import intel from "../assets/intel.png";

const BrandsSection = () => {
    return (
        <section className="brands-section text-center py-5">
            <div className="">
                <div className="row d-flex flex-nowrap justify-content-between align-items-center " >
                    {/* Loop through logos */}
                        <div className="col-auto px-3">
                        <img src={workday} alt="workday" className="brand-logo " />
                        </div>
                        <div className="col-auto px-3">
                         <img src={google} alt="Google" className="brand-logo " />
                        </div>
                        <div className="col-auto px-3">
                         <img src={salesFoce} alt="Salesforce" className="brand-logo " />
                        </div>
                        <div className="col-auto px-3">
                        <img src={amazon} alt="Amazon" className="brand-logo " />
                        </div>
                        <div className="col-auto px-3">
                         <img src={sony} alt="Sony" className="brand-logo " />
                        </div>
                        <div className="col-auto px-3">
                         <img src={cocacola} alt="CocaCola" className="brand-logo " />
                        </div>
                        <div className="col-auto px-3">
                         <img src={intel} alt="Intel" className="brand-logo " />
                        </div>
                        <div className="col-auto px-3">
                         <img src={workday} alt="workday" className="brand-logo " />
                        </div>
                            {/* <img src={logo} alt="Brand Logo" className="brand-logo" /> */}

                       
                    
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;

// import React from 'react';
// import workday from "../assets/Workday.png"
// import google from "../assets/Google.png"
// import salesFoce from "../assets/Salesforce.png"
// import amazon from "../assets/Amazon.png"
// import sony from "../assets/Sony.png"
// import cocacola from "../assets/Cocacola.png"
// import intel from "../assets/intel.png"
// const BrandsSection = () => {
//     return (
//         <section className="brands-section text-center">
//             <div className="container">
//                 <div className="row justify-content-center align-items-center">
//                 <div className="col-4 col-md-2">
//                         <img src={workday} alt="workday" className="brand-logo w-25" />
//                     </div>
//                     <div className="col-4 col-md-2">
//                         <img src={google} alt="Google" className="brand-logo w-25" />
//                     </div>
//                     <div className="col-4 col-md-2">
//                         <img src={salesFoce} alt="Salesforce" className="brand-logo w-25" />
//                     </div>
//                     <div className="col-4 col-md-2">
//                         <img src={amazon} alt="Amazon" className="brand-logo w-25" />
//                     </div>
//                     <div className="col-4 col-md-2">
//                         <img src={sony} alt="Sony" className="brand-logo w-25" />
//                     </div>
//                     <div className="col-4 col-md-2">
//                         <img src={cocacola} alt="CocaCola" className="brand-logo w-25" />
//                     </div>
//                     <div className="col-4 col-md-2">
//                         <img src={intel} alt="Intel" className="brand-logo w-25" />
//                     </div>
//                     <div className="col-4 col-md-2">
//                         <img src={workday} alt="workday" className="brand-logo " />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default BrandsSection;
