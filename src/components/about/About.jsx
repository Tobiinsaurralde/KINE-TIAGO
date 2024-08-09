import React, { useState, useEffect } from "react";
import style from "./about.module.css";
import fondoPerfil from "../../assets/about.jpeg";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow.png";

function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light-mode";
    document.body.classList.add(savedTheme);
    setIsDarkMode(savedTheme === "dark-mode");
  }, []);

  const toggleMode = () => {
    const newTheme = isDarkMode ? "light-mode" : "dark-mode";
    document.body.classList.remove(isDarkMode ? "dark-mode" : "light-mode");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <section className={style.about} id="about">
      <div className={style.containerAbout}>
        <div className={style.profileSection}>
          <div className={style.textSection}>
            <h2 className={style.nombre}>Tiago Insaurralde</h2>
            <img src={fondoPerfil} alt="fondo-perfil" className={style.fotoPerfil} />
            <p className={style.descripcion1}>
              <strong>Licenciado en Kinesiología y Fisiatría</strong> graduado en <strong>UNNE</strong> (Universidad Nacional del Nordeste)<br />
              <strong>Preparador Físico</strong> Certificado por la Escuela de Formación en Fitness (E.F.F.I.)
            </p>
            <h3 className={style.formacionExperiencia}>Formación y experiencia:</h3>

            <p className={style.descripcion}>
              Tengo una sólida formación como <strong>Licenciado en Kinesiología y Fisiatría</strong>, he tenido la oportunidad de ganar experiencia práctica a través de diversas actividades y prácticas pre-profesionales durante mis años de estudio. Estas experiencias me han permitido aplicar mis conocimientos teóricos en situaciones reales, desarrollando <strong>habilidades clave</strong> y afianzando mi vocación.<br />
              <br />
              Trabajo en el sector de la salud, específicamente en la <strong>rehabilitación deportiva</strong> y el <strong>reacondicionamiento físico</strong>. Mis principales <strong>aptitudes</strong> incluyen:<br />
              <br />
              <ul className={style.aptitudes}>
                <li><strong>• Planificación de Tratamientos</strong>: Diseño y desarrollo de planes de tratamiento personalizados y progresivos, adaptados a las necesidades y objetivos específicos de cada paciente.</li>
                <li><strong>• Trabajo de Cualidades Físicas</strong>: Fomento de diversas cualidades físicas mediante programas integrales que consideran tanto la rehabilitación como el entrenamiento.</li>
                <li><strong>• Atención y Trato al Paciente</strong>: Enfoque centrado en el paciente, garantizando una atención de calidad, inclusión en grupos terapéuticos y educación constante.</li>
                <li><strong>• Preparación Física</strong>: Certificado por la Escuela de Formación en Fitness (E.F.F.I.), aporto conocimientos especializados en preparación física y entrenamiento deportivo.</li>
              </ul>
              <br className={style.aptitudes1}/>
              Estoy motivado por el deseo de mejorar la <strong>calidad de vida</strong> y el rendimiento de mis pacientes. Me apasiona buscar <strong>herramientas</strong> y <strong>técnicas innovadoras</strong> para cada situación, siempre con el objetivo de proporcionar el mejor cuidado posible.
            </p>
            <h3>Redes sociales:</h3>
            
            <a href="https://www.instagram.com/kinetiago" target="_blank" className={style.socialLink}>• Instagram: @kinetiago</a>
          </div>
        </div>

        <div className={style.blackBlock}>
          <div className={style.services}>
            <h3>Servicios:</h3>
            <ul>
              <li><a href="entrenador-online">Entrenamiento Online</a></li>
              <li><a href="entrenador-online">Rehabilitación</a></li>
            </ul>
          </div>
          <img src={logo} alt="logo" className={style.logo} />

          <div className={style.aboutMe}>
            <ul>
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

export default About;
