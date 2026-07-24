/**
 * Intercepta los clics a enlaces internos y cierra la cortina antes de
 * navegar de verdad, para que el paso entre páginas se sienta intencional
 * y no un fogonazo blanco. DOM puro — sin runtime de framework.
 *
 * Aquí solo vive el cierre. La apertura es una animación CSS que arranca
 * sola en cada carga (ver CargadorPagina.astro), de modo que si este script
 * falla la página se descubre igual.
 */

/* Tiene que coincidir con --cortina-cierre en CargadorPagina.astro. */
const DURACION_CIERRE_MS = 450;

function prefiereMenosMovimiento() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function esEnlaceInternoNavegable(ancla) {
  const ruta = ancla.getAttribute('href');
  if (!ruta || ruta === '#') return false;
  if (ruta.startsWith('http://') || ruta.startsWith('https://')) return false;
  if (ruta.startsWith('mailto:') || ruta.startsWith('tel:')) return false;
  if (ancla.target === '_blank') return false;
  return true;
}

function esMismaPagina(ruta) {
  const actual = window.location.pathname.replace(/\/$/, '') || '/';
  const destino = new URL(ruta, window.location.href).pathname.replace(/\/$/, '') || '/';
  return actual === destino;
}

function iniciarTransicionPagina() {
  const cortina = document.getElementById('cargador-pagina');
  if (!cortina) return;

  let navegando = false;

  document.addEventListener(
    'click',
    (evento) => {
      const ancla = evento.target?.closest('a[href]');
      if (!ancla || !(ancla instanceof HTMLAnchorElement)) return;
      if (!esEnlaceInternoNavegable(ancla)) return;

      /* Respetar los modificadores del navegador: ctrl/cmd/shift y el clic
         central abren en otra pestaña, y ahí la cortina no pinta nada. */
      if (evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey || evento.button !== 0)
        return;

      const ruta = ancla.getAttribute('href');
      if (esMismaPagina(ruta)) return;

      if (navegando) {
        evento.preventDefault();
        return;
      }

      if (prefiereMenosMovimiento()) return;

      evento.preventDefault();
      navegando = true;
      cortina.classList.add('cargador--cerrando');

      window.setTimeout(() => {
        window.location.href = ruta;
      }, DURACION_CIERRE_MS);
    },
    true,
  );

  /* Al volver con el botón atrás la página sale de la bfcache con la
     cortina cerrada: hay que reiniciarla o queda tapada. */
  window.addEventListener('pageshow', (evento) => {
    navegando = false;
    if (!cortina.classList.contains('cargador--cerrando')) return;

    cortina.classList.remove('cargador--cerrando');
    if (evento.persisted) {
      /* Reinicia la animación de apertura, que ya se había consumido. */
      cortina.style.animation = 'none';
      void cortina.offsetWidth;
      cortina.style.animation = '';
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarTransicionPagina);
} else {
  iniciarTransicionPagina();
}

export { DURACION_CIERRE_MS };
