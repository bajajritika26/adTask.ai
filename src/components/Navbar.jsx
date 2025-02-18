import React from "react";
// import logo from "../assets/adTask.ai.png"
import logo from "../assets/adTask.ai.png"
import login from "../assets/loginButton.png"
import schedule from "../assets/schedule.png"
import downarrow from "../assets/arrow_drop_down.png"
const Navbar = () => {
  return (
    <nav className="  navbar navbar-expand-lg custom-navbar top-5 mt-4" >
      <div className="container-fluid py-2 w-75 d-flex justify-content-between " style={{ border: "0.3px solid gray", borderRadius: "15px" }}>
        {/* Logo */}
        <img className="" style={{width:"100px"}} src={logo} alt="logo" />

        <div>
          {/* Navbar Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse justify-content-end " id="navbarNav" >
            <ul className="navbar-nav me-4">
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:"white"}}>Products <img src={downarrow} alt="arr" /> </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:"white"}}>Tools <img src={downarrow} alt="arr" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:"white"}}>Contact Us</a>
              </li>
            </ul>
            {/* Buttons */}
            <img src={login} alt="" className="btn" style={{height:"55px"}}/>
            <img src={schedule} alt="" className="btn" style={{height:"55px"}}/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
