import { masses, activities } from '../data/config'

export default function Schedule(){
  return (
    <section id="horarios" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Horários</h2>
          <p className="mt-2 text-slate-600">Atualize conforme a rotina da sua paróquia (ex.: horário de verão, festas, etc.).</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-xl font-bold">Missas</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              {masses.map((m)=> (
                <li key={m.day}><strong>{m.day}:</strong> {m.times.join(', ')}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-xl font-bold">Outras atividades</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              {activities.map((a)=> (
                <li key={a.name}><strong>{a.name}:</strong> {a.detail}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-500">* Substitua pelos horários oficiais da Paróquia Santíssima Trindade (Campina Grande).</p>
      </div>
    </section>
  )
}
