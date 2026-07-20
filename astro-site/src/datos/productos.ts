import type { ElementoTarjeta } from '@tipos/tarjetas';

export const servicios: ElementoTarjeta[] = [
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/layout.svg', fondo: 'var(--color-principal)' },
    titulo: 'Desarrollo a la medida',
    cuerpo: 'Software construido sobre tu operación, tu sector y tus reglas de negocio.',
    fondo: 'var(--color-fondo)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/apps.svg', fondo: 'var(--color-principal)' },
    titulo: 'Automatización de procesos',
    cuerpo: 'Flujos operativos y administrativos que dejan de depender del trabajo manual.',
    fondo: 'var(--color-tinta)',
    texto: 'var(--color-fondo)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/analytics.svg', fondo: 'var(--color-gris)' },
    titulo: 'Inteligencia artificial',
    cuerpo: 'Implementamos IA en la organización y también dentro de softwares ya existentes.',
    fondo: 'var(--color-fondo)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/pie-chart.svg', fondo: 'var(--color-fondo)' },
    titulo: 'Analítica de negocios',
    cuerpo: 'Indicadores y tableros que convierten la operación diaria en decisiones.',
    fondo: 'var(--color-principal)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/folder.svg', fondo: 'var(--color-gris)' },
    titulo: 'Análisis de datos',
    cuerpo: 'Ordenamos, cruzamos y explotamos la información que ya genera tu empresa.',
    fondo: 'var(--color-fondo)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/filters.svg', fondo: 'var(--color-principal)' },
    titulo: 'Integración de sistemas',
    cuerpo: 'Conectamos lo nuevo con el software que tu equipo ya usa todos los días.',
    fondo: 'var(--color-tinta)',
    texto: 'var(--color-fondo)',
  },
];

/* Metodología de trabajo — redacción propia, pendiente de validar con la
   empresa; el brief la menciona pero no define los pasos. */
export const pasos: ElementoTarjeta[] = [
  {
    insignia: { tipo: 'numero', valor: '01', fondo: 'var(--color-principal)' },
    titulo: 'Entendemos tu operación',
    cuerpo:
      'Levantamos los procesos tal como funcionan hoy, con sus excepciones, para saber qué automatizar y qué no tocar.',
    fondo: 'var(--color-fondo)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'numero', valor: '02', fondo: 'var(--color-principal)' },
    titulo: 'Diseñamos e implementamos',
    cuerpo:
      'Construimos sobre infraestructura robusta y entregamos por partes, para que el valor llegue antes del cierre del proyecto.',
    fondo: 'var(--color-tinta)',
    texto: 'var(--color-fondo)',
  },
  {
    insignia: { tipo: 'numero', valor: '03', fondo: 'var(--color-principal)' },
    titulo: 'Acompañamos la evolución',
    cuerpo:
      'El software crece con la organización: nuevos módulos, nuevas integraciones y más automatización con el tiempo.',
    fondo: 'var(--color-gris)',
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
    fondo: 'var(--color-azul)',
    texto: 'var(--color-fondo)',
    icono: '/assets/icons/layout.svg',
    titulo: 'Un aliado técnico, no un proveedor más',
    cuerpo:
      'Infraestructura robusta, inteligencia artificial y experiencia técnica puestas al servicio de cómo opera tu organización.',
  },
  {
    tamano: 'ancha',
    fondo: 'var(--color-principal)',
    texto: 'var(--color-tinta)',
    icono: '/assets/icons/check.svg',
    titulo: 'Escalable desde el primer código',
    cuerpo: 'Lo que hoy resuelve un área, mañana sostiene la empresa completa.',
  },
  {
    tamano: 'pequena',
    fondo: 'var(--color-fondo)',
    texto: 'var(--color-tinta)',
    icono: '/assets/icons/apps.svg',
    titulo: 'Sector público y privado',
  },
  {
    tamano: 'pequena',
    fondo: 'var(--color-fondo)',
    texto: 'var(--color-tinta)',
    icono: '/assets/icons/hashtag.svg',
    titulo: 'Colombia y Latinoamérica',
  },
];
