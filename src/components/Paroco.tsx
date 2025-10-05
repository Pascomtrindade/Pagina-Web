// src/components/Paroco.tsx
import { padre } from '../data/config'
import { Mail, Phone, Calendar } from 'lucide-react'

export default function Paroco(){
  const photo = padre.photo || '/padre.jpg'

  return (
    <section id="paroco" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Padre (Pároco)</h2>
          {padre.since && <p className="mt-2 text-slate-600">{padre.since}</p>}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Foto */}
          <div className="lg:col-span-1">
            <div className="overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow">
              <img src={photo} alt={`Foto do padre ${padre.name}`} className="w-full h-full object-cover" />
            </div>

          </div>

          {/* Texto */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold">{padre.name}</h3>

            {padre.motto && (
              <blockquote className="mt-3 rounded-2xl bg-slate-50 p-4 italic text-slate-700 border border-slate-200">
                {padre.motto}
              </blockquote>
            )}

            <p className="mt-6 leading-relaxed text-slate-700">
              {padre.bio}
            </p>

            {padre.attendances && padre.attendances.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <Calendar size={18}/> Atendimentos
                </div>
                <ul className="mt-3 space-y-2 text-slate-600">
                  {padre.attendances.map((t)=>(
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-600"/>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
