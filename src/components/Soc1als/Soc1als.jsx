import './Soc1als.scss'

const icons = [
    {
        id: 1,
        name: 'Whatsapp',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill="#fff" d="m0 48 3-12A24 24 0 0 1 41 7a24 24 0 0 1-28 38L0 48Zm13-8c4 2 7 4 11 4a20 20 0 1 0-16-9l-2 7 7-2Zm23-11h-1l-4-2h-2l-1 2-2 1-5-3-3-4v-2l1-1 1-1v-1l-2-4-1-1h-1l-2 1c-1 0-2 2-2 5l2 6c1 0 5 6 10 9l4 1h4l4-3v-3Z"/></svg>
    },
    {
        id: 2, 
        name: 'vk',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 48 48" fill="none"><path fill="#fff" fillRule="evenodd" d="M3.374 3.374C0 6.748 0 12.18 0 23.04v1.92c0 10.861 0 16.292 3.374 19.666C6.748 48 12.18 48 23.04 48h1.92c10.861 0 16.292 0 19.666-3.374C48 41.252 48 35.82 48 24.96v-1.92c0-10.861 0-16.292-3.374-19.666C41.252 0 35.82 0 24.96 0h-1.92C12.179 0 6.748 0 3.374 3.374ZM8.1 14.6c.26 12.48 6.5 19.98 17.44 19.98h.62v-7.14c4.02.4 7.06 3.34 8.28 7.14h5.68c-1.56-5.68-5.66-8.82-8.22-10.02 2.56-1.48 6.16-5.08 7.02-9.96h-5.16c-1.12 3.96-4.44 7.56-7.6 7.9v-7.9H21v13.84c-3.2-.8-7.24-4.68-7.42-13.84H8.1Z" clipRule="evenodd"/></svg>
    },
    {
        id: 3, 
        name: 'telegram',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="47" height="48" viewBox="0 0 48 48" fill="none"><path fill="#fff" fillRule="evenodd" d="M48 24a24 24 0 1 1-48 0 24 24 0 0 1 48 0Zm-23-6a1142 1142 0 0 0-16 7l2 1 1 1 3 1 3-1a248 248 0 0 1 11-7l-6 6-1 1c-2 1-2 2 0 4l2 1 3 2 1 1 3 1 1-2a284 284 0 0 0 3-19l-1-1-9 4Z" clipRule="evenodd"/></svg>
    },
    {
        id: 4, 
        name: 'mail',
        icon: <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16l2 2v12l-2 2H4l-2-2V6l2-2Z" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m22 6-10 7L2 6" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
]

export const Soc1als = () => {
const getLink = (name) => {
    switch(name.toLowerCase()) {
        case 'whatsapp':
            return 'https://wa.me/79111586445'
        case 'vk':
            return 'https://vk.com/write151724589'
        case 'telegram':
            return 'https://t.me/evgeniy_uzlov'
        case 'mail':
            return 'mailto:yiuzlov@yandex.ru'
        default:
            return '#'
        }
    }

    return (
        <div className="soc1als">
            {icons.map((element) => (
                <a 
                    href={getLink(element.name)} 
                    className='soc1als__item' 
                    key={element.id}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {element.icon}
                </a>
            ))}
        </div>
    )
}