import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "./contact.module.css";
import { Link } from "react-scroll";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import Swal from "sweetalert2";
import user from "../../assets/user.svg";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4ciiuve", "template_j2chaoq", form.current, "4w4Ticp4yTyJIQiqR")
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "¡Mensaje enviado con éxito!",
            text: "Tu mensaje fue enviado correctamente a ...",
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
    <section className={style.contact} id="contact">
      
      <div className={style.father}>
        <div className={style.subtitle}>
          
          <h2>Contacto:</h2>
        </div>
        <div className={style.contenedor}>
          <div className={style.contactme}>
            <div className={style.contactos}>
              <a /*href="mailto:kinetiagoinsa@gmail.com"*/>
                <BiLogoGmail className={style.iconContact} />
                ejemplo@gmail.com
                {/*kinetiagoinsa@gmail.com*/}
              </a>
              <a
               /* href="https://www.google.com/maps/place/Corrientes/@-27.4860751,-58.8747897,12z/data=!3m1!4b1!4m6!3m5!1s0x94456b79d5bed36b:0xfa999f1ef3b40646!8m2!3d-27.4692131!4d-58.8306349!16zL20vMDJ0Ymo1?entry=ttu"*/
                target="_blank"
                rel="noopener noreferrer"
              >
                                <FaLocationDot className={style.iconContact} />

                Ciudad, País.
              </a>
              <a
                /*href="https://www.linkedin.com/in/tiago-insaurralde-a4b328211/?originalSubdomain=ar"*/
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className={style.iconContact} />
                /Usuario
              </a>
              <a
              href="https://www.instagram.com/tiago.insaurralde"
              target="_blank"
              className={style.iconsRed}
            >
               {/*<FaInstagram className={style.instagramIcon} />
                /tiago.insaurralde*/}
            </a>
            </div>
            <div className={style.msj}>
              <img alt="" />
            </div>
          </div>
          <div className={style.formContact}>
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
      <div className={style.bottom}>
        <p>© 2024 Tobias Insaurralde - Todos los derechos reservados</p>
      </div>
    </section>
  );
}

export default Contact;
