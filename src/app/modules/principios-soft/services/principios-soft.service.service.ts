import { Injectable } from '@angular/core';
import { Concepto } from '../../../core/interfaces/concepto.interface';
import {
  PRINCIPIOS_DATA,
  EJERCICIO_CLASIFICACION,
  EJERCICIO_PROBLEMAS
} from '../../../core/config/principios-soft.config';

/** Proporciona los datos del modulo de principios de arquitectura. */
@Injectable({
  providedIn: 'root' // o 'any' si lo quieres específico del módulo
})
export class PrincipiosSoftService {

  /** Inicializa el servicio de datos. */
  constructor() { }

  /** Devuelve los principios disponibles. */
  getPrincipios(): Concepto[] {
    return PRINCIPIOS_DATA;
  }

  /** Devuelve las funcionalidades agrupadas por modulo. */
  getEjerciciosClasificacion() {
    return EJERCICIO_CLASIFICACION;
  }

  /** Devuelve los casos de problemas arquitectonicos. */
  getProblemas() {
    return EJERCICIO_PROBLEMAS;
  }
}