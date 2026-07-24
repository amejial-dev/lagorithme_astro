import type { ElementoTarjeta } from '@tipos/tarjetas';

/* Frases institucionales — texto aprobado por la empresa, no reescribir
   sin confirmarlo con ellos. */
export const mision =
  "To drive the digital transformation of public and private organizations in Colombia through intelligent, scalable and secure technology solutions that optimize their operational, administrative and strategic processes. Our commitment is to support our clients' growth with tools that evolve alongside them, expanding toward Latin America and the world.";

export const vision =
  'To be recognized as a leading technology-innovation company in Colombia, with progressive expansion toward Latin America and global markets, delivering digital solutions that integrate artificial intelligence, automation and efficient management for organizations across every sector.';

export const quienesSomos =
  "We are a software development company based in Colombia, specialized in building technology solutions that transform the way organizations operate. We combine robust infrastructure, artificial intelligence and technical expertise to deliver digital products that adapt to every environment and need. Our focus is on efficiency, scalability and constant evolution, with the goal of being strategic allies in our clients' growth.";

export const capacidades: ElementoTarjeta[] = [
  {
    insignia: { tipo: 'numero', valor: '01', fondo: 'var(--color-principal)' },
    titulo: 'Custom software',
    cuerpo: 'We build around your real operation, not a generic case.',
    fondo: 'var(--color-blanco)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'numero', valor: '02', fondo: 'var(--color-fondo)' },
    titulo: 'Automation',
    cuerpo: 'Operational and administrative processes that stop eating up hours.',
    fondo: 'var(--color-principal)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'numero', valor: '03', fondo: 'var(--color-principal)' },
    titulo: 'Artificial intelligence',
    cuerpo: 'AI integrated into the organization and into the systems you already use.',
    fondo: 'var(--color-gris)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'numero', valor: '04', fondo: 'var(--color-principal)' },
    titulo: 'Data and analytics',
    cuerpo: 'Data organized and put to work to decide with evidence.',
    fondo: 'var(--color-blanco)',
    texto: 'var(--color-tinta)',
  },
];

/* Los cinco valores corporativos, tal cual los definió la empresa. */
export const valoresCorporativos: ElementoTarjeta[] = [
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/apps.svg', fondo: 'var(--color-principal)' },
    titulo: 'Innovation',
    cuerpo: 'We create solutions that anticipate the future.',
    fondo: 'var(--color-blanco)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/analytics.svg', fondo: 'var(--color-fondo)' },
    titulo: 'Scalability',
    cuerpo: 'We think big from the first line of code.',
    fondo: 'var(--color-principal)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/check.svg', fondo: 'var(--color-principal)' },
    titulo: 'Trust',
    cuerpo: 'We build solid, transparent relationships.',
    fondo: 'var(--color-blanco)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/bookmark.svg', fondo: 'var(--color-principal)' },
    titulo: 'Technical excellence',
    cuerpo: 'We demand quality in every build.',
    fondo: 'var(--color-gris)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/layout.svg', fondo: 'var(--color-principal)' },
    titulo: 'Adaptability',
    cuerpo: 'We adapt to every client, industry and challenge.',
    fondo: 'var(--color-gris)',
    texto: 'var(--color-tinta)',
  },
];
