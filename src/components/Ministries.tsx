import { ministries } from '../data/config'

export default function Ministries(){
  return (
    <section id="ministerios" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Pastorais e ministérios</h2>
          <p className="mt-2 text-slate-600">Conheça alguns dos grupos que servem nossa comunidade.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((m)=>(
            <div key={m.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-lg">{m.title}</h3>
              <p className="mt-2 text-slate-600">{m.desc}</p>
              <p className="mt-2 text-sm text-slate-500">{m.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
