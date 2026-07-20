import type { ElementoTarjeta } from '@tipos/tarjetas';

/* Frases institucionales — texto aprobado por la empresa, no reescribir
   sin confirmarlo con ellos. */
export const mision =
  'Impulsar la transformación digital de organizaciones públicas y privadas en Colombia, mediante soluciones tecnológicas inteligentes, escalables y seguras que optimicen sus procesos operativos, administrativos y estratégicos. Nuestro compromiso es acompañar el crecimiento de nuestros clientes con herramientas que evolucionan junto a ellos, proyectándonos hacia Latinoamérica y el mundo.';

export const vision =
  'Ser reconocidos como una empresa líder en innovación tecnológica en Colombia, con expansión progresiva hacia Latinoamérica y mercados globales, ofreciendo soluciones digitales que integran inteligencia artificial, automatización y gestión eficiente para organizaciones de todos los sectores.';

export const quienesSomos =
  'Somos una empresa de desarrollo de software con sede en Colombia, especializada en crear soluciones tecnológicas que transforman la manera en que las organizaciones operan. Combinamos infraestructura robusta, inteligencia artificial y experiencia técnica para ofrecer productos digitales que se adaptan a cada entorno y necesidad. Nuestro enfoque está en la eficiencia, la escalabilidad y la evolución constante, con el objetivo de ser aliados estratégicos en el crecimiento de nuestros clientes.';

export const capacidades: ElementoTarjeta[] = [
  {
    insignia: { tipo: 'numero', valor: '01', fondo: 'var(--color-principal)' },
    titulo: 'Software a la medida',
    cuerpo: 'Desarrollamos sobre tu operación real, no sobre un caso genérico.',
    fondo: 'var(--color-blanco)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'numero', valor: '02', fondo: 'var(--color-principal)' },
    titulo: 'Automatización',
    cuerpo: 'Procesos operativos y administrativos que dejan de consumir horas.',
    fondo: 'var(--color-gris)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'numero', valor: '03', fondo: 'var(--color-fondo)' },
    titulo: 'Inteligencia artificial',
    cuerpo: 'IA integrada en la organización y en los sistemas que ya usas.',
    fondo: 'var(--color-principal)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'numero', valor: '04', fondo: 'var(--color-principal)' },
    titulo: 'Datos y analítica',
    cuerpo: 'Información ordenada y explotada para decidir con evidencia.',
    fondo: 'var(--color-blanco)',
    texto: 'var(--color-tinta)',
  },
];

/* Los cinco valores corporativos, tal cual los definió la empresa. */
export const valoresCorporativos: ElementoTarjeta[] = [
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/apps.svg', fondo: 'var(--color-principal)' },
    titulo: 'Innovación',
    cuerpo: 'Creamos soluciones que anticipan el futuro.',
    fondo: 'var(--color-blanco)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/analytics.svg', fondo: 'var(--color-principal)' },
    titulo: 'Escalabilidad',
    cuerpo: 'Pensamos en grande desde el primer código.',
    fondo: 'var(--color-gris)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/check.svg', fondo: 'var(--color-fondo)' },
    titulo: 'Confianza',
    cuerpo: 'Construimos relaciones sólidas y transparentes.',
    fondo: 'var(--color-principal)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/bookmark.svg', fondo: 'var(--color-principal)' },
    titulo: 'Excelencia técnica',
    cuerpo: 'Nos exigimos calidad en cada desarrollo.',
    fondo: 'var(--color-blanco)',
    texto: 'var(--color-tinta)',
  },
  {
    insignia: { tipo: 'icono', valor: '/assets/icons/layout.svg', fondo: 'var(--color-principal)' },
    titulo: 'Adaptabilidad',
    cuerpo: 'Nos ajustamos a cada cliente, sector y desafío.',
    fondo: 'var(--color-gris)',
    texto: 'var(--color-tinta)',
  },
];
