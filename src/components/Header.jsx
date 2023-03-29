import React, { useState} from "react";
import "./Header.css";

export default function Header() {
    const [toggle, setToggle] = useState(false);


  return (
    <header className="Header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Kuch</a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
                <li className="nav__item">
                    <a href="#home" className="nav__link active-link">
                        <i className="uil uil-home nav__icon"></i> Home
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#about" className="nav__link">
                        <i className="uil uil-user nav__icon"></i> À propos
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#projet" className="nav__link">
                        <i className="uil uil-file-alt nav__icon"></i> Projets
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#experiences" className="nav__link">
                        <i className="uil uil-briefcase-alt nav__icon"></i> Experiences
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#experiences" className="nav__link">
                    <i className="uil uil-graduation-cap nav__icon"></i> Education
                    </a>
                </li>
            </ul>
            
            <i className="uil uil-times nav__close" onClick={() => setToggle (!toggle)}></i>
        </div>
        <div className="nav__toggle" onClick={() => setToggle (!toggle)}>
            <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}