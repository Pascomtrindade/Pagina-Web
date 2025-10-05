export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Bloco 1: Identidade e contato */}
          <div>
            <h3 className="font-extrabold text-slate-900">Paróquia Santíssima Trindade</h3>
            <p className="mt-1">Rua Exemplo, 123 – Bairro – Campina Grande/PB</p>
            <p className="mt-1">Tel: (83) 3333-0000</p>
            <p className="mt-1">E-mail: contato@paroquiasantissimatrindade.com</p>
            <p className="mt-1">Secretaria: Seg–Sex, 8h–12h / 14h–18h</p>
          </div>

          {/* Bloco 2: Links úteis */}
          <div>
            <h3 className="font-bold text-slate-900">Links úteis</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="/privacidade" className="hover:text-blue-700">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/termos" className="hover:text-blue-700">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Bloco 3: Créditos */}
          <div className="md:text-right">
            <p>© {new Date().getFullYear()} Santíssima Trindade. Todos os direitos reservados.</p>
            <p className="mt-1">
              Desenvolvido com ❤️ pela <strong>Pascom Santíssima Trindade</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
