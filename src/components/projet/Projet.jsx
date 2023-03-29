import './Projet.css';
import AboutImg from '../../assets/about.jpg';
import About from '../about/About';

export default function Projet({}) {


    return (
        <section className='Projet section' id='projet'>
            <h2 className="section__title">Mes projets</h2>
            <span className='section__subtitle'>Mes projets web tout au long de mon parcours scolaire</span>

            <div className="projet__container container grid">

                <div className="pro projet__content projet-1">
                    <div className='projet__img'>
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={AboutImg} alt="website" />
                        </a>
                    </div>
                    <div className='projet__text'>
                        <h3 className='projet__title'>Titre projet</h3>
                        <p className='projet__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consequuntur voluptatibus natus molestias dolor dolore beatae architecto id? Deleniti, voluptatum.</p>
                        <div className="projet__stack">
                        <ul className='home__logo__skills'>
                    
                            <li><img  alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNFNjUxMDAiIGQ9Ik00MSw1SDdsMywzNGwxNCw0bDE0LTRMNDEsNUw0MSw1eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRjZEMDAiIGQ9Ik0yNCA4TDI0IDM5LjkgMzUuMiAzNi43IDM3LjcgOHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjQsMjV2LTRoOC42bC0wLjcsMTEuNUwyNCwzNS4xdi00LjJsNC4xLTEuNGwwLjMtNC41SDI0eiBNMzIuOSwxN2wwLjMtNEgyNHY0SDMyLjl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTI0LDMwLjl2NC4ybC03LjktMi42TDE1LjcsMjdoNGwwLjIsMi41TDI0LDMwLjl6IE0xOS4xLDE3SDI0di00aC05LjFsMC43LDEySDI0di00aC00LjZMMTkuMSwxN3oiPjwvcGF0aD4KPC9zdmc+" title="HTML5"/></li>
                            <li><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzIiIGhlaWdodD0iMzIiCnZpZXdCb3g9IjAgMCAzMiAzMiI+CjxwYXRoIGQ9Ik0gMy4yNTU4NTk0IDkuMTUwMzkwNiBDIDEuODM1ODU5NCA5LjE1MDM5MDYgMS4yMDUwNzgxIDkuNzAwMTU2MiAxLjIwNTA3ODEgMTEuNDEwMTU2IEMgMS4yMDUwNzgxIDEyLjU0MDE1NiAxLjM2NTIzNDQgMTMuMTcwNjI1IDEuMzY1MjM0NCAxNC4xNDA2MjUgQyAxLjM2NTIzNDQgMTQuNjkwNjI1IDEuMDI2OTUzMSAxNS4yNzAzMTMgMC4wMDE5NTMxMjUgMTUuMzIwMzEyIEwgMC4wMDE5NTMxMjUgMTYuNjg1NTQ3IEMgMS4wMjY5NTMxIDE2LjcxMDU0NyAxLjM2NTIzNDQgMTcuMjkxNzk3IDEuMzY1MjM0NCAxNy44NDE3OTcgQyAxLjM2NTIzNDQgMTguODExNzk3IDEuMjA1MDc4MSAxOS4zOTE0ODQgMS4yMDUwNzgxIDIwLjUyMTQ4NCBDIDEuMjA1MDc4MSAyMi4yMzE0ODQgMS44MzU0Njg3IDIyLjc4MTI1IDMuMjMwNDY4OCAyMi43ODEyNSBMIDQuMjU1ODU5NCAyMi43ODEyNSBMIDQuMjU1ODU5NCAyMS41NzAzMTIgTCAzLjk0MTQwNjIgMjEuNTcwMzEyIEMgMy4yODY0MDYyIDIxLjU3MDMxMiAzLjA3NjE3MTkgMjEuMzA2NDA2IDMuMDc2MTcxOSAyMC40NDE0MDYgQyAzLjA3NjE3MTkgMTkuNTc2NDA2IDMuMTU2MjUgMTguODM1MjM0IDMuMTU2MjUgMTcuODY1MjM0IEMgMy4xNTYyNSAxNi42NTUyMzQgMi43NjE1NjI1IDE2LjE4Njk1MyAxLjk3NjU2MjUgMTYuMDAxOTUzIEwgMS45NzY1NjI1IDE1LjkyMTg3NSBDIDIuNzY2NTYyNSAxNS43MzY4NzUgMy4xNTYyNSAxNS4yNjY2NDEgMy4xNTYyNSAxNC4wNTY2NDEgQyAzLjE1NjI1IDEzLjExMTY0MSAzLjA3NjE3MTkgMTIuMzQ1NDY5IDMuMDc2MTcxOSAxMS40ODA0NjkgQyAzLjA3NjE3MTkgMTAuNjE1NDY5IDMuMjYxNDA2MiAxMC4zNzY5NTMgMy45NDE0MDYyIDEwLjM3Njk1MyBMIDQuNjQ2NDg0NCAxMC4zNzY5NTMgTCA0LjY0NjQ4NDQgMTcuOTE3OTY5IEMgNC42NDY0ODQ0IDE5LjUyMjk2OSA1LjE5NTc4MTMgMjAuNTcyMjY2IDYuODAwNzgxMiAyMC41NzIyNjYgQyA3LjMwMDc4MTIgMjAuNTcyMjY2IDcuNjk1NDY4NyAyMC40OTE3MTkgNy45ODA0Njg4IDIwLjM4NjcxOSBMIDcuNzE2Nzk2OSAxOC42Nzc3MzQgQyA3LjU2MTc5NjkgMTguNzE4NzM0IDcuNDg2MjUgMTguNzE4NzUgNy40MDYyNSAxOC43MTg3NSBDIDcuMjIxMjUgMTguNzE4NzUgNi45ODYzMjgxIDE4LjU1NzUgNi45ODYzMjgxIDE4LjA2MjUgTCA2Ljk4NjMyODEgOS4xNTAzOTA2IEwgMy4yNTU4NTk0IDkuMTUwMzkwNiB6IE0gMjcuNzQ0MTQxIDkuMTU2MjUgTCAyNy43NDQxNDEgMTAuMzY3MTg4IEwgMjguMDYwNTQ3IDEwLjM2NzE4OCBDIDI4Ljc3MDU0NyAxMC4zNjcxODggMjguOTI1NzgxIDEwLjYwMjY1NiAyOC45MjU3ODEgMTEuNDcyNjU2IEMgMjguOTI1NzgxIDEyLjI4NzY1NiAyOC44NDU3MDMgMTMuMTAxODc1IDI4Ljg0NTcwMyAxNC4wNDY4NzUgQyAyOC44NDU3MDMgMTUuMjU2ODc1IDI5LjI0MDM5MSAxNS43MjcxMDkgMzAuMDI1MzkxIDE1LjkxMjEwOSBMIDMwLjAyNTM5MSAxNS45OTIxODggQyAyOS4yMzUzOTEgMTYuMTc3MTg3IDI4Ljg0NTcwMyAxNi42NDc0MjIgMjguODQ1NzAzIDE3Ljg1NzQyMiBDIDI4Ljg0NTcwMyAxOC44MDI0MjIgMjguOTI1NzgxIDE5LjU2NjY0MSAyOC45MjU3ODEgMjAuNDMxNjQxIEMgMjguOTI1NzgxIDIxLjMyNjY0MSAyOC43NDA1NDcgMjEuNTYyNSAyOC4wNjA1NDcgMjEuNTYyNSBMIDI4LjA2MDU0NyAyMS41ODc4OTEgTCAyNy43NDQxNDEgMjEuNTg3ODkxIEwgMjcuNzQ0MTQxIDIyLjg0NzY1NiBMIDI4Ljc2OTUzMSAyMi44NDc2NTYgQyAzMC4xNTk1MzEgMjIuODQ3NjU2IDMwLjc5NDkyMiAyMi4yOTc4OTEgMzAuNzk0OTIyIDIwLjU4Nzg5MSBDIDMwLjc5NDkyMiAxOS40NTc4OTEgMzAuNjM0NzY2IDE4Ljg3NzQyMiAzMC42MzQ3NjYgMTcuODU3NDIyIEMgMzAuNjM0NzY2IDE3LjMwNzQyMiAzMC45NzUgMTYuNzI3NzM0IDMyIDE2LjY3NzczNCBMIDMyIDE1LjMxMjUgQyAzMC45NzUgMTUuMjc3NSAzMC42MzQ3NjYgMTQuNjk2NDg0IDMwLjYzNDc2NiAxNC4xNDY0ODQgQyAzMC42MzQ3NjYgMTMuMTIxNDg0IDMwLjc5NDkyMiAxMi41MTc5NjkgMzAuNzk0OTIyIDExLjQxNzk2OSBDIDMwLjc5NDkyMiA5LjcwNzk2ODggMzAuMTY0NTMxIDkuMTU2MjUgMjguNzY5NTMxIDkuMTU2MjUgTCAyNy43NDQxNDEgOS4xNTYyNSB6IE0gMTEuMjQyMTg4IDEyLjMwNjY0MSBDIDkuMzIyMTg3NSAxMi4zMDY2NDEgNy40ODUxNTYyIDEzLjkxMjU5NCA3LjUzNTE1NjIgMTYuNDMzNTk0IEMgNy41MzUxNTYyIDE5LjAzMzU5NCA5LjI0NTk1MzEgMjAuNTU4NTk0IDExLjUwMTk1MyAyMC41NTg1OTQgQyAxMi40NDY5NTMgMjAuNTU4NTk0IDEzLjQ5NzUgMjAuMjE5MDYzIDE0LjMxMjUgMTkuNjY0MDYyIEwgMTMuNTIxNDg0IDE4LjI3MzQzOCBDIDEyLjk0MTQ4NCAxOC42MTM0MzcgMTIuMzkyNSAxOC43NzM0MzggMTEuODEyNSAxOC43NzM0MzggQyAxMC43NjI1IDE4Ljc3MzQzOCA5Ljk0NjMyODEgMTguMjc0NDUzIDkuNzM2MzI4MSAxNy4wNjQ0NTMgTCAxNC40OTgwNDcgMTcuMDY0NDUzIEMgMTQuNTIzMDQ3IDE2Ljg3OTQ1MyAxNC41NzgxMjUgMTYuNTEzNzUgMTQuNTc4MTI1IDE2LjA5Mzc1IEMgMTQuNjA3MTI1IDEzLjk2MTc1IDEzLjQ0NzE4OCAxMi4zMDY2NDEgMTEuMjQyMTg4IDEyLjMwNjY0MSB6IE0gMTguMzA4NTk0IDEyLjMzMjAzMSBDIDE2LjUyMzU5NCAxMi4zMzIwMzEgMTUuMzEyNSAxMy4zNTc3MzQgMTUuMzEyNSAxNC44MDI3MzQgQyAxNS4zMTI1IDE2LjA4NzczNCAxNi40NDM2NzIgMTYuNzQ2MzI4IDE3LjM4ODY3MiAxNy4xMTEzMjggQyAxOC4yMDM2NzIgMTcuNDI2MzI4IDE4Ljk5MjE4NyAxNy42OTE3OTcgMTguOTkyMTg4IDE4LjIxNjc5NyBDIDE4Ljk5MjE4OCAxOC42MTE3OTcgMTguNjc4NzUgMTguODcxMDk0IDE3Ljk2ODc1IDE4Ljg3MTA5NCBDIDE3LjMxMzc1IDE4Ljg3MTA5NCAxNi42NTMzNTkgMTguNjA2NjQxIDE1Ljk0MzM1OSAxOC4wNTY2NDEgTCAxNC45MTc5NjkgMTkuNTgyMDMxIEMgMTUuNzA3OTY5IDIwLjIzNzAzMSAxNi45MTIxMDkgMjAuNjg3NSAxNy45MTIxMDkgMjAuNjg3NSBDIDIwLjAxMjEwOSAyMC42ODc1IDIxLjE0NDUzMSAxOS41ODE3MTkgMjEuMTQ0NTMxIDE4LjEzNjcxOSBDIDIxLjE0ODUzMSAxNi42OTI3MTkgMjAuMDE3MTg4IDE2LjA4NzA5NCAxOC45OTIxODggMTUuNzQ2MDk0IEMgMTguMTc3MTg3IDE1LjQzMTA5NCAxNy40NDMzNTkgMTUuMjQ3NjU2IDE3LjQ0MzM1OSAxNC43MjI2NTYgQyAxNy40NDMzNTkgMTQuMzI3NjU2IDE3Ljc1Nzg5MSAxNC4wOTE3OTcgMTguMzM3ODkxIDE0LjA5MTc5NyBDIDE4LjkxNzg5MSAxNC4wOTE3OTcgMTkuNDQyNTc4IDE0LjMyNjA5NCAyMC4wMTc1NzggMTQuNzQ2MDk0IEwgMjEuMDY4MzU5IDEzLjM1NzQyMiBDIDIwLjQxMzM1OSAxMi44NTc0MjIgMTkuNTE4NTk0IDEyLjMzMjAzMSAxOC4zMDg1OTQgMTIuMzMyMDMxIHogTSAyNC42OTMzNTkgMTIuMzMyMDMxIEMgMjIuOTA4MzU5IDEyLjMzMjAzMSAyMS42OTkyMTkgMTMuMzU3NzM0IDIxLjY5OTIxOSAxNC44MDI3MzQgQyAyMS42OTkyMTkgMTYuMDg3NzM0IDIyLjgyODQzOCAxNi43NDYzMjggMjMuNzczNDM4IDE3LjExMTMyOCBDIDI0LjU4ODQzOCAxNy40MjYzMjggMjUuMzc4OTA2IDE3LjY5MTc5NyAyNS4zNzg5MDYgMTguMjE2Nzk3IEMgMjUuMzc4OTA2IDE4LjYxMTc5NyAyNS4wNjM1MTYgMTguODcxMDk0IDI0LjM1MzUxNiAxOC44NzEwOTQgQyAyMy42OTg1MTYgMTguODcxMDk0IDIzLjAzODEyNSAxOC42MDY2NDEgMjIuMzI4MTI1IDE4LjA1NjY0MSBMIDIxLjI3OTI5NyAxOS41ODIwMzEgQyAyMi4wNjkyOTcgMjAuMjM3MDMxIDIzLjI3MzQzNyAyMC42ODc1IDI0LjI3MzQzOCAyMC42ODc1IEMgMjYuMzczNDM4IDIwLjY4NzUgMjcuNTA1ODU5IDE5LjU4MTcxOSAyNy41MDU4NTkgMTguMTM2NzE5IEMgMjcuNTA1ODU5IDE2LjY5MTcxOSAyNi4zNzg1MTYgMTYuMDg3MDk0IDI1LjM1MzUxNiAxNS43NDYwOTQgQyAyNC41NjM1MTYgMTUuNDMxMDk0IDIzLjgyODEyNSAxNS4yNDc2NTYgMjMuODI4MTI1IDE0LjcyMjY1NiBDIDIzLjgyODEyNSAxNC4zMjc2NTYgMjQuMTQ0NjA5IDE0LjA5MTc5NyAyNC43MjQ2MDkgMTQuMDkxNzk3IEMgMjUuMzA0NjA5IDE0LjA5MTc5NyAyNS44MjkyOTcgMTQuMzI2MDk0IDI2LjQwNDI5NyAxNC43NDYwOTQgTCAyNy40NTMxMjUgMTMuMzU3NDIyIEMgMjYuNzk4MTI1IDEyLjg1NzQyMiAyNS45MDMzNTkgMTIuMzMyMDMxIDI0LjY5MzM1OSAxMi4zMzIwMzEgeiBNIDExLjI2NzU3OCAxNC4wNjY0MDYgQyAxMi4yMTI1NzggMTQuMDY2NDA2IDEyLjU4MjAzMSAxNC43MjIxODggMTIuNTgyMDMxIDE1LjYxNzE4OCBMIDkuNzQyMTg3NSAxNS42MTcxODggQyA5LjkwMjE4NzUgMTQuNTY3MTg3IDEwLjUzMjU3OCAxNC4wNjY0MDYgMTEuMjY3NTc4IDE0LjA2NjQwNiB6Ij48L3BhdGg+Cjwvc3ZnPg==" title="Less"/></li>
                            <li><img  alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNmN2RmMWUiIGQ9Ik02LDQyVjZoMzZ2MzZINnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAwMDAxIiBkPSJNMjkuNTM4LDMyLjk0N2MwLjY5MiwxLjEyNCwxLjQ0NCwyLjIwMSwzLjAzNywyLjIwMWMxLjMzOCwwLDIuMDQtMC42NjUsMi4wNC0xLjU4NSBjMC0xLjEwMS0wLjcyNi0xLjQ5Mi0yLjE5OC0yLjEzM2wtMC44MDctMC4zNDRjLTIuMzI5LTAuOTg4LTMuODc4LTIuMjI2LTMuODc4LTQuODQxYzAtMi40MSwxLjg0NS00LjI0NCw0LjcyOC00LjI0NCBjMi4wNTMsMCwzLjUyOCwwLjcxMSw0LjU5MiwyLjU3M2wtMi41MTQsMS42MDdjLTAuNTUzLTAuOTg4LTEuMTUxLTEuMzc3LTIuMDc4LTEuMzc3Yy0wLjk0NiwwLTEuNTQ1LDAuNTk3LTEuNTQ1LDEuMzc3IGMwLDAuOTY0LDAuNiwxLjM1NCwxLjk4NSwxLjk1MWwwLjgwNywwLjM0NEMzNi40NTIsMjkuNjQ1LDM4LDMwLjgzOSwzOCwzMy41MjNDMzgsMzYuNDE1LDM1LjcxNiwzOCwzMi42NSwzOCBjLTIuOTk5LDAtNC43MDItMS41MDUtNS42NS0zLjM2OEwyOS41MzgsMzIuOTQ3eiBNMTcuOTUyLDMzLjAyOWMwLjUwNiwwLjkwNiwxLjI3NSwxLjYwMywyLjM4MSwxLjYwMyBjMS4wNTgsMCwxLjY2Ny0wLjQxOCwxLjY2Ny0yLjA0M1YyMmgzLjMzM3YxMS4xMDFjMCwzLjM2Ny0xLjk1Myw0Ljg5OS00LjgwNSw0Ljg5OWMtMi41NzcsMC00LjQzNy0xLjc0Ni01LjE5NS0zLjM2OCBMMTcuOTUyLDMzLjAyOXoiPjwvcGF0aD4KPC9zdmc+" title="JavaScript"/></li>
                         </ul>
                        </div>
                        <div className="projet__link">
                            <a href="#" target="_blank" rel="noreferrer" >
                                Github
                                <i className="uil uil-github"></i>
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                                Demo
                                <i className="uil uil-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pro projet__content projet-1">
                    <div className='projet__text'>
                        <h3 className='projet__title'>Titre projet</h3>
                        <p className='projet__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consequuntur voluptatibus natus molestias dolor dolore beatae architecto id? Deleniti, voluptatum.</p>
                        <div className="projet__stack">
                        <ul className='home__logo__skills'>
                    
                            <li><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNFNjUxMDAiIGQ9Ik00MSw1SDdsMywzNGwxNCw0bDE0LTRMNDEsNUw0MSw1eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRjZEMDAiIGQ9Ik0yNCA4TDI0IDM5LjkgMzUuMiAzNi43IDM3LjcgOHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjQsMjV2LTRoOC42bC0wLjcsMTEuNUwyNCwzNS4xdi00LjJsNC4xLTEuNGwwLjMtNC41SDI0eiBNMzIuOSwxN2wwLjMtNEgyNHY0SDMyLjl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTI0LDMwLjl2NC4ybC03LjktMi42TDE1LjcsMjdoNGwwLjIsMi41TDI0LDMwLjl6IE0xOS4xLDE3SDI0di00aC05LjFsMC43LDEySDI0di00aC00LjZMMTkuMSwxN3oiPjwvcGF0aD4KPC9zdmc+" title="HTML5"/></li>
                            <li><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxsaW5lYXJHcmFkaWVudCBpZD0iVFFEcmlxc3dyS3dQT25pTHJQVDEyYV83Z2RZNXFOWGFLQzBfZ3IxIiB4MT0iMTYuMzMiIHgyPSIzMi4yOTMiIHkxPSItMi43NDgiIHkyPSI0MS4xMDkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyYWE0ZjQiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDdhZDkiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjVFFEcmlxc3dyS3dQT25pTHJQVDEyYV83Z2RZNXFOWGFLQzBfZ3IxKSIgZD0iTTcuMTkyLDcuMTc2bDIuNjI3LDI5Ljc3YzAuMTA5LDEuMjM3LDAuOTcsMi4yOCwyLjE2NCwyLjYyMWwxMC42NDMsMy4wNDEJYzAuODk4LDAuMjU3LDEuODQ5LDAuMjU3LDIuNzQ3LDBsMTAuNjQzLTMuMDQxYzEuMTk0LTAuMzQxLDIuMDU1LTEuMzgzLDIuMTY0LTIuNjIxbDIuNjI3LTI5Ljc3QzQwLjkxMSw2LjAwNiwzOS45OSw1LDM4LjgxNiw1CUg5LjE4NEM4LjAxLDUsNy4wODksNi4wMDYsNy4xOTIsNy4xNzZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzM1YzFmMSIgZD0iTTI0LDh2MzEuOWw5Ljg3Ni0yLjgyMmMwLjc5Ny0wLjIyOCwxLjM3MS0wLjkyNCwxLjQ0My0xLjc0OWwyLjI4Ni0yNi4yNDIJQzM3LjY1Niw4LjUwMiwzNy4xOTYsOCwzNi42MDksOEgyNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzMuMSwxM0gyNHY0aDQuOWwtMC4zLDRIMjR2NGg0LjRsLTAuMyw0LjVMMjQsMzAuOXY0LjJsNy45LTIuNkwzMi42LDIxbDAsMEwzMy4xLDEzeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNkNmUwZTkiIGQ9Ik0yNCwxM3Y0aC04LjlsLTAuMy00SDI0eiBNMTkuNCwyMWwwLjIsNEgyNHYtNEgxOS40eiBNMTkuOCwyN2gtNGwwLjMsNS41bDcuOSwyLjZ2LTQuMmwtNC4xLTEuNAlMMTkuOCwyN3oiPjwvcGF0aD48cGF0aCBkPSJNMzMuMSwxM2wtMC41LDhsLTAuNywxMS41TDI0LDM1LjFsLTcuOS0yLjZMMTUuOCwyN2g0bDAuMSwyLjVsNC4xLDEuNGw0LjEtMS40bDAuMy00LjVIMjRoLTQuNGwtMC4yLTRIMjRoNC42bDAuMy00SDI0IGgtOC45bC0wLjMtNEgyNEgzMy4xIE0zNC4xNjQsMTJIMzMuMUgyNGgtOS4yaC0xLjA3OGwwLjA4MSwxLjA3NWwwLjMsNEwxNC4xNzIsMThIMTUuMUgyNGgzLjgyMmwtMC4xNSwySDI0aC00LjZoLTEuMDUxIGwwLjA1MiwxLjA1bDAuMiw0TDE4LjY0OSwyNkgxNS44aC0xLjA1NmwwLjA1OCwxLjA1NGwwLjMsNS41bDAuMDM3LDAuNjgybDAuNjQ5LDAuMjE0bDcuOSwyLjZMMjQsMzYuMTUzbDAuMzEzLTAuMTAzbDcuOS0yLjYgbDAuNjQ0LTAuMjEybDAuMDQxLTAuNjc3bDAuNy0xMS41bDAuNS03Ljk5OEwzNC4xNjQsMTJMMzQuMTY0LDEyeiBNMjAuNzYxLDI2SDI0aDMuMzMxbC0wLjE4NSwyLjc2OUwyNCwyOS44NDNsLTMuMTI4LTEuMDY4IGwtMC4wNzMtMS44MTVMMjAuNzYxLDI2TDIwLjc2MSwyNnoiIG9wYWNpdHk9Ii4wNSI+PC9wYXRoPjxwYXRoIGQ9Ik0zMy4xLDEzbC0wLjUsOGwtMC43LDExLjVMMjQsMzUuMWwtNy45LTIuNkwxNS44LDI3aDRsMC4xLDIuNWw0LjEsMS40bDQuMS0xLjRsMC4zLTQuNUgyNGgtNC40bC0wLjItNEgyNGg0LjZsMC4zLTRIMjQgaC04LjlsLTAuMy00SDI0SDMzLjEgTTMzLjYzMiwxMi41SDMzLjFIMjRoLTkuMmgtMC41MzlsMC4wNCwwLjUzN2wwLjMsNGwwLjAzNSwwLjQ2M0gxNS4xSDI0aDQuMzYxbC0wLjIyNSwzSDI0aC00LjZoLTAuNTI2IGwwLjAyNiwwLjUyNWwwLjIsNGwwLjAyNCwwLjQ3NUgxOS42SDI0aDMuODY2bC0wLjI0MiwzLjYzNEwyNCwzMC4zNzJsLTMuNjE0LTEuMjM0TDIwLjMsMjYuOThMMjAuMjgsMjYuNUgxOS44aC00aC0wLjUyOCBsMC4wMjksMC41MjdsMC4zLDUuNWwwLjAxOSwwLjM0MWwwLjMyNCwwLjEwN2w3LjksMi42TDI0LDM1LjYyNmwwLjE1Ni0wLjA1MWw3LjktMi42bDAuMzIyLTAuMTA2bDAuMDIxLTAuMzM5bDAuNy0xMS41bDAuNS03Ljk5OSBMMzMuNjMyLDEyLjVMMzMuNjMyLDEyLjV6IiBvcGFjaXR5PSIuMDciPjwvcGF0aD4KPC9zdmc+" title="CSS3"/></li>
                            <li><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNmN2RmMWUiIGQ9Ik02LDQyVjZoMzZ2MzZINnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAwMDAxIiBkPSJNMjkuNTM4LDMyLjk0N2MwLjY5MiwxLjEyNCwxLjQ0NCwyLjIwMSwzLjAzNywyLjIwMWMxLjMzOCwwLDIuMDQtMC42NjUsMi4wNC0xLjU4NSBjMC0xLjEwMS0wLjcyNi0xLjQ5Mi0yLjE5OC0yLjEzM2wtMC44MDctMC4zNDRjLTIuMzI5LTAuOTg4LTMuODc4LTIuMjI2LTMuODc4LTQuODQxYzAtMi40MSwxLjg0NS00LjI0NCw0LjcyOC00LjI0NCBjMi4wNTMsMCwzLjUyOCwwLjcxMSw0LjU5MiwyLjU3M2wtMi41MTQsMS42MDdjLTAuNTUzLTAuOTg4LTEuMTUxLTEuMzc3LTIuMDc4LTEuMzc3Yy0wLjk0NiwwLTEuNTQ1LDAuNTk3LTEuNTQ1LDEuMzc3IGMwLDAuOTY0LDAuNiwxLjM1NCwxLjk4NSwxLjk1MWwwLjgwNywwLjM0NEMzNi40NTIsMjkuNjQ1LDM4LDMwLjgzOSwzOCwzMy41MjNDMzgsMzYuNDE1LDM1LjcxNiwzOCwzMi42NSwzOCBjLTIuOTk5LDAtNC43MDItMS41MDUtNS42NS0zLjM2OEwyOS41MzgsMzIuOTQ3eiBNMTcuOTUyLDMzLjAyOWMwLjUwNiwwLjkwNiwxLjI3NSwxLjYwMywyLjM4MSwxLjYwMyBjMS4wNTgsMCwxLjY2Ny0wLjQxOCwxLjY2Ny0yLjA0M1YyMmgzLjMzM3YxMS4xMDFjMCwzLjM2Ny0xLjk1Myw0Ljg5OS00LjgwNSw0Ljg5OWMtMi41NzcsMC00LjQzNy0xLjc0Ni01LjE5NS0zLjM2OCBMMTcuOTUyLDMzLjAyOXoiPjwvcGF0aD4KPC9zdmc+" title="JavaScript"/></li>
                         </ul>
                        </div>
                        <div className="projet__link">
                            <a href="#" target="_blank" rel="noreferrer" >
                                Github
                                <i className="uil uil-github"></i>
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                                Demo
                                <i className="uil uil-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div className='projet__img'>
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={AboutImg} alt="website" />
                        </a>
                    </div>
                </div>

                
    
            </div>
        </section>
    );
}