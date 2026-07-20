export interface Colaborador {
  /* Lo que estamos construyendo: es el titular en la banda de la portada. */
  trabajo: string;
  /* Una línea de qué es ese trabajo, para la banda. */
  resumen: string;
  nombre: string;
  sector: string;
  etiqueta: string;
  /* Texto largo, para las tarjetas de /colaboradores. */
  descripcion: string;
  inicial: string;
  fondo: string;
  colorInicial: string;
}

/*
  Clientes y proyectos en curso. El orden importa: la banda de la portada
  los muestra en este orden y arranca por el trabajo más concreto.

  Solo va aquí lo que esté confirmado y se pueda publicar como tal.
*/
export const colaboradores: Colaborador[] = [
  {
    trabajo: 'Software hospitalario',
    resumen: 'En construcción ahora mismo junto a su equipo.',
    nombre: 'Arsalud',
    sector: 'Salud',
    etiqueta: 'En desarrollo',
    descripcion: 'Software hospitalario que estamos construyendo actualmente junto a su equipo.',
    inicial: 'A',
    fondo: 'var(--color-blanco)',
    colorInicial: 'var(--color-principal)',
  },
  {
    trabajo: 'Observatorio ambiental',
    resumen: 'Contribuimos al observatorio ambiental de Barranquilla, junto a Barranquilla Verde.',
    nombre: 'Universidad Libre',
    sector: 'Educación · Ambiental',
    etiqueta: 'Contribución',
    descripcion:
      'Contribuimos al desarrollo del observatorio ambiental de Barranquilla, un proyecto de la Universidad Libre junto a Barranquilla Verde.',
    inicial: 'U',
    fondo: 'var(--color-gris)',
    colorInicial: 'var(--color-tinta)',
  },
  {
    // TODO: 'trabajo', 'resumen' y 'descripcion' son redacción nuestra, no
    // información confirmada. Pedir el detalle real del proyecto antes de
    // publicar el sitio: es lo único de esta sección que no está verificado.
    trabajo: 'Plataforma digital',
    resumen: 'Desarrollo a la medida junto a su equipo.',
    nombre: 'Puerta de Oro',
    sector: 'Proyecto en alianza',
    etiqueta: 'Cliente',
    descripcion: 'Trabajamos con su equipo en el desarrollo de su plataforma digital.',
    inicial: 'P',
    fondo: 'var(--color-principal)',
    colorInicial: 'var(--color-tinta)',
  },
];
