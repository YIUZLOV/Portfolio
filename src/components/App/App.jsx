import { Header } from '../Header/Header.jsx';
import { Hero } from '../Hero/Hero.jsx';
import { Services } from '../Services/Services.jsx';
import { AboutMe } from '../AboutMe/AboutMe.jsx';
import { Portfolio } from '../Portfolio/Portfolio.jsx';
import { Contacts } from '../Contacts/Contacts.jsx';
import { Footer } from '../Footer/Footer.jsx';
import { ScrollToTopButton } from '../ScrollToTopButton/ScrollToTopButton.jsx';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className='container'>
        <Services />
        <AboutMe />
        <Portfolio />
        <Contacts />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default App
