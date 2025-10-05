import { parish } from '../data/config'

export default function Location(){
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(parish.mapQuery)}&output=embed`
  return (
    <section id="local" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold tracking-tight">Localização</h2>
          <p className="mt-2 text-slate-600">Endereço: <span className="font-semibold">{parish.address}</span></p>
          <p className="text-slate-600">Secretaria paroquial: <span className="font-semibold">{parish.officeHours}</span></p>
        </div>
        <div className="overflow-hidden rounded-3xl shadow ring-1 ring-slate-200">
          <iframe title="Mapa da Paróquia Santíssima Trindade" className="w-full h-[420px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={mapSrc}></iframe>
        </div>
      </div>
    </section>
  )
}
