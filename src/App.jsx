import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    //  selection:bg-cyan-300 selection:text-cyan-900
    <div className='overflow-x-hidden text-neutral-300 antialiased'> 
    <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
    
    <div className='container mx-auto -px-8'></div>
      
      <section id='home'  className="scroll-mt-20">
        <Navbar />
      </section>

      <Hero />

      <section id='about'  className="scroll-mt-20">
        <About />
      </section>
      <section id='skills'  className="scroll-mt-20">
        <Technologies />
      </section>
      <section id='education'  className="scroll-mt-20">
        <Education />
      </section>
      <section id='projects'  className="scroll-mt-20">
        <Projects />
      </section>
      <section id='contact'  className="scroll-mt-20">
        <Contact />
      </section>
    </div>
    
  )
}

export default App
