import React, { useState, useEffect } from "react";
import style from "./navbar.module.css";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/logonavbar.png";
import { TbMenu2 } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa"; // Importar ícono de Instagram
import { IoClose } from "react-icons/io5";
import school from "../../assets/school.svg";
import code from "../../assets/code.svg";
import user from "../../assets/user.svg";
import dumbbell from "../../assets/dumbbell.svg"; // Importa el ícono de mancuerna
import aboutMe from "../../assets/user-check.svg";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(prevState => !prevState);
  };

  useEffect(() => {
    // Agregar o quitar la clase 'sidebar-active' en el body cuando la barra lateral está abierta
    if (showSidebar) {
      document.body.classList.add('sidebar-active');
    } else {
      document.body.classList.remove('sidebar-active');
    }
    
    // Limpieza de efecto
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
          <Link
            to="/"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            exact="true"
          >
            INICIO
          </Link>
        </li>
        <li className={style.desktopli}>
          <Link to="/entrenador-online">ENTRENAMIENTO ONLINE</Link>
        </li>
        <li className={style.desktopli}>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            exact="true"
          >
            SOBRE MÍ
          </Link>
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
                  <img src={aboutMe} alt="/" />
                  Inicio
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
                  <img src={dumbbell} alt="Dumbbell Icon" /> {/* Usa el ícono de mancuerna */}
                  Entrenamiento Online
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
                  <img src={user} alt="/About" />
                  Sobre Mí
                </Link>
              </li>
              <li>
                {/* Aquí podrías agregar más enlaces si es necesario */}
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
