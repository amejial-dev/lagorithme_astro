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
import { iniciarPortatilCodigo } from './portatil-codigo';

/* Todo lo que se revela al entrar en pantalla, agrupado por bloque para
   que el stagger se note dentro de cada rejilla y no a lo largo de la
   página entera. */
const SELECTORES_REVELADO = [
  '.intro-seccion',
  '.tarjeta-icono',
  '.bento__celda',
  '.tarjeta-mv',
  '.tarjeta-cliente',
  '.tarjeta-blog',
  '.banda-metodo__paso',
  '.bloque-dividido__contenido > *',
  '.vitrina__tarjeta',
  '.vitrina__bloque',
  '.tarjetas-cuatro__elemento',
  '.llamada-final > *',
];

/* Entrada "destacada": los bloques de cierre que deben robar la atención.
   Las citas de lagorithme entran con un pop (escala + rebote) en vez del
   fundido discreto del resto. El botón principal de la llamada final se
   trata aparte (SELECTOR_CTA) para poder escalarlo sin pelear con el
   fundido de su contenedor. */
const SELECTORES_REVELADO_DESTACADO = ['.cita'];
const SELECTOR_CTA = '.llamada-final__cta';

const SELECTORES_PULSABLES = '.boton, .pastilla-nav, .encabezado__cta, .tarjeta-blog';

function animarPortada() {
  const portada = gsap.utils.toArray('.portada-inicio > *:not(.portada-inicio__adorno)');
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
  const revelar = (selector, opciones = {}) => {
    const { desplazar = true, destacar = false } = opciones;
    const elementos = gsap.utils.toArray(selector);
    if (!elementos.length) return;

    const estadoInicial = { opacity: 0 };
    if (desplazar) estadoInicial.y = destacar ? 34 : 22;
    if (destacar) estadoInicial.scale = 0.9;
    gsap.set(elementos, estadoInicial);

    ScrollTrigger.batch(elementos, {
      start: 'top 88%',
      once: true,
      onEnter: (lote) =>
        gsap.to(lote, {
          opacity: 1,
          ...(desplazar ? { y: 0 } : {}),
          ...(destacar ? { scale: 1 } : {}),
          duration: destacar ? 0.8 : 0.6,
          ease: destacar ? 'back.out(1.6)' : 'power2.out',
          stagger: destacar ? 0.12 : 0.08,
          overwrite: true,
        }),
    });
  };

  SELECTORES_REVELADO.forEach((selector) => revelar(selector));
  SELECTORES_REVELADO_DESTACADO.forEach((selector) => revelar(selector, { destacar: true }));

  /* Golpe extra al botón principal de la llamada final: entra con un pop de
     rebote que se compone con el fundido de su contenedor. Escala solo
     (sin opacidad), para no fundirse dos veces con `.llamada-final > *`.
     Escribe en `transform`, así que convive con el hover (translate) y con
     el press (scale de responderAlPulsar), que solo actúa después. */
  gsap.utils.toArray(SELECTOR_CTA).forEach((boton) => {
    gsap.set(boton, { scale: 0.8 });
    ScrollTrigger.create({
      trigger: boton,
      start: 'top 90%',
      once: true,
      onEnter: () => gsap.to(boton, { scale: 1, duration: 0.7, ease: 'back.out(2.2)' }),
    });
  });

  /* Las fuentes y las imágenes cambian el alto de la página después del
     primer cálculo; sin esto, los disparadores quedan desfasados. */
  ScrollTrigger.refresh();
}

function responderAlPulsar() {
  let pulsado = null;

  const soltar = () => {
    if (!pulsado) return;
    gsap.to(pulsado, { scale: 1, duration: 0.25, ease: 'power2.out' });
    pulsado = null;
  };

  document.addEventListener('pointerdown', (evento) => {
    const objetivo = evento.target?.closest(SELECTORES_PULSABLES);
    if (!objetivo) return;
    pulsado = objetivo;
    gsap.to(objetivo, { scale: 0.97, duration: 0.12, ease: 'power2.out' });
  });

  ['pointerup', 'pointercancel', 'pointerleave'].forEach((evento) =>
    document.addEventListener(evento, soltar),
  );
}

function iniciarAnimaciones() {
  gsap.registerPlugin(ScrollTrigger);

  /* Va antes del corte por movimiento reducido porque tiene su propia
     variante estática: pinta el código completo en vez de no pintar nada. */
  iniciarPortatilCodigo();

  /* Quien pidió menos movimiento se queda sin el resto: la página se ve
     completa y estática. */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  animarPortada();
  revelarAlHacerScroll();
  responderAlPulsar();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarAnimaciones);
} else {
  iniciarAnimaciones();
}
