export default function Hero(){
  return (
    <section id="inicio" className="relative isolate pt-28">
      <div className="absolute inset-0 -z-10">
        <img src="/base.png" className="h-[520px] w-full object-cover" />
        <div className="absolute inset-0 h-[520px] bg-gradient-to-t from-slate-900/80 via-slate-900/50 to-transparent"/>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-[520px] flex items-start">
          <div className="max-w-2xl text-white pt-12 sm:pt-16 lg:pt-20">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide ring-1 ring-white/20">Paróquia católica</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">Bem-vindo à Paróquia<br/><span className="text-yellow-300">Santíssima Trindade</span></h1>
            <p className="mt-4 text-white/90">Uma comunidade de fé no coração de Campina Grande, dedicada à oração, serviço e acolhimento.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#sobre" className="inline-flex items-center rounded-2xl bg-blue-600 hover:bg-blue-700 px-5 py-3 font-semibold shadow">Conheça a paróquia</a>
              <a href="#local" className="inline-flex items-center rounded-2xl bg-white/90 hover:bg-white px-5 py-3 font-semibold text-slate-900 shadow">Como chegar</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
