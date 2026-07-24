/**
 * Menú hamburguesa de EncabezadoSitio.astro. Vive fuera del componente
 * para que la lógica de abrir/cerrar se pueda reutilizar independiente
 * del marcado, igual que transicion-pagina.js.
 */

const BREAKPOINT_ESCRITORIO = 992;

function iniciarBotonMenu() {
  const boton = document.getElementById('boton-menu');
  const navegacion = document.getElementById('navegacion-movil');
  if (!boton || !navegacion) return;

  function cerrarMenu() {
    boton.setAttribute('aria-expanded', 'false');
    navegacion.classList.remove('abierta');
  }

  function abrirMenu() {
    boton.setAttribute('aria-expanded', 'true');
    navegacion.classList.add('abierta');
  }

  boton.addEventListener('click', () => {
    const estaAbierto = boton.getAttribute('aria-expanded') === 'true';
    if (estaAbierto) {
      cerrarMenu();
    } else {
      abrirMenu();
    }
  });

  document.addEventListener('click', (evento) => {
    const objetivo = evento.target;
    if (!navegacion.contains(objetivo) && !boton.contains(objetivo)) cerrarMenu();
  });

  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') cerrarMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > BREAKPOINT_ESCRITORIO) cerrarMenu();
  });
}

function iniciarEstadoScroll() {
  const encabezado = document.querySelector('.encabezado');
  if (!encabezado) return;

  function actualizarEstadoScroll() {
    encabezado.classList.toggle('con-scroll', window.scrollY > 0);
  }

  actualizarEstadoScroll();
  window.addEventListener('scroll', actualizarEstadoScroll, { passive: true });
}

function iniciarEncabezado() {
  iniciarBotonMenu();
  iniciarEstadoScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarEncabezado);
} else {
  iniciarEncabezado();
}
