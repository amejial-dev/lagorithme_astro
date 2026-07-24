import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://lagorithme.com',
  trailingSlash: 'ignore',

  /* El sitio sigue siendo estático; el adaptador existe solo para las
     rutas marcadas con `prerender = false` (hoy, /api/contacto, que envía
     el formulario por SMTP). Si algún día se migra de hosting, se cambia
     este adaptador por el del proveedor nuevo y el endpoint sigue igual. */
  adapter: netlify(),
});
