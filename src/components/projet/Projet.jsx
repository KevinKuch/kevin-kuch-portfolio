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
                            <li><img  alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxsaW5lYXJHcmFkaWVudCBpZD0iVFFEcmlxc3dyS3dQT25pTHJQVDEyYV83Z2RZNXFOWGFLQzBfZ3IxIiB4MT0iMTYuMzMiIHgyPSIzMi4yOTMiIHkxPSItMi43NDgiIHkyPSI0MS4xMDkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyYWE0ZjQiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDdhZDkiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjVFFEcmlxc3dyS3dQT25pTHJQVDEyYV83Z2RZNXFOWGFLQzBfZ3IxKSIgZD0iTTcuMTkyLDcuMTc2bDIuNjI3LDI5Ljc3YzAuMTA5LDEuMjM3LDAuOTcsMi4yOCwyLjE2NCwyLjYyMWwxMC42NDMsMy4wNDEJYzAuODk4LDAuMjU3LDEuODQ5LDAuMjU3LDIuNzQ3LDBsMTAuNjQzLTMuMDQxYzEuMTk0LTAuMzQxLDIuMDU1LTEuMzgzLDIuMTY0LTIuNjIxbDIuNjI3LTI5Ljc3QzQwLjkxMSw2LjAwNiwzOS45OSw1LDM4LjgxNiw1CUg5LjE4NEM4LjAxLDUsNy4wODksNi4wMDYsNy4xOTIsNy4xNzZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzM1YzFmMSIgZD0iTTI0LDh2MzEuOWw5Ljg3Ni0yLjgyMmMwLjc5Ny0wLjIyOCwxLjM3MS0wLjkyNCwxLjQ0My0xLjc0OWwyLjI4Ni0yNi4yNDIJQzM3LjY1Niw4LjUwMiwzNy4xOTYsOCwzNi42MDksOEgyNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzMuMSwxM0gyNHY0aDQuOWwtMC4zLDRIMjR2NGg0LjRsLTAuMyw0LjVMMjQsMzAuOXY0LjJsNy45LTIuNkwzMi42LDIxbDAsMEwzMy4xLDEzeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNkNmUwZTkiIGQ9Ik0yNCwxM3Y0aC04LjlsLTAuMy00SDI0eiBNMTkuNCwyMWwwLjIsNEgyNHYtNEgxOS40eiBNMTkuOCwyN2gtNGwwLjMsNS41bDcuOSwyLjZ2LTQuMmwtNC4xLTEuNAlMMTkuOCwyN3oiPjwvcGF0aD48cGF0aCBkPSJNMzMuMSwxM2wtMC41LDhsLTAuNywxMS41TDI0LDM1LjFsLTcuOS0yLjZMMTUuOCwyN2g0bDAuMSwyLjVsNC4xLDEuNGw0LjEtMS40bDAuMy00LjVIMjRoLTQuNGwtMC4yLTRIMjRoNC42bDAuMy00SDI0IGgtOC45bC0wLjMtNEgyNEgzMy4xIE0zNC4xNjQsMTJIMzMuMUgyNGgtOS4yaC0xLjA3OGwwLjA4MSwxLjA3NWwwLjMsNEwxNC4xNzIsMThIMTUuMUgyNGgzLjgyMmwtMC4xNSwySDI0aC00LjZoLTEuMDUxIGwwLjA1MiwxLjA1bDAuMiw0TDE4LjY0OSwyNkgxNS44aC0xLjA1NmwwLjA1OCwxLjA1NGwwLjMsNS41bDAuMDM3LDAuNjgybDAuNjQ5LDAuMjE0bDcuOSwyLjZMMjQsMzYuMTUzbDAuMzEzLTAuMTAzbDcuOS0yLjYgbDAuNjQ0LTAuMjEybDAuMDQxLTAuNjc3bDAuNy0xMS41bDAuNS03Ljk5OEwzNC4xNjQsMTJMMzQuMTY0LDEyeiBNMjAuNzYxLDI2SDI0aDMuMzMxbC0wLjE4NSwyLjc2OUwyNCwyOS44NDNsLTMuMTI4LTEuMDY4IGwtMC4wNzMtMS44MTVMMjAuNzYxLDI2TDIwLjc2MSwyNnoiIG9wYWNpdHk9Ii4wNSI+PC9wYXRoPjxwYXRoIGQ9Ik0zMy4xLDEzbC0wLjUsOGwtMC43LDExLjVMMjQsMzUuMWwtNy45LTIuNkwxNS44LDI3aDRsMC4xLDIuNWw0LjEsMS40bDQuMS0xLjRsMC4zLTQuNUgyNGgtNC40bC0wLjItNEgyNGg0LjZsMC4zLTRIMjQgaC04LjlsLTAuMy00SDI0SDMzLjEgTTMzLjYzMiwxMi41SDMzLjFIMjRoLTkuMmgtMC41MzlsMC4wNCwwLjUzN2wwLjMsNGwwLjAzNSwwLjQ2M0gxNS4xSDI0aDQuMzYxbC0wLjIyNSwzSDI0aC00LjZoLTAuNTI2IGwwLjAyNiwwLjUyNWwwLjIsNGwwLjAyNCwwLjQ3NUgxOS42SDI0aDMuODY2bC0wLjI0MiwzLjYzNEwyNCwzMC4zNzJsLTMuNjE0LTEuMjM0TDIwLjMsMjYuOThMMjAuMjgsMjYuNUgxOS44aC00aC0wLjUyOCBsMC4wMjksMC41MjdsMC4zLDUuNWwwLjAxOSwwLjM0MWwwLjMyNCwwLjEwN2w3LjksMi42TDI0LDM1LjYyNmwwLjE1Ni0wLjA1MWw3LjktMi42bDAuMzIyLTAuMTA2bDAuMDIxLTAuMzM5bDAuNy0xMS41bDAuNS03Ljk5OSBMMzMuNjMyLDEyLjVMMzMuNjMyLDEyLjV6IiBvcGFjaXR5PSIuMDciPjwvcGF0aD4KPC9zdmc+" title="CSS3"/></li>
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