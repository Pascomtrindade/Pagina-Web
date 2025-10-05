import { useEffect, useMemo, useState } from 'react'
import { ministries } from '../data/config'
import { X } from 'lucide-react'

type Ministry = (typeof ministries)[number]

function Paragraphs({ text }: { text?: string }) {
  if (!text) return null
  return (
    <>
      {text.split(/\n{2,}/).map((p, i) => (
        <p key={i} className="mt-3 text-slate-700 leading-relaxed">
          {p}
        </p>
      ))}
    </>
  )
}

export default function Ministries() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Ministry | null>(null)

  function openMinistry(m: Ministry) {
    setSelected(m)
    setOpen(true)
  }
  function close() {
    setOpen(false)
    // pequena espera para transição antes de limpar
    setTimeout(() => setSelected(null), 150)
  }

  // Fecha com ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const hasModal = open && selected

  return (
    <section id="ministerios" className="py-16 bg-slate-50 scroll-mt-28 md:scroll-mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Pastorais e ministérios</h2>
          <p className="mt-2 text-slate-600">Conheça alguns dos grupos que servem nossa comunidade.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((m) => (
            <button
              key={m.title}
              onClick={() => openMinistry(m)}
              className="text-left rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-haspopup="dialog"
              aria-controls="ministry-dialog"
            >
              <h3 className="font-bold text-lg">{m.title}</h3>
              <p className="mt-2 text-slate-600">{m.desc}</p>
              {m.info && <p className="mt-2 text-sm text-slate-500">{m.info}</p>}
              <span className="mt-4 inline-block text-sm font-semibold text-blue-700">
                Ler mais
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {hasModal && (
        <div
          role="dialog"
          id="ministry-dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center px-4"
          onClick={(e) => {
            // fecha ao clicar fora do painel
            if (e.target === e.currentTarget) close()
          }}
        >
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* panel */}
          <div className="relative z-10 w-full max-w-3xl rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200">
            {/* header */}
            <div className="flex items-start gap-4 p-6 border-b border-slate-100">
              <div className="flex-1">
                <h3 className="text-xl font-extrabold tracking-tight">{selected!.title}</h3>
                {selected!.leaders?.length ? (
                  <p className="mt-1 text-sm text-slate-500">
                    Coordenação: {selected!.leaders!.join(', ')}
                  </p>
                ) : null}
              </div>
              <button
                aria-label="Fechar"
                onClick={close}
                className="rounded-xl p-2 hover:bg-slate-50 text-slate-500 hover:text-slate-700"
              >
                <X size={20} />
              </button>
            </div>

            {/* body */}
            <div className="p-6 grid gap-6 md:grid-cols-5">
              {/* imagem opcional */}
              {selected!.image ? (
                <div className="md:col-span-2">
                  <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
                    <img
                      src={selected!.image}
                      alt={`Imagem da pastoral ${selected!.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ) : null}

              <div className={selected!.image ? 'md:col-span-3' : 'md:col-span-5'}>
                <Paragraphs text={selected!.history} />

                {/* contatos opcionais */}
                {selected!.contacts?.length ? (
                  <div className="mt-6">
                    <h4 className="font-semibold text-slate-900">Contato</h4>
                    <ul className="mt-2 space-y-1">
                      {selected!.contacts!.map((c) => (
                        <li key={c.href}>
                          <a
                            href={c.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-700 hover:underline"
                          >
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>

            {/* footer */}
            <div className="flex justify-end gap-2 p-6 border-t border-slate-100">
              <button
                onClick={close}
                className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
