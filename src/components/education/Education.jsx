import React, { useState, useEffect } from "react";
import style from "./education.module.css";
import { FaInstagramSquare, FaLinkedin, FaWhatsapp,FaPhoneSquareAlt, FaPhone} from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import fondoPerfil from "../../assets/about.jpeg";
import instagram from "../../assets/instagram.png";
import argentina from "../../assets/argentina.svg";
import linearoja from "../../assets/linearoja.png";
import arrow from "../../assets/arrow.png";
import school from "../../assets/school.svg";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";

import card5 from "../assets/card5.png";


import { LiaToolsSolid } from "react-icons/lia";
import { MdOutlineNotStarted } from "react-icons/md";
import { GoSearch } from "react-icons/go";

const Card = ({ title, text, image, transparent, url }) => {
  const handleCardClick = () => {
    window.location.href = url;
  };

  return (
    <div className={`${style.card} ${transparent ? style.transparentCard : ""}`} onClick={handleCardClick}>
      <img src={image} alt="card-image" className={style.cardImage} />
      <div className={style.cardContent}>
        <h3 className={style.cardTitle}>{title}</h3>
        <p className={style.cardText}>{text}</p>
      </div>
    </div>
  );
};

const Card1 = ({ title, text, image, transparent, url }) => {
  const handleCardClick = () => {
    window.location.href = url;
  };

  return (
    <div className={`${style.cardd} ${transparent ? style.transparentCard : ""}`} onClick={handleCardClick}>
      <img src={image} alt="card-image" className={style.cardImage} />
      <div className={style.cardContent}>
        <h3 className={style.cardTitle}>{title}</h3>
        <p className={style.cardText}>{text}</p>
      </div>
    </div>
  );
};
const IconCard = ({ title, text, Icon, transparent, url }) => {
  const handleCardClick = () => {
    window.location.href = url;
  };

  return (
    <div className={`${style.card} ${transparent ? style.transparentCard : ""}`} onClick={handleCardClick}>
      {Icon && <Icon className={style.cardIcon} />}
      <div className={style.cardContent}>
        
        <h3 className={style.cardTitle}>{title}</h3>
        <p className={style.cardText}>{text}</p>
      </div>
    </div>
  );
};
const TwoCardBlock = ({ title1, text1, title2, text2, url1, url2 }) => {
  return (
    <div className={style.twoCardBlock}>
      <a href={url1} target="_blank" rel="noopener noreferrer" className={style.cardLink}>
        <h3>Opción 1</h3>
        <FaWhatsapp className={style.cardImage2} />
        <div className={style.cardContent}>
          <h3 className={style.cardTitle}>{title1}</h3>
          <p className={style.cardText}>{text1}</p>
          <button className={style.callButton}>Escribir ahora</button>
        </div>
      </a>
      <a href={url2} target="_blank" rel="noopener noreferrer" className={style.cardLinkk}>
        <h3>Opción 2</h3>
        <FaPhone className={style.cardImage3} />
        <div className={style.cardContent}>
          <h3 className={style.cardTitle}>{title2}</h3>
          <p className={style.cardText}>{text2}</p>
          <button className={style.callButtonn}>Llama ya</button>
        </div>
      </a>
    </div>
  );
};



const FAQ = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={style.faqItem}>
      <div 
        className={`${style.faqQuestion} ${isOpen ? style.open : ''}`} 
        onClick={onClick}
      >
        {question}
      </div>
      {isOpen && <div className={style.faqAnswer}>{answer}</div>}
    </div>
  );
};
function Education() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

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

  const handleFAQClick = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };
  const cardsData = [
    {
      title: 'Te gustaría sentirte más enérgico y estar en forma',
      text: (
        <span>
          Mantenerte en <strong>forma</strong> no solo te permite rendir al máximo en cualquier momento. La <strong>actividad física</strong> también tiene un gran impacto positivo en tu estado de ánimo.
        </span>
      ),
      image: card1,
    },
    {
      title: 'Queres verte mejor físicamente en el espejo',
      text: (
        <span>
          Ya sea aumentando tu <strong>masa muscular</strong> o reduciendo <strong>grasa</strong>... Sentirte satisfecho con lo que ves en el espejo es una fuente importante de <strong>confianza diaria</strong>.
        </span>
      ),
      image: card2,
    },
    {
      title: 'Buscas maximizar tu esfuerzo y obtener resultados',
      text: (
        <span>
          Puede ser muy <strong>desalentador</strong> invertir esfuerzo <strong>sin ver resultados</strong>. Mi trabajo como profesional del entrenamiento es optimizar al máximo tu proceso y lograr el mayor <strong>progreso posible</strong>.
        </span>
      ),
      image: card3,
    },
  ];
  
  const moreCardsData = [
    {
      title: 'Entrenamiento 100% adaptado a vos.',
      text: (
        <span>
          Seguiremos un programa de ejercicios <strong>personalizado</strong>, diseñado teniendo en cuenta tus <strong>circunstancias</strong> y <strong>metas</strong>, el cual se modificará a lo largo del tiempo.
        </span>
      ),
      image: card4,
    },
    {
      title: 'Evaluación permanente',
      text: (
        <span>
          Evaluaremos los <strong>avances</strong> logrados a través de <strong>gráficas automatizadas</strong> que aportarán información tanto de tu <strong>desempeño</strong> como de otros datos corporales.
        </span>
      ),
      image: card5,
    },

  ];
  const transparentCardsData = [
    {
      title: 'Preparación',
      text: (
        <>
          Háblame por <span className="highlight">Whatsapp</span> o reserva tu <span className="highlight">videollamada</span> sin compromiso y te enviaré el formulario inicial
        </>
      ),
      Icon: LiaToolsSolid,
    },
    {
      title: 'Comenzamos',
      text: 'En menos de 3 días dispondrás de todos los documentos para comenzar tu transformación física',
      Icon: MdOutlineNotStarted,
    },
    {
      title: 'Revisiones',
      text: (
        <>
          Cada documento se actualizará en cada revisión según avances. También estaré disponible para cualquier cosa vía <span className="highlight">Whatsapp</span>
        </>
      ),
      Icon: GoSearch,
    },
  ];
  


  const faqData = [
    {
      question: '¿Cuánto cuesta el servicio de entrenamiento online?',
      answer: 'El costo del servicio depende del plan que elijas. Ofrezco diferentes paquetes que se ajustan a tus necesidades y objetivos. Por favor, contáctame para más detalles.',
    },
    {
      question: '¿Cómo se realiza la evaluación inicial?',
      answer: 'La evaluación inicial se realiza a través de una videollamada en la que analizamos tu historial de entrenamiento, estado de salud actual, objetivos y preferencias.',
    },
    {
      question: '¿Necesito algún equipo especial?',
      answer: 'No necesitas equipo especial para comenzar. Sin embargo, tener acceso a algunos equipos básicos como pesas o bandas de resistencia puede ser beneficioso para tu progreso.',
    },
    {
      question: '¿Qué métodos de pago aceptas para el servicio de entrenamiento?',
      answer: 'Para el servicio de entrenamiento, acepto tarjetas de crédito y débito como Visa y MasterCard. También puedes realizar transferencias bancarias directamente a mi cuenta, utilizar Mercado Pago para pagos en línea. Además, para clientes locales en sesiones presenciales, acepto pagos en efectivo.',
    },
  ];

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
                <span className={style.textGradientt}>Entrenador Personal Online:</span>
                <span className={style.tecnico}> Optimiza tu Esfuerzo y consigue Resultados</span>
              </h1>
            </div>
            <img src={linearoja} className={style.linearoja} />
          </div>
        </div>
        <span className={style.tecnico2}>¡Comienza tu   <span className={style.boldTextt}>cambio físico </span> de la mano de un <span className={style.boldTextt}> profesional!</span></span>

        <div className={style.conteinerAbout2}>
          <img src={fondoPerfil} alt="fondo-perfil" className={style.fotoPerfill} />
          <div className={style.textIcons}>
            <h2 className={style.nombre}>Tiago Insaurralde</h2>
            <p className={style.descripcion}>
              Licenciado en <span className={style.descrip1}>Kinesiología y Fisiatría </span><br />
              Preparador Físico
            </p>
          </div>
        </div>
        <img src={arrow} alt="arrow" className={style.arrow2} />

      </div>

      <div className={style.father}>
        <div className={style.subtitlee}>
          <h2>El servicio de <span className={style.boldText1}>entrenamiento personal online</span> es para vos si…  </h2>
        </div>

        <div className={style.cardsContainer}>
          {cardsData.map((cardd, index) => (
            <Card1 key={index} title={cardd.title} text={cardd.text} image={cardd.image} />
          ))}
        </div>


        <div className={style.subtitle}>
        <img src={arrow} alt="arrow" className={style.arrow} />

          <h2>Así es mi servicio como <span className={style.boldText}>entrenador personal</span></h2>
        </div>

        <div className={style.cardsContainer}>
          {moreCardsData.map((card, index) => (
            <Card key={index} image={card.image} title={card.title} text={card.text} />
          ))}
        </div>

        <div className={style.greyBlock}>
          <div className={style.leftBlock}>
            <h2>¡Da el primer paso hacia tu cambio físico!</h2>
            <img src={fondoPerfil} alt="fondo-perfil" className={style.fotoPerfil} />
          </div>
          <div className={style.rightBlock}>
          <TwoCardBlock
  title1="¡Escríbeme por Whatsapp!"
  text1="Consúltame cualquier pregunta sin compromiso o avísame para que te mande el formulario inicial"
  url1="https://api.whatsapp.com/send?phone=543794277815" // Reemplaza con tu URL de WhatsApp
  title2="¡Reserva una videollamada conmigo!"
  text2="Elige entre los días y horas disponibles para hablar conmigo acerca del servicio"
  url2="https://calendly.com/kinetiagoinsa" // Reemplaza con tu URL de llamada telefónica
/>
          </div>
        </div>

        <div className={style.subtitle8}>
          <h2>¿Cómo comienza el servicio de <strong>entrenamiento online</strong>?</h2>
        </div>

        
        <div className={style.transparentCardsContainer}>
          {transparentCardsData.map((card, index) => (
            <IconCard key={index} title={card.title} text={card.text} Icon={card.Icon} transparent={true} />
          ))}
        </div>

        <div className={style.subtitleq}>
          <h2>Preguntas frecuentes</h2>
        </div>

        <div className={style.faqContainer}>
  {faqData.map((faq, index) => (
    <FAQ
      key={index}
      question={faq.question}
      answer={faq.answer}
      isOpen={openFAQIndex === index}
      onClick={() => handleFAQClick(index)}
    />
  ))}
</div>
            <div className={style.blackBlock}>
          <div className={style.services}>
            <h3>Servicios:</h3>
            <ul>
              <li><a href="entrenador-online">Entrenamiento Online</a></li>
              <li><a href="rehabilitación">Rehabilitación</a></li>
            </ul>
          </div>
          <img src={logo} alt="logo" className={style.logo} />

          <div className={style.aboutMe}>
            <h3>Sobre mí</h3>
            <ul>
              <li><a href="about">Tiago Insaurralde</a></li>
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

export default Education;

