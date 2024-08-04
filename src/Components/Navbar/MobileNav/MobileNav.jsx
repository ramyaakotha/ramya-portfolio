import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="./assets/logo.png" />
          <ul>
            <li>
              <a className="menu-item" href="#Hero">Home</a>
            </li>

            <li>
              <a className="menu-item" href="#Skills">Skills</a>
            </li>

            <li>
              <a className="menu-item" href="#Work">Work Experience</a>
            </li>

            <li>
              <a className="menu-item" href="#Contact">Contact Me</a>
            </li>

            <button className='contact-btn' onClick={()=>{}}>
            Download Resume
           </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
