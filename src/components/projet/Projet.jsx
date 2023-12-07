import './Projet.css';
import ProjetImg1 from '../../assets/projet_1.jpg'
import ProjetImg2 from '../../assets/projet_2.jpg'
import ProjetImg3 from '../../assets/projet_3.jpg'
import ProjetImg1a from '../../assets/projet_1a.png'
import ProjetImg1b from '../../assets/projet_1b.jpg'
import NextIcon from '../../assets/nextjs-icon.svg'
import ReactIcon from '../../assets/react-icon.svg'
import SassIcon from '../../assets/sass-icon.svg'
import HtmlIcon from '../../assets/html-icon.svg'
import CssIcon from '../../assets/css3-icon.svg'
import LessIcon from '../../assets/less-icon.svg'
import JsIcon from '../../assets/javascript-icon.svg'
import TypeIcon from '../../assets/typescript-icon.svg'
import Tailcss from '../../assets/tailwind-icon.svg'

import { RevealY } from '../RevealY';
import { RevealX } from '../RevealX';



export default function Projet({}) {


    return (
        <section className='Projet section' id='projet'>
            <RevealY>
                <h2 className="section__title">Mes projets</h2>
            </RevealY>
            <RevealY>
                <span className='section__subtitle'>Mes projets web tout au long de mon parcours scolaire</span>
            </RevealY>

            <div className="projet__container container grid">

                {/* ****************Lists de projet********************************************************* */}

                <div className="pro projet__content projet-1">
                    <div className='projet__text'>
                        <h3 className='projet__title'>Page web des idols coréen</h3>
                        <p className='projet__description'>Ceci est une page web dédiée aux idoles coréennes qui font de la musique K-pop. En développant cette page web, cela me permet d'apprendre et d'explorer les technologies TypeScript et Tailwind CSS.</p>
                        <div className="projet__stack">
                            {/* svg */}
                        <ul className='home__logo__skills'>
                            <li><img src={NextIcon} alt="Next icon" /></li>
                            <li><img src={Tailcss} alt="Twilwindcss icon" /></li>
                            <li><img src={TypeIcon} alt="Typescript icon" /></li>
                         </ul>
                        </div>
                        <div className="projet__link">
                            <a href="https://github.com/KevinKuch/Website-Idol" target="_blank" rel="noreferrer" >
                                Github
                                <i className="uil uil-github"></i>
                            </a>
                            <a href="https://website-idol.vercel.app/" target="_blank" rel="noreferrer">
                                Demo
                                <i className="uil uil-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div className='projet__img'>
                        <a href="https://website-idol.vercel.app/" target="_blank" rel="noreferrer">
                            <img src={ProjetImg1a} alt="Site web des kpops" />
                        </a>
                    </div>
                </div>

                {/* ************************************************************************************************ */}
                <div className="pro projet__content projet-1b">
                    <div className='projet__text'>
                        <h3 className='projet__title'>Site d'exploration des animations</h3>
                        <p className='projet__description'>Ceci est un site Web pour une entreprise innovante et imaginaire, conçu pour explorer les bibliothèques <strong>GSAP</strong> et <strong>Framer Motion</strong> afin de créer des animations.</p>
                        <div className="projet__stack">
                            {/* svg */}
                        <ul className='home__logo__skills'>
                            <li><img src={ReactIcon} alt="React icon" /></li>
                            <li><img src={NextIcon} alt="Next.js icon" /></li>
                            <li><img src={SassIcon} alt="Sass icon" /></li>
                         </ul>
                        </div>
                        <div className="projet__link">
                            <a href="https://github.com/KevinKuch/exploration-animation" target="_blank" rel="noreferrer" >
                                Github
                                <i className="uil uil-github"></i>
                            </a>
                            <a href="https://exploration-animation.vercel.app/" target="_blank" rel="noreferrer">
                                Demo
                                <i className="uil uil-external-link-alt"></i>
                            </a>
                        </div>
                    </div>

                    <div className='projet__img'>
                        <a href="https://exploration-animation.vercel.app/" target="_blank" rel="noreferrer">
                            <img src={ProjetImg1b} alt="Site web Évènements" />
                        </a>
                    </div>
                </div>
                

                {/* ******************************************************************************************* */}
                <div className="pro projet__content projet-1">
                    <div className='projet__text'>
                        <h3 className='projet__title'>Site d'astronomie</h3>
                        <p className='projet__description'>Refonte site web UI/UX dans le cadre du cours de Design & Interactivité. Nouveau design, contenu optimisé et fonctionnalités interactives ajoutées pour améliorer l'expérience utilisateur.</p>
                        <div className="projet__stack">
                            {/* svg */}
                        <ul className='home__logo__skills'>
                            <li><img src={HtmlIcon} alt="" /></li>
                            <li><img src={LessIcon} alt="" /></li>
                            <li><img src={JsIcon} alt="" /></li>
                         </ul>
                        </div>
                        <div className="projet__link">
                            <a href="https://github.com/KevinKuch/TP_site_astronomie" target="_blank" rel="noreferrer" >
                                Github
                                <i className="uil uil-github"></i>
                            </a>
                            <a href="https://kevinkuch.github.io/TP_site_astronomie/" target="_blank" rel="noreferrer">
                                Demo
                                <i className="uil uil-external-link-alt"></i>
                            </a>
                        </div>
                    </div>

                    <div className='projet__img'>
                        <a href="https://kevinkuch.github.io/TP_site_astronomie/" target="_blank" rel="noreferrer">
                            <img src={ProjetImg1} alt="website" />
                        </a>
                    </div>
                </div>
                
                {/* ********************************************************  */}
                <div className="pro projet__content projet-2">
                    <div className='projet__img'>
                        <a href="https://kevinkuch.github.io/ToDoApp/" target="_blank" rel="noreferrer">
                            <img src={ProjetImg2} alt="To do app" />
                        </a>
                    </div>
                    <div className='projet__text'>
                        <h3 className='projet__title'>To do app</h3>
                        <p className='projet__description'>Un todo app réalisé avec React js et Sass. Ceci me permet d'apprendre l'utilisation de la technologie React et ses hooks comme le useState et useEffect.</p>
                        <div className="projet__stack">
                        <ul className='home__logo__skills'>
                            <li><img src={ReactIcon} alt="React icon" /></li>
                            <li><img src={SassIcon} alt="Sass icon" /></li>
                         </ul>
                        </div>
                        <div className="projet__link">
                            <a href="https://github.com/KevinKuch/ToDoApp" target="_blank" rel="noreferrer" >
                                Github
                                <i className="uil uil-github"></i>
                            </a>
                            <a href="https://kevinkuch.github.io/ToDoApp/" target="_blank" rel="noreferrer">
                                Demo
                                <i className="uil uil-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                    
                </div>

                {/* ********************************************************  */}
                <div className="pro projet__content projet-4">
                    
                    <div className='projet__text'>
                        <h3 className='projet__title'>Jeu en Javascript</h3>
                        <p className='projet__description'>Un jeu fait avec Javascript durant ma première session. Ceci est dans le but d'apprendre la programmation en commançant avec JS. On a utilisé le canvas pour réaliser le jeu.</p>
                        <div className="projet__stack">
                        <ul className='home__logo__skills'>
                        <li><img src={JsIcon} alt="Javascript icon" /></li>
                         </ul>
                        </div>
                        <div className="projet__link">
                            <a href="https://github.com/KevinKuch/1J1_first_game" target="_blank" rel="noreferrer" >
                                Github
                                <i className="uil uil-github"></i>
                            </a>
                            <a href="https://kevinkuch.github.io/1J1_first_game/" target="_blank" rel="noreferrer">
                                Demo
                                <i className="uil uil-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div className='projet__img'>
                        <a href="https://kevinkuch.github.io/1J1_first_game/" target="_blank" rel="noreferrer">
                            <img src={ProjetImg3} alt="Demon escape" />
                        </a>
                    </div>
                </div>

               
            </div>
        </section>
    );
}
