import { Component, inject } from '@angular/core';
import { ArqSoftwareTopic } from '../../interfaces/arq-software.interface';
import { ArqSoftwareService } from '../../services/arq-software.service';

/**
 * Componente página para listar temas de arquitectura de software.
 *
 * Se utiliza para gestionar y mostrar un listado de temas
 * utilizando el componente `CardArqSoftwareComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `ArqSoftwareService`
 * para obtener los topics y pasarlos al componente de tarjetas.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-arq-software></app-list-arq-software>
 * ```
 */
@Component({
  selector: 'app-list-arq-software',
  template: `<app-card-arq-software [topics]="topics"></app-card-arq-software>`,
  standalone: false,
})
export class ListArqSoftwareComponent {
  /**
   * Listado de temas obtenidos desde el servicio.
   * @type {ArqSoftwareTopic[]}
   */
  topics: ArqSoftwareTopic[] = [];

  /**
   * Servicio para obtener temas de arquitectura de software.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private arqSoftwareService = inject(ArqSoftwareService);

  /**
   * Inicializa el componente y carga los temas.
   * @remarks
   * Se suscribe al método `getAllTopics()` del servicio y
   * asigna los datos recibidos a la propiedad `topics`.
   */
  ngOnInit(): void {
    this.arqSoftwareService.getAllTopics().subscribe({
      next: (topics) => this.topics = topics,
      error: (error) => console.error(error),
    });
  }
}
