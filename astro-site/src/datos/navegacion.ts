export interface EnlaceNavegacion {
  etiqueta: string;
  ruta: string;
}

export const enlacesNavegacion: EnlaceNavegacion[] = [
  { etiqueta: 'Inicio', ruta: '/' },
  { etiqueta: 'Servicios', ruta: '/productos' },
  { etiqueta: 'Nosotros', ruta: '/nosotros' },
  { etiqueta: 'Colaboradores', ruta: '/colaboradores' },
  { etiqueta: 'Blog', ruta: '/blog' },
  { etiqueta: 'Contacto', ruta: '/contacto' },
];

export const navegacionPie = {
  navegacion: [
    { etiqueta: 'Inicio', ruta: '/' },
    { etiqueta: 'Servicios', ruta: '/productos' },
    { etiqueta: 'Nosotros', ruta: '/nosotros' },
    { etiqueta: 'Colaboradores', ruta: '/colaboradores' },
  ],
  recursos: [
    { etiqueta: 'Blog', ruta: '/blog' },
    { etiqueta: 'Contacto', ruta: '/contacto' },
  ],
  legal: ['Privacidad', 'Términos'],
};

export const enlacesRedes = [
  { etiqueta: 'Instagram', icono: '/assets/social/instagram.svg' },
  { etiqueta: 'Facebook', icono: '/assets/social/facebook.svg' },
  { etiqueta: 'X', icono: '/assets/social/x.svg' },
  { etiqueta: 'LinkedIn', icono: '/assets/social/linkedin.svg' },
  { etiqueta: 'WhatsApp', icono: '/assets/social/whatsapp.svg' },
  { etiqueta: 'YouTube', icono: '/assets/social/youtube.svg' },
];
