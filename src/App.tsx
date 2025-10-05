import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Paroco from './components/Paroco'
import About from './components/About'
import Schedule from './components/Schedule'
import Ministries from './components/Ministries'
import Events from './components/Events'
import Location from './components/Location'
import Contact from './components/Contact'
import Donations from './components/Donations'
import Footer from './components/Footer'
import FloatingWhats from './components/FloatingWhats'

export default function App(){
  return (
    <div className="text-slate-800">
      <Navbar/>
      <Hero/>
      <About/>
      <Paroco/>
      <Schedule/>
      <Ministries/>
      <Events/>
      <Location/>
      <Contact/>
      <Donations/>
      <Footer/>
      <FloatingWhats/>
    </div>
  )
}
