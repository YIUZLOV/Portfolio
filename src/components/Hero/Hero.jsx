import './Hero.scss'
import { Soc1als } from '../Soc1als/Soc1als'
import hero from '../../Images/hero-image.jpg'
import { scrollToSection } from '../../utils/scroll'

export const Hero = () => {

    return (
        <div className="hero container">
            <div className="hero__content">
                <div className="hero__description">
                    <p className='h5'>Привет, меня зовут</p>
                    <p className='h4'>Евгений Узлов</p>
                </div>
                <h1 className=" hero__title h1">Frontend Developer</h1>
                <Soc1als />
                <div className='hero__actions'>
                    <button onClick={() => scrollToSection('contacts')} className='hero__button'>Связаться</button>
                    <button onClick={() => scrollToSection('portfolio')} className='hero__button'>Каталог проектов</button>
                </div>
                <div className="hero__achievements">
                    <div className="hero__achievements__item">
                        <p className="hero__achievements__value h4">2 года</p>
                        <p className="hero__achievements__category h6">успешного опыта</p>
                    </div>
                    <div className="hero__achievements__item">
                        <p className="hero__achievements__value h4">100%</p>
                        <p className="hero__achievements__category h6">проектов сданы в срок</p>
                    </div>
                    <div className="hero__achievements__item">
                        <p className="hero__achievements__value h4">95%</p>
                        <p className="hero__achievements__category h6">довольных клиентов</p>
                    </div>
                </div>
            </div>
                <img className="hero__image"
                    src={hero} 
                    alt="" 
                    width='618' 
                    height='781' 
                    loading='lazy'
                />
        </div>
    )
}