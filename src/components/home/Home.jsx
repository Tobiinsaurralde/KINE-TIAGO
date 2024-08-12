import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import style from "./home.module.css";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { HashLink as Link } from 'react-router-hash-link';
import logo from "../../assets/logo.png";
import fondoPerfil from "../../assets/about.jpeg";
import linearoja from "../../assets/linearoja.png";
import arrow from "../../assets/arrow.png";
import { RxDoubleArrowRight } from "react-icons/rx";
import { CgGym } from "react-icons/cg";
import { IoFitness } from "react-icons/io5";

import { MdOutlineFitnessCenter } from "react-icons/md";

const TwoCardBlock = ({ Icon, title,text1, text2 }) => {
  return (
    <div className={style.twoCardBlock}>
      <div className={style.card}>
        <Icon className={style.cardIcon} />
        <div className={style.cardContent}>
          <h3 className={style.cardTitle}>{title}</h3>
          <p className={style.cardText}>{text1}</p>
          <p className={style.cardText}>{text2}</p>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    
    const savedTheme = localStorage.getItem("theme") || "light-mode";
    document.body.classList.add(savedTheme);
    setIsDarkMode(savedTheme === "dark-mode");
  }, []);

  return (
    <section className={style.education} id="education">
      <div className={style.divLogo}>
        <img src={logo} alt="logo" className={style.logo} />
      </div>
      
      <div className={style.containerAbout}>
        <div className={style.conteinerAbout1}>
          <div className={style.conteinerTitle}>
            <div className={style.titleLiteral}>
              <h1>
                <span className={style.textGradientt}>KineTiago - Entrenamiento basado en evidencia</span>
                <span className={style.tecnico}>  Actualización constante para ayudarte con tus objetivos</span>
              </h1>
            </div>
            <img src={linearoja} className={style.linearoja} />
          </div>
        </div>
        <span className={style.tecnico2}> Aprende y aplica:</span>

        <div className={style.greyBlock}>

        <div className={style.leftBlock}>
          <img src={fondoPerfil} alt="fondo-perfil" className={style.fotoPerfil} />
          <h2>Tiago Insaurralde</h2>
          <p className={style.listItem}>Kinesiologo Graduado en Universidad Nacional del Nordeste</p>
          <p className={style.listItem}>Preparador Físico Certificado</p>
        </div>

          <div className={style.rightBlock}>
            <TwoCardBlock
              Icon={CgGym}
              title="Entrenamiento"
              text1="Servicio que incluye evaluación funcional, planificación semanal del entrenamiento, seguimiento personalizado, y asesoramiento continuo para optimizar los resultados."
            />
            <TwoCardBlock
              Icon={IoFitness}
              title="Rehabilitación "
              text2="Sesiones virtuales programadas, evaluación constante de sintomatología, progresión de cargas, vuelta a la actividad deportiva/laboral/cotidiana, educación del paciente, asesoría 24hs."
            />
          </div>
        </div>
        <img src={arrow} alt="arrow" className={style.arrow} />

        <div className={style.subtitle}>
          <h2>¡Descubre mi servicio de <span className={style.boldText}>entrenamiento y rehabilitación online!</span></h2>
        </div>
        <p>
        <Link to="/entrenador-online" className={style.moreInfoLink}>
    ¡Haz click para más información!
  </Link>
        </p>
        <div className={style.blackBlock}>
          <div className={style.services}>
            <h3>Servicios:</h3>
            <ul>
              <li><Link to="/entrenador-online">Entrenamiento</Link></li>
              <li><Link to="/entrenador-online">Rehabilitación</Link></li>
            </ul>
          </div>
          <img src={logo} alt="logo" className={style.logo} />

          <div className={style.aboutMe}>
            <h3>Sobre mí</h3>
            <ul>
              <li><Link to="/about">Tiago Insaurralde</Link></li>
              <li>Redes sociales:</li>
              <li><a href="https://www.instagram.com/kinetiago" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/tiago-insaurralde-a4b328211/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.tobi}>
        <li><p>© 2024 Tobias Insaurralde - Todos los derechos reservados</p></li>
      </div>
    </section>
  );
}

export default Home;
