import type { ElementoTarjeta } from '@tipos/tarjetas';

export const tarjetasServicio: ElementoTarjeta[] = [
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/layout.svg', fondo: 'var(--color-fondo)' },
    titulo: 'Desarrollo a la medida',
    cuerpo:
      'Construimos el software que tu operación necesita, no el que sobra en una plantilla.',
    fondo: 'var(--color-tinta)',
    texto: 'var(--color-fondo)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/apps.svg', fondo: 'var(--color-fondo)' },
    titulo: 'Automatización de procesos',
    cuerpo:
      'Quitamos del camino las tareas repetitivas para que tu equipo se dedique a lo que decide.',
    fondo: 'var(--color-tinta)',
    texto: 'var(--color-fondo)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/analytics.svg', fondo: 'var(--color-fondo)' },
    titulo: 'Inteligencia artificial aplicada',
    cuerpo:
      'Integramos IA en tu organización y también dentro del software que ya estás usando.',
    fondo: 'var(--color-principal)',
    texto: 'var(--color-tinta)',
  },
];

export interface TarjetaSimple {
  titulo: string;
  cuerpo: string;
  rotacion: -1 | 0 | 1;
}

export const tarjetasPilares: TarjetaSimple[] = [
  {
    titulo: 'Analítica de negocios',
    cuerpo: 'Indicadores que se leen de un vistazo y sostienen decisiones.',
    rotacion: -1,
  },
  {
    titulo: 'Análisis de datos',
    cuerpo: 'Ordenamos y explotamos la información que ya genera tu operación.',
    rotacion: 1,
  },
  {
    titulo: 'Infraestructura escalable',
    cuerpo: 'Bases que aguantan cuando la operación crece.',
    rotacion: -1,
  },
  {
    titulo: 'Integración con lo existente',
    cuerpo: 'Sumamos capacidades sin obligarte a tirar lo que ya funciona.',
    rotacion: 1,
  },
];
