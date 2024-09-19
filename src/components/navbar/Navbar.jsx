import React, { useState, useEffect } from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logonavbar.png";
import { TbMenu2 } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaHome, FaBusinessTime, FaFileAlt, FaUser, FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(prevState => !prevState);
  };

  useEffect(() => {
    if (showSidebar) {
      document.body.classList.add('sidebar-active');
    } else {
      document.body.classList.remove('sidebar-active');
    }

    return () => {
      document.body.classList.remove('sidebar-active');
    };
  }, [showSidebar]);

  const toggleMode = () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark-mode');
    } else {
      localStorage.setItem('theme', 'light-mode');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
    }
  }, []);

  return (
    <nav className={style.navBar}>
      <div className={style.divLogo}>
        <img src={logo} alt="tiago-insaurralde-logo" className={style.logo} />
      </div>

      <ul className={style.navBarUl}>
        <li className={style.mobileMenuButton} onClick={toggleSidebar}>
          <TbMenu2 />
        </li>

        <li className={style.desktopli}>
          <Link to="/">INICIO</Link>
        </li>
        <li className={style.desktopli}>
          <Link to="/entrenador-online">ASESORÍAS ONLINE</Link>
        </li>
        <li className={style.desktopli}>
          <Link to="/blog">BLOG</Link>
        </li>
        <li className={style.desktopli}>
          <Link to="/about">SOBRE MÍ</Link>
        </li>
       

        <li className={style.hideOnMobile}>
          <a href="https://www.instagram.com/kinetiago" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={style.socialIcon} />
          </a>
        </li>
      </ul>

      {showSidebar && (
        <div className={style.sidebar}>
          <div className={style.header}>
            <div className={style.divLogo}>
              <img src={logo} alt="-logo" className={style.logo2} />
            </div>
            <button className={style.closeButton} onClick={toggleSidebar}>
              <IoClose />
            </button>
          </div>

          <div className={style.sidebarUl}>
            <ul>
              <li>
                <Link
                  onClick={toggleSidebar}
                  to="/"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  exact="true"
                >
                  <FaHome /> Inicio
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleSidebar}
                  to="/entrenador-online"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  exact="true"
                >
                  <FaBusinessTime /> Asesorías Online
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleSidebar}
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  exact="true"
                >
                  <FaUser /> Sobre Mí
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleSidebar}
                  to="blog"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  exact="true"
                >
                  <FaFileAlt /> Blog
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
