import { ui, idiomaPorDefecto } from './ui';

/* Normaliza el valor de Astro.currentLocale a un idioma soportado. */
export function obtenerIdioma(locale) {
  return locale === 'en' ? 'en' : 'es';
}

/* Devuelve una función t(clave) que resuelve el texto en el idioma dado. */
export function usarTraducciones(locale) {
  const idioma = obtenerIdioma(locale);
  return function t(clave) {
    return ui[idioma][clave] ?? ui[idiomaPorDefecto][clave];
  };
}

/*
  Prefija una ruta interna con /en cuando el idioma es inglés. El español,
  al ser el idioma por defecto sin prefijo, deja la ruta tal cual.
*/
export function rutaLocal(ruta, locale) {
  const idioma = obtenerIdioma(locale);
  if (idioma === 'es') return ruta;
  return ruta === '/' ? '/en' : `/en${ruta}`;
}

/*
  Dada la URL actual, devuelve la ruta equivalente en el otro idioma, para
  el botón de cambio de idioma. Quita o añade el prefijo /en según el caso.
*/
export function rutaOtroIdioma(pathname, locale) {
  const idioma = obtenerIdioma(locale);
  if (idioma === 'en') {
    const sinPrefijo = pathname.replace(/^\/en(?=\/|$)/, '');
    return sinPrefijo === '' ? '/' : sinPrefijo;
  }
  return pathname === '/' ? '/en' : `/en${pathname}`;
}
