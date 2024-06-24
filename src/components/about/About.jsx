import React, { useState, useEffect } from "react";
import style from "./about.module.css";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineLightMode, } from "react-icons/md";
import { Link } from "react-scroll";
import fondoPerfil from "../../assets/about.jpeg";
import instagram from "../../assets/instagram.png";
import { RiArrowDownSLine } from "react-icons/ri";
import argentina from "../../assets/argentina.svg";

function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(savedTheme);
    setIsDarkMode(savedTheme === 'dark-mode');
  }, []);

  const toggleMode = () => {
    const newTheme = isDarkMode ? 'light-mode' : 'dark-mode';
    document.body.classList.remove(isDarkMode ? 'dark-mode' : 'light-mode');
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <section className={style.about} id="about">
      <div className={style.containerAbout}>
        <div className={style.conteinerAbout1}>
          <div className={style.conteinerTitle}>
            <div className={style.titleLiteral}>
              <p className={style.title}>Hola, soy</p>
              <h1 className={style.textGradient}>Tiago Insaurralde</h1>
            </div>
            <div className={style.conteinerDescription}>
              <p className={style.description}>
                {" "}
                Un{" "}
                <span className={style.tecnico}>
                  Licenciado en Kinesiologia y Fisiatría
                </span>{" "}
                de Corrientes, Argentina{" "}
                <img
                  src={argentina}
                  alt="argentinaFlag"
                  className={style.flag}
                />
              </p>
            </div>
          </div>

          <div className={style.conteinerIcons}>
            <a
              href="https://www.linkedin.com/in/tiago-insaurralde-a4b328211/?originalSubdomain=ar"
              target="_blank"
              className={style.iconsRed}
            >
              <FaLinkedin className={style.linkedinIcon} />
            </a>
            <a
              href="https://www.instagram.com/tiago.insaurralde"
              target="_blank"
              className={style.iconsRed}
            >
              <div className={style.linkedinIcon}>
                <img
                  src={instagram}
                  alt="instagram"
                  style={{ width: '23px', height: '23px', marginTop: '6px' }}
                />
              </div>
            </a>
          </div>
        </div>
        <div className={style.conteinerAbout2}>
          <img src={fondoPerfil} alt="fondo-perfil" />
        </div>
      </div>
      <Link
        to="education"
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        exact="true"
        className={style.linkArrow}
      >
        <RiArrowDownSLine className={style.Arrow} />
      </Link>
    </section>
  );
}

export default About;
