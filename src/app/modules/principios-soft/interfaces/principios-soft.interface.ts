// Extiende Concepto o define estructuras específicas del módulo
import { Concepto } from '../../../core/interfaces/concepto.interface';

/** Concepto especializado para el modulo de principios. */
export interface Principio extends Concepto {
  // Si necesitas campos adicionales
}

/** Funcionalidad asociada con el modulo que la contiene. */
export interface EjercicioClasificacion {
  /** Nombre de la funcionalidad. */
  funcionalidad: string;
  /** Modulo responsable de la funcionalidad. */
  modulo: string;
}

/** Situacion que representa un problema de arquitectura. */
export interface Problema {
  /** Identificador del problema. */
  id: number;
  /** Descripcion de la situacion. */
  situacion: string;
  /** Categoria del problema. */
  tipo: string;
}