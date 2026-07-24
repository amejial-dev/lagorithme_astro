export interface ArticuloBlog {
  etiqueta: string;
  fecha: string;
  titulo: string;
  extracto: string;
  fondoImagen: string;
}

/*
  PENDIENTE: el brief no incluye contenido de blog todavía. Estos artículos
  son marcadores de posición con temas plausibles para poder ver la
  maquetación; hay que reemplazarlos por artículos reales antes de publicar
  el sitio, o quitar /blog de la navegación mientras tanto.
*/
const fondos = [
  'var(--color-blanco)',
  'var(--color-gris)',
  'var(--color-principal)',
  'var(--color-blanco)',
  'var(--color-gris)',
  'var(--color-principal)',
];

export const articulos: ArticuloBlog[] = [
  {
    etiqueta: 'Automation',
    fecha: 'Pending',
    titulo: 'Where to start when automating an operation',
    extracto: 'Placeholder — the real article still needs to be written.',
    fondoImagen: fondos[0],
  },
  {
    etiqueta: 'Artificial intelligence',
    fecha: 'Pending',
    titulo: 'How to integrate AI into software already in production',
    extracto: 'Placeholder — the real article still needs to be written.',
    fondoImagen: fondos[1],
  },
  {
    etiqueta: 'Data',
    fecha: 'Pending',
    titulo: 'From manual reports to business analytics',
    extracto: 'Placeholder — the real article still needs to be written.',
    fondoImagen: fondos[2],
  },
  {
    etiqueta: 'Healthcare',
    fecha: 'Pending',
    titulo: 'What a hospital system that actually gets used demands',
    extracto: 'Placeholder — the real article still needs to be written.',
    fondoImagen: fondos[3],
  },
  {
    etiqueta: 'Public sector',
    fecha: 'Pending',
    titulo: 'What we learned building an environmental observatory',
    extracto: 'Placeholder — the real article still needs to be written.',
    fondoImagen: fondos[4],
  },
  {
    etiqueta: 'Company',
    fecha: 'Pending',
    titulo: 'How we work with our clients',
    extracto: 'Placeholder — the real article still needs to be written.',
    fondoImagen: fondos[5],
  },
];
