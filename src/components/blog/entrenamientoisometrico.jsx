import React, { useState, useEffect } from "react";
import style from "./entrenamientoisometrico.module.css";
import image1 from "../../assets/image1.jpg";
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
            <h2 className={style.nombre}>DOSIFICACIÓN DEL EJERCICIO ISOMÉTRICO PARA LA HIPERTENSIÓN</h2>
            <img src={image1} className={style.fotoPerfil} />
            <p className={style.descripcion1}>
         
¿Sabías que el ejercicio isométrico puede ser una herramienta poderosa para manejar la hipertensión? ¡Es cierto! A través de contracciones musculares sostenidas, sin cambiar la longitud del músculo, podemos lograr grandes beneficios para nuestra salud cardiovascular. Pero, como con todo en la vida, la clave está en la dosificación adecuada.
            </p>
            <h3 className={style.formacionExperiencia}>¿Qué es el Ejercicio Isométrico?</h3>

            <p className={style.descripcion}>
            El ejercicio isométrico consiste en mantener una contracción muscular contra una resistencia inmóvil. Un ejemplo común es el ejercicio de apretón de manos, donde sostienes un dispositivo y aprietas sin mover el brazo. Este tipo de entrenamiento es accesible, ya que no requiere mucho espacio ni equipo costoso, y puede hacerse en cualquier momento del día.<br />
              <br />
              </p>

              <h3 className={style.formacionExperiencia}>Beneficios para la Hipertensión</h3>

            <p className={style.descripcion}>
            Según un metaanálisis reciente, el entrenamiento de resistencia isométrica (IRT) ha demostrado reducir significativamente la presión arterial sistólica y diastólica, tanto en mediciones en oficina como nocturnas. Esto puede compararse con los efectos de tomar un medicamento antihipertensivo.
<               br />
</p>


  <br />
              <ul className={style.aptitudes}>
                <li><strong>• Frecuencia:</strong>Tres veces por semana.</li>
                <li><strong>• Duración:</strong>Sesiones de 12 minutos, divididas en 4 series de 2 minutos de contracción, con 3 minutos de descanso entre cada serie.
                </li>
                <li><strong>• Intensidad: </strong>Apunta a un 30% de tu contracción máxima voluntaria (MVC).</li>
              </ul>
              
              <h3 className={style.formacionExperiencia}>¿Por Qué Funciona?</h3>

<p className={style.descripcion}>
El IRT puede mejorar la dilatación de los vasos sanguíneos y, con el tiempo, aumentar su diámetro. Además, es menos estresante físicamente que el ejercicio aeróbico, haciéndolo una excelente opción para personas con hipertensión que buscan alternativas efectivas y accesibles.<br />
  <br />
  </p>
  <h3 className={style.formacionExperiencia}>Conclusión</h3>

<p className={style.descripcion}>
El IRT El entrenamiento isométrico dosificado correctamente puede ser una excelente adición a tu rutina de salud. Es sencillo, económico y, lo más importante, ¡efectivo! Siempre consulta a un profesional antes de comenzar cualquier programa de ejercicio, especialmente si tienes condiciones preexistentes.
<br />
  <br />
  </p>
              <br className={style.aptitudes1}/>
              Aprovechemos estas herramientas y <strong>movámonos</strong> hacia una vida más saludable y equilibrada!
            
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
