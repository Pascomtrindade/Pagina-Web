export default function About(){
  return (
    <section id="sobre" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Sobre a paróquia</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">Somos uma comunidade viva e atuante, com diversos ministérios e pastorais a serviço do Evangelho. Celebramos a Eucaristia, promovemos a formação cristã e realizamos ações de caridade, buscando acolher a todos com alegria.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600"/><span>Missas dominicais e semanais</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600"/><span>Confissões, adoração e momentos de oração</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600"/><span>Catequese para crianças, jovens e adultos</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600"/><span>Ações sociais e pastorais de serviço</span></li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-slate-200">
            <img src="/matriz.png" alt=" igreja" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
