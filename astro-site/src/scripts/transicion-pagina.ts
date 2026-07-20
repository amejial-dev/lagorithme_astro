/**
 * Intercepta los clics a enlaces internos y reproduce la animación de la
 * mascota un instante antes de que el navegador navegue de verdad, para
 * que el paso entre páginas se sienta intencional y no un fogonazo
 * blanco. DOM puro — sin runtime de framework.
 */

const DURACION_CAMINATA_MS = 800;
const DURACION_DESLIZAMIENTO_MS = 2400;

function esEnlaceInternoNavegable(ancla: HTMLAnchorElement): boolean {
  const ruta = ancla.getAttribute('href');
  if (!ruta || ruta === '#') return false;
  if (ruta.startsWith('http://') || ruta.startsWith('https://')) return false;
  if (ruta.startsWith('mailto:') || ruta.startsWith('tel:')) return false;
  if (ancla.target === '_blank') return false;
  return true;
}

function esMismaPagina(ruta: string): boolean {
  const actual = window.location.pathname.replace(/\/$/, '') || '/';
  const destino = new URL(ruta, window.location.href).pathname.replace(/\/$/, '') || '/';
  return actual === destino;
}

function iniciarTransicionPagina() {
  const cargador = document.getElementById('cargador-pagina');
  if (!cargador) return;

  let navegando = false;

  document.addEventListener(
    'click',
    (evento) => {
      const ancla = (evento.target as HTMLElement | null)?.closest('a[href]');
      if (!ancla || !(ancla instanceof HTMLAnchorElement)) return;
      if (!esEnlaceInternoNavegable(ancla)) return;

      const ruta = ancla.getAttribute('href')!;
      if (esMismaPagina(ruta)) return;

      if (navegando) {
        evento.preventDefault();
        return;
      }

      evento.preventDefault();
      navegando = true;
      cargador.classList.add('activo');

      window.setTimeout(() => {
        window.location.href = ruta;
      }, DURACION_DESLIZAMIENTO_MS);
    },
    true,
  );

  window.addEventListener('pageshow', () => {
    navegando = false;
    cargador.classList.remove('activo');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarTransicionPagina);
} else {
  iniciarTransicionPagina();
}

// Mantenemos las duraciones referenciadas para que queden documentadas junto
// a sus contrapartes en CSS dentro de CargadorPagina.astro.
export { DURACION_CAMINATA_MS, DURACION_DESLIZAMIENTO_MS };
