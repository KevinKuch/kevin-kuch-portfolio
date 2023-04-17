import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Data({}) {


    return (
        <div className='home__data'>
            <Fade left cascade light>
                <div>
                    <h1 className='home__title'>Kevin Kuch
                    </h1>
                    <h3 className="home__subtitle">Développeur Front-end</h3>
                    <p className="home__description">
                        Je suis un étudiant de deuxième année en technique d'intégration multimédia au Collège de Maisonneuve. 
                    </p>
                </div>
            </Fade>
            <Fade bottom cascade>
            <div className="home__skills">
                <ul className='home__logo__skills'>
                    
                    <li><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNFNjUxMDAiIGQ9Ik00MSw1SDdsMywzNGwxNCw0bDE0LTRMNDEsNUw0MSw1eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRjZEMDAiIGQ9Ik0yNCA4TDI0IDM5LjkgMzUuMiAzNi43IDM3LjcgOHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjQsMjV2LTRoOC42bC0wLjcsMTEuNUwyNCwzNS4xdi00LjJsNC4xLTEuNGwwLjMtNC41SDI0eiBNMzIuOSwxN2wwLjMtNEgyNHY0SDMyLjl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTI0LDMwLjl2NC4ybC03LjktMi42TDE1LjcsMjdoNGwwLjIsMi41TDI0LDMwLjl6IE0xOS4xLDE3SDI0di00aC05LjFsMC43LDEySDI0di00aC00LjZMMTkuMSwxN3oiPjwvcGF0aD4KPC9zdmc+" title="HTML5"/></li>
                    <li><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxsaW5lYXJHcmFkaWVudCBpZD0iVFFEcmlxc3dyS3dQT25pTHJQVDEyYV83Z2RZNXFOWGFLQzBfZ3IxIiB4MT0iMTYuMzMiIHgyPSIzMi4yOTMiIHkxPSItMi43NDgiIHkyPSI0MS4xMDkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyYWE0ZjQiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDdhZDkiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjVFFEcmlxc3dyS3dQT25pTHJQVDEyYV83Z2RZNXFOWGFLQzBfZ3IxKSIgZD0iTTcuMTkyLDcuMTc2bDIuNjI3LDI5Ljc3YzAuMTA5LDEuMjM3LDAuOTcsMi4yOCwyLjE2NCwyLjYyMWwxMC42NDMsMy4wNDEJYzAuODk4LDAuMjU3LDEuODQ5LDAuMjU3LDIuNzQ3LDBsMTAuNjQzLTMuMDQxYzEuMTk0LTAuMzQxLDIuMDU1LTEuMzgzLDIuMTY0LTIuNjIxbDIuNjI3LTI5Ljc3QzQwLjkxMSw2LjAwNiwzOS45OSw1LDM4LjgxNiw1CUg5LjE4NEM4LjAxLDUsNy4wODksNi4wMDYsNy4xOTIsNy4xNzZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzM1YzFmMSIgZD0iTTI0LDh2MzEuOWw5Ljg3Ni0yLjgyMmMwLjc5Ny0wLjIyOCwxLjM3MS0wLjkyNCwxLjQ0My0xLjc0OWwyLjI4Ni0yNi4yNDIJQzM3LjY1Niw4LjUwMiwzNy4xOTYsOCwzNi42MDksOEgyNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzMuMSwxM0gyNHY0aDQuOWwtMC4zLDRIMjR2NGg0LjRsLTAuMyw0LjVMMjQsMzAuOXY0LjJsNy45LTIuNkwzMi42LDIxbDAsMEwzMy4xLDEzeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNkNmUwZTkiIGQ9Ik0yNCwxM3Y0aC04LjlsLTAuMy00SDI0eiBNMTkuNCwyMWwwLjIsNEgyNHYtNEgxOS40eiBNMTkuOCwyN2gtNGwwLjMsNS41bDcuOSwyLjZ2LTQuMmwtNC4xLTEuNAlMMTkuOCwyN3oiPjwvcGF0aD48cGF0aCBkPSJNMzMuMSwxM2wtMC41LDhsLTAuNywxMS41TDI0LDM1LjFsLTcuOS0yLjZMMTUuOCwyN2g0bDAuMSwyLjVsNC4xLDEuNGw0LjEtMS40bDAuMy00LjVIMjRoLTQuNGwtMC4yLTRIMjRoNC42bDAuMy00SDI0IGgtOC45bC0wLjMtNEgyNEgzMy4xIE0zNC4xNjQsMTJIMzMuMUgyNGgtOS4yaC0xLjA3OGwwLjA4MSwxLjA3NWwwLjMsNEwxNC4xNzIsMThIMTUuMUgyNGgzLjgyMmwtMC4xNSwySDI0aC00LjZoLTEuMDUxIGwwLjA1MiwxLjA1bDAuMiw0TDE4LjY0OSwyNkgxNS44aC0xLjA1NmwwLjA1OCwxLjA1NGwwLjMsNS41bDAuMDM3LDAuNjgybDAuNjQ5LDAuMjE0bDcuOSwyLjZMMjQsMzYuMTUzbDAuMzEzLTAuMTAzbDcuOS0yLjYgbDAuNjQ0LTAuMjEybDAuMDQxLTAuNjc3bDAuNy0xMS41bDAuNS03Ljk5OEwzNC4xNjQsMTJMMzQuMTY0LDEyeiBNMjAuNzYxLDI2SDI0aDMuMzMxbC0wLjE4NSwyLjc2OUwyNCwyOS44NDNsLTMuMTI4LTEuMDY4IGwtMC4wNzMtMS44MTVMMjAuNzYxLDI2TDIwLjc2MSwyNnoiIG9wYWNpdHk9Ii4wNSI+PC9wYXRoPjxwYXRoIGQ9Ik0zMy4xLDEzbC0wLjUsOGwtMC43LDExLjVMMjQsMzUuMWwtNy45LTIuNkwxNS44LDI3aDRsMC4xLDIuNWw0LjEsMS40bDQuMS0xLjRsMC4zLTQuNUgyNGgtNC40bC0wLjItNEgyNGg0LjZsMC4zLTRIMjQgaC04LjlsLTAuMy00SDI0SDMzLjEgTTMzLjYzMiwxMi41SDMzLjFIMjRoLTkuMmgtMC41MzlsMC4wNCwwLjUzN2wwLjMsNGwwLjAzNSwwLjQ2M0gxNS4xSDI0aDQuMzYxbC0wLjIyNSwzSDI0aC00LjZoLTAuNTI2IGwwLjAyNiwwLjUyNWwwLjIsNGwwLjAyNCwwLjQ3NUgxOS42SDI0aDMuODY2bC0wLjI0MiwzLjYzNEwyNCwzMC4zNzJsLTMuNjE0LTEuMjM0TDIwLjMsMjYuOThMMjAuMjgsMjYuNUgxOS44aC00aC0wLjUyOCBsMC4wMjksMC41MjdsMC4zLDUuNWwwLjAxOSwwLjM0MWwwLjMyNCwwLjEwN2w3LjksMi42TDI0LDM1LjYyNmwwLjE1Ni0wLjA1MWw3LjktMi42bDAuMzIyLTAuMTA2bDAuMDIxLTAuMzM5bDAuNy0xMS41bDAuNS03Ljk5OSBMMzMuNjMyLDEyLjVMMzMuNjMyLDEyLjV6IiBvcGFjaXR5PSIuMDciPjwvcGF0aD4KPC9zdmc+" title="CSS3"/></li>
                    <li><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNmN2RmMWUiIGQ9Ik02LDQyVjZoMzZ2MzZINnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAwMDAxIiBkPSJNMjkuNTM4LDMyLjk0N2MwLjY5MiwxLjEyNCwxLjQ0NCwyLjIwMSwzLjAzNywyLjIwMWMxLjMzOCwwLDIuMDQtMC42NjUsMi4wNC0xLjU4NSBjMC0xLjEwMS0wLjcyNi0xLjQ5Mi0yLjE5OC0yLjEzM2wtMC44MDctMC4zNDRjLTIuMzI5LTAuOTg4LTMuODc4LTIuMjI2LTMuODc4LTQuODQxYzAtMi40MSwxLjg0NS00LjI0NCw0LjcyOC00LjI0NCBjMi4wNTMsMCwzLjUyOCwwLjcxMSw0LjU5MiwyLjU3M2wtMi41MTQsMS42MDdjLTAuNTUzLTAuOTg4LTEuMTUxLTEuMzc3LTIuMDc4LTEuMzc3Yy0wLjk0NiwwLTEuNTQ1LDAuNTk3LTEuNTQ1LDEuMzc3IGMwLDAuOTY0LDAuNiwxLjM1NCwxLjk4NSwxLjk1MWwwLjgwNywwLjM0NEMzNi40NTIsMjkuNjQ1LDM4LDMwLjgzOSwzOCwzMy41MjNDMzgsMzYuNDE1LDM1LjcxNiwzOCwzMi42NSwzOCBjLTIuOTk5LDAtNC43MDItMS41MDUtNS42NS0zLjM2OEwyOS41MzgsMzIuOTQ3eiBNMTcuOTUyLDMzLjAyOWMwLjUwNiwwLjkwNiwxLjI3NSwxLjYwMywyLjM4MSwxLjYwMyBjMS4wNTgsMCwxLjY2Ny0wLjQxOCwxLjY2Ny0yLjA0M1YyMmgzLjMzM3YxMS4xMDFjMCwzLjM2Ny0xLjk1Myw0Ljg5OS00LjgwNSw0Ljg5OWMtMi41NzcsMC00LjQzNy0xLjc0Ni01LjE5NS0zLjM2OCBMMTcuOTUyLDMzLjAyOXoiPjwvcGF0aD4KPC9zdmc+" title="JavaScript"/></li>
                    <li><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTYiIGhlaWdodD0iMTYiCnZpZXdCb3g9IjAgMCA0MCA0MCI+CjxwYXRoIGZpbGw9IiM0ZTdhYjUiIGQ9Ik0yMCwyOC45QzguNTk4LDI4LjksMCwyNS4xNywwLDIwczguNTk4LTksMjAtOXMyMCwzLjgzLDIwLDlTMzEuNDAyLDI4LjksMjAsMjguOXogTTIwLDEzLjkzMiBjLTkuNzI5LDAtMTcuMTI1LDMuMjY2LTE3LjEyNSw2LjEzMVMxMC4yNzEsMjYuMDY4LDIwLDI2LjA2OHMxNy4xMjUtMy4yNjYsMTcuMTI1LTYuMTMxUzI5LjcyOSwxMy45MzIsMjAsMTMuOTMyeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0ZTdhYjUiIGQ9Ik0xMi40MDIsMzhDMTIuNDAxLDM4LDEyLjQwMiwzOCwxMi40MDIsMzhjLTAuOTMxLDAtMS43ODEtMC4yMTYtMi41MjgtMC42NDIgYy0xLjIyLTAuNjk3LTIuMDk1LTEuOTI4LTIuNTMyLTMuNTYyYy0xLjE0Ni00LjI4MiwwLjcwMy0xMS40ODIsNC43MTMtMTguMzQ0QzE2Ljc2LDcuNDA3LDIzLjAwNywyLjAwMywyNy41OTksMi4wMDMgYzAuOTMsMCwxLjc4LDAuMjE2LDIuNTI3LDAuNjQyYzEuMjE4LDAuNjk1LDIuMDk0LDEuOTI1LDIuNTMxLDMuNTU4YzEuMTQ3LDQuMjgyLTAuNzAzLDExLjQ4My00LjcxNSwxOC4zNDUgQzIzLjI0MSwzMi41OTQsMTYuOTk1LDM4LDEyLjQwMiwzOHogTTI3LjU5OSw1LjAwM2MtMi44ODgsMC04LjQwOSw0LjE5My0xMi45NTQsMTEuOTYzYy00LjEyMyw3LjA1Ni01LjMzMiwxMi45MDktNC40MDQsMTYuMDU0IGMwLjI1MSwwLjg0OSwwLjYwNSwxLjQzOCwxLjEyMSwxLjczMmMyLjM2MSwxLjM0OCw4LjgwOS0yLjg1LDEzLjk5MS0xMS43MTdjNC4xMjUtNy4wNTcsNS40Ni0xMi43ODUsNC40MDYtMTYuMDU1IGMtMC4yNzEtMC44NDEtMC42MDQtMS40MzUtMS4xMTktMS43MjhDMjguMzQ3LDUuMDg0LDI4LjAwNiw1LjAwMywyNy41OTksNS4wMDN6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzRlN2FiNSIgZD0iTTI3LjU5OSwzNy45OTdDMjcuNTk5LDM3Ljk5NywyNy41OTksMzcuOTk3LDI3LjU5OSwzNy45OTdjLTQuNTk3LTAuMDAxLTEwLjg0My01LjQwNS0xNS41NDQtMTMuNDQ5IGMtNC4wMS02Ljg2Mi01Ljg1OS0xNC4wNjMtNC43MTMtMTguMzQ0QzcuNzc5LDQuNTcsOC42NTQsMy4zMzksOS44NzMsMi42NDNDMTAuNjIxLDIuMjE2LDExLjQ3MSwyLDEyLjQsMiBjNC41OTUsMCwxMC44NCw1LjQwNiwxNS41NDIsMTMuNDUyYzQuMDExLDYuODYxLDUuODYsMTQuMDYyLDQuNzE0LDE4LjM0NWMtMC40MzgsMS42MzMtMS4zMTMsMi44NjMtMi41MywzLjU1OCBDMjkuMzc5LDM3Ljc4MSwyOC41MjgsMzcuOTk3LDI3LjU5OSwzNy45OTd6IE0xMi40LDVjLTAuNDA3LDAtMC43NDcsMC4wODItMS4wNCwwLjI0OGMtMC41MTUsMC4yOTQtMC44NzQsMC44ODEtMS4xMiwxLjczMiBjLTAuOTI4LDMuMjA4LDAuMjgxLDguOTk5LDQuNDA0LDE2LjA1NWM0LjU0MSw3Ljc2OSwxMC4wNjMsMTEuOTYyLDEyLjk1NCwxMS45NjJsMCwwYzAuNDA4LDAsMC43NDgtMC4wODIsMS4wNDEtMC4yNDkgYzAuNTE0LTAuMjkyLDAuODgzLTAuODc2LDEuMTE4LTEuNzI4YzAuODY3LTMuMTQ2LTAuMjgxLTktNC40MDUtMTYuMDU1QzIwLjgxMSw5LjE5NCwxNS4yOSw1LDEyLjQsNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjOGJiN2YwIiBkPSJNMjMuNSwyMGMwLDEuOTM1LTEuNTY1LDMuNS0zLjUsMy41cy0zLjUtMS41NjUtMy41LTMuNXMxLjU2NS0zLjUsMy41LTMuNVMyMy41LDE4LjA2NSwyMy41LDIweiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0ZTdhYjUiIGQ9Ik0yMCwyNGMtMi4yMDYsMC00LTEuNzk0LTQtNHMxLjc5NC00LDQtNHM0LDEuNzk0LDQsNFMyMi4yMDYsMjQsMjAsMjR6IE0yMCwxN2MtMS42NTQsMC0zLDEuMzQ2LTMsMyBzMS4zNDYsMywzLDNzMy0xLjM0NiwzLTNTMjEuNjU0LDE3LDIwLDE3eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM4YmI3ZjAiIGQ9Ik0yMCwyOC4wNjhDOS4zNDYsMjguMDY4LDEsMjQuNTI0LDEsMjBzOC4zNDYtOC4wNjgsMTktOC4wNjhTMzksMTUuNDc2LDM5LDIwIFMzMC42NTQsMjguMDY4LDIwLDI4LjA2OHogTTIwLDEyLjkzMmMtOS43NTcsMC0xOCwzLjIzNy0xOCw3LjA2OHM4LjI0Myw3LjA2OCwxOCw3LjA2OFMzOCwyMy44MzIsMzgsMjBTMjkuNzU3LDEyLjkzMiwyMCwxMi45MzJ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzhiYjdmMCIgZD0iTTEyLjQwMiwzN0MxMi40MDEsMzcsMTIuNDAyLDM3LDEyLjQwMiwzN2MtMC43NTUsMC0xLjQzOC0wLjE3Mi0yLjAzMy0wLjUxMSBjLTAuOTk2LTAuNTY5LTEuNjg5LTEuNTYyLTIuMDYyLTIuOTUyYy0xLjA4MS00LjAzNywwLjcyOS0xMC45MzgsNC42MS0xNy41ODFDMTcuMzc5LDguMzMsMjMuNDE2LDMuMDAzLDI3LjU5OSwzLjAwMyBjMC43NTQsMCwxLjQzOCwwLjE3MiwyLjAzMiwwLjUxMWMwLjk5NSwwLjU2OCwxLjY4OCwxLjU2LDIuMDYxLDIuOTQ4YzEuMDgxLDQuMDM3LTAuNzI5LDEwLjkzOC00LjYxMiwxNy41ODIgQzIyLjYyMSwzMS42NzIsMTYuNTg2LDM3LDEyLjQwMiwzN3ogTTI3LjU5OSw0LjAwM2MtMy43ODQsMC05LjU5NSw1LjIzOS0xMy44MTcsMTIuNDU4Yy0zLjY5NSw2LjMyNS01LjUwNywxMy4wODMtNC41MDgsMTYuODE4IGMwLjMwMSwxLjEyMywwLjgzNiwxLjkxLDEuNTkyLDIuMzQyQzExLjMwNywzNS44NzIsMTEuODIzLDM2LDEyLjQwMSwzNmMzLjc4NSwwLDkuNTk1LTUuMjQsMTMuODE0LTEyLjQ2MSBjMy42OTctNi4zMjYsNS41MS0xMy4wODUsNC41MDktMTYuODE4Yy0wLjMtMS4xMjEtMC44MzUtMS45MDgtMS41OS0yLjMzOEMyOC42OTMsNC4xMzEsMjguMTc3LDQuMDAzLDI3LjU5OSw0LjAwM3oiPjwvcGF0aD48Zz48cGF0aCBmaWxsPSIjOGJiN2YwIiBkPSJNMjcuNTk5LDM2Ljk5N0MyNy41OTksMzYuOTk3LDI3LjU5OSwzNi45OTcsMjcuNTk5LDM2Ljk5N2MtNC4xODctMC4wMDEtMTAuMjI0LTUuMzI3LTE0LjY4MS0xMi45NTMgQzkuMDM2LDE3LjQwMSw3LjIyNywxMC41LDguMzA4LDYuNDYzYzAuMzcyLTEuMzksMS4wNjUtMi4zODMsMi4wNjItMi45NTJDMTAuOTY0LDMuMTcyLDExLjY0NywzLDEyLjQsMyBjNC4xODUsMCwxMC4yMjEsNS4zMjgsMTQuNjc5LDEyLjk1NmMzLjg4Myw2LjY0Miw1LjY5MiwxMy41NDMsNC42MSwxNy41ODJjLTAuMzcxLDEuMzg5LTEuMDY0LDIuMzgxLTIuMDU5LDIuOTQ4IEMyOS4wMzYsMzYuODI1LDI4LjM1MywzNi45OTcsMjcuNTk5LDM2Ljk5N3ogTTEyLjQsNGMtMC41NzcsMC0xLjA5NCwwLjEyOC0xLjUzNSwwLjM3OWMtMC43NTYsMC40MzItMS4yOTEsMS4yMTktMS41OTIsMi4zNDIgYy0wLjk5OSwzLjczNCwwLjgxMywxMC40OTMsNC41MDgsMTYuODE4QzE4LDMwLjc1NywyMy44MTIsMzUuOTk2LDI3LjU5OSwzNS45OTdsMCwwYzAuNTc4LDAsMS4wOTUtMC4xMjgsMS41MzYtMC4zOCBjMC43NTQtMC40MywxLjI4OS0xLjIxNywxLjU4OS0yLjMzOGMxLTMuNzM1LTAuODEyLTEwLjQ5NC00LjUwOC0xNi44MThDMjEuOTk2LDkuMjQxLDE2LjE4Nyw0LDEyLjQsNHoiPjwvcGF0aD48L2c+Cjwvc3ZnPg==" title="React Js"/></li>
                    <li><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNmMDYyOTIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTI0LjA0Miw0LjAzMkMzNS4wNjUsNC4wMzIsNDQsMTIuOTY3LDQ0LDIzLjk5CWMwLDExLjAyMi04LjkzNSwxOS45NTgtMTkuOTU4LDE5Ljk1OGMtMTEuMDIyLDAtMTkuOTU4LTguOTM1LTE5Ljk1OC0xOS45NThDNC4wODUsMTIuOTY3LDEzLjAyLDQuMDMyLDI0LjA0Miw0LjAzMkwyNC4wNDIsNC4wMzJ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzYuNTYxLDEyLjU3NGMtMC45MDQtMy41NDUtNi43ODEtNC43MS0xMi4zNDMtMi43MzRjLTMuMzEsMS4xNzYtNi44OTQsMy4wMjItOS40NzEsNS40MzIgYy0zLjA2NCwyLjg2Ni0zLjU1Miw1LjM2LTMuMzUxLDYuNDAyYzAuNzEsMy42NzcsNS43NDksNi4wODEsNy44Miw3Ljg2NXYwLjAxMWMtMC42MTEsMC4zMDEtNS4wODEsMi41NjMtNi4xMjcsNC44NzYgYy0xLjEwNCwyLjQ0LDAuMTc2LDQuMTkxLDEuMDIzLDQuNDI3YzIuNjI1LDAuNzMsNS4zMTgtMC41ODMsNi43NjYtMi43NDJjMS4zOTctMi4wODQsMS4yODEtNC43NzQsMC42NzQtNi4xMTMgYzAuODM3LTAuMjIxLDEuODE0LTAuMzIsMy4wNTQtMC4xNzVjMy41MDEsMC40MDksNC4xODgsMi41OTUsNC4wNTYsMy41MWMtMC4xMzEsMC45MTUtMC44NjYsMS40MTgtMS4xMTEsMS41NyBjLTAuMjQ2LDAuMTUyLTAuMzIsMC4yMDUtMC4zLDAuMzE3YzAuMDMsMC4xNjQsMC4xNDMsMC4xNTgsMC4zNTMsMC4xMjNjMC4yODgtMC4wNDksMS44MzgtMC43NDQsMS45MDUtMi40MzMgYzAuMDg0LTIuMTQ0LTEuOTctNC41NDItNS42MDgtNC40OGMtMS40OTgsMC4wMjYtMi40NCwwLjE2OC0zLjEyMSwwLjQyMmMtMC4wNS0wLjA1Ny0wLjEwMi0wLjExNC0wLjE1NC0wLjE3MSBjLTIuMjQ5LTIuNC02LjQwNy00LjA5Ny02LjIzMS03LjMyM2MwLjA2NC0xLjE3MywwLjQ3Mi00LjI2MSw3Ljk4OS04LjAwN2M2LjE1OC0zLjA2OSwxMS4wODgtMi4yMjQsMTEuOTQtMC4zNTMgYzEuMjE3LDIuNjc0LTIuNjM1LDcuNjQzLTkuMDMsOC4zNmMtMi40MzcsMC4yNzMtMy43Mi0wLjY3MS00LjAzOS0xLjAyM2MtMC4zMzYtMC4zNy0wLjM4Ni0wLjM4Ny0wLjUxMS0wLjMxNyBjLTAuMjA0LDAuMTEzLTAuMDc1LDAuNDQsMCwwLjYzNWMwLjE5MSwwLjQ5NywwLjk3NSwxLjM3OCwyLjMxLDEuODE3YzEuMTc1LDAuMzg2LDQuMDM2LDAuNTk3LDcuNDk2LTAuNzQxIEMzNC40MjQsMjAuMjI5LDM3LjQ1LDE2LjA1OSwzNi41NjEsMTIuNTc0eiBNMjAuMDc2LDMwLjYzOGMwLjI5LDEuMDc0LDAuMjU4LDIuMDc2LTAuMDQxLDIuOTgzYy0wLjAzMywwLjEwMS0wLjA3LDAuMi0wLjExLDAuMjk5IGMtMC4wNCwwLjA5OC0wLjA4MywwLjE5Ni0wLjEyOSwwLjI5MmMtMC4yMzEsMC40OC0wLjU0MiwwLjkyOS0wLjkyMiwxLjM0NGMtMS4xNiwxLjI2NS0yLjc4LDEuNzQzLTMuNDc0LDEuMzQgYy0wLjc1LTAuNDM1LTAuMzc0LTIuMjE4LDAuOTctMy42NGMxLjQ0Ni0xLjUyOSwzLjUyNy0yLjUxMiwzLjUyNy0yLjUxMmwtMC4wMDMtMC4wMDZDMTkuOTU0LDMwLjcwNSwyMC4wMTUsMzAuNjcyLDIwLjA3NiwzMC42Mzh6Ij48L3BhdGg+Cjwvc3ZnPg==" title="Sass/Scss"/></li>
                </ul>
            </div>
            </Fade>
        </div>
    );
}