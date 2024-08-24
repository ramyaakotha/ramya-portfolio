import React, {  useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleDownload = ()=>{
    const pdfurl = 'Ramya-Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfurl;
    link.download = "Ramya's Resume.pdf"
    document.body.appendChild(link);
    link.click();
  }

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./assets/nameLogo.png" />

          <ul>
            <li>
              <a className="menu-item" href="#Hero">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#Skills">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="#Work">
                Work Experience
              </a>
            </li>
            <li>
              <a className="menu-item" href="#Contact">
                Contact Me
              </a>
            </li>
              <button className="contact-btn" onClick={handleDownload}>
                Download Resume
              </button>
            
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            {openMenu ? (
              <img src="./assets/close.png" />
            ) : (
              <img src="./assets/menu.png" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
