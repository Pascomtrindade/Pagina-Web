export default function Footer(){
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="font-extrabold">Paróquia Santíssima Trindade</div>
            <div className="text-sm text-slate-600">Campina Grande — Paraíba</div>
          </div>
          <div className="md:text-right text-sm text-slate-500">© <span>{new Date().getFullYear()}</span> Santíssima Trindade. Todos os direitos reservados.</div>
        </div>
      </div>
    </footer>
  )
}
