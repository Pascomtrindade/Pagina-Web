import { parish } from '../data/config'

export default function FloatingWhats(){
  return (
    <a href={`https://wa.me/${parish.whatsapp}`} className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 font-semibold text-white shadow-lg hover:bg-green-700">
      <span>Fale conosco</span>
    </a>
  )
}
