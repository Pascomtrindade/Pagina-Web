import { useState } from 'react'
const logo = '/logo.png'
import { parish } from '../data/config'
import { Menu } from 'lucide-react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 mb-2 flex items-center justify-between rounded-2xl bg-white/85 backdrop-blur shadow-md px-4 py-3">
          <a href="#inicio" className="flex items-center gap-3 group">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white shadow overflow-hidden">
              <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
            </span>
            <div className="leading-tight">
              <div className="font-extrabold tracking-tight">{parish.name.split(' ')[1]} {parish.name.split(' ')[2]}</div>
              <div className="text-xs text-slate-500">{parish.city}</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#sobre" className="hover:text-blue-700">Sobre</a>
            <a href="#paroco" className="hover:text-blue-700">Pároco</a>
            <a href="#horarios" className="hover:text-blue-700">Horários</a>
            <a href="#ministerios" className="hover:text-blue-700">Pastorais</a>
            <a href="#eventos" className="hover:text-blue-700">Eventos</a>
            <a href="#local" className="hover:text-blue-700">Localização</a>
            <a href="#contato" className="hover:text-blue-700">Contato</a>
            <a href="#doacoes" className="inline-flex items-center rounded-xl bg-yellow-400/90 px-3 py-2 text-slate-900 hover:bg-yellow-400 shadow">Doações</a>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 hover:bg-white" aria-label="Abrir menu" onClick={()=>setOpen((o)=>!o)}>
            <Menu size={22}/>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white/85 backdrop-blur rounded-2xl shadow px-6 py-4 mb-2 text-sm font-medium grid grid-cols-1 gap-3">
              {['sobre','horarios','ministerios','eventos','local','contato','doacoes'].map(id => (
                <a key={id} href={`#${id}`} onClick={()=>setOpen(false)} className="hover:text-blue-700 capitalize">{id}</a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
