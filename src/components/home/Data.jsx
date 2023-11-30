import React from 'react';
import NextIcon from '../../assets/nextjs-icon.svg'
import ReactIcon from '../../assets/react-icon.svg'
import SassIcon from '../../assets/sass-icon.svg'
import HtmlIcon from '../../assets/html-icon.svg'
import CssIcon from '../../assets/css3-icon.svg'
import LessIcon from '../../assets/less-icon.svg'
import JsIcon from '../../assets/javascript-icon.svg'
import TypeIcon from '../../assets/typescript-icon.svg'
import Tailcss from '../../assets/tailwind-icon.svg'

export default function Data({}) {


    return (
        <div className='home__data'>
                <div>
                    <h1 className='home__title'>Kevin Kuch
                    </h1>
                    <h3 className="home__subtitle">Développeur Front-end</h3>
                    <p className="home__description">
                        Finissant en Techniques d'Intégration Multimédia au Collège de Maisonneuve. 
                    </p>
                </div>
            <div className="home__skills">
                <ul className='home__logo__skills'>
                    <li><img src={ReactIcon} alt="React icon" /></li>
                    <li><img src={NextIcon} alt="Next.js icon" /></li>
                    <li><img src={SassIcon} alt="Sass icon" /></li>
                    <li><img src={LessIcon} alt="Less icon" /></li>
                    <li><img src={TypeIcon} alt="Typescript icon" /></li>
                    <li><img src={Tailcss} alt="Tailwindcss icon" /></li>
                </ul>
            </div>
        </div>
    );
}