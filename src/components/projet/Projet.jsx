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

                {/* List des projets */}
                {/* PROJET 1 */}
                
                
                {/* <div className="pro projet__content projet-1a">
                    <div className='projet__img'>
                        <a href="https://shawnoboy.github.io/Projet-Web-2023/" target="_blank" rel="noreferrer">
                            <img src={ProjetImg1a} alt="website" />
                        </a>
                    </div>
                    <div className='projet__text'>
                        <h3 className='projet__title'>Site Web du département TIM (en cours)</h3>
                        <p className='projet__description'>Dans le cadre du cours de projet web en équipe, nous devons faire une refonte du site web pour le département du TIM. Mon rôle dans ce projet est de créer la maquette pour la page de cours et la page d'activité. Ensuite, je m'occupe de la programmation des aspects front-end du site.</p>
                        <div className="projet__stack"> */}
                            {/* svg */}
                            {/* <ul className='home__logo__skills'>
                    
                    <li><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTYiIGhlaWdodD0iMTYiCnZpZXdCb3g9IjAgMCA0MCA0MCI+CjxwYXRoIGZpbGw9IiM0ZTdhYjUiIGQ9Ik0yMCwyOC45QzguNTk4LDI4LjksMCwyNS4xNywwLDIwczguNTk4LTksMjAtOXMyMCwzLjgzLDIwLDlTMzEuNDAyLDI4LjksMjAsMjguOXogTTIwLDEzLjkzMiBjLTkuNzI5LDAtMTcuMTI1LDMuMjY2LTE3LjEyNSw2LjEzMVMxMC4yNzEsMjYuMDY4LDIwLDI2LjA2OHMxNy4xMjUtMy4yNjYsMTcuMTI1LTYuMTMxUzI5LjcyOSwxMy45MzIsMjAsMTMuOTMyeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0ZTdhYjUiIGQ9Ik0xMi40MDIsMzhDMTIuNDAxLDM4LDEyLjQwMiwzOCwxMi40MDIsMzhjLTAuOTMxLDAtMS43ODEtMC4yMTYtMi41MjgtMC42NDIgYy0xLjIyLTAuNjk3LTIuMDk1LTEuOTI4LTIuNTMyLTMuNTYyYy0xLjE0Ni00LjI4MiwwLjcwMy0xMS40ODIsNC43MTMtMTguMzQ0QzE2Ljc2LDcuNDA3LDIzLjAwNywyLjAwMywyNy41OTksMi4wMDMgYzAuOTMsMCwxLjc4LDAuMjE2LDIuNTI3LDAuNjQyYzEuMjE4LDAuNjk1LDIuMDk0LDEuOTI1LDIuNTMxLDMuNTU4YzEuMTQ3LDQuMjgyLTAuNzAzLDExLjQ4My00LjcxNSwxOC4zNDUgQzIzLjI0MSwzMi41OTQsMTYuOTk1LDM4LDEyLjQwMiwzOHogTTI3LjU5OSw1LjAwM2MtMi44ODgsMC04LjQwOSw0LjE5My0xMi45NTQsMTEuOTYzYy00LjEyMyw3LjA1Ni01LjMzMiwxMi45MDktNC40MDQsMTYuMDU0IGMwLjI1MSwwLjg0OSwwLjYwNSwxLjQzOCwxLjEyMSwxLjczMmMyLjM2MSwxLjM0OCw4LjgwOS0yLjg1LDEzLjk5MS0xMS43MTdjNC4xMjUtNy4wNTcsNS40Ni0xMi43ODUsNC40MDYtMTYuMDU1IGMtMC4yNzEtMC44NDEtMC42MDQtMS40MzUtMS4xMTktMS43MjhDMjguMzQ3LDUuMDg0LDI4LjAwNiw1LjAwMywyNy41OTksNS4wMDN6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzRlN2FiNSIgZD0iTTI3LjU5OSwzNy45OTdDMjcuNTk5LDM3Ljk5NywyNy41OTksMzcuOTk3LDI3LjU5OSwzNy45OTdjLTQuNTk3LTAuMDAxLTEwLjg0My01LjQwNS0xNS41NDQtMTMuNDQ5IGMtNC4wMS02Ljg2Mi01Ljg1OS0xNC4wNjMtNC43MTMtMTguMzQ0QzcuNzc5LDQuNTcsOC42NTQsMy4zMzksOS44NzMsMi42NDNDMTAuNjIxLDIuMjE2LDExLjQ3MSwyLDEyLjQsMiBjNC41OTUsMCwxMC44NCw1LjQwNiwxNS41NDIsMTMuNDUyYzQuMDExLDYuODYxLDUuODYsMTQuMDYyLDQuNzE0LDE4LjM0NWMtMC40MzgsMS42MzMtMS4zMTMsMi44NjMtMi41MywzLjU1OCBDMjkuMzc5LDM3Ljc4MSwyOC41MjgsMzcuOTk3LDI3LjU5OSwzNy45OTd6IE0xMi40LDVjLTAuNDA3LDAtMC43NDcsMC4wODItMS4wNCwwLjI0OGMtMC41MTUsMC4yOTQtMC44NzQsMC44ODEtMS4xMiwxLjczMiBjLTAuOTI4LDMuMjA4LDAuMjgxLDguOTk5LDQuNDA0LDE2LjA1NWM0LjU0MSw3Ljc2OSwxMC4wNjMsMTEuOTYyLDEyLjk1NCwxMS45NjJsMCwwYzAuNDA4LDAsMC43NDgtMC4wODIsMS4wNDEtMC4yNDkgYzAuNTE0LTAuMjkyLDAuODgzLTAuODc2LDEuMTE4LTEuNzI4YzAuODY3LTMuMTQ2LTAuMjgxLTktNC40MDUtMTYuMDU1QzIwLjgxMSw5LjE5NCwxNS4yOSw1LDEyLjQsNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjOGJiN2YwIiBkPSJNMjMuNSwyMGMwLDEuOTM1LTEuNTY1LDMuNS0zLjUsMy41cy0zLjUtMS41NjUtMy41LTMuNXMxLjU2NS0zLjUsMy41LTMuNVMyMy41LDE4LjA2NSwyMy41LDIweiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0ZTdhYjUiIGQ9Ik0yMCwyNGMtMi4yMDYsMC00LTEuNzk0LTQtNHMxLjc5NC00LDQtNHM0LDEuNzk0LDQsNFMyMi4yMDYsMjQsMjAsMjR6IE0yMCwxN2MtMS42NTQsMC0zLDEuMzQ2LTMsMyBzMS4zNDYsMywzLDNzMy0xLjM0NiwzLTNTMjEuNjU0LDE3LDIwLDE3eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM4YmI3ZjAiIGQ9Ik0yMCwyOC4wNjhDOS4zNDYsMjguMDY4LDEsMjQuNTI0LDEsMjBzOC4zNDYtOC4wNjgsMTktOC4wNjhTMzksMTUuNDc2LDM5LDIwIFMzMC42NTQsMjguMDY4LDIwLDI4LjA2OHogTTIwLDEyLjkzMmMtOS43NTcsMC0xOCwzLjIzNy0xOCw3LjA2OHM4LjI0Myw3LjA2OCwxOCw3LjA2OFMzOCwyMy44MzIsMzgsMjBTMjkuNzU3LDEyLjkzMiwyMCwxMi45MzJ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzhiYjdmMCIgZD0iTTEyLjQwMiwzN0MxMi40MDEsMzcsMTIuNDAyLDM3LDEyLjQwMiwzN2MtMC43NTUsMC0xLjQzOC0wLjE3Mi0yLjAzMy0wLjUxMSBjLTAuOTk2LTAuNTY5LTEuNjg5LTEuNTYyLTIuMDYyLTIuOTUyYy0xLjA4MS00LjAzNywwLjcyOS0xMC45MzgsNC42MS0xNy41ODFDMTcuMzc5LDguMzMsMjMuNDE2LDMuMDAzLDI3LjU5OSwzLjAwMyBjMC43NTQsMCwxLjQzOCwwLjE3MiwyLjAzMiwwLjUxMWMwLjk5NSwwLjU2OCwxLjY4OCwxLjU2LDIuMDYxLDIuOTQ4YzEuMDgxLDQuMDM3LTAuNzI5LDEwLjkzOC00LjYxMiwxNy41ODIgQzIyLjYyMSwzMS42NzIsMTYuNTg2LDM3LDEyLjQwMiwzN3ogTTI3LjU5OSw0LjAwM2MtMy43ODQsMC05LjU5NSw1LjIzOS0xMy44MTcsMTIuNDU4Yy0zLjY5NSw2LjMyNS01LjUwNywxMy4wODMtNC41MDgsMTYuODE4IGMwLjMwMSwxLjEyMywwLjgzNiwxLjkxLDEuNTkyLDIuMzQyQzExLjMwNywzNS44NzIsMTEuODIzLDM2LDEyLjQwMSwzNmMzLjc4NSwwLDkuNTk1LTUuMjQsMTMuODE0LTEyLjQ2MSBjMy42OTctNi4zMjYsNS41MS0xMy4wODUsNC41MDktMTYuODE4Yy0wLjMtMS4xMjEtMC44MzUtMS45MDgtMS41OS0yLjMzOEMyOC42OTMsNC4xMzEsMjguMTc3LDQuMDAzLDI3LjU5OSw0LjAwM3oiPjwvcGF0aD48Zz48cGF0aCBmaWxsPSIjOGJiN2YwIiBkPSJNMjcuNTk5LDM2Ljk5N0MyNy41OTksMzYuOTk3LDI3LjU5OSwzNi45OTcsMjcuNTk5LDM2Ljk5N2MtNC4xODctMC4wMDEtMTAuMjI0LTUuMzI3LTE0LjY4MS0xMi45NTMgQzkuMDM2LDE3LjQwMSw3LjIyNywxMC41LDguMzA4LDYuNDYzYzAuMzcyLTEuMzksMS4wNjUtMi4zODMsMi4wNjItMi45NTJDMTAuOTY0LDMuMTcyLDExLjY0NywzLDEyLjQsMyBjNC4xODUsMCwxMC4yMjEsNS4zMjgsMTQuNjc5LDEyLjk1NmMzLjg4Myw2LjY0Miw1LjY5MiwxMy41NDMsNC42MSwxNy41ODJjLTAuMzcxLDEuMzg5LTEuMDY0LDIuMzgxLTIuMDU5LDIuOTQ4IEMyOS4wMzYsMzYuODI1LDI4LjM1MywzNi45OTcsMjcuNTk5LDM2Ljk5N3ogTTEyLjQsNGMtMC41NzcsMC0xLjA5NCwwLjEyOC0xLjUzNSwwLjM3OWMtMC43NTYsMC40MzItMS4yOTEsMS4yMTktMS41OTIsMi4zNDIgYy0wLjk5OSwzLjczNCwwLjgxMywxMC40OTMsNC41MDgsMTYuODE4QzE4LDMwLjc1NywyMy44MTIsMzUuOTk2LDI3LjU5OSwzNS45OTdsMCwwYzAuNTc4LDAsMS4wOTUtMC4xMjgsMS41MzYtMC4zOCBjMC43NTQtMC40MywxLjI4OS0xLjIxNywxLjU4OS0yLjMzOGMxLTMuNzM1LTAuODEyLTEwLjQ5NC00LjUwOC0xNi44MThDMjEuOTk2LDkuMjQxLDE2LjE4Nyw0LDEyLjQsNHoiPjwvcGF0aD48L2c+Cjwvc3ZnPg==" title="React Js"/></li>
                    <li><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNmMDYyOTIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTI0LjA0Miw0LjAzMkMzNS4wNjUsNC4wMzIsNDQsMTIuOTY3LDQ0LDIzLjk5CWMwLDExLjAyMi04LjkzNSwxOS45NTgtMTkuOTU4LDE5Ljk1OGMtMTEuMDIyLDAtMTkuOTU4LTguOTM1LTE5Ljk1OC0xOS45NThDNC4wODUsMTIuOTY3LDEzLjAyLDQuMDMyLDI0LjA0Miw0LjAzMkwyNC4wNDIsNC4wMzJ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzYuNTYxLDEyLjU3NGMtMC45MDQtMy41NDUtNi43ODEtNC43MS0xMi4zNDMtMi43MzRjLTMuMzEsMS4xNzYtNi44OTQsMy4wMjItOS40NzEsNS40MzIgYy0zLjA2NCwyLjg2Ni0zLjU1Miw1LjM2LTMuMzUxLDYuNDAyYzAuNzEsMy42NzcsNS43NDksNi4wODEsNy44Miw3Ljg2NXYwLjAxMWMtMC42MTEsMC4zMDEtNS4wODEsMi41NjMtNi4xMjcsNC44NzYgYy0xLjEwNCwyLjQ0LDAuMTc2LDQuMTkxLDEuMDIzLDQuNDI3YzIuNjI1LDAuNzMsNS4zMTgtMC41ODMsNi43NjYtMi43NDJjMS4zOTctMi4wODQsMS4yODEtNC43NzQsMC42NzQtNi4xMTMgYzAuODM3LTAuMjIxLDEuODE0LTAuMzIsMy4wNTQtMC4xNzVjMy41MDEsMC40MDksNC4xODgsMi41OTUsNC4wNTYsMy41MWMtMC4xMzEsMC45MTUtMC44NjYsMS40MTgtMS4xMTEsMS41NyBjLTAuMjQ2LDAuMTUyLTAuMzIsMC4yMDUtMC4zLDAuMzE3YzAuMDMsMC4xNjQsMC4xNDMsMC4xNTgsMC4zNTMsMC4xMjNjMC4yODgtMC4wNDksMS44MzgtMC43NDQsMS45MDUtMi40MzMgYzAuMDg0LTIuMTQ0LTEuOTctNC41NDItNS42MDgtNC40OGMtMS40OTgsMC4wMjYtMi40NCwwLjE2OC0zLjEyMSwwLjQyMmMtMC4wNS0wLjA1Ny0wLjEwMi0wLjExNC0wLjE1NC0wLjE3MSBjLTIuMjQ5LTIuNC02LjQwNy00LjA5Ny02LjIzMS03LjMyM2MwLjA2NC0xLjE3MywwLjQ3Mi00LjI2MSw3Ljk4OS04LjAwN2M2LjE1OC0zLjA2OSwxMS4wODgtMi4yMjQsMTEuOTQtMC4zNTMgYzEuMjE3LDIuNjc0LTIuNjM1LDcuNjQzLTkuMDMsOC4zNmMtMi40MzcsMC4yNzMtMy43Mi0wLjY3MS00LjAzOS0xLjAyM2MtMC4zMzYtMC4zNy0wLjM4Ni0wLjM4Ny0wLjUxMS0wLjMxNyBjLTAuMjA0LDAuMTEzLTAuMDc1LDAuNDQsMCwwLjYzNWMwLjE5MSwwLjQ5NywwLjk3NSwxLjM3OCwyLjMxLDEuODE3YzEuMTc1LDAuMzg2LDQuMDM2LDAuNTk3LDcuNDk2LTAuNzQxIEMzNC40MjQsMjAuMjI5LDM3LjQ1LDE2LjA1OSwzNi41NjEsMTIuNTc0eiBNMjAuMDc2LDMwLjYzOGMwLjI5LDEuMDc0LDAuMjU4LDIuMDc2LTAuMDQxLDIuOTgzYy0wLjAzMywwLjEwMS0wLjA3LDAuMi0wLjExLDAuMjk5IGMtMC4wNCwwLjA5OC0wLjA4MywwLjE5Ni0wLjEyOSwwLjI5MmMtMC4yMzEsMC40OC0wLjU0MiwwLjkyOS0wLjkyMiwxLjM0NGMtMS4xNiwxLjI2NS0yLjc4LDEuNzQzLTMuNDc0LDEuMzQgYy0wLjc1LTAuNDM1LTAuMzc0LTIuMjE4LDAuOTctMy42NGMxLjQ0Ni0xLjUyOSwzLjUyNy0yLjUxMiwzLjUyNy0yLjUxMmwtMC4wMDMtMC4wMDZDMTkuOTU0LDMwLjcwNSwyMC4wMTUsMzAuNjcyLDIwLjA3NiwzMC42Mzh6Ij48L3BhdGg+Cjwvc3ZnPg==" title="Sass/Scss"/></li>
                            </ul> */}
                        {/* </div>
                        <div className="projet__link">
                            <a href="https://github.com/ShawnOboy/Projet-Web-2023" target="_blank" rel="noreferrer" >
                                Github
                                <i className="uil uil-github"></i>
                            </a>
                            <a href="https://shawnoboy.github.io/Projet-Web-2023/" target="_blank" rel="noreferrer">
                                Demo
                                <i className="uil uil-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                </div> */}


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
                            <a href="https://exploration-animation-jqfr.vercel.app/" target="_blank" rel="noreferrer">
                                Demo
                                <i className="uil uil-external-link-alt"></i>
                            </a>
                        </div>
                    </div>

                    <div className='projet__img'>
                        <a href="https://exploration-animation-jqfr.vercel.app/" target="_blank" rel="noreferrer">
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