import './Projet.css';
import AboutImg from '../../assets/about.jpg';
import ProjetImg1 from '../../assets/projet_1.jpg'
import ProjetImg2 from '../../assets/projet_2.jpg'
import ProjetImg3 from '../../assets/projet_3.jpg'


export default function Projet({}) {


    return (
        <section className='Projet section' id='projet'>
            <h2 className="section__title">Mes projets</h2>
            <span className='section__subtitle'>Mes projets web tout au long de mon parcours scolaire</span>

            <div className="projet__container container grid">

                {/* List des projets */}
                <div className="pro projet__content projet-1">
                    <div className='projet__img'>
                        <a href="https://kevinkuch.github.io/TP_site_astronomie/" target="_blank" rel="noreferrer">
                            <img src={ProjetImg1} alt="website" />
                        </a>
                    </div>
                    <div className='projet__text'>
                        <h3 className='projet__title'>Site d'astronomie</h3>
                        <p className='projet__description'>Refonte site web UI/UX dans le cadre du cours de Design & Interactivité. Nouveau design, contenu optimisé et fonctionnalités interactives ajoutées pour améliorer l'expérience utilisateur.</p>
                        <div className="projet__stack">
                            {/* svg */}
                        <ul className='home__logo__skills'>
                    
                            <li><img  alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNFNjUxMDAiIGQ9Ik00MSw1SDdsMywzNGwxNCw0bDE0LTRMNDEsNUw0MSw1eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRjZEMDAiIGQ9Ik0yNCA4TDI0IDM5LjkgMzUuMiAzNi43IDM3LjcgOHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjQsMjV2LTRoOC42bC0wLjcsMTEuNUwyNCwzNS4xdi00LjJsNC4xLTEuNGwwLjMtNC41SDI0eiBNMzIuOSwxN2wwLjMtNEgyNHY0SDMyLjl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTI0LDMwLjl2NC4ybC03LjktMi42TDE1LjcsMjdoNGwwLjIsMi41TDI0LDMwLjl6IE0xOS4xLDE3SDI0di00aC05LjFsMC43LDEySDI0di00aC00LjZMMTkuMSwxN3oiPjwvcGF0aD4KPC9zdmc+" title="HTML5"/></li>
                            <li><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzIiIGhlaWdodD0iMzIiCnZpZXdCb3g9IjAgMCAzMiAzMiI+CjxwYXRoIGQ9Ik0gMy4yNTU4NTk0IDkuMTUwMzkwNiBDIDEuODM1ODU5NCA5LjE1MDM5MDYgMS4yMDUwNzgxIDkuNzAwMTU2MiAxLjIwNTA3ODEgMTEuNDEwMTU2IEMgMS4yMDUwNzgxIDEyLjU0MDE1NiAxLjM2NTIzNDQgMTMuMTcwNjI1IDEuMzY1MjM0NCAxNC4xNDA2MjUgQyAxLjM2NTIzNDQgMTQuNjkwNjI1IDEuMDI2OTUzMSAxNS4yNzAzMTMgMC4wMDE5NTMxMjUgMTUuMzIwMzEyIEwgMC4wMDE5NTMxMjUgMTYuNjg1NTQ3IEMgMS4wMjY5NTMxIDE2LjcxMDU0NyAxLjM2NTIzNDQgMTcuMjkxNzk3IDEuMzY1MjM0NCAxNy44NDE3OTcgQyAxLjM2NTIzNDQgMTguODExNzk3IDEuMjA1MDc4MSAxOS4zOTE0ODQgMS4yMDUwNzgxIDIwLjUyMTQ4NCBDIDEuMjA1MDc4MSAyMi4yMzE0ODQgMS44MzU0Njg3IDIyLjc4MTI1IDMuMjMwNDY4OCAyMi43ODEyNSBMIDQuMjU1ODU5NCAyMi43ODEyNSBMIDQuMjU1ODU5NCAyMS41NzAzMTIgTCAzLjk0MTQwNjIgMjEuNTcwMzEyIEMgMy4yODY0MDYyIDIxLjU3MDMxMiAzLjA3NjE3MTkgMjEuMzA2NDA2IDMuMDc2MTcxOSAyMC40NDE0MDYgQyAzLjA3NjE3MTkgMTkuNTc2NDA2IDMuMTU2MjUgMTguODM1MjM0IDMuMTU2MjUgMTcuODY1MjM0IEMgMy4xNTYyNSAxNi42NTUyMzQgMi43NjE1NjI1IDE2LjE4Njk1MyAxLjk3NjU2MjUgMTYuMDAxOTUzIEwgMS45NzY1NjI1IDE1LjkyMTg3NSBDIDIuNzY2NTYyNSAxNS43MzY4NzUgMy4xNTYyNSAxNS4yNjY2NDEgMy4xNTYyNSAxNC4wNTY2NDEgQyAzLjE1NjI1IDEzLjExMTY0MSAzLjA3NjE3MTkgMTIuMzQ1NDY5IDMuMDc2MTcxOSAxMS40ODA0NjkgQyAzLjA3NjE3MTkgMTAuNjE1NDY5IDMuMjYxNDA2MiAxMC4zNzY5NTMgMy45NDE0MDYyIDEwLjM3Njk1MyBMIDQuNjQ2NDg0NCAxMC4zNzY5NTMgTCA0LjY0NjQ4NDQgMTcuOTE3OTY5IEMgNC42NDY0ODQ0IDE5LjUyMjk2OSA1LjE5NTc4MTMgMjAuNTcyMjY2IDYuODAwNzgxMiAyMC41NzIyNjYgQyA3LjMwMDc4MTIgMjAuNTcyMjY2IDcuNjk1NDY4NyAyMC40OTE3MTkgNy45ODA0Njg4IDIwLjM4NjcxOSBMIDcuNzE2Nzk2OSAxOC42Nzc3MzQgQyA3LjU2MTc5NjkgMTguNzE4NzM0IDcuNDg2MjUgMTguNzE4NzUgNy40MDYyNSAxOC43MTg3NSBDIDcuMjIxMjUgMTguNzE4NzUgNi45ODYzMjgxIDE4LjU1NzUgNi45ODYzMjgxIDE4LjA2MjUgTCA2Ljk4NjMyODEgOS4xNTAzOTA2IEwgMy4yNTU4NTk0IDkuMTUwMzkwNiB6IE0gMjcuNzQ0MTQxIDkuMTU2MjUgTCAyNy43NDQxNDEgMTAuMzY3MTg4IEwgMjguMDYwNTQ3IDEwLjM2NzE4OCBDIDI4Ljc3MDU0NyAxMC4zNjcxODggMjguOTI1NzgxIDEwLjYwMjY1NiAyOC45MjU3ODEgMTEuNDcyNjU2IEMgMjguOTI1NzgxIDEyLjI4NzY1NiAyOC44NDU3MDMgMTMuMTAxODc1IDI4Ljg0NTcwMyAxNC4wNDY4NzUgQyAyOC44NDU3MDMgMTUuMjU2ODc1IDI5LjI0MDM5MSAxNS43MjcxMDkgMzAuMDI1MzkxIDE1LjkxMjEwOSBMIDMwLjAyNTM5MSAxNS45OTIxODggQyAyOS4yMzUzOTEgMTYuMTc3MTg3IDI4Ljg0NTcwMyAxNi42NDc0MjIgMjguODQ1NzAzIDE3Ljg1NzQyMiBDIDI4Ljg0NTcwMyAxOC44MDI0MjIgMjguOTI1NzgxIDE5LjU2NjY0MSAyOC45MjU3ODEgMjAuNDMxNjQxIEMgMjguOTI1NzgxIDIxLjMyNjY0MSAyOC43NDA1NDcgMjEuNTYyNSAyOC4wNjA1NDcgMjEuNTYyNSBMIDI4LjA2MDU0NyAyMS41ODc4OTEgTCAyNy43NDQxNDEgMjEuNTg3ODkxIEwgMjcuNzQ0MTQxIDIyLjg0NzY1NiBMIDI4Ljc2OTUzMSAyMi44NDc2NTYgQyAzMC4xNTk1MzEgMjIuODQ3NjU2IDMwLjc5NDkyMiAyMi4yOTc4OTEgMzAuNzk0OTIyIDIwLjU4Nzg5MSBDIDMwLjc5NDkyMiAxOS40NTc4OTEgMzAuNjM0NzY2IDE4Ljg3NzQyMiAzMC42MzQ3NjYgMTcuODU3NDIyIEMgMzAuNjM0NzY2IDE3LjMwNzQyMiAzMC45NzUgMTYuNzI3NzM0IDMyIDE2LjY3NzczNCBMIDMyIDE1LjMxMjUgQyAzMC45NzUgMTUuMjc3NSAzMC42MzQ3NjYgMTQuNjk2NDg0IDMwLjYzNDc2NiAxNC4xNDY0ODQgQyAzMC42MzQ3NjYgMTMuMTIxNDg0IDMwLjc5NDkyMiAxMi41MTc5NjkgMzAuNzk0OTIyIDExLjQxNzk2OSBDIDMwLjc5NDkyMiA5LjcwNzk2ODggMzAuMTY0NTMxIDkuMTU2MjUgMjguNzY5NTMxIDkuMTU2MjUgTCAyNy43NDQxNDEgOS4xNTYyNSB6IE0gMTEuMjQyMTg4IDEyLjMwNjY0MSBDIDkuMzIyMTg3NSAxMi4zMDY2NDEgNy40ODUxNTYyIDEzLjkxMjU5NCA3LjUzNTE1NjIgMTYuNDMzNTk0IEMgNy41MzUxNTYyIDE5LjAzMzU5NCA5LjI0NTk1MzEgMjAuNTU4NTk0IDExLjUwMTk1MyAyMC41NTg1OTQgQyAxMi40NDY5NTMgMjAuNTU4NTk0IDEzLjQ5NzUgMjAuMjE5MDYzIDE0LjMxMjUgMTkuNjY0MDYyIEwgMTMuNTIxNDg0IDE4LjI3MzQzOCBDIDEyLjk0MTQ4NCAxOC42MTM0MzcgMTIuMzkyNSAxOC43NzM0MzggMTEuODEyNSAxOC43NzM0MzggQyAxMC43NjI1IDE4Ljc3MzQzOCA5Ljk0NjMyODEgMTguMjc0NDUzIDkuNzM2MzI4MSAxNy4wNjQ0NTMgTCAxNC40OTgwNDcgMTcuMDY0NDUzIEMgMTQuNTIzMDQ3IDE2Ljg3OTQ1MyAxNC41NzgxMjUgMTYuNTEzNzUgMTQuNTc4MTI1IDE2LjA5Mzc1IEMgMTQuNjA3MTI1IDEzLjk2MTc1IDEzLjQ0NzE4OCAxMi4zMDY2NDEgMTEuMjQyMTg4IDEyLjMwNjY0MSB6IE0gMTguMzA4NTk0IDEyLjMzMjAzMSBDIDE2LjUyMzU5NCAxMi4zMzIwMzEgMTUuMzEyNSAxMy4zNTc3MzQgMTUuMzEyNSAxNC44MDI3MzQgQyAxNS4zMTI1IDE2LjA4NzczNCAxNi40NDM2NzIgMTYuNzQ2MzI4IDE3LjM4ODY3MiAxNy4xMTEzMjggQyAxOC4yMDM2NzIgMTcuNDI2MzI4IDE4Ljk5MjE4NyAxNy42OTE3OTcgMTguOTkyMTg4IDE4LjIxNjc5NyBDIDE4Ljk5MjE4OCAxOC42MTE3OTcgMTguNjc4NzUgMTguODcxMDk0IDE3Ljk2ODc1IDE4Ljg3MTA5NCBDIDE3LjMxMzc1IDE4Ljg3MTA5NCAxNi42NTMzNTkgMTguNjA2NjQxIDE1Ljk0MzM1OSAxOC4wNTY2NDEgTCAxNC45MTc5NjkgMTkuNTgyMDMxIEMgMTUuNzA3OTY5IDIwLjIzNzAzMSAxNi45MTIxMDkgMjAuNjg3NSAxNy45MTIxMDkgMjAuNjg3NSBDIDIwLjAxMjEwOSAyMC42ODc1IDIxLjE0NDUzMSAxOS41ODE3MTkgMjEuMTQ0NTMxIDE4LjEzNjcxOSBDIDIxLjE0ODUzMSAxNi42OTI3MTkgMjAuMDE3MTg4IDE2LjA4NzA5NCAxOC45OTIxODggMTUuNzQ2MDk0IEMgMTguMTc3MTg3IDE1LjQzMTA5NCAxNy40NDMzNTkgMTUuMjQ3NjU2IDE3LjQ0MzM1OSAxNC43MjI2NTYgQyAxNy40NDMzNTkgMTQuMzI3NjU2IDE3Ljc1Nzg5MSAxNC4wOTE3OTcgMTguMzM3ODkxIDE0LjA5MTc5NyBDIDE4LjkxNzg5MSAxNC4wOTE3OTcgMTkuNDQyNTc4IDE0LjMyNjA5NCAyMC4wMTc1NzggMTQuNzQ2MDk0IEwgMjEuMDY4MzU5IDEzLjM1NzQyMiBDIDIwLjQxMzM1OSAxMi44NTc0MjIgMTkuNTE4NTk0IDEyLjMzMjAzMSAxOC4zMDg1OTQgMTIuMzMyMDMxIHogTSAyNC42OTMzNTkgMTIuMzMyMDMxIEMgMjIuOTA4MzU5IDEyLjMzMjAzMSAyMS42OTkyMTkgMTMuMzU3NzM0IDIxLjY5OTIxOSAxNC44MDI3MzQgQyAyMS42OTkyMTkgMTYuMDg3NzM0IDIyLjgyODQzOCAxNi43NDYzMjggMjMuNzczNDM4IDE3LjExMTMyOCBDIDI0LjU4ODQzOCAxNy40MjYzMjggMjUuMzc4OTA2IDE3LjY5MTc5NyAyNS4zNzg5MDYgMTguMjE2Nzk3IEMgMjUuMzc4OTA2IDE4LjYxMTc5NyAyNS4wNjM1MTYgMTguODcxMDk0IDI0LjM1MzUxNiAxOC44NzEwOTQgQyAyMy42OTg1MTYgMTguODcxMDk0IDIzLjAzODEyNSAxOC42MDY2NDEgMjIuMzI4MTI1IDE4LjA1NjY0MSBMIDIxLjI3OTI5NyAxOS41ODIwMzEgQyAyMi4wNjkyOTcgMjAuMjM3MDMxIDIzLjI3MzQzNyAyMC42ODc1IDI0LjI3MzQzOCAyMC42ODc1IEMgMjYuMzczNDM4IDIwLjY4NzUgMjcuNTA1ODU5IDE5LjU4MTcxOSAyNy41MDU4NTkgMTguMTM2NzE5IEMgMjcuNTA1ODU5IDE2LjY5MTcxOSAyNi4zNzg1MTYgMTYuMDg3MDk0IDI1LjM1MzUxNiAxNS43NDYwOTQgQyAyNC41NjM1MTYgMTUuNDMxMDk0IDIzLjgyODEyNSAxNS4yNDc2NTYgMjMuODI4MTI1IDE0LjcyMjY1NiBDIDIzLjgyODEyNSAxNC4zMjc2NTYgMjQuMTQ0NjA5IDE0LjA5MTc5NyAyNC43MjQ2MDkgMTQuMDkxNzk3IEMgMjUuMzA0NjA5IDE0LjA5MTc5NyAyNS44MjkyOTcgMTQuMzI2MDk0IDI2LjQwNDI5NyAxNC43NDYwOTQgTCAyNy40NTMxMjUgMTMuMzU3NDIyIEMgMjYuNzk4MTI1IDEyLjg1NzQyMiAyNS45MDMzNTkgMTIuMzMyMDMxIDI0LjY5MzM1OSAxMi4zMzIwMzEgeiBNIDExLjI2NzU3OCAxNC4wNjY0MDYgQyAxMi4yMTI1NzggMTQuMDY2NDA2IDEyLjU4MjAzMSAxNC43MjIxODggMTIuNTgyMDMxIDE1LjYxNzE4OCBMIDkuNzQyMTg3NSAxNS42MTcxODggQyA5LjkwMjE4NzUgMTQuNTY3MTg3IDEwLjUzMjU3OCAxNC4wNjY0MDYgMTEuMjY3NTc4IDE0LjA2NjQwNiB6Ij48L3BhdGg+Cjwvc3ZnPg==" title="Less"/></li>
                            <li><img  alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNmN2RmMWUiIGQ9Ik02LDQyVjZoMzZ2MzZINnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAwMDAxIiBkPSJNMjkuNTM4LDMyLjk0N2MwLjY5MiwxLjEyNCwxLjQ0NCwyLjIwMSwzLjAzNywyLjIwMWMxLjMzOCwwLDIuMDQtMC42NjUsMi4wNC0xLjU4NSBjMC0xLjEwMS0wLjcyNi0xLjQ5Mi0yLjE5OC0yLjEzM2wtMC44MDctMC4zNDRjLTIuMzI5LTAuOTg4LTMuODc4LTIuMjI2LTMuODc4LTQuODQxYzAtMi40MSwxLjg0NS00LjI0NCw0LjcyOC00LjI0NCBjMi4wNTMsMCwzLjUyOCwwLjcxMSw0LjU5MiwyLjU3M2wtMi41MTQsMS42MDdjLTAuNTUzLTAuOTg4LTEuMTUxLTEuMzc3LTIuMDc4LTEuMzc3Yy0wLjk0NiwwLTEuNTQ1LDAuNTk3LTEuNTQ1LDEuMzc3IGMwLDAuOTY0LDAuNiwxLjM1NCwxLjk4NSwxLjk1MWwwLjgwNywwLjM0NEMzNi40NTIsMjkuNjQ1LDM4LDMwLjgzOSwzOCwzMy41MjNDMzgsMzYuNDE1LDM1LjcxNiwzOCwzMi42NSwzOCBjLTIuOTk5LDAtNC43MDItMS41MDUtNS42NS0zLjM2OEwyOS41MzgsMzIuOTQ3eiBNMTcuOTUyLDMzLjAyOWMwLjUwNiwwLjkwNiwxLjI3NSwxLjYwMywyLjM4MSwxLjYwMyBjMS4wNTgsMCwxLjY2Ny0wLjQxOCwxLjY2Ny0yLjA0M1YyMmgzLjMzM3YxMS4xMDFjMCwzLjM2Ny0xLjk1Myw0Ljg5OS00LjgwNSw0Ljg5OWMtMi41NzcsMC00LjQzNy0xLjc0Ni01LjE5NS0zLjM2OCBMMTcuOTUyLDMzLjAyOXoiPjwvcGF0aD4KPC9zdmc+" title="JavaScript"/></li>
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
                </div>
                
                {/* ********************************************************  */}
                <div className="pro projet__content projet-2">
                    <div className='projet__text'>
                        <h3 className='projet__title'>To do app</h3>
                        <p className='projet__description'>Un todo app réalisé avec React js et Sass. Ceci me permet d'apprendre l'utilisation de la technologie React et ses hooks comme le useState et useEffect.</p>
                        <div className="projet__stack">
                        <ul className='home__logo__skills'>
                    
                            <li><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTYiIGhlaWdodD0iMTYiCnZpZXdCb3g9IjAgMCA0MCA0MCI+CjxwYXRoIGZpbGw9IiM0ZTdhYjUiIGQ9Ik0yMCwyOC45QzguNTk4LDI4LjksMCwyNS4xNywwLDIwczguNTk4LTksMjAtOXMyMCwzLjgzLDIwLDlTMzEuNDAyLDI4LjksMjAsMjguOXogTTIwLDEzLjkzMiBjLTkuNzI5LDAtMTcuMTI1LDMuMjY2LTE3LjEyNSw2LjEzMVMxMC4yNzEsMjYuMDY4LDIwLDI2LjA2OHMxNy4xMjUtMy4yNjYsMTcuMTI1LTYuMTMxUzI5LjcyOSwxMy45MzIsMjAsMTMuOTMyeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0ZTdhYjUiIGQ9Ik0xMi40MDIsMzhDMTIuNDAxLDM4LDEyLjQwMiwzOCwxMi40MDIsMzhjLTAuOTMxLDAtMS43ODEtMC4yMTYtMi41MjgtMC42NDIgYy0xLjIyLTAuNjk3LTIuMDk1LTEuOTI4LTIuNTMyLTMuNTYyYy0xLjE0Ni00LjI4MiwwLjcwMy0xMS40ODIsNC43MTMtMTguMzQ0QzE2Ljc2LDcuNDA3LDIzLjAwNywyLjAwMywyNy41OTksMi4wMDMgYzAuOTMsMCwxLjc4LDAuMjE2LDIuNTI3LDAuNjQyYzEuMjE4LDAuNjk1LDIuMDk0LDEuOTI1LDIuNTMxLDMuNTU4YzEuMTQ3LDQuMjgyLTAuNzAzLDExLjQ4My00LjcxNSwxOC4zNDUgQzIzLjI0MSwzMi41OTQsMTYuOTk1LDM4LDEyLjQwMiwzOHogTTI3LjU5OSw1LjAwM2MtMi44ODgsMC04LjQwOSw0LjE5My0xMi45NTQsMTEuOTYzYy00LjEyMyw3LjA1Ni01LjMzMiwxMi45MDktNC40MDQsMTYuMDU0IGMwLjI1MSwwLjg0OSwwLjYwNSwxLjQzOCwxLjEyMSwxLjczMmMyLjM2MSwxLjM0OCw4LjgwOS0yLjg1LDEzLjk5MS0xMS43MTdjNC4xMjUtNy4wNTcsNS40Ni0xMi43ODUsNC40MDYtMTYuMDU1IGMtMC4yNzEtMC44NDEtMC42MDQtMS40MzUtMS4xMTktMS43MjhDMjguMzQ3LDUuMDg0LDI4LjAwNiw1LjAwMywyNy41OTksNS4wMDN6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzRlN2FiNSIgZD0iTTI3LjU5OSwzNy45OTdDMjcuNTk5LDM3Ljk5NywyNy41OTksMzcuOTk3LDI3LjU5OSwzNy45OTdjLTQuNTk3LTAuMDAxLTEwLjg0My01LjQwNS0xNS41NDQtMTMuNDQ5IGMtNC4wMS02Ljg2Mi01Ljg1OS0xNC4wNjMtNC43MTMtMTguMzQ0QzcuNzc5LDQuNTcsOC42NTQsMy4zMzksOS44NzMsMi42NDNDMTAuNjIxLDIuMjE2LDExLjQ3MSwyLDEyLjQsMiBjNC41OTUsMCwxMC44NCw1LjQwNiwxNS41NDIsMTMuNDUyYzQuMDExLDYuODYxLDUuODYsMTQuMDYyLDQuNzE0LDE4LjM0NWMtMC40MzgsMS42MzMtMS4zMTMsMi44NjMtMi41MywzLjU1OCBDMjkuMzc5LDM3Ljc4MSwyOC41MjgsMzcuOTk3LDI3LjU5OSwzNy45OTd6IE0xMi40LDVjLTAuNDA3LDAtMC43NDcsMC4wODItMS4wNCwwLjI0OGMtMC41MTUsMC4yOTQtMC44NzQsMC44ODEtMS4xMiwxLjczMiBjLTAuOTI4LDMuMjA4LDAuMjgxLDguOTk5LDQuNDA0LDE2LjA1NWM0LjU0MSw3Ljc2OSwxMC4wNjMsMTEuOTYyLDEyLjk1NCwxMS45NjJsMCwwYzAuNDA4LDAsMC43NDgtMC4wODIsMS4wNDEtMC4yNDkgYzAuNTE0LTAuMjkyLDAuODgzLTAuODc2LDEuMTE4LTEuNzI4YzAuODY3LTMuMTQ2LTAuMjgxLTktNC40MDUtMTYuMDU1QzIwLjgxMSw5LjE5NCwxNS4yOSw1LDEyLjQsNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjOGJiN2YwIiBkPSJNMjMuNSwyMGMwLDEuOTM1LTEuNTY1LDMuNS0zLjUsMy41cy0zLjUtMS41NjUtMy41LTMuNXMxLjU2NS0zLjUsMy41LTMuNVMyMy41LDE4LjA2NSwyMy41LDIweiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0ZTdhYjUiIGQ9Ik0yMCwyNGMtMi4yMDYsMC00LTEuNzk0LTQtNHMxLjc5NC00LDQtNHM0LDEuNzk0LDQsNFMyMi4yMDYsMjQsMjAsMjR6IE0yMCwxN2MtMS42NTQsMC0zLDEuMzQ2LTMsMyBzMS4zNDYsMywzLDNzMy0xLjM0NiwzLTNTMjEuNjU0LDE3LDIwLDE3eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM4YmI3ZjAiIGQ9Ik0yMCwyOC4wNjhDOS4zNDYsMjguMDY4LDEsMjQuNTI0LDEsMjBzOC4zNDYtOC4wNjgsMTktOC4wNjhTMzksMTUuNDc2LDM5LDIwIFMzMC42NTQsMjguMDY4LDIwLDI4LjA2OHogTTIwLDEyLjkzMmMtOS43NTcsMC0xOCwzLjIzNy0xOCw3LjA2OHM4LjI0Myw3LjA2OCwxOCw3LjA2OFMzOCwyMy44MzIsMzgsMjBTMjkuNzU3LDEyLjkzMiwyMCwxMi45MzJ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzhiYjdmMCIgZD0iTTEyLjQwMiwzN0MxMi40MDEsMzcsMTIuNDAyLDM3LDEyLjQwMiwzN2MtMC43NTUsMC0xLjQzOC0wLjE3Mi0yLjAzMy0wLjUxMSBjLTAuOTk2LTAuNTY5LTEuNjg5LTEuNTYyLTIuMDYyLTIuOTUyYy0xLjA4MS00LjAzNywwLjcyOS0xMC45MzgsNC42MS0xNy41ODFDMTcuMzc5LDguMzMsMjMuNDE2LDMuMDAzLDI3LjU5OSwzLjAwMyBjMC43NTQsMCwxLjQzOCwwLjE3MiwyLjAzMiwwLjUxMWMwLjk5NSwwLjU2OCwxLjY4OCwxLjU2LDIuMDYxLDIuOTQ4YzEuMDgxLDQuMDM3LTAuNzI5LDEwLjkzOC00LjYxMiwxNy41ODIgQzIyLjYyMSwzMS42NzIsMTYuNTg2LDM3LDEyLjQwMiwzN3ogTTI3LjU5OSw0LjAwM2MtMy43ODQsMC05LjU5NSw1LjIzOS0xMy44MTcsMTIuNDU4Yy0zLjY5NSw2LjMyNS01LjUwNywxMy4wODMtNC41MDgsMTYuODE4IGMwLjMwMSwxLjEyMywwLjgzNiwxLjkxLDEuNTkyLDIuMzQyQzExLjMwNywzNS44NzIsMTEuODIzLDM2LDEyLjQwMSwzNmMzLjc4NSwwLDkuNTk1LTUuMjQsMTMuODE0LTEyLjQ2MSBjMy42OTctNi4zMjYsNS41MS0xMy4wODUsNC41MDktMTYuODE4Yy0wLjMtMS4xMjEtMC44MzUtMS45MDgtMS41OS0yLjMzOEMyOC42OTMsNC4xMzEsMjguMTc3LDQuMDAzLDI3LjU5OSw0LjAwM3oiPjwvcGF0aD48Zz48cGF0aCBmaWxsPSIjOGJiN2YwIiBkPSJNMjcuNTk5LDM2Ljk5N0MyNy41OTksMzYuOTk3LDI3LjU5OSwzNi45OTcsMjcuNTk5LDM2Ljk5N2MtNC4xODctMC4wMDEtMTAuMjI0LTUuMzI3LTE0LjY4MS0xMi45NTMgQzkuMDM2LDE3LjQwMSw3LjIyNywxMC41LDguMzA4LDYuNDYzYzAuMzcyLTEuMzksMS4wNjUtMi4zODMsMi4wNjItMi45NTJDMTAuOTY0LDMuMTcyLDExLjY0NywzLDEyLjQsMyBjNC4xODUsMCwxMC4yMjEsNS4zMjgsMTQuNjc5LDEyLjk1NmMzLjg4Myw2LjY0Miw1LjY5MiwxMy41NDMsNC42MSwxNy41ODJjLTAuMzcxLDEuMzg5LTEuMDY0LDIuMzgxLTIuMDU5LDIuOTQ4IEMyOS4wMzYsMzYuODI1LDI4LjM1MywzNi45OTcsMjcuNTk5LDM2Ljk5N3ogTTEyLjQsNGMtMC41NzcsMC0xLjA5NCwwLjEyOC0xLjUzNSwwLjM3OWMtMC43NTYsMC40MzItMS4yOTEsMS4yMTktMS41OTIsMi4zNDIgYy0wLjk5OSwzLjczNCwwLjgxMywxMC40OTMsNC41MDgsMTYuODE4QzE4LDMwLjc1NywyMy44MTIsMzUuOTk2LDI3LjU5OSwzNS45OTdsMCwwYzAuNTc4LDAsMS4wOTUtMC4xMjgsMS41MzYtMC4zOCBjMC43NTQtMC40MywxLjI4OS0xLjIxNywxLjU4OS0yLjMzOGMxLTMuNzM1LTAuODEyLTEwLjQ5NC00LjUwOC0xNi44MThDMjEuOTk2LDkuMjQxLDE2LjE4Nyw0LDEyLjQsNHoiPjwvcGF0aD48L2c+Cjwvc3ZnPg==" title="React Js"/></li>
                            <li><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNmMDYyOTIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTI0LjA0Miw0LjAzMkMzNS4wNjUsNC4wMzIsNDQsMTIuOTY3LDQ0LDIzLjk5CWMwLDExLjAyMi04LjkzNSwxOS45NTgtMTkuOTU4LDE5Ljk1OGMtMTEuMDIyLDAtMTkuOTU4LTguOTM1LTE5Ljk1OC0xOS45NThDNC4wODUsMTIuOTY3LDEzLjAyLDQuMDMyLDI0LjA0Miw0LjAzMkwyNC4wNDIsNC4wMzJ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzYuNTYxLDEyLjU3NGMtMC45MDQtMy41NDUtNi43ODEtNC43MS0xMi4zNDMtMi43MzRjLTMuMzEsMS4xNzYtNi44OTQsMy4wMjItOS40NzEsNS40MzIgYy0zLjA2NCwyLjg2Ni0zLjU1Miw1LjM2LTMuMzUxLDYuNDAyYzAuNzEsMy42NzcsNS43NDksNi4wODEsNy44Miw3Ljg2NXYwLjAxMWMtMC42MTEsMC4zMDEtNS4wODEsMi41NjMtNi4xMjcsNC44NzYgYy0xLjEwNCwyLjQ0LDAuMTc2LDQuMTkxLDEuMDIzLDQuNDI3YzIuNjI1LDAuNzMsNS4zMTgtMC41ODMsNi43NjYtMi43NDJjMS4zOTctMi4wODQsMS4yODEtNC43NzQsMC42NzQtNi4xMTMgYzAuODM3LTAuMjIxLDEuODE0LTAuMzIsMy4wNTQtMC4xNzVjMy41MDEsMC40MDksNC4xODgsMi41OTUsNC4wNTYsMy41MWMtMC4xMzEsMC45MTUtMC44NjYsMS40MTgtMS4xMTEsMS41NyBjLTAuMjQ2LDAuMTUyLTAuMzIsMC4yMDUtMC4zLDAuMzE3YzAuMDMsMC4xNjQsMC4xNDMsMC4xNTgsMC4zNTMsMC4xMjNjMC4yODgtMC4wNDksMS44MzgtMC43NDQsMS45MDUtMi40MzMgYzAuMDg0LTIuMTQ0LTEuOTctNC41NDItNS42MDgtNC40OGMtMS40OTgsMC4wMjYtMi40NCwwLjE2OC0zLjEyMSwwLjQyMmMtMC4wNS0wLjA1Ny0wLjEwMi0wLjExNC0wLjE1NC0wLjE3MSBjLTIuMjQ5LTIuNC02LjQwNy00LjA5Ny02LjIzMS03LjMyM2MwLjA2NC0xLjE3MywwLjQ3Mi00LjI2MSw3Ljk4OS04LjAwN2M2LjE1OC0zLjA2OSwxMS4wODgtMi4yMjQsMTEuOTQtMC4zNTMgYzEuMjE3LDIuNjc0LTIuNjM1LDcuNjQzLTkuMDMsOC4zNmMtMi40MzcsMC4yNzMtMy43Mi0wLjY3MS00LjAzOS0xLjAyM2MtMC4zMzYtMC4zNy0wLjM4Ni0wLjM4Ny0wLjUxMS0wLjMxNyBjLTAuMjA0LDAuMTEzLTAuMDc1LDAuNDQsMCwwLjYzNWMwLjE5MSwwLjQ5NywwLjk3NSwxLjM3OCwyLjMxLDEuODE3YzEuMTc1LDAuMzg2LDQuMDM2LDAuNTk3LDcuNDk2LTAuNzQxIEMzNC40MjQsMjAuMjI5LDM3LjQ1LDE2LjA1OSwzNi41NjEsMTIuNTc0eiBNMjAuMDc2LDMwLjYzOGMwLjI5LDEuMDc0LDAuMjU4LDIuMDc2LTAuMDQxLDIuOTgzYy0wLjAzMywwLjEwMS0wLjA3LDAuMi0wLjExLDAuMjk5IGMtMC4wNCwwLjA5OC0wLjA4MywwLjE5Ni0wLjEyOSwwLjI5MmMtMC4yMzEsMC40OC0wLjU0MiwwLjkyOS0wLjkyMiwxLjM0NGMtMS4xNiwxLjI2NS0yLjc4LDEuNzQzLTMuNDc0LDEuMzQgYy0wLjc1LTAuNDM1LTAuMzc0LTIuMjE4LDAuOTctMy42NGMxLjQ0Ni0xLjUyOSwzLjUyNy0yLjUxMiwzLjUyNy0yLjUxMmwtMC4wMDMtMC4wMDZDMTkuOTU0LDMwLjcwNSwyMC4wMTUsMzAuNjcyLDIwLjA3NiwzMC42Mzh6Ij48L3BhdGg+Cjwvc3ZnPg==" title="Sass/Scss"/></li>
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
                    <div className='projet__img'>
                        <a href="https://kevinkuch.github.io/ToDoApp/" target="_blank" rel="noreferrer">
                            <img src={ProjetImg2} alt="To do app" />
                        </a>
                    </div>
                </div>

                {/* ********************************************************  */}
                <div className="pro projet__content projet-3">
                    <div className='projet__img'>
                        <a href="https://kevinkuch.github.io/1J1_first_game/" target="_blank" rel="noreferrer">
                            <img src={ProjetImg3} alt="To do app" />
                        </a>
                    </div>
                    <div className='projet__text'>
                        <h3 className='projet__title'>Jeu en Javascript</h3>
                        <p className='projet__description'>Un jeu fait avec Javascript durant ma première session. Ceci est dans le but d'apprendre la programmation en commançant avec JS. On a utilisé le canvas pour réaliser le jeu.</p>
                        <div className="projet__stack">
                        <ul className='home__logo__skills'>
                        <li><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNmN2RmMWUiIGQ9Ik02LDQyVjZoMzZ2MzZINnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAwMDAxIiBkPSJNMjkuNTM4LDMyLjk0N2MwLjY5MiwxLjEyNCwxLjQ0NCwyLjIwMSwzLjAzNywyLjIwMWMxLjMzOCwwLDIuMDQtMC42NjUsMi4wNC0xLjU4NSBjMC0xLjEwMS0wLjcyNi0xLjQ5Mi0yLjE5OC0yLjEzM2wtMC44MDctMC4zNDRjLTIuMzI5LTAuOTg4LTMuODc4LTIuMjI2LTMuODc4LTQuODQxYzAtMi40MSwxLjg0NS00LjI0NCw0LjcyOC00LjI0NCBjMi4wNTMsMCwzLjUyOCwwLjcxMSw0LjU5MiwyLjU3M2wtMi41MTQsMS42MDdjLTAuNTUzLTAuOTg4LTEuMTUxLTEuMzc3LTIuMDc4LTEuMzc3Yy0wLjk0NiwwLTEuNTQ1LDAuNTk3LTEuNTQ1LDEuMzc3IGMwLDAuOTY0LDAuNiwxLjM1NCwxLjk4NSwxLjk1MWwwLjgwNywwLjM0NEMzNi40NTIsMjkuNjQ1LDM4LDMwLjgzOSwzOCwzMy41MjNDMzgsMzYuNDE1LDM1LjcxNiwzOCwzMi42NSwzOCBjLTIuOTk5LDAtNC43MDItMS41MDUtNS42NS0zLjM2OEwyOS41MzgsMzIuOTQ3eiBNMTcuOTUyLDMzLjAyOWMwLjUwNiwwLjkwNiwxLjI3NSwxLjYwMywyLjM4MSwxLjYwMyBjMS4wNTgsMCwxLjY2Ny0wLjQxOCwxLjY2Ny0yLjA0M1YyMmgzLjMzM3YxMS4xMDFjMCwzLjM2Ny0xLjk1Myw0Ljg5OS00LjgwNSw0Ljg5OWMtMi41NzcsMC00LjQzNy0xLjc0Ni01LjE5NS0zLjM2OCBMMTcuOTUyLDMzLjAyOXoiPjwvcGF0aD4KPC9zdmc+" title="JavaScript"/></li>
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
                </div>

                
    
            </div>
        </section>
    );
}