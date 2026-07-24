/**
 * El portátil de la portada escribe el código del propio sitio a medida que
 * el visitante baja.
 *
 * Cómo encaja con el resto:
 *
 * - Hay varias instancias del componente PortatilCodigo (una por panel de
 *   medios), pero un solo estado. El avance se calcula una vez a partir del
 *   scroll y se pinta idéntico en todas, así que cuando el portátil se
 *   oculta al llegar a las tarjetas y reaparece en el bloque siguiente,
 *   continúa donde iba en vez de reiniciarse.
 *
 * - El avance es una función pura del scroll, no un temporizador: si el
 *   visitante sube, el código se "desescribe". Es lo que hace que se lea
 *   como que la página se construye con el gesto de bajar.
 *
 * - Sin JS o con `prefers-reduced-motion`, no hay escritura: en el primer
 *   caso la pantalla queda en blanco y en el segundo aparece el código
 *   completo de golpe. Nunca queda a medias.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* Código real del proyecto, recortado para que cada bloque de la portada
   reciba unas diez líneas. Se escribe en el orden en que se construiría el
   sitio: la página, luego el sistema de diseño, luego la portada. */
const CODIGO = `---
// src/pages/index.astro
import PlantillaBase from '@plantillas/PlantillaBase.astro';
import PortadaInicio from '@componentes/inicio/PortadaInicio.astro';
import RejillaTarjetasIcono from '@componentes/ui/RejillaTarjetasIcono.astro';
import { tarjetasServicio } from '@datos/inicio';
---

<PlantillaBase titulo="Inicio" activa="/">
  <PortadaInicio />
  <BandaTrabajos />
</PlantillaBase>

/* src/estilos/variables.css */
:root {
  --color-principal: #ff5555;
  --color-tinta: #0e1524;
  --color-fondo: #f4f5f7;

  --fuente-titulos: 'IBrand', 'Sora', sans-serif;
  --texto-h1: clamp(2.25rem, 6vw, 4.25rem);
  --texto-base: 1rem;

  --borde-grueso: 4px solid var(--color-borde);
  --sombra-lg: 8px 8px 0 var(--color-tinta);
}

<!-- La portada: un solo titular y una sola acción -->
<section class="portada-inicio seccion">
  <h1 class="portada-inicio__titulo">
    El futuro de tu organización se programa hoy.
  </h1>
  <p class="portada-inicio__subtitulo">
    Impulsamos la transformación digital de empresas
    en Colombia y Latinoamérica.
  </p>
  <Boton ruta="/contacto" tono="principal" tamano="xl">
    Iniciar transformación digital
  </Boton>
</section>

/* Tarjetas de servicio: borde duro, sombra sin desenfoque */
.tarjeta-icono {
  background: var(--tarjeta-fondo);
  border: var(--borde-grueso);
  box-shadow: var(--sombra-lg);
  padding: 1.875rem;
  transition: translate 0.15s ease;
}

.tarjeta-icono:hover {
  translate: -4px -4px;
  box-shadow: 12px 12px 0 var(--color-tinta);
}

<!-- Y el cierre, que es por donde empieza todo -->
<LlamadaFinal
  titulo="El futuro de tu organización se programa hoy."
  etiquetaPrincipal="Iniciar transformación digital"
  rutaPrincipal="/contacto"
/>
`;

/* Resaltado por línea. Es deliberadamente tonto —no entiende de gramáticas,
   solo reconoce formas— porque el texto a colorear es fijo y conocido. */
const PATRONES = [
  [/^<!--.*?-->/, 'tk-comentario'],
  [/^\/\/.*/, 'tk-comentario'],
  [/^\/\*.*?\*\//, 'tk-comentario'],
  [/^---$/, 'tk-comentario'],
  [/^"[^"]*"/, 'tk-texto'],
  [/^'[^']*'/, 'tk-texto'],
  [/^<\/?[A-Za-z][\w.-]*/, 'tk-etiqueta'],
  [/^\/?>/, 'tk-etiqueta'],
  [/^--[\w-]+/, 'tk-variable'],
  [/^(import|from|const|export|interface|return)\b/, 'tk-palabra'],
  [/^[A-Za-z@:][\w:.-]*(?=\s*=)/, 'tk-atributo'],
  [/^[a-z-]+(?=\s*:)/, 'tk-atributo'],
];

function trocear(linea) {
  const fichas = [];
  let resto = linea;

  while (resto.length) {
    const coincidencia = PATRONES.reduce((hallada, [patron, clase]) => {
      if (hallada) return hallada;
      const encontrado = resto.match(patron);
      return encontrado ? { texto: encontrado[0], clase } : null;
    }, null);

    if (coincidencia) {
      fichas.push(coincidencia);
      resto = resto.slice(coincidencia.texto.length);
      continue;
    }

    /* Sin patrón: se acumula carácter a carácter sobre la última ficha
       neutra, para no generar un span por letra. */
    const ultima = fichas[fichas.length - 1];
    if (ultima && ultima.clase === '') ultima.texto += resto[0];
    else fichas.push({ texto: resto[0], clase: '' });
    resto = resto.slice(1);
  }

  return fichas;
}

const LINEAS = CODIGO.split('\n').map((linea) => ({
  fichas: trocear(linea),
  /* +1 por el salto de línea: así las líneas en blanco también consumen
     avance y no se pintan todas de golpe. */
  longitud: linea.length + 1,
}));

const TOTAL = LINEAS.reduce((suma, linea) => suma + linea.longitud, 0);

function escapar(texto) {
  return texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Devuelve el HTML del código escrito hasta `caracteres` (entero). */
function componer(caracteres) {
  let presupuesto = caracteres;
  const pintadas = [];

  for (const linea of LINEAS) {
    if (presupuesto <= 0) break;

    let visibles = Math.min(presupuesto, linea.longitud);
    presupuesto -= linea.longitud;
    const completa = presupuesto >= 0;

    let html = '';
    for (const ficha of linea.fichas) {
      if (visibles <= 0) break;
      const trozo = escapar(ficha.texto.slice(0, visibles));
      visibles -= ficha.texto.length;
      html += ficha.clase ? `<span class="${ficha.clase}">${trozo}</span>` : trozo;
    }

    /* El cursor va en la línea que se está escribiendo, nunca en las ya
       terminadas. */
    pintadas.push(completa ? html : `${html}<span class="tk-cursor"></span>`);
  }

  return pintadas.join('\n');
}

/**
 * La secuencia del portátil: un solo protagonista en pantalla.
 *
 * La ilusión es que es EL MISMO portátil el que va pasando de sección en
 * sección; si se llegan a ver dos a la vez, el truco se descubre. Por eso
 * los cortes son estrictamente secuenciales:
 *
 *   - despedida: el fondo del panel cruza el 45% de la ventana
 *   - aparición del siguiente: su techo cruza el 42%
 *
 * Esos tres puntos de cortesía garantizan que primero se va uno y luego
 * llega el otro, incluso en bloques pegados sin sección de tarjetas en
 * medio. Al subir de vuelta ocurre lo mismo en espejo. Solo el primero
 * sale en cuanto su panel asoma (no tiene a nadie delante), y el último
 * no se despide nunca: cierra la portada quedándose.
 *
 * Escondidos desde JS (gsap.set) y nunca desde CSS, igual que el resto de
 * revelados del sitio: sin JS la página se ve completa.
 */
function orquestarSecuencia() {
  const pistas = gsap.utils.toArray('.portatil-pista');

  const mostrar = (portatil) =>
    gsap.to(portatil, {
      opacity: 1,
      y: 0,
      rotation: 0,
      scale: 1,
      duration: 0.5,
      ease: 'back.out(1.7)',
      overwrite: 'auto',
    });

  /* La despedida deja el `y` y la rotación ya cargados para que la próxima
     aparición vuelva a botar, no solo a fundirse. */
  const esconder = (portatil) =>
    gsap.to(portatil, {
      opacity: 0,
      y: 30,
      rotation: -3,
      scale: 0.85,
      duration: 0.22,
      ease: 'power2.in',
      overwrite: 'auto',
    });

  pistas.forEach((pista, indice) => {
    const portatil = pista.querySelector('[data-portatil]');
    if (!portatil) return;

    gsap.set(portatil, { opacity: 0, y: 46, rotation: -4, scale: 0.94 });

    ScrollTrigger.create({
      trigger: pista,
      start: indice === 0 ? 'top 82%' : 'top 42%',
      onEnter: () => mostrar(portatil),
      onLeaveBack: () => esconder(portatil),
    });

    if (indice < pistas.length - 1) {
      ScrollTrigger.create({
        trigger: pista,
        start: 'bottom 45%',
        onEnter: () => esconder(portatil),
        onLeaveBack: () => mostrar(portatil),
      });
    }
  });
}

/**
 * El viaje: cada portátil baja por su panel al ritmo del scroll.
 *
 * Un ScrollTrigger con scrub por panel: mientras el panel cruza la ventana
 * (de asomar por abajo a irse por arriba), el portátil recorre la pista de
 * punta a punta. Con el panel subiendo y el portátil bajando dentro de él,
 * el efecto neto es que se queda acompañando al visitante a media pantalla.
 *
 * El scrub lleva medio segundo de suavizado: es lo que hace que el
 * portátil "persiga" el scroll con un pelín de inercia en vez de ir
 * cosido a la rueda.
 *
 * El recorrido se mide en cada refresh (función, no número): si cambia el
 * tamaño de la ventana, ScrollTrigger lo recalcula solo.
 */
function acompanarScroll() {
  const pistas = Array.from(document.querySelectorAll('.portatil-pista'));

  for (const pista of pistas) {
    const viaje = pista.querySelector('[data-portatil-viaje]');
    if (!viaje) continue;

    gsap.fromTo(
      viaje,
      { y: 0 },
      {
        y: () => {
          const relleno = getComputedStyle(pista);
          const recorrido =
            pista.clientHeight -
            parseFloat(relleno.paddingTop) -
            parseFloat(relleno.paddingBottom) -
            viaje.offsetHeight;
          return Math.max(0, recorrido);
        },
        ease: 'none',
        scrollTrigger: {
          trigger: pista,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      },
    );
  }
}

/**
 * Antes había un único portátil fijo que volaba de panel en panel; por muy
 * afinado que llevara el seguimiento, cualquier rezago de un elemento fijo
 * lo dejaba asomado sobre la sección vecina. Ahora vive una instancia
 * DENTRO de cada panel de medios —que además recorta con overflow:hidden—,
 * así que salirse del contenedor es imposible por construcción. El viaje
 * con el scroll lo pone acompanarScroll, y el turno de cada uno (nunca dos
 * a la vez), orquestarSecuencia.
 *
 * Todas las pantallas comparten el mismo avance de escritura: cuando un
 * portátil desaparece con su sección y aparece el del bloque siguiente, el
 * código continúa exactamente donde iba.
 */
export function iniciarPortatilCodigo() {
  const portatiles = Array.from(document.querySelectorAll('[data-portatil]'));
  if (!portatiles.length) return;

  const pantallas = portatiles.map((portatil) => ({
    raiz: portatil,
    codigo: portatil.querySelector('[data-portatil-codigo]'),
    lienzo: portatil.querySelector('.portatil__lienzo'),
    /* Alto útil del lienzo, medido la primera vez que hace falta y hasta
       que cambie la ventana. -1 = sin medir. */
    altoUtil: -1,
    /* Si está lo bastante cerca del viewport como para merecer pintado. */
    enPantalla: false,
    /* Caracteres que esta pantalla tiene escritos, para ponerla al día si
       entra en escena con el avance ya andado. */
    pintado: -1,
  }));

  let ultimoCaracteres = 0;
  let htmlActual = '';

  const pintarPantalla = (pantalla) => {
    const { codigo, lienzo } = pantalla;
    if (!codigo || !lienzo || lienzo.clientHeight === 0) return;

    codigo.innerHTML = htmlActual;

    /* El código crece hacia abajo y la pantalla no tiene barra de scroll:
       se desplaza el bloque entero para que la última línea escrita quede
       siempre visible, como haría un editor de verdad.

       El alto útil descuenta el padding: con clientHeight a secas, la
       línea que se está escribiendo queda cortada contra el borde. */
    if (pantalla.altoUtil < 0) {
      const relleno = getComputedStyle(lienzo);
      pantalla.altoUtil =
        lienzo.clientHeight -
        parseFloat(relleno.paddingTop) -
        parseFloat(relleno.paddingBottom);
    }
    const sobrante = Math.max(0, codigo.scrollHeight - pantalla.altoUtil);
    codigo.style.transform = `translateY(${-sobrante}px)`;

    pantalla.pintado = ultimoCaracteres;
  };

  /* ScrollTrigger dispara onUpdate muchas veces por gesto de rueda, pero el
     texto solo cambia cuando el avance suma un carácter entero: todo lo
     demás sería reescribir el mismo HTML. Y de las pantallas, solo se
     escribe a las que andan cerca del viewport; las demás se ponen al día
     cuando el observador las ve llegar. */
  const pintar = (avance) => {
    const caracteres = Math.round(avance * TOTAL);
    if (caracteres === ultimoCaracteres) return;
    ultimoCaracteres = caracteres;
    htmlActual = componer(caracteres);

    for (const pantalla of pantallas) {
      if (pantalla.enPantalla) pintarPantalla(pantalla);
    }
  };

  const observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        const pantalla = pantallas.find((p) => p.raiz === entrada.target);
        if (!pantalla) continue;
        pantalla.enPantalla = entrada.isIntersecting;
        if (entrada.isIntersecting && pantalla.pintado !== ultimoCaracteres) {
          pintarPantalla(pantalla);
        }
      }
    },
    /* Margen holgado: se ponen al día un poco antes de asomar, para que
       nunca se vea el momento del repintado. */
    { rootMargin: '30% 0px' },
  );
  for (const pantalla of pantallas) observador.observe(pantalla.raiz);

  window.addEventListener('resize', () => {
    /* Cambió la ventana: el alto útil guardado ya no vale, y una pantalla
       que estuviera en cero (display:none por el breakpoint) puede haber
       pasado a verse. */
    for (const pantalla of pantallas) {
      pantalla.altoUtil = -1;
      if (pantalla.enPantalla) pintarPantalla(pantalla);
    }
  });

  const bloques = document.querySelectorAll('.bloque-dividido');
  if (!bloques.length) {
    pintar(1);
    return;
  }

  /* Con movimiento reducido no hay bote de aparición y el código sale
     entero en vez de escribirse. */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    pintar(1);
    return;
  }

  orquestarSecuencia();
  acompanarScroll();

  /* Un único disparador que abarca desde que entra el primer bloque hasta
     que se va el último: el avance es la posición dentro de ese tramo, y
     por eso las secciones de tarjetas que hay en medio también cuentan. */
  ScrollTrigger.create({
    trigger: bloques[0],
    start: 'top 85%',
    endTrigger: bloques[bloques.length - 1],
    end: 'bottom 65%',
    onUpdate: (self) => pintar(self.progress),
    onRefresh: (self) => pintar(self.progress),
  });

  pintar(0);
}
