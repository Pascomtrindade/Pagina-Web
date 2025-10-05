export default function Sacraments() {
  return (
    <section id="sacramentos" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Sacramentos</h2>
          <p className="mt-2 text-slate-600">
            Informações sobre preparação, documentos e como participar dos sacramentos na paróquia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-lg">Batismo</h3>
            <p className="mt-2 text-slate-600">
              Preparação com pais e padrinhos. Documentos: certidão de nascimento da criança e RG dos responsáveis.
            </p>
            <p className="mt-2 text-sm text-slate-500">Agendamento na secretaria.</p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-lg">Crisma</h3>
            <p className="mt-2 text-slate-600">
              Catequese de jovens e adultos. Datas conforme calendário.
            </p>
            <p className="mt-2 text-sm text-slate-500">Inscrições abertas na secretaria.</p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-lg">1ª Eucaristia</h3>
            <p className="mt-2 text-slate-600">
              Formação catequética para crianças (a partir de 9 anos).
            </p>
            <p className="mt-2 text-sm text-slate-500">Turmas e horários divulgados nas redes.</p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-lg">Matrimônio</h3>
            <p className="mt-2 text-slate-600">
              Curso de noivos, prazos e documentação conforme normas diocesanas.
            </p>
            <p className="mt-2 text-sm text-slate-500">Procure a secretaria com antecedência.</p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-lg">Unção dos Enfermos</h3>
            <p className="mt-2 text-slate-600">
              Para doentes e idosos. Pode ser solicitada a visita do sacerdote.
            </p>
            <p className="mt-2 text-sm text-slate-500">Contato via WhatsApp/E-mail.</p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-lg">Confissões</h3>
            <p className="mt-2 text-slate-600">
              Atendimentos semanais e em mutirões na Quaresma/Advento.
            </p>
            <p className="mt-2 text-sm text-slate-500">Ver horários em “Horários de Missa”.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
