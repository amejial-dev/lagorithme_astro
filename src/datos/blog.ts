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
    etiqueta: 'Automatización',
    fecha: 'Pendiente',
    titulo: 'Por dónde empezar a automatizar una operación',
    extracto: 'Marcador de posición — falta redactar el artículo real.',
    fondoImagen: fondos[0],
  },
  {
    etiqueta: 'Inteligencia artificial',
    fecha: 'Pendiente',
    titulo: 'Cómo integrar IA en un software que ya está en producción',
    extracto: 'Marcador de posición — falta redactar el artículo real.',
    fondoImagen: fondos[1],
  },
  {
    etiqueta: 'Datos',
    fecha: 'Pendiente',
    titulo: 'De reportes manuales a analítica de negocio',
    extracto: 'Marcador de posición — falta redactar el artículo real.',
    fondoImagen: fondos[2],
  },
  {
    etiqueta: 'Sector salud',
    fecha: 'Pendiente',
    titulo: 'Qué exige un software hospitalario que sí se usa',
    extracto: 'Marcador de posición — falta redactar el artículo real.',
    fondoImagen: fondos[3],
  },
  {
    etiqueta: 'Sector público',
    fecha: 'Pendiente',
    titulo: 'Qué aprendimos construyendo un observatorio ambiental',
    extracto: 'Marcador de posición — falta redactar el artículo real.',
    fondoImagen: fondos[4],
  },
  {
    etiqueta: 'Compañía',
    fecha: 'Pendiente',
    titulo: 'Cómo trabajamos con nuestros clientes',
    extracto: 'Marcador de posición — falta redactar el artículo real.',
    fondoImagen: fondos[5],
  },
];
