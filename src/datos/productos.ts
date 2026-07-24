import type { ElementoTarjeta } from '@tipos/tarjetas';

export const servicios: ElementoTarjeta[] = [
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/layout.svg', fondo: 'var(--color-principal)' },
    titulo: 'Custom development',
    cuerpo: 'Software built around your operation, your industry and your business rules.',
    fondo: 'var(--color-blanco)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/apps.svg', fondo: 'var(--color-principal)' },
    titulo: 'Process automation',
    cuerpo: 'Operational and administrative workflows that stop depending on manual work.',
    fondo: 'var(--color-gris)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/analytics.svg', fondo: 'var(--color-fondo)' },
    titulo: 'Artificial intelligence',
    cuerpo: 'We implement AI across the organization and inside existing software as well.',
    fondo: 'var(--color-principal)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/pie-chart.svg', fondo: 'var(--color-principal)' },
    titulo: 'Business analytics',
    cuerpo: 'Metrics and dashboards that turn daily operations into decisions.',
    fondo: 'var(--color-blanco)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/folder.svg', fondo: 'var(--color-principal)' },
    titulo: 'Data analysis',
    cuerpo: 'We organize, cross-reference and make the most of the data your company already generates.',
    fondo: 'var(--color-gris)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/filters.svg', fondo: 'var(--color-fondo)' },
    titulo: 'Systems integration',
    cuerpo: 'We connect the new with the software your team already uses every day.',
    fondo: 'var(--color-principal)',
    texto: 'var(--color-tinta)',
  },
];

/* Metodología de trabajo — redacción propia, pendiente de validar con la
   empresa; el brief la menciona pero no define los pasos. */
export const pasos: ElementoTarjeta[] = [
  {
    insignia: { tipo: 'numero', valor: '01', fondo: 'var(--color-principal)' },
    titulo: 'We understand your operation',
    cuerpo:
      'We map your processes exactly as they work today, exceptions included, to know what to automate and what to leave alone.',
    fondo: 'var(--color-blanco)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'numero', valor: '02', fondo: 'var(--color-principal)' },
    titulo: 'We design and build',
    cuerpo:
      'We build on robust infrastructure and deliver in stages, so value arrives before the project closes.',
    fondo: 'var(--color-gris)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'numero', valor: '03', fondo: 'var(--color-fondo)' },
    titulo: 'We support the evolution',
    cuerpo:
      'The software grows with the organization: new modules, new integrations and more automation over time.',
    fondo: 'var(--color-principal)',
    texto: 'var(--color-tinta)',
  },
];

export interface ElementoBento {
  tamano: 'grande' | 'ancha' | 'pequena';
  fondo: string;
  texto: string;
  icono: string;
  titulo: string;
  cuerpo?: string;
}

export const elementosBento: ElementoBento[] = [
  {
    tamano: 'grande',
    fondo: 'var(--color-blanco)',
    texto: 'var(--color-tinta)',
    icono: '/assets/icons/layout.svg',
    titulo: 'A technical ally, not just another vendor',
    cuerpo:
      'Robust infrastructure, artificial intelligence and technical expertise put to work around how your organization operates.',
  },
  {
    tamano: 'ancha',
    fondo: 'var(--color-gris)',
    texto: 'var(--color-tinta)',
    icono: '/assets/icons/check.svg',
    titulo: 'Scalable from the first line of code',
    cuerpo: 'What solves one area today supports the whole company tomorrow.',
  },
  {
    tamano: 'pequena',
    fondo: 'var(--color-principal)',
    texto: 'var(--color-tinta)',
    icono: '/assets/icons/apps.svg',
    titulo: 'Public and private sector',
  },
  {
    tamano: 'pequena',
    fondo: 'var(--color-blanco)',
    texto: 'var(--color-tinta)',
    icono: '/assets/icons/hashtag.svg',
    titulo: 'Colombia and Latin America',
  },
];
