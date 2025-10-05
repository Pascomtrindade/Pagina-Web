import { useState } from 'react'
const logo = '/logo.png'
import { parish } from '../data/config'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const itemsDesktop = [
    { href: '#sobre', label: 'Quem Somos' },
    { href: '#paroco', label: 'Pároco' },
    { href: '#horarios', label: 'Horários' },
    { href: '#ministerios', label: 'Pastorais' },
    { href: '#eventos', label: 'Agenda' },
    { href: '#local', label: 'Localização' },
    { href: '#contato', label: 'Contato' },
    { href: '#sacramentos', label: 'Sacramentos' },
    { href: '#doacoes', label: 'Contribua', accent: true },
  ]

  const itemsMobile = [
    'sobre',
    'paroco',
    'horarios',
    'ministerios',
    'eventos',
    'doacoes',
    'sacramentos',
    'local',
    'contato',
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 mb-2 flex items-center justify-between rounded-2xl bg-white/85 backdrop-blur shadow-md px-4 py-3">
          <a href="#inicio" className="flex items-center gap-3 group" aria-label="Ir para o início">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white shadow overflow-hidden">
              <img src={logo} alt="Logo da paróquia" className="h-10 w-10 object-contain" />
            </span>
            <div className="leading-tight">
              <div className="font-extrabold tracking-tight">
                {parish.name?.split(' ')[1]} {parish.name?.split(' ')[2]}
              </div>
              <div className="text-xs text-slate-500">{parish.city}</div>
            </div>
          </a>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {itemsDesktop.map((item) =>
              item.accent ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center rounded-xl bg-yellow-400/90 px-3 py-2 text-slate-900 hover:bg-yellow-400 shadow"
                >
                  {item.label}
                </a>
              ) : (
                <a key={item.href} href={item.href} className="hover:text-blue-700">
                  {item.label}
                </a>
              ),
            )}
          </nav>

          {/* TOGGLE MOBILE */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 hover:bg-white"
            aria-label="Abrir menu"
            onClick={() => setOpen((o) => !o)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* NAV MOBILE */}
      {open && (
        <div className="md:hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white/85 backdrop-blur rounded-2xl shadow px-6 py-4 mb-2 text-sm font-medium grid grid-cols-1 gap-3">
              {itemsMobile.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-blue-700 capitalize"
                >
                  {id === 'sobre' && 'Quem Somos'}
                  {id === 'paroco' && 'Pároco'}
                  {id === 'horarios' && 'Horários'}
                  {id === 'ministerios' && 'Pastorais'}
                  {id === 'eventos' && 'Agenda'}
                  {id === 'doacoes' && 'Contribua'}
                  {id === 'sacramentos' && 'Sacramentos'}
                  {id === 'local' && 'Localização'}
                  {id === 'contato' && 'Contato'}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
