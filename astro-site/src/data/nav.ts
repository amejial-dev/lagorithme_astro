export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Producto', href: '/productos' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Colaboradores', href: '/colaboradores' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];

export const footerNav = {
  navegacion: [
    { label: 'Inicio', href: '/' },
    { label: 'Producto', href: '/productos' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Colaboradores', href: '/colaboradores' },
  ],
  recursos: [
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contacto' },
  ],
  legal: ['Privacidad', 'Términos'],
};

export const socialLinks = [
  { label: 'Instagram', icon: '/assets/social/instagram.svg' },
  { label: 'Facebook', icon: '/assets/social/facebook.svg' },
  { label: 'X', icon: '/assets/social/x.svg' },
  { label: 'LinkedIn', icon: '/assets/social/linkedin.svg' },
  { label: 'WhatsApp', icon: '/assets/social/whatsapp.svg' },
  { label: 'YouTube', icon: '/assets/social/youtube.svg' },
];
