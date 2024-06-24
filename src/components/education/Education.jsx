import React from "react";
import style from "./education.module.css";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-scroll";
import school from "../../assets/school.svg";
//import study from "../../assets/study.png";
import { RxDoubleArrowRight } from "react-icons/rx";
function Education() {
  return (
    <section className={style.education} id="education">
      <div className={style.father}>
        <div className={style.subtitle}>
          <img src={school} alt="schoolicon" className={style.iconGeneral} />
          <h2>Educación </h2>
        </div>
        <div className={style.contenedor}>
          <div className={style.study}>
            <div className={style.containerTitle}>
              <h3>Licenciado en Kinesiología y Fisiatría</h3>
              <h4>Universidad Nacional del Nordeste</h4>

              <p>2019 - 2023</p>
            </div>
            <div className={style.description}>
              <p>
              Tengo una sólida formación como Licenciado en Kinesiología y Fisiatría,
               he tenido la oportunidad de ganar experiencia práctica a través de diversas 
               actividades y prácticas pre-profesionales durante mis años de estudio.
              Estas experiencias me han permitido aplicar mis conocimientos teóricos en situaciones reales,
               desarrollando habilidades clave y afianzando mi vocación.
              </p>
              <div className={style.leanMore}>
                <RxDoubleArrowRight className={style.arrowdown} />
              </div>
            </div>
          </div>

          <div className={style.study}>
            <div className={style.containerTitle}>
              <h3>Preparador Físico</h3>
              <h4>Escuela de Formación en Fitness (E.F.F.I.)</h4>
              <p>2022 - 2023</p>
            </div>
            <div className={style.description}>
              <p>
                Aporto conocimientos especializados en preparación física y entrenamiento deportivo.
              </p>
              <div className={style.leanMore}>
                <RxDoubleArrowRight className={style.arrowdown} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Link
        to="portfolio"
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        exact="true"
        className={style.linkArrow}
      >
        <RiArrowDownSLine className={style.Arrow} />
      </Link> */}
    </section>
  );
}

export default Education;