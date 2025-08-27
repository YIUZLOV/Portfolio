import './Menu.scss'
import { scrollToSection } from '../../utils/scroll'

export const Menu = ({position, onClose}) => {

    const menuItems = [
        { id: 1, title: 'Услуги', path: 'services' },
        { id: 2, title: 'Обо мне', path: 'about-me' },
        { id: 3, title: 'Навыки', path: 'skills' },
        { id: 4, title: 'Портфолио', path: 'portfolio' }
    ];

    return (
        <nav className={`nav ${position}`}>
            {menuItems.map((item) => (
                <a
                    key={item.id}
                    className={'nav-link h6'}
                    href={item.path}
                    onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.path)
                        onClose()
                    }}
                >
                    {item.title}
                </a>
            ))}
        </nav>
    )
}