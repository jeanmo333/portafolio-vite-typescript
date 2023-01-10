import { Component } from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="contenedor">
        <div id="sobremi" className="acerca-de fadeIn">
          <div className="perfil">
            <div className="foto"> </div>
          </div>

          <div
            
            className="info">
            <h2 className="titulo">Sobre mi</h2>
            <p className="resumen">
              Soy Moril Jean-francois, Estudiante en el último de ingeniería
              informática. Instituto Profesional de chile (IPCHILE). Me encanta
              la informática y todo que tiene que ver con el mundo tecnológico.
              pero mi especialidad es Desarrollo de aplicaciones web y móviles.
            </p>

            <p className="resumen">
              Soy una persona Proactiva y Autodidacta. Siempre con ganas de
              Aprender cosas nuevas y enfrentar problemas complejas hasta
              encontrar una solución. Soy muy curioso, me gusta preguntar e
              investigar sobre las tecnologías que quiero aprender. Puedo adaptar
              cualquier cambio de tecnología y me gusta trabajar en equipo.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
