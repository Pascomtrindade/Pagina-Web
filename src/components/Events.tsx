// src/components/Events.tsx
import { events, EventItem, parish } from '../data/config'

function toUTCstamp(d: Date){
  const pad = (n:number)=>String(n).padStart(2,'0')
  return (
    d.getUTCFullYear().toString() +
    pad(d.getUTCMonth()+1) + pad(d.getUTCDate()) + 'T' +
    pad(d.getUTCHours()) + pad(d.getUTCMinutes()) + pad(d.getUTCSeconds()) + 'Z'
  )
}

function downloadIcs(e: EventItem){
  if(!e.start){ return }
  const start = new Date(e.start)
  const end = e.end ? new Date(e.end) : new Date(start.getTime()+60*60*1000)
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Paróquia Santíssima Trindade//PT-BR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${crypto.randomUUID()}`,
    `DTSTAMP:${toUTCstamp(new Date())}`,
    `DTSTART:${toUTCstamp(start)}`,
    `DTEND:${toUTCstamp(end)}`,
    `SUMMARY:${e.title.replace(/\n/g,' ')}`,
    `DESCRIPTION:${(e.text ?? '').replace(/\n/g,' ')}`,
    `LOCATION:${(e.location ?? parish.address).replace(/\n/g,' ')}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ]
  const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${e.title.replace(/\\s+/g,'-')}.ics`
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

function googleCalHref(e: EventItem){
  if(!e.start){ return '#' }
  const start = new Date(e.start)
  const end = e.end ? new Date(e.end) : new Date(start.getTime()+60*60*1000)
  const fmt = (d:Date)=>toUTCstamp(d) // Google aceita o mesmo formato UTC
  const params = new URLSearchParams({
    text: e.title,
    dates: `${fmt(start)}/${fmt(end)}`,
    details: e.text ?? '',
    location: e.location ?? parish.address,
  })
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&${params.toString()}`
}

export default function Events(){
  return (
    <section id="eventos" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Próximos eventos</h2>
          <p className="mt-2 text-slate-600">Use este espaço para anunciar novenas, festas da padroeira, formações, etc.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e)=> (
            <article key={e.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="text-xs font-semibold text-blue-700">{e.dateLabel}</div>
              <h3 className="mt-1 font-bold">{e.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{e.text}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={()=>downloadIcs(e)}
                  disabled={!e.start}
                  className="rounded-xl border px-3 py-2 text-sm hover:bg-white disabled:opacity-50"
                >
                  Salvar Evento
                </button>
                <a
                  href={googleCalHref(e)}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Google Calendar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
