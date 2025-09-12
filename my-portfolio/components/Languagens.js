import style from "./languagens.module.css";
import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiC, SiCplusplus, SiDjango, SiNextdotjs } from "react-icons/si";

export function Languagens() {
  return (
    <section className={style.Languagens}>
      <h1 className={style.titulo}>Linguagens & Frameworks</h1>

      <ul className={style.listaLanguagens}>
        <li className={style.li}>
          <FaPython className={style.icon} />
          Python
        </li>
        <li className={style.li}>
          <FaJava className={style.icon} />
          Java
        </li>
        <li className={style.li}>
          <FaReact className={style.icon} />
          React
        </li>
        <li className={style.li}>
          <FaHtml5 className={style.icon} />
          HTML5
        </li>
        <li className={style.li}>
          <FaCss3Alt className={style.icon} />
          CSS3
        </li>
        <li className={style.li}>
          <FaJsSquare className={style.icon} />
          JavaScript
        </li>
        <li className={style.li}>
          <SiC className={style.icon} />C
        </li>
        <li className={style.li}>
          <SiCplusplus className={style.icon} />
          C++
        </li>
        <li className={style.li}>
          <SiDjango className={style.icon} />
          Django
        </li>
        <li className={style.li}>
          <SiNextdotjs className={style.icon} />
          Next.js
        </li>
      </ul>
    </section>
  );
}