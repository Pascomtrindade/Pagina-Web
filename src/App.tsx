import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'        // Quem Somos
import Paroco from './components/Paroco'      // Pároco
import Schedule from './components/Schedule'  // Horários
import Ministries from './components/Ministries' // Pastorais
import Events from './components/Events'      // Agenda
import Location from './components/Location'  // Localização
import Contact from './components/Contact'    // Contato
import Sacraments from './components/Sacraments' // Sacramentos
import Donations from './components/Donations'   // Contribua
import Footer from './components/Footer'
import FloatingWhats from './components/FloatingWhats'

export default function App(){
  return (
    <div className="text-slate-800">
      <Navbar />
      <Hero />

      {/* Ordem igual ao menu */}
      <About />        {/* Quem Somos */}
      <Paroco />       {/* Pároco */}
      <Schedule />     {/* Horários */}
      <Ministries />   {/* Pastorais */}
      <Events />       {/* Agenda */}
      <Location />     {/* Localização */}
      <Contact />      {/* Contato */}
      <Sacraments />   {/* Sacramentos */}
      <Donations />    {/* Contribua */}

      <Footer />
      <FloatingWhats />
    </div>
  )
}
