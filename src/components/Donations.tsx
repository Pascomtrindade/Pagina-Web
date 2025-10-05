// src/components/Donations.tsx
import { parish } from '../data/config'
import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'

export default function Donations(){
  const [copied, setCopied] = useState(false)

  const qrValue = parish.pixBrCode ?? parish.pixKey // se tiver BR Code, usa; senão, usa a chave simples
  const copyPix = async () => {
    try {
      await navigator.clipboard.writeText(parish.pixKey)
      setCopied(true)
      setTimeout(()=>setCopied(false), 2000)
    } catch {}
  }

  return (
    <section id="doacoes" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Doações e dízimo</h2>
            <p className="mt-4 text-slate-600">Sua contribuição fortalece as ações pastorais e a manutenção da paróquia.</p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex items-center gap-2">
                <strong>PIX (Chave):</strong>
                <span className="font-mono break-all">{parish.pixKey}</span>
                <button onClick={copyPix} className="ml-2 rounded-lg border px-2 py-1 text-sm hover:bg-slate-50">
                  {copied ? 'Copiado!' : 'Copiar'}
                </button>
              </li>
              <li><strong>Banco/Agência/Conta:</strong> [Dados bancários, se houver]</li>
              <li><strong>Presencial:</strong> Secretaria paroquial, em horário de expediente.</li>
            </ul>
            {!parish.pixBrCode && (
              <p className="mt-2 text-xs text-slate-500">
                Dica: se você tiver o <strong>BR Code</strong> do PIX, adicione em <code>pixBrCode</code> no <code>config.ts</code> para um QR 100% compatível com todos os bancos.
              </p>
            )}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold">QR Code do PIX</h3>
            <p className="mt-2 text-slate-600">Aponte a câmera do app do banco para o QR.</p>
            <div className="mt-4 grid place-items-center">
              <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                <QRCodeSVG value={qrValue} size={200} />
              </div>
            </div>
            <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              Transparência: divulgamos periodicamente relatórios de prestação de contas.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
