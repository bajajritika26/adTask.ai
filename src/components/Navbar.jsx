import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/adTask.ai.png";
import login from "../assets/loginButton.png";
import schedule from "../assets/schedule.png";
import downarrow from "../assets/arrow_drop_down.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar top-5 mt-4">
      <div className="container-fluid py-2 w-75 d-flex justify-content-between" 
           style={{ border: "0.3px solid gray", borderRadius: "15px" }}>
      
        <img style={{ width: "100px" }} src={logo} alt="logo" />

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
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav me-4">
              <li className="nav-item" style={{ color: "white" }}>
                Products <img src={downarrow} alt="arr" />
              </li>
              <li className="nav-item" style={{ color: "white" }}>
                Tools <img src={downarrow} alt="arr" />
              </li>
              <li className="nav-item" style={{ color: "white" }}>
                Contact Us
              </li>
            </ul>

            {user ? (
              // <div className="btn border-light text-light rounded-circle d-flex align-items-center justify-content-center"
              //      style={{ backgroundColor:"#2a2f3d",width: "45px", height: "45px", cursor: "pointer", fontSize: "20px", fontWeight: "semibold" }}
              //      >
              //   {user.name.charAt(0).toUpperCase()} {/* First Letter of Name */}
              // </div>
              <div className="btn border-light text-light rounded-5" style={{ backgroundColor:"#2a2f3d"}} onClick={handleLogout}>Log out</div>
            ) : (
              <img src={login} alt="login" className="btn" style={{ height: "55px" }} onClick={() => navigate('/login')} />
            )}

            <img src={schedule} alt="schedule" className="btn" style={{ height: "55px" }} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
