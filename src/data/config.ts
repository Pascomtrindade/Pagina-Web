// src/data/config.ts

// ---------- Tipos ----------
export type Parish = {
  name: string
  city: string
  address: string
  officeHours: string
  whatsapp: string         // E.164, ex.: 5583XXXXXXXXX (ou vazio se ainda não tiver)
  phone?: string           // E.164, ex.: +558333377473
  email: string
  socials: {
    instagram?: string
    youtube?: string
    facebook?: string
  }
  pixKey?: string
  pixBrCode?: string
  mapQuery: string
}

export type Padre = {
  name: string
  since?: string
  photo?: string
  bio: string
  email?: string
  phone?: string
  attendances?: string[]
  motto?: string
}

export type Mass = { day: string; times: string[] }
export type Activity = { name: string; detail?: string }

export type Ministry = {
  title: string
  desc: string
  info?: string
  history?: string           // ⬅️ usado no modal (texto longo)
  image?: string             // ⬅️ opcional
  leaders?: string[]         // ⬅️ opcional
  contacts?: { label: string; href: string }[] // ⬅️ opcional
}

export type EventItem = {
  dateLabel: string
  title: string
  text: string
  start?: string             // ISO, ex.: '2025-10-02T19:00:00-03:00'
  end?: string               // ISO
  location?: string
}

// ---------- Paróquia ----------
export const parish: Parish = {
  name: 'Paróquia Santíssima Trindade',
  city: 'Campina Grande — PB',
  address: 'R. Raimundo Nonato de Araújo, 1100 - Catolé, Campina Grande - PB, 58410-205',
  officeHours: 'Seg–Sex, 14h–18h',
  // se tiver WhatsApp oficial, coloque no formato E.164 (ex.: 5583XXXXXXXXX)
  whatsapp: '',
  // telefone fixo da secretaria (E.164 — usado no link "tel:")
  phone: '+558333377473',
  email: 'santissimatrindade.cg@example.com', // troque se quiser
  socials: {
    instagram: '#',
    youtube: '#',
    facebook: '#',
  },
  pixKey: '[INSIRA A CHAVE PIX]',
  pixBrCode: '',
  mapQuery: 'R. Raimundo Nonato de Araújo, 1100 - Catolé, Campina Grande - PB, 58410-205',
}

// ---------- Pároco ----------
export const padre: Padre = {
  name: 'Pe. José Jorge Santos Rodrigues',
  since: 'desde 2022',
  photo: 'https://cdn.diocesecg.org/2021/04/banner_607729aea7bdb.jpg',
  bio: 'Pároco da Santíssima Trindade, dedicado à evangelização, à formação e ao serviço à comunidade.',
  email: 'paroco@santissimatrindade.cg.br',
  phone: '+5583XXXXXXXXX',
  attendances: [
    'Atendimento espiritual: Terça, 15h–17h',
    'Confissões: Sexta, 17h–19h',
  ],
  motto: '“Servir com alegria”',
}

// ---------- Horários de Missa ----------
export const masses: Mass[] = [
  { day: 'Domingo', times: ['07h', '10h', '18h'] },
  { day: 'Quarta', times: ['19h'] },
  { day: 'Sábado', times: ['19h'] },
]

// ---------- Outras atividades ----------
export const activities: Activity[] = [
  { name: 'Confissões', detail: 'Sexta, 17h — 19h' },
  { name: 'Adoração', detail: 'Segunda, 18h' },
  { name: 'Terço', detail: 'Terça, 19h' },
  { name: 'Grupo de Oração', detail: 'Quinta, 19h' },
]

// ---------- Pastorais / Ministérios ----------
export const ministries: Ministry[] = [
  {
    title: 'Liturgia',
    desc: 'Equipe de leitura, acólitos e ministros extraordinários.',
    info: 'Encontros: sábados, 16h.',
    history:
      'A Pastoral da Liturgia anima a vida celebrativa da paróquia desde os primeiros anos, formando leitores, salmistas e ministros. Busca a participação ativa da assembleia e a beleza do culto, sempre em comunhão com o calendário litúrgico.',
    image: '/img/pastorais/liturgia.jpg',
    leaders: ['Maria Souza', 'João Pereira'],
    contacts: [{ label: 'WhatsApp da coordenação', href: 'https://wa.me/5583XXXXXXXXX' }],
  },
  {
    title: 'Catequese',
    desc: 'Formação para crianças, jovens e adultos.',
    info: 'Inscrições abertas — secretaria paroquial.',
    history:
      'A Catequese acompanha famílias no caminho da fé, com encontros semanais e retiros de preparação para os sacramentos da iniciação cristã. A equipe é composta por catequistas experientes e jovens em formação.',
    image: '/img/pastorais/catequese.jpg',
  },
  {
    title: 'Música',
    desc: 'Ministérios musicais e corais nas celebrações.',
    info: 'Ensaios: a combinar por grupo.',
    history:
      'A Pastoral da Música evangeliza por meio do canto e da arte. Há grupos voltados para as missas dominicais, eventos e momentos de adoração, sempre em sintonia com a liturgia.',
  },
  {
    title: 'Juventude',
    desc: 'Crescimento na fé e missão com jovens.',
    info: 'Encontros: sábados, 17h.',
    history:
      'A Pastoral da Juventude promove retiros, encontros formativos e ações missionárias, incentivando o protagonismo juvenil e a vida comunitária.',
  },
  {
    title: 'Caridade',
    desc: 'Ações sociais e assistência a famílias.',
    info: 'Doações na secretaria.',
    history:
      'Inspirada na Doutrina Social da Igreja, a pastoral organiza campanhas, visitas fraternas e parcerias para atendimento de necessidades básicas de famílias em situação de vulnerabilidade.',
  },
  {
    title: 'Famílias',
    desc: 'Acolhimento, encontros e acompanhamento.',
    info: 'Mensal — último domingo.',
    history:
      'A Pastoral Familiar promove encontros de espiritualidade, preparação para etapas da vida matrimonial e apoio a famílias em diferentes realidades.',
  },
]

// ---------- Agenda / Eventos (com start/end p/ .ics e Google Calendar) ----------
export const events: EventItem[] = [
  {
    dateLabel: 'SET 05, 19h',
    title: 'Novenário da Santíssima Trindade',
    text: 'Celebrações diárias, quermesse e momentos de adoração.',
    start: '2025-09-05T19:00:00-03:00',
    end: '2025-09-05T20:00:00-03:00',
    location: parish.address,
  },
  {
    dateLabel: 'SET 14, 08h',
    title: 'Retiro dos Ministérios',
    text: 'Dia de espiritualidade para agentes pastorais.',
    start: '2025-09-14T08:00:00-03:00',
    end: '2025-09-14T12:00:00-03:00',
    location: parish.address,
  },
  {
    dateLabel: 'OUT 02, 19h',
    title: 'Formação para Catequistas',
    text: 'Encontro com temas de catequese e liturgia.',
    start: '2025-10-02T19:00:00-03:00',
    end: '2025-10-02T21:00:00-03:00',
    location: parish.address,
  },
]

// ---------- Export agrupado (opcional) ----------
export default {
  parish,
  padre,
  masses,
  activities,
  ministries,
  events,
}
