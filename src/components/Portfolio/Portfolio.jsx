import { useState } from 'react';
import './Portfolio.scss';
import { PortfolioCard } from '../Portfolio-card/Portfolio-card';
import wrapperFutureTech from '../../Images/portfolio/FutureTech1.jpg'
import wrapperColorsMarket from '../../Images/portfolio/ColorsMarket.jpg'
import wrapperCoffeTime from '../../Images/portfolio/CofeeTime.jpg'
import wrapperPersonalSite from '../../Images/portfolio/PersonalSite.jpg'
import wrapperChessClub from '../../Images/portfolio/ChessClub.jpg'
import wrapper from '../../Images/portfolio/Обложка.jpg'


const projects = [
    {
        id: 1, 
        image: wrapperFutureTech, 
        title: 'Сайт для IT-компании', 
        categoty: 'Corporate Website', 
        description: 'Многостраничный сайт разработанный для международной IT-компании. На сайте имеются такие элементы как: форма обратной связи, блог, отзывы, галерея и видео.', 
        stack: 'HTML, CSS, SASS, JS'
    },
    {
        id: 2, 
        image: wrapperColorsMarket, 
        title: 'Интернет-магазин для дизайна', 
        categoty: 'Online Store', 
        description: 'Интернет-магазин товаров для ремонта/обустройства помещений. Разные категории товаров. Имеется фильтрация товаров по категориям, новинкам, наличию. Сортировка по цене, остаткам. Корзина товаров с полным функционалом.', 
        stack: 'HTML, CSS, SASS, JS'},
    {
        id: 3, 
        image: wrapperCoffeTime, 
        title: 'Сайт-визитка кофейни', 
        categoty: 'Business Card Website', 
        description: 'Сайт-визитка для кофейни. Представляет информацию о самой кофейне, а так же содержит ассортимент продукции', 
        stack: 'HTML, CSS, JS'
    },
    {
        id: 4, 
        image: wrapperPersonalSite, 
        title: 'Сайт-визитка разработчика', 
        categoty: 'Business Card Website', 
        description: 'Сайт-визитка Frontend-разработчика. Сайт наполнен интерактивными элементами, карточками портфолио, информацией о самом разработчике. Так же имеется форма обратной связи.', 
        stack: 'HTML, CSS, SASS, JS, React, Vite'
    },
    {
        id: 5, 
        image: wrapperChessClub, 
        title: 'Сайт-визитка шахматного клуба', 
        categoty: 'Business Card Website', 
        description: 'Сайт-визитка шахматного клуба, информирует посетителей о ближайшем мероприятии. Так же имеется информация о выдающихся представителях этой игры. На сайте реализованы такие элемены как: 2 различных карусели, бегущая строка.', 
        stack: 'HTML, CSS, JS'
    },
    {
        id: 6, 
        image: wrapper, 
        title: 'Ваш крутой проект!', 
        categoty: 'Lending', 
        description: 'Тут может оказаться Ваш проект. Оставляйте заявку и получите уникальный, продающий, адаптивный и просто красивый сайт!', 
        stack: 'HTML, CSS, SASS, JS, TS, React, Vite'
    },
]

export const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleNext = () => {
        if (currentIndex < projects.length - 1) {
        setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <section className='portfolio' id='portfolio'>
            <h2 className="portfolio__title">Портфолио</h2>
            <div className='portfolio__wrapper'>
                <div 
                    className='portfolio__list'
                    style={{transform: `translateX(calc(-${currentIndex * (100)}% - ${currentIndex * 40}px))`}}                   
                >
                    {projects.map((project) => (
                        <PortfolioCard
                            key={project.id}
                            image={project.image}
                            title={project.title}
                            category={project.categoty}
                            description={project.description}
                            stack={project.stack}
                        />
                    ))}
                </div>
                <div className='portfolio__controls'>
                    <button 
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className='portfolio__button'
                    >
                        Назад
                    </button>
                    <button 
                        onClick={handleNext}
                        disabled={currentIndex === projects.length - 1}
                        className='portfolio__button'
                    >
                        Вперед
                    </button>
                </div>
            </div>
        </section>
    )
}