/** Define la informacion de un principio de arquitectura. */
export interface Concepto {
  /** Identificador del principio. */
  id: number;
  /** Nombre del principio. */
  titulo: string;
  /** Descripcion del principio. */
  descripcion: string;
  /** Beneficios de aplicar el principio. */
  beneficios: string[];
  /** Ejemplo de una aplicacion correcta. */
  ejemploBueno?: string;
  /** Ejemplo de una aplicacion incorrecta. */
  ejemploMal?: string;
}