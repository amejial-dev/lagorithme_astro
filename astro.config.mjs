import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lagorithme.com',
  trailingSlash: 'ignore',

  /* Español por defecto en la raíz; inglés bajo /en (prefixDefaultLocale
     false = el idioma por defecto no lleva prefijo). Astro deduce
     Astro.currentLocale de la URL y los componentes eligen el texto con
     ese valor (ver src/i18n). */
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  /* Sitio 100% estático: se construye a HTML/CSS/JS puro y no necesita
     servidor ni adaptador. */
});
