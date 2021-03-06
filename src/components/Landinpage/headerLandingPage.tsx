import React from "react";
//import "./css/main.css";
const header:React.FC = () => (
    <header id="header">
        <div className="container">
        <div id="logo" className="pull-left">
            <a href="#hero"><img src="img/logo.png" alt="" title="" />
            </a>
        </div>
        <nav id="nav-menu-container">
            <ul className="nav-menu">
            <li className="menu-active"><a href="#hero">Inicio</a></li>
            <li><a href="#about">Quienes somos</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#testimonials">Desarrolladores</a></li>
            <li><a href="#contact">Contactanos</a></li>
            <li><a href="devolada">Ir De Volada</a></li>
            </ul>
        </nav>
        </div>
    </header>
)
  
export default header;