import type { ElementoTarjeta } from '@tipos/tarjetas';

export const tarjetasServicio: ElementoTarjeta[] = [
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/layout.svg', fondo: 'var(--color-principal)' },
    titulo: 'Custom development',
    cuerpo:
      'We build the software your operation needs, not the leftovers of a template.',
    fondo: 'var(--color-blanco)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/apps.svg', fondo: 'var(--color-principal)' },
    titulo: 'Process automation',
    cuerpo:
      'We take repetitive tasks out of the way so your team can focus on what actually decides things.',
    fondo: 'var(--color-gris)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/analytics.svg', fondo: 'var(--color-fondo)' },
    titulo: 'Applied artificial intelligence',
    cuerpo:
      'We embed AI into your organization and into the software you already use.',
    fondo: 'var(--color-principal)',
    texto: 'var(--color-tinta)',
  },
];

export interface TarjetaSimple {
  titulo: string;
  cuerpo: string;
}

export const tarjetasPilares: TarjetaSimple[] = [
  {
    titulo: 'Business analytics',
    cuerpo: 'Metrics you read at a glance that hold up decisions.',
  },
  {
    titulo: 'Data analysis',
    cuerpo: 'We organize and make the most of the data your operation already generates.',
  },
  {
    titulo: 'Scalable infrastructure',
    cuerpo: 'Foundations that hold when the operation grows.',
  },
  {
    titulo: 'Integration with what you have',
    cuerpo: 'We add capabilities without forcing you to throw away what already works.',
  },
];
