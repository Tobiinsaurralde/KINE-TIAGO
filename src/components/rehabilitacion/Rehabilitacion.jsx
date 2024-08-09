import React, { useState, useEffect } from "react";
import style from "./rehabilitacion.module.css";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
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
import { RxDoubleArrowRight } from "react-icons/rx";

const Card = ({ title, text, image, transparent }) => {
  return (
    <div className={`${style.card} ${transparent ? style.transparentCard : ""}`}>
      <img src={image} alt="card-image" className={style.cardImage} />
      <div className={style.cardContent}>
        <h3 className={style.cardTitle}>{title}</h3>
        <p className={style.cardText}>{text}</p>
      </div>
    </div>
  );
};

const TwoCardBlock = ({ title1, text1, image1, title2, text2, image2 }) => {
  return (
    <div className={style.twoCardBlock}>
      <div className={style.card}>
        <h3>Opción 1</h3>
        <img src={image1} alt="card-image" className={style.cardImage} />
        <div className={style.cardContent}>
          <h3 className={style.cardTitle}>{title1}</h3>
          <p className={style.cardText}>{text1}</p>
        </div>
      </div>
      <div className={style.card}>
        <h3>Opción 2</h3>
        <img src={image2} alt="card-image" className={style.cardImage} />
        <div className={style.cardContent}>
          <h3 className={style.cardTitle}>{title2}</h3>
          <p className={style.cardText}>{text2}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={style.faqItem}>
      <div className={style.faqQuestion} onClick={onClick}>
        {question}
      </div>
      {isOpen && <div className={style.faqAnswer}>{answer}</div>}
    </div>
  );
};

function Rehabilitacion() {
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
      title: 'Te gustaría estar en forma y sentirte con más energía',
      text: 'Sentirte en forma no solo te permite dar lo mejor de ti en cualquier momento. El ejercicio físico ha demostrado tener también una enorme influencia en tu estado de ánimo según estudios.',
      image: card1,
    },
    {
      title: 'Queres verte bien (o mejor) físicamente en el espejo',
      text: 'Ya sea ganando masa muscular o perdiendo grasa…Que te guste lo que ves cuando te miras al espejo ha demostrado ser una gran fuente de confianza para tu día a día según estudios.',
      image: card2,
    },
    {
      title: 'Buscas optimizar tu esfuerzo y conseguir los mejores resultados',
      text: 'Puede llegar a ser muy frustrante destinar tiempo y esfuerzo para no ver resultados. Mi trabajo como profesional del entrenamiento es optimizar al máximo el proceso y alcanzar el máximo progreso.',
      image: card3,
    },
  ];

  const moreCardsData = [
    {
      title: 'Card 4 Title',
      text: 'Description for card 4',
      image: card1,
    },
    {
      title: 'Card 5 Title',
      text: 'Description for card 5',
      image: card1,
    },
    {
      title: 'Card 6 Title',
      text: 'Description for card 6',
      image: card2,
    },
    {
      title: 'Card 7 Title',
      text: 'Description for card 7',
      image: card3,
    },
  ];

  const transparentCardsData = [
    {
      title: 'Step 1: Initial Assessment',
      text: 'We start with a comprehensive assessment to understand your current fitness level, goals, and any limitations.',
      image: card1,
    },
    {
      title: 'Step 2: Customized Plan',
      text: 'Based on the assessment, we create a personalized workout and nutrition plan tailored to your needs.',
      image: card2,
    },
    {
      title: 'Step 3: Ongoing Support',
      text: 'We provide continuous support and adjustments to your plan to ensure you stay on track and achieve your goals.',
      image: card3,
    },
  ];

  const faqData = [
    {
      question: '¿Cuánto cuesta el servicio de entrenamiento online?',
      answer: 'El costo del servicio depende del plan que elijas. Ofrecemos diferentes paquetes que se ajustan a tus necesidades y objetivos. Por favor, contáctanos para más detalles.',
    },
    {
      question: '¿Cómo se realiza la evaluación inicial?',
      answer: 'La evaluación inicial se realiza a través de una videollamada en la que analizamos tu historial de entrenamiento, estado de salud actual, objetivos y preferencias.',
    },
    {
      question: '¿Necesito algún equipo especial?',
      answer: 'No necesitas equipo especial para comenzar. Sin embargo, tener acceso a algunos equipos básicos como pesas o bandas de resistencia puede ser beneficioso para tu progreso.',
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
        <span className={style.tecnico2}> ¡Comienza tu cambio físico de la mano de un profesional!</span>
        <div className={style.conteinerAbout2}>
          <img src={fondoPerfil} alt="fondo-perfil" className={style.fotoPerfill} />
          <div className={style.textIcons}>
            <h2 className={style.nombre}>Tiago Insaurralde</h2>
            <p className={style.descripcion}>
              Licenciado en Kinesiología y Fisiatría <br />
              Preparador Físico
            </p>
          </div>
        </div>
      </div>

      <div className={style.father}>
        <div className={style.subtitle}>
          <h2> El servicio de <span className={style.boldText}>entrenamiento personal online</span> es para vos si… </h2>
        </div>

        <div className={style.cardsContainer}>
          {cardsData.map((card, index) => (
            <Card key={index} title={card.title} text={card.text} image={card.image} />
          ))}
        </div>

        <img src={arrow} alt="arrow" className={style.arrow} />

        <div className={style.subtitle}>
          <h2>Así es mi servicio como <span className={style.boldText}>kinesiologo y entrenador personal</span></h2>
        </div>

        <div className={style.cardsContainer}>
          {moreCardsData.map((card, index) => (
            <Card key={index} title={card.title} text={card.text} image={card.image} />
          ))}
        </div>

        <div className={style.greyBlock}>
          <div className={style.leftBlock}>
            <h2>¡Da el primer paso hacia tu cambio físico!</h2>
            <img src={fondoPerfil} alt="fondo-perfil" className={style.fotoPerfil} />
          </div>
          <div className={style.rightBlock}>
            <TwoCardBlock
              title1="Título Opción 1"
              text1="Descripción Opción 1"
              image1={card1}
              title2="Título Opción 2"
              text2="Descripción Opción 2"
              image2={card2}
            />
          </div>
        </div>

        <div className={style.subtitle}>
          <h2>¿Cómo comienza el servicio de entrenamiento online?</h2>
        </div>

        <div className={style.transparentCardsContainer}>
          {transparentCardsData.map((card, index) => (
            <Card key={index} title={card.title} text={card.text} image={card.image} transparent={true} />
          ))}
        </div>

        <div className={style.subtitle}>
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
          <img src={logo} alt="logo" className={style.logo} />
          <div className={style.services}>
            <h3>Todos los servicios</h3>
            <ul>
              <li><a href="#service1">Servicio 1</a></li>
              <li><a href="#service2">Servicio 2</a></li>
              <li><a href="#service3">Servicio 3</a></li>
              <li><a href="#service4">Servicio 4</a></li>
            </ul>
          </div>
          <div className={style.aboutMe}>
            <h3>Sobre mí</h3>
            <ul>
              <li><a href="#about">Mi nombre</a></li>
              <li>Redes sociales</li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rehabilitacion;
