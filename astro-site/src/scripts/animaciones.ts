/**
 * Animaciones sutiles con GSAP: entrada de la portada, revelado de
 * tarjetas al hacer scroll y respuesta táctil en los botones.
 *
 * Dos reglas que conviene no romper al ampliar esto:
 *
 * 1. El hover NO se toca desde aquí. El sistema ya resuelve hover con CSS
 *    usando la propiedad `translate` y `box-shadow`. GSAP escribe en
 *    `transform`, que es una propiedad distinta y se compone con
 *    `translate`, así que animar `scale` desde JS convive con el hover de
 *    CSS sin pelearse. Animar `y`/`x` en hover sí lo rompería.
 *
 * 2. Nada queda oculto si GSAP no llega a cargar. Los elementos se
 *    esconden desde JS (gsap.set), nunca desde CSS, así que sin JS la
 *    página se ve completa.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* Todo lo que se revela al entrar en pantalla, agrupado por bloque para
   que el stagger se note dentro de cada rejilla y no a lo largo de la
   página entera. */
const SELECTORES_REVELADO = [
  '.intro-seccion',
  '.tarjeta-icono',
  '.bento__celda',
  '.tarjeta-mv',
  '.tarjeta-colaborador',
  '.tarjeta-blog',
  '.banda-trabajos__elemento',
  '.bloque-dividido__contenido > *',
  '.vitrina__tarjeta',
  '.vitrina__bloque',
  '.llamada-final > *',
  '.cita',
];

/* Estos llevan una rotación propia en CSS mediante `transform`. Animarles
   `y` desde GSAP sobrescribiría esa rotación y las dejaría derechas, así
   que se revelan solo con opacidad. */
const SELECTORES_REVELADO_SIN_DESPLAZAR = ['.tarjetas-cuatro__elemento'];

const SELECTORES_PULSABLES = '.boton, .pastilla-nav, .encabezado__cta, .tarjeta-blog';

function animarPortada() {
  const portada = gsap.utils.toArray<HTMLElement>(
    '.portada-inicio > *:not(.portada-inicio__adorno)',
  );
  if (!portada.length) return;

  gsap.from(portada, {
    y: 26,
    opacity: 0,
    duration: 0.75,
    ease: 'power2.out',
    stagger: 0.09,
  });
}

function revelarAlHacerScroll() {
  const revelar = (selector: string, desplazar: boolean) => {
    const elementos = gsap.utils.toArray<HTMLElement>(selector);
    if (!elementos.length) return;

    gsap.set(elementos, desplazar ? { opacity: 0, y: 22 } : { opacity: 0 });

    ScrollTrigger.batch(elementos, {
      start: 'top 88%',
      once: true,
      onEnter: (lote) =>
        gsap.to(lote, {
          opacity: 1,
          ...(desplazar ? { y: 0 } : {}),
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.08,
          overwrite: true,
        }),
    });
  };

  SELECTORES_REVELADO.forEach((selector) => revelar(selector, true));
  SELECTORES_REVELADO_SIN_DESPLAZAR.forEach((selector) => revelar(selector, false));

  /* Las fuentes y las imágenes cambian el alto de la página después del
     primer cálculo; sin esto, los disparadores quedan desfasados. */
  ScrollTrigger.refresh();
}

function responderAlPulsar() {
  let pulsado: Element | null = null;

  const soltar = () => {
    if (!pulsado) return;
    gsap.to(pulsado, { scale: 1, duration: 0.25, ease: 'power2.out' });
    pulsado = null;
  };

  document.addEventListener('pointerdown', (evento) => {
    const objetivo = (evento.target as HTMLElement | null)?.closest(SELECTORES_PULSABLES);
    if (!objetivo) return;
    pulsado = objetivo;
    gsap.to(objetivo, { scale: 0.97, duration: 0.12, ease: 'power2.out' });
  });

  ['pointerup', 'pointercancel', 'pointerleave'].forEach((evento) =>
    document.addEventListener(evento, soltar),
  );
}

function iniciarAnimaciones() {
  /* Quien pidió menos movimiento se queda sin ninguno: la página se ve
     completa y estática. */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  animarPortada();
  revelarAlHacerScroll();
  responderAlPulsar();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarAnimaciones);
} else {
  iniciarAnimaciones();
}
