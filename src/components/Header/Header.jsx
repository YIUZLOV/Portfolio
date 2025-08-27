import { useState } from 'react'
import './Header.scss'
import logo from '../../Images/logo.png'
import { Menu } from '../Menu/Menu'
import { scrollToSection } from '../../utils/scroll'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const onClickBurger = () => {
        setIsOpen((prevState => !prevState))
    }

    return (
        <header className = 'container header' id='header'>
            <a  href="/">
                <img className='header__logo' src={logo} alt="Логотип" />
            </a>
            <div className={`header__overlay ${isOpen ? 'is-active' : ''}`}>
                <Menu position={'header-nav'} onClose={() => setIsOpen(false)}/>
            </div>
            <button 
                className={`burger-button visible-mobile ${isOpen ? 'is-active' : ''}`} onClick={onClickBurger}
            >
                <span className="burger-button__line"></span>
                <span className="burger-button__line"></span>
                <span className="burger-button__line"></span>
            </button>
            <button onClick={() => scrollToSection('contacts')} className='header__button'>Связаться</button>
        </header>
    )
}