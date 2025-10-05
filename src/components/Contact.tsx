import { parish } from '../data/config'

export default function Contact(){
  return (
    <section id="contato" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Contato</h2>
          <p className="mt-2 text-slate-600">Fale conosco pelos canais abaixo.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="font-bold">WhatsApp</h3>
            <p className="mt-2 text-slate-600">Atendimento paroquial</p>
            <a href={`https://wa.me/${parish.whatsapp}`} className="mt-3 inline-flex rounded-2xl bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700 shadow">Enviar mensagem</a>
            <p className="mt-2 text-xs text-slate-500">Troque pelo número oficial.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="font-bold">E-mail</h3>
            <p className="mt-2 text-slate-600">Secretaria & pedidos</p>
            <a href={`mailto:${parish.email}`} className="mt-3 inline-flex rounded-2xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 shadow">Enviar e-mail</a>
            <p className="mt-2 text-xs text-slate-500">Troque pelo e-mail oficial.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="font-bold">Redes sociais</h3>
            <p className="mt-2 text-slate-600">Acompanhe avisos e transmissões.</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href={parish.socials.instagram} className="inline-flex rounded-2xl bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800 shadow">Instagram</a>
              <a href={parish.socials.youtube} className="inline-flex rounded-2xl bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700 shadow">YouTube</a>
              <a href={parish.socials.facebook} className="inline-flex rounded-2xl bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800 shadow">Facebook</a>
            </div>
            <p className="mt-2 text-xs text-slate-500">Insira os links oficiais.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
