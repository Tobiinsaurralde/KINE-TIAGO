import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import linearoja from "../../assets/linearoja.png";

import Swal from "sweetalert2";

import style from "./about.module.css";
import fondoPerfil from "../../assets/about.jpeg";
import logo from "../../assets/logo.png";

function About() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ciiuve",
        "template_j2chaoq",
        form.current,
        "4w4Ticp4yTyJIQiqR"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "¡Mensaje enviado con éxito!",
            text: "Tu mensaje fue enviado correctamente a Tiago",
            confirmButtonColor: "rgb(14, 81, 182)",
            customClass: {
              popup: "black-background",
            },
          });
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          Swal.fire({
            icon: "error",
            title: "Error al enviar el mensaje",
            text: "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.",
            confirmButtonColor: "rgb(182, 14, 14)",
          });
        }
      );
  };

  return (
    <div className={style.about} id="about">
      <div className={style.containerAbout}>
        <div className={style.profileSection}>
          <div className={style.textSection}>
            <h2 className={style.nombre}>Tiago Insaurralde</h2>
            <img
              src={fondoPerfil}
              alt="fondo-perfil"
              className={style.fotoPerfil}
            />
            <p className={style.descripcion1}>
              Mi nombre es Tiago sin H (léase hache), pueden llamarme por mi nombre o decirme “kine”. Soy kinesiólogo y preparador físico, argentino y apasionado por el deporte y la salud. Mi objetivo con esta página es poder llegar a personas de todas partes del mundo, y ofrecer mis servicios para que, JUNTOS, logremos objetivos que puedan generar un cambio en tu vida. A continuación te dejo más información acerca de mi perfil profesional…
            </p>
            <h3 className={style.formacionExperiencia}>
              Formación y experiencia:
            </h3>
            <p className={style.descripcion}>
              Tengo una sólida formación como <strong>Licenciado en Kinesiología y Fisiatría</strong>, tuve la oportunidad de ganar experiencia práctica a través de diversas actividades pre-profesionales durante mis años de estudio, dichas experiencias incluyen prácticas en áreas de cuidados intensivos, traumatología, neurología, y deporte. Estas experiencias me han permitido aplicar mis conocimientos teóricos en situaciones reales, desarrollar <strong>habilidades clave</strong> y afianzar mi vocación.             Actualmente, trabajo en el sector de la salud, específicamente en la <strong>rehabilitación deportiva</strong> y el <strong>reacondicionamiento físico</strong>. Mis principales <strong>aptitudes</strong> incluyen:
             
            </p>
            <ul className={style.aptitudes}>
              <li>
                <strong>• Planificación de Tratamientos</strong>: Diseño y desarrollo de planes de tratamiento personalizados y progresivos, adaptados a las necesidades y objetivos específicos de cada persona.
              </li>
              <li>
                <strong>• Trabajo de Cualidades Físicas</strong>: Mediante programas integrales que consideran tanto la rehabilitación como el entrenamiento.
              </li>
              <li>
                <strong>• Atención y Trato al Paciente</strong>: Enfoque centrado en el paciente, garantizando una atención de calidad, inclusión en grupos terapéuticos y educación constante.
              </li>
              <li>
                <strong>• Preparación Física</strong>: Certificado por la Escuela de Formación en Fitness (EFFI), brindo conocimientos especializados en preparación física y entrenamiento deportivo.
              </li>
            </ul>
            <br />
            Estoy motivado por el deseo de mejorar la <strong>calidad de vida</strong> y el rendimiento de mis pacientes. Me apasiona buscar <strong>herramientas</strong> y <strong>técnicas innovadoras</strong> para cada situación, siempre con el objetivo de proporcionar el mejor cuidado posible.
          </div>
        </div>
  
        {/* Formulario de Contacto añadido a la sección About */}
        <section className={style.contact} id="contact">
          <div className={style.father}>
            <div className={style.subtitle}>
              <h2>Contáctame</h2>
              <img src={linearoja} className={style.linearoja} alt="Línea roja" />
            </div>
            <div className={style.contenedor}>
              <div className={style.contactInfo}>
                <div className={style.contactos}>
                  <ul className={style.contactList}>
                    <li>
                      <BiLogoGmail className={style.iconContact} />
                      <a href="mailto:kinetiagoinsa@gmail.com">
                        kinetiagoinsa@gmail.com
                      </a>
                    </li>
                    <li>
                      <FaLocationDot className={style.iconContact} />
                      <a
                        href="https://www.google.com/maps/place/Corrientes/@-27.4860751,-58.8747897,12z/data=!3m1!4b1!4m6!3m5!1s0x94456b79d5bed36b:0xfa999f1ef3b40646!8m2!3d-27.4692131!4d-58.8306349!16zL20vMDJ0Ymo1?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ciudad, País.
                      </a>
                    </li>
                    <li>
                      <FaLinkedin className={style.iconContact} />
                      <a
                        href="https://www.linkedin.com/in/tiago-insaurralde-a4b328211/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        /Tiagoinsaurralde
                      </a>
                    </li>
                    <li>
                      <FaInstagram className={style.iconContact} />
                      <a
                        href="https://www.instagram.com/kinetiago"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.iconsRed}
                      >
                        /@kinetiago
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={style.formContainer}>
                <form ref={form} onSubmit={sendEmail} className={style.form}>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Nombre completo"
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                  <textarea name="message" placeholder="Mensaje" required />
                  <input type="submit" value="ENVIAR" className={style.send} />
                </form>
              </div>
            </div>
          </div>
        </section>
  
        <div className={style.tobi}>
          <li>
            <p>© 2024 Tobias Insaurralde - Todos los derechos reservados</p>
          </li>
        </div>
      </div>
    </div>
  );
}
  export default About;
  