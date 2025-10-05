// src/data/config.ts
export const parish = {
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
};

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

export type EventItem = {
  dateLabel: string;
  title: string;
  text: string;
  start?: string;
  end?: string;
  location?: string;
};

export const masses = [
  { day: 'Domingo', times: ['07h', '10h', '18h'] },
  { day: 'Quarta', times: ['19h'] },
  { day: 'Sábado', times: ['19h'] },
];

export const activities = [
  { name: 'Confissões', detail: 'Sexta, 17h — 19h' },
  { name: 'Adoração', detail: 'Segunda, 18h' },
  { name: 'Terço', detail: 'Terça, 19h' },
  { name: 'Grupo de Oração', detail: 'Quinta, 19h' },
];

export const ministries = [
  { title: 'Liturgia', desc: 'Equipe de leitura, acólitos e ministros extraordinários.', info: 'Encontros: sábados, 16h.' },
  { title: 'Catequese', desc: 'Formação para crianças, jovens e adultos.', info: 'Inscrições abertas — secretaria paroquial.' },
  { title: 'Música', desc: 'Ministérios musicais e corais nas celebrações.', info: 'Ensaios: a combinar por grupo.' },
  { title: 'Juventude', desc: 'Crescimento na fé e missão com jovens.', info: 'Encontros: sábados, 17h.' },
  { title: 'Caridade', desc: 'Ações sociais e assistência a famílias.', info: 'Doações na secretaria.' },
  { title: 'Famílias', desc: 'Acolhimento, encontros e acompanhamento.', info: 'Mensal — último domingo.' },
];

export const events: EventItem[] = [
  { dateLabel: 'SET 05, 19h', title: 'Novenário da Santíssima Trindade', text: 'Celebrações diárias, quermesse e momentos de adoração.' },
  { dateLabel: 'SET 14, 08h', title: 'Retiro dos Ministérios', text: 'Dia de espiritualidade para agentes pastorais.' },
  { dateLabel: 'OUT 02, 19h', title: 'Formação para Catequistas', text: 'Encontro com temas de catequese e liturgia.' },
];
