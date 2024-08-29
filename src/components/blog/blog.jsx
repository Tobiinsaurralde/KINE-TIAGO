import React from "react";
import style from "./blog.module.css";
import linearoja from "../../assets/linearoja.png";
import image1 from "../../assets/image1.jpg"; 
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return `${words.slice(0, wordLimit).join(" ")}...`;
};

function Blog() {
  return (
    <section className={style.about} id="about">
      <div className={style.containerAbout}>
        <div className={style.profileSection}>
          <div className={style.textSection}>
            <img src={linearoja} className={style.linearoja} alt="Línea roja" />
            <h2 className={style.nombre}>ARTÍCULOS DESTACADOS</h2>
            
            <div className={style.articlesContainer}>
              <div className={style.article}>
                <img src={image1} alt="Descripción de la imagen 1" className={style.articleImage}/>
                <h3 className={style.articleTitle}>Entrenamiento Isométrico</h3>
                <p className={style.articleDescription}>
                  {truncateText("¿Sabías que el ejercicio isométrico puede ser una herramienta poderosa para manejar la hipertensión? ¡Es cierto! A través de contracciones musculares sostenidas, sin cambiar la longitud del músculo, podemos lograr grandes beneficios para nuestra salud cardiovascular. Pero, como con todo en la vida, la clave está en la dosificación adecuada.", 22)}
                </p>
                <a href="/entrenamiento-isometrico" className={style.readMoreButton}>Seguir leyendo</a>
              </div>

              <div className={style.article}>
                <img src={image2} alt="Descripción de la imagen 2" className={style.articleImage}/>
                <h3 className={style.articleTitle}>Movilidad Articular</h3>
                <p className={style.articleDescription}>
                  {truncateText("La actividad física nos servirá ademas de los efectos de mejora a nivel fisiológico, también para poder encontrar una distracción, compañía, a lograr cambios de", 22)}
                </p>
                <a href="entrenamiento-isometrico" className={style.readMoreButton}>Seguir leyendo</a>
              </div>

              <div className={style.article}>
                <img src={image3} alt="Descripción de la imagen 3" className={style.articleImage}/>
                <h3 className={style.articleTitle}>Lesión Muscular</h3>
                <p className={style.articleDescription}>
                  {truncateText("Las necesidades de agua van a depender de lo que perdamos en la orina, la defecación, la respiración y la evapotranspiracion. Esta perdida podra ser", 22)}
                </p>
                <a href="entrenamiento-isometrico" className={style.readMoreButton}>Seguir leyendo</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
