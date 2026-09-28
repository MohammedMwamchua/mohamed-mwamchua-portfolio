import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Journey from './components/Journey.jsx'
import Contact from './components/Contact.jsx'
import BackToTop from './components/BackToTop.jsx'
import MeshBackground from './components/MeshBackground.jsx'

export default function App() {
  return (
    <>
      <MeshBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Journey />
      </main>
      <Contact />
      <BackToTop />
    </>
  )
}
