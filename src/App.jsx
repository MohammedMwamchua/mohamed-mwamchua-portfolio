import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#work">Skip to my work</a>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
