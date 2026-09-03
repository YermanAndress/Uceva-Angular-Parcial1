/**
 * Interfaz que representa un tema de arquitectura de software.
 *
 * Contiene la información necesaria para presentar un tema
 * conceptual en la interfaz de la aplicación.
 *
 * @remarks
 * Cada topic tiene un `id` único, un `title` descriptivo,
 * un `summary` con el resumen del tema y un array de `concepts`
 * con los puntos clave.
 *
 * @example
 * ```ts
 * const topic: ArqSoftwareTopic = {
 *   id: 1,
 *   title: 'Fundamentos de la Arquitectura de Software',
 *   summary: 'Es el conjunto de decisiones estructurales...',
 *   concepts: ['Definición', 'Importancia', 'Objetivos']
 * };
 * ```
 */
export interface ArqSoftwareTopic {
  /** Identificador único del tema */
  id: number;

  /** Título del tema */
  title: string;

  /** Resumen breve del tema */
  summary: string;

  /** Lista de conceptos clave del tema */
  concepts: string[];
}
