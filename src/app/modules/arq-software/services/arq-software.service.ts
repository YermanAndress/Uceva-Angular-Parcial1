import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ARQ_SOFTWARE_TOPICS } from '../../../core/config/arq-software.config';
import { ArqSoftwareTopic } from '../interfaces/arq-software.interface';

/**
 * Servicio para gestionar temas de arquitectura de software.
 *
 * Se encarga de proporcionar métodos para obtener los temas de la aplicación.
 * Actualmente devuelve un listado de temas de ejemplo definidos en `ARQ_SOFTWARE_TOPICS`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a los temas.
 *
 * @example
 * ```ts
 * // Inyectando el servicio en un componente
 * constructor(private arqSoftwareService: ArqSoftwareService) {}
 *
 * ngOnInit() {
 *   this.arqSoftwareService.getAllTopics().subscribe(topics => {
 *     console.log(topics);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class ArqSoftwareService {
  /**
   * Obtiene todos los temas de arquitectura de software disponibles.
   *
   * @returns Observable con el listado de temas (`ArqSoftwareTopic[]`).
   */
  getAllTopics(): Observable<ArqSoftwareTopic[]> {
    return of(ARQ_SOFTWARE_TOPICS);
  }
}
