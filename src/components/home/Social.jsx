import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Social() {


    return (
        <div className="home__social">
            <Fade left big>
                <a href="https://www.linkedin.com/in/kevin-kuch/" className="home__social-icon" target="_blank" rel="noreferrer">
                    <i className="uil uil-linkedin"></i>
                </a>
                <a href="https://github.com/KevinKuch" className="home__social-icon" target="_blank" rel="noreferrer">
                    <i className="uil uil-github"></i>
                </a>
            </Fade>
        </div>
    );
}