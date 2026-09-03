import { SistemaNivel } from '../interfaces/sistema.interface';

/** Contenido informativo del modulo de sistemas de diseño. */
export const SISTEMA_QUE_ES: string[] = [
  'Conjunto de principios, reglas, componentes y patrones reutilizables.',
  'Asegura consistencia visual y funcional.',
  'Sirve como puente entre diseño y desarrollo.',
  'Escala productos digitales de forma ordenada.',
];

export const SISTEMA_POR_QUE_USAR: string[] = [
  'Reduce inconsistencias en interfaces.',
  'Mejora mantenibilidad del frontend.',
  'Facilita colaboración entre equipos.',
  'Acelera el desarrollo y escala marcas.',
];

export const SISTEMA_PROBLEMAS: string[] = [
  'Interfaces inconsistentes',
  'Componentes duplicados',
  'Deuda técnica visual',
  'Dificultad para escalar',
  'Re-trabajo constante',
];

export const SISTEMA_NIVELES_ATOMICOS: SistemaNivel[] = [
  { name: 'Átomos', desc: 'Elementos básicos (Botones, Inputs, Badges)', badge: 'primary' },
  { name: 'Moléculas', desc: 'Combinaciones de átomos (Input Groups, Breadcrumbs)', badge: 'info' },
  { name: 'Organismos', desc: 'Estructuras complejas (Navbar, Cards, Tablas)', badge: 'success' },
  { name: 'Plantillas', desc: 'Estructuras de maquetación y layouts', badge: 'warning' },
  { name: 'Páginas', desc: 'Instancias reales con contenido final', badge: 'dark' },
];
