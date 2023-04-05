import './Footer.css';

export default function Footer({}) {

    // current year
    const year = new Date().getFullYear();

    return (
        <div className='Footer' id='footer'>
            <div className='footer__social'>
                <a href='https://www.linkedin.com/in/kevin-kuch/' className="footer__social-icon" target='_blank' rel='noreferrer'>
                    {/* with unicons */}
                    <i className='uil uil-linkedin'></i>
                    {/* github */}
                    <a href="https://github.com/KevinKuch" className="footer__social-icon" target='_blank' rel='noreferrer'>
                    <i className='uil uil-github'></i>
                    </a>
                </a>
            </div>
            <div className="copyright">
                <p>Tous droits réservés © {year} Kevin Kuch</p>
            </div>
        </div>
    );
}