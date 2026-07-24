export interface EnlaceNavegacion {
  etiqueta: string;
  ruta: string;
}

export const enlacesNavegacion: EnlaceNavegacion[] = [
  { etiqueta: 'Home', ruta: '/' },
  { etiqueta: 'Services', ruta: '/productos' },
  { etiqueta: 'About', ruta: '/nosotros' },
  { etiqueta: 'Clients', ruta: '/clientes' },
  { etiqueta: 'Blog', ruta: '/blog' },
  { etiqueta: 'Contact', ruta: '/contacto' },
];

export const navegacionPie = {
  navegacion: [
    { etiqueta: 'Home', ruta: '/' },
    { etiqueta: 'Services', ruta: '/productos' },
    { etiqueta: 'About', ruta: '/nosotros' },
    { etiqueta: 'Clients', ruta: '/clientes' },
  ],
  recursos: [
    { etiqueta: 'Blog', ruta: '/blog' },
    { etiqueta: 'Contact', ruta: '/contacto' },
  ],
  legal: ['Privacy', 'Terms'],
};

export const enlacesRedes = [
  { etiqueta: 'Instagram', icono: '/assets/social/instagram.svg' },
  { etiqueta: 'Facebook', icono: '/assets/social/facebook.svg' },
  { etiqueta: 'X', icono: '/assets/social/x.svg' },
  { etiqueta: 'LinkedIn', icono: '/assets/social/linkedin.svg' },
  { etiqueta: 'WhatsApp', icono: '/assets/social/whatsapp.svg' },
  { etiqueta: 'YouTube', icono: '/assets/social/youtube.svg' },
];
