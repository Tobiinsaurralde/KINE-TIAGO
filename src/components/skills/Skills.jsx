import React from "react";
import style from "./skills.module.css";
import {
  SiExpress,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

import { FaGitAlt, FaNodeJs, FaReact, FaServer, FaTools } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";

//import cssLogo from "../../assets/tecnologias/css.png";
//import figmaLogo from "../../assets/tecnologias/figma.png";
//import htmlLogo from "../../assets/tecnologias/html.png";
//import sequelizeLogo from "../../assets/tecnologias/sequelize.png";
//import postgreLogo from "../../assets/tecnologias/postgre.png";
//import ilustratorLogo from "../../assets/tecnologias/ilustrator.png";
//import visualLogo from "../../assets/tecnologias/visual.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-scroll";
//import skills from "../../assets/device-desktop.svg";
function Skills() {
  return (
    <section className={style.skills} id="skills">
      <div className={style.father}>
        <div className={style.subtitle}>
          <img src={skills} alt="skillsIcon" className={style.iconGeneral} />
          <h2>Habilidades</h2>
        </div>

        <div className={style.contenedor}>
          <div className={style.containerSkills}>
            <div className={style.sectionContainer}>
              <span>Front End</span>
              <div className={style.frontEnd}>
                <div className={style.skill}>
                  <img src={htmlLogo} alt="htmllogo" />
                  <p>Html</p>
                </div>
                <div className={style.skill}>
                  <img src={cssLogo} alt="cssLogo" />
                  <p>Css</p>
                </div>
                <div className={style.skill}>
                  <SiJavascript className={style.js} />
                  <p>Javascript</p>
                </div>
                <div className={style.skill}>
                  <SiTailwindcss className={style.tailwind} />
                  <p>Tailwind</p>
                </div>
                <div className={style.skill}>
                  <FaReact className={style.react} />
                  <p>React</p>
                </div>
                <div className={style.skill}>
                  <SiRedux className={style.redux} />
                  <p>Redux</p>
                </div>
                <div className={style.skill}>
                  <img src={figmaLogo} alt="figmaLogo" />
                  <p>Figma</p>
                </div>
              </div>
              <MdOutlineComputer className={style.tools} />
            </div>

            <div className={style.sectionContainer}>
              <span>Back End</span>
              <div className={style.backEnd}>
                <div className={style.skill}>
                  <FaNodeJs className={style.node} />
                  <p>Node</p>
                </div>
                <div className={style.skill}>
                  <SiExpress className={style.express} />
                  <p>Express</p>
                </div>
                <div className={style.skill}>
                  <img src={sequelizeLogo} alt="sequelizeLogo" />
                  <p>Sequelize</p>
                </div>
                <div className={style.skill}>
                  <img src={postgreLogo} alt="postgreLogo" />
                  <p>PostgreSQL</p>
                </div>
              </div>
              <FaServer className={style.tools} />
            </div>
            <div className={style.sectionContainer}>
              <span>Tools</span>
              <div className={style.herramientas}>
                <div className={style.skill}>
                  <img src={visualLogo} alt="visualLogo" />
                  <p>VS Code</p>
                </div>
                <div className={style.skill}>
                  <img src={ilustratorLogo} alt="ilustratorLogo" />
                  <p>Illustrator</p>
                </div>

                <div className={style.skill}>
                  <FaGitAlt className={style.git} />
                  <p>Git</p>
                </div>
              </div>
              <FaTools className={style.tools} />
            </div>
          </div>
        </div>
      </div>
      <Link
        to="contact"
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

export default Skills;