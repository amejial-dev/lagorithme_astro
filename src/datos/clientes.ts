export interface Cliente {
  /* Lo que estamos construyendo: es el titular en la banda de la portada. */
  trabajo: string;
  /* Una línea de qué es ese trabajo, para la banda. */
  resumen: string;
  nombre: string;
  sector: string;
  etiqueta: string;
  /* Texto largo, para las tarjetas de /clientes. */
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
export const clientes: Cliente[] = [
  {
    trabajo: 'Hospital software',
    resumen: 'Being built right now with their team.',
    nombre: 'Arsalud',
    sector: 'Healthcare',
    etiqueta: 'In development',
    descripcion: 'Hospital software we are currently building together with their team.',
    inicial: 'A',
    fondo: 'var(--color-blanco)',
    colorInicial: 'var(--color-principal)',
  },
  {
    trabajo: 'Environmental observatory',
    resumen: "We contribute to Barranquilla's environmental observatory, alongside Barranquilla Verde.",
    nombre: 'Universidad Libre',
    sector: 'Education · Environmental',
    etiqueta: 'Contribution',
    descripcion:
      "We contribute to the development of Barranquilla's environmental observatory, a Universidad Libre project alongside Barranquilla Verde.",
    inicial: 'U',
    fondo: 'var(--color-gris)',
    colorInicial: 'var(--color-tinta)',
  },
  {
    // TODO: 'trabajo', 'resumen' y 'descripcion' son redacción nuestra, no
    // información confirmada. Pedir el detalle real del proyecto antes de
    // publicar el sitio: es lo único de esta sección que no está verificado.
    trabajo: 'Digital platform',
    resumen: 'Custom development together with their team.',
    nombre: 'Puerta de Oro',
    sector: 'Partnership project',
    etiqueta: 'Client',
    descripcion: 'We work with their team on the development of their digital platform.',
    inicial: 'P',
    fondo: 'var(--color-principal)',
    colorInicial: 'var(--color-tinta)',
  },
];
