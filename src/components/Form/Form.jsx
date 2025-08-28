import  { useForm }  from  "react-hook-form";
import emailjs from 'emailjs-com';
import { useState, useEffect } from "react";
import './Form.scss'

const sendEmail = (data) => {
    return emailjs.send(
        'service_kabb0gm',
        'template_2b5o96l',
        data,
        'eJeD0ObxksisVxxiF'
    );
};

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (data) => {
        setIsLoading(true);
        setErrorMessage('');
        setSuccessMessage('');

        try {
            await sendEmail(data);
            setSuccessMessage('Сообщение успешно отправлено!');
            reset();
            } catch (error) {
                setErrorMessage('Ошибка при отправке: ' + error.text);
            } finally {
                setIsLoading(false);
            }
        }

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);


    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setErrorMessage('');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errorMessage]);

    return (
        <form 
            className="form" 
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="form__group">
                <label className="form__group__label" htmlFor="name">Имя: <span>*</span></label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Иван Иванов"
                    {...register('name', {
                        required: 'Обязательное поле',
                        minLength: { value: 2, message: 'Минимум 2 символа' },
                        maxLength: { value: 30, message: 'Максимум 30 символов' }
                    })}
                    className={`form__group__input ${errors.name ? 'form__group__input--error' : ''}`}
                />
                {errors.name && <span className="form__group__error">{errors.name.message}</span>}
            </div>

            <div className="form__group">
                <label className="form__group__label" htmlFor="email">Email: <span>*</span></label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.ru"
                    {...register('email', {
                        required: 'Обязательное поле',
                        pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Некорректный email'
                        }
                    })}
                    className={`form__group__input ${errors.email ? 'form__group__input--error' : ''}`}
                />
                {errors.email && <span className="form__group__error">{errors.email.message}</span>}
            </div>

            <div className="form__group">
                <label className="form__group__label" htmlFor="phone">Телефон: <span>*</span></label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    {...register('phone', {
                        required: 'Обязательное поле',
                        pattern: {
                        value: /^(?:\+7|8)[\s\-()]*\d{3,5}[\s\-()]*\d{3}[\s\-()]*\d{2}[\s\-()]*\d{2}$/,
                        message: 'Некорректный формат номера'
                        }
                    })}
                    className={`form__group__input ${errors.phone ? 'form__group__input--error' : ''}`}
                />
                {errors.phone && <span className="form__group__error">{errors.phone.message}</span>}
            </div>

            <div className="form__group">
                <label className="form__group__label" htmlFor="option">Выберите тип проекта: <span>*</span></label>
                <select
                    id="option"
                    name="option"
                    {...register('option', { required: 'Выберите вариант' })}
                    className={`form__group__input form__group__select  ${errors.option ? 'form__group__input--error' : ''}`}
                >
                    <option value="">-- Выберите --</option>
                    <option value="Business Card Websites">Сайт визитка</option>
                    <option value="E-commerce Websites">Интернет магазин</option>
                    <option value="News Portals">Новостной портал</option>
                    <option value="Corporate Websites">Многостраничный сайт</option>
                </select>
                {errors.option && <span className="form__group__error">{errors.option.message}</span>}
            </div>
            <button 
                type="submit" 
                className="form__submit"
                disabled={isLoading}
            >
                {isLoading ? 'Отправка...' : 'Отправить'}
            </button>
            <div className="form__messages">
                {errorMessage && (
                    <div className="form__error-message">
                        <p>Ошибка при отправке. Попробуйте позже.</p>
                    </div>
                )}
                {successMessage && (
                    <div className="form__success-message">
                        {successMessage}
                    </div>
                )}
            </div>
        </form>
    );
}