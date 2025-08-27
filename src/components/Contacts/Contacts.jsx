import { Form } from '../Form/Form'
import './Contacts.scss'

export const Contacts = () => {

    return (
        <section className='contacts' id='contacts'>
            <h2 className="contacts__title">Связаться со мной</h2>
            <p className="contacts__subtitle h6">Пожалуйста заполните форму. Я свяжусь с Вами в течении дня.</p>
            <Form />
        </section>
    )
}