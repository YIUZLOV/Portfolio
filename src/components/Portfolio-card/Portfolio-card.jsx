import './Portfolio-card.scss'
import img from '../../Images/portfolio/wrapper.jpg'
import imgAlternative from '../../Images/portfolio/webp/wrapper.webp'
import { useState } from 'react'

export const PortfolioCard = ({
    image = {img},
    imageAlternative = {imgAlternative},
    title = 'New Project', 
    category = 'Lending', 
    description = 'Нет информации', 
    stack = 'HTML, CSS'
}) => {
    
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className='card' 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`card__inner ${isHovered ? 'fade-out' : 'fade-in'}`}>
                <picture className='card__image'>
                    <source srcset={imageAlternative} type="image/webp" />
                    <img  src={image} alt="Обложка проекта" loading='lazy'/>
                </picture>
                <div className='card__description'>
                    <p className='card__title'>{title}</p>
                    <p className='card__category'>{category}</p>
                </div>
            </div>
            <div className={`card__overlay ${isHovered ? 'fade-in' : 'fade-out'}`}>
                <div className='card__overlay__description'>
                    <p>Описание проекта</p>
                    <p className='card__overlay__content'>{description}</p>
                </div>
                <div className='card__overlay__description'>
                    <p>Стек технологий</p>
                    <p className='card__overlay__content'>{stack}</p>
                </div>
            </div>
        </div>
    )
}