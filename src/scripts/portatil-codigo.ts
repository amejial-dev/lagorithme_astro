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

interface Ficha {
  texto: string;
  clase: string;
}

/* Resaltado por línea. Es deliberadamente tonto —no entiende de gramáticas,
   solo reconoce formas— porque el texto a colorear es fijo y conocido. */
const PATRONES: [RegExp, string][] = [
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

function trocear(linea: string): Ficha[] {
  const fichas: Ficha[] = [];
  let resto = linea;

  while (resto.length) {
    const coincidencia = PATRONES.reduce<Ficha | null>((hallada, [patron, clase]) => {
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

function escapar(texto: string): string {
  return texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Devuelve el HTML del código escrito hasta `caracteres`. */
function componer(caracteres: number): string {
  let presupuesto = Math.round(caracteres);
  const pintadas: string[] = [];

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

/* Aire que se le deja al portátil contra los bordes del panel: por debajo
   de esto se considera que ya no cabe y se apaga. */
const MARGEN = 28;

/**
 * Pasea el portátil por la portada.
 *
 * Dos reglas gobiernan el recorrido:
 *
 * 1. No se sale nunca de su panel. La posición no es "el centro de la
 *    ventana" sino ese centro recortado contra la parte visible del panel
 *    de medios, contando el alto real del portátil. Por eso al entrar sube
 *    desde el borde inferior del panel, se queda quieto en el centro
 *    mientras hay sitio, y se va con el borde superior.
 *
 * 2. Aparece solo cuando cabe entero. La condición no es que el panel toque
 *    el centro de la ventana, sino que su trozo visible mida más que el
 *    portátil con sus márgenes. Si no cabe, se apaga.
 *
 * El reparto de propiedades evita que dos animaciones se pisen: el
 * contenedor lleva el desplazamiento vertical y la opacidad; el portátil de
 * dentro lleva el cambio de lado, que es el zigzag.
 */
function hacerViajar(suave: boolean) {
  const viajero = document.querySelector<HTMLElement>('[data-portatil-viajero]');
  const portatil = viajero?.querySelector<HTMLElement>('.portatil');
  if (!viajero || !portatil) return;

  const paneles = Array.from(document.querySelectorAll<HTMLElement>('.bloque-dividido__medio'));
  if (!paneles.length) return;

  let visibleAhora = false;
  let ladoAhora = '';
  let zigzag: gsap.core.Timeline | null = null;
  let yActual = 0;

  /**
   * Seguimiento vertical propio, en lugar de una animación con duración
   * fija. La clave es que el acercamiento depende de lo lejos que esté el
   * objetivo:
   *
   * - Corrección pequeña (el scroll normal) → casi instantáneo, así el
   *   portátil no se descuelga del panel al bajar rápido. Ese retraso era
   *   justo lo que lo sacaba de los contornos.
   * - Salto grande (cambio de panel) → lento, para que el brinco de un
   *   panel al siguiente se lea como un vuelo y no como un teletransporte.
   *
   * Y al ser un acercamiento por fracción, si el visitante sigue bajando
   * durante el vuelo, el destino se recalcula solo.
   */
  const acercarY = (objetivo: number) => {
    if (!suave) {
      yActual = objetivo;
      return;
    }
    const distancia = Math.abs(objetivo - yActual);
    yActual += (objetivo - yActual) * (distancia > 150 ? 0.08 : 0.55);
  };

  const actualizar = () => {
    const ventana = window.innerHeight;
    const centroVentana = ventana / 2;

    /* El alto se mide sobre el contenedor, que es lo que realmente se
       desplaza. El portátil de dentro puede ir inclinado a mitad de zigzag
       y su caja daría un valor cambiante. */
    const alto = viajero.offsetHeight;
    const salto = viajero.offsetWidth;

    /* De todos los paneles, manda el que más superficie enseña. En el salto
       de un bloque al siguiente esto es lo que decide cuándo cambiar de
       lado: cuando el nuevo panel ya pesa más que el que se va. */
    let elegido: HTMLElement | null = null;
    let mejorHueco = 0;
    let minCentro = 0;
    let maxCentro = 0;

    for (const panel of paneles) {
      const caja = panel.getBoundingClientRect();
      const arriba = Math.max(caja.top, 0);
      const abajo = Math.min(caja.bottom, ventana);
      const hueco = abajo - arriba;

      if (hueco > mejorHueco) {
        mejorHueco = hueco;
        elegido = panel;
        minCentro = arriba + alto / 2 + MARGEN;
        maxCentro = abajo - alto / 2 - MARGEN;
      }
    }

    /* Cabe solo si el trozo visible del panel da para el portátil entero. */
    const visible = Boolean(elegido) && maxCentro >= minCentro;
    const estabaVisible = visibleAhora;

    if (visible !== visibleAhora) {
      visibleAhora = visible;
      gsap.to(viajero, {
        opacity: visible ? 1 : 0,
        duration: suave ? 0.35 : 0,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }

    if (!visible || !elegido) return;

    /* El contenedor está anclado arriba del todo, así que la `y` es la
       posición absoluta de su borde superior dentro de la ventana. */
    const centroFinal = Math.min(Math.max(centroVentana, minCentro), maxCentro);
    const arribaFinal = centroFinal - alto / 2;

    /* Al reaparecer se coloca de golpe: si se dejara interpolar desde la
       posición que tenía al ocultarse, entraría volando desde el borde de
       la ventana mientras se funde. */
    if (estabaVisible) acercarY(arribaFinal);
    else yActual = arribaFinal;

    gsap.set(viajero, { y: yActual });

    /* El lado sale de dónde está el panel, no de la clase del bloque: es la
       misma respuesta y aguanta si algún día se reordenan las columnas. */
    const caja = elegido.getBoundingClientRect();
    const lado = caja.left + caja.width / 2 < window.innerWidth / 2 ? 'izquierda' : 'derecha';
    if (lado === ladoAhora) return;

    const destino = lado === 'derecha' ? salto : 0;
    const cruzarAlaVista = suave && estabaVisible && ladoAhora !== '';
    ladoAhora = lado;

    /* Venía oculto: se planta en su sitio sin recorrido. */
    if (!cruzarAlaVista) {
      zigzag?.kill();
      gsap.set(portatil, { x: destino, y: 0, rotation: 0, opacity: 1 });
      return;
    }

    /* Y si cruza a la vista, lo hace en zigzag: dos quiebros con inclinación
       y rebote en vez de un deslizamiento recto. El signo depende del
       sentido de la marcha, para que el primer quiebro sea siempre hacia
       arriba y el segundo hacia abajo. */
    const sentido = destino > (gsap.getProperty(portatil, 'x') as number) ? 1 : -1;
    const desde = gsap.getProperty(portatil, 'x') as number;
    const tramo = destino - desde;

    zigzag?.kill();
    zigzag = gsap
      .timeline()
      .to(portatil, {
        x: desde + tramo * 0.34,
        y: -34,
        rotation: -5 * sentido,
        duration: 0.26,
        ease: 'power1.inOut',
      })
      .to(portatil, {
        x: desde + tramo * 0.68,
        y: 30,
        rotation: 5 * sentido,
        duration: 0.24,
        ease: 'power1.inOut',
      })
      .to(portatil, {
        x: destino,
        y: 0,
        rotation: 0,
        duration: 0.42,
        ease: 'back.out(1.7)',
      })
      /* En el tramo de en medio el portátil sobrevuela la columna de texto
         del bloque vecino. Bajarle la opacidad ahí deja leer lo que hay
         debajo y hace que el cruce se lea como un tránsito, no como un
         estorbo. Va en paralelo a los quiebros, de ahí las posiciones
         absolutas en la línea de tiempo. */
      .to(portatil, { opacity: 0.35, duration: 0.22, ease: 'power1.out' }, 0)
      .to(portatil, { opacity: 1, duration: 0.34, ease: 'power1.in' }, 0.55);
  };

  /* Va en el ticker de GSAP y no en un listener de scroll porque el
     acercamiento tiene que seguir avanzando aunque el visitante se pare a
     media transición. Es una vuelta por fotograma, ya sincronizada con el
     resto de animaciones de la página. */
  gsap.ticker.add(actualizar);

  window.addEventListener('resize', () => {
    /* El desplazamiento lateral está en píxeles: si cambia el ancho de la
       ventana hay que recolocarlo desde cero. */
    ladoAhora = '';
  });
}

export function iniciarPortatilCodigo() {
  const portatiles = Array.from(document.querySelectorAll<HTMLElement>('[data-portatil]'));
  if (!portatiles.length) return;

  const pantallas = portatiles.map((portatil) => ({
    codigo: portatil.querySelector<HTMLElement>('[data-portatil-codigo]'),
    lienzo: portatil.querySelector<HTMLElement>('.portatil__lienzo'),
  }));

  const pintar = (avance: number) => {
    const html = componer(avance * TOTAL);

    for (const { codigo, lienzo } of pantallas) {
      if (!codigo || !lienzo) continue;
      codigo.innerHTML = html;

      /* El código crece hacia abajo y la pantalla no tiene barra de scroll:
         se desplaza el bloque entero para que la última línea escrita quede
         siempre visible, como haría un editor de verdad.

         El alto útil descuenta el padding: con clientHeight a secas, la
         línea que se está escribiendo queda cortada contra el borde. */
      const relleno = getComputedStyle(lienzo);
      const alto =
        lienzo.clientHeight -
        parseFloat(relleno.paddingTop) -
        parseFloat(relleno.paddingBottom);
      const sobrante = Math.max(0, codigo.scrollHeight - alto);
      codigo.style.transform = `translateY(${-sobrante}px)`;
    }
  };

  const bloques = document.querySelectorAll<HTMLElement>('.bloque-dividido');
  if (!bloques.length) {
    pintar(1);
    return;
  }

  /* Con movimiento reducido el portátil sigue acompañando y ocultándose
     donde toca —eso es información, no adorno—, pero sin transiciones: se
     coloca ya puesto. Y el código aparece entero en vez de escribirse. */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    hacerViajar(false);
    pintar(1);
    return;
  }

  hacerViajar(true);

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
