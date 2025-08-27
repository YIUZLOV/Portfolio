import './Footer.scss'
import logo from '../../Images/logo.png'
import { Menu } from '../Menu/Menu'
import { Soc1als } from '../Soc1als/Soc1als'

export const Footer = () => {

    return (
        <footer className=' footer'>
            <img className='footer__logo' src={logo} alt="Логотип" />
            <Menu position={'footer-nav'} />
            <div className='footer__contacts'>
            <Soc1als />
            <div className='footer__contact'>
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16l2 2v12l-2 2H4l-2-2V6l2-2Z" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="m22 6-10 7L2 6" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a 
                    href='mailto:yiuzlov@yandex.ru' 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='h6'
                >
                    yiuzlov@yandex.ru
                </a>
            </div>
            </div>
            <div className='footer__copyright'>
                <p>© Узлов Е. И.  2025г.</p>
            </div>
        </footer>
    )
}