import { Component, Input } from '@angular/core';
import { ArqSoftwareTopic } from '../../interfaces/arq-software.interface';

/**
 * Componente de tarjeta de arquitectura de software.
 *
 * Se utiliza para mostrar un tema de arquitectura de software
 */
@Component({
  selector: 'app-card-arq-software',
  templateUrl: './card-arq-software.component.html',
  standalone: false,
})
export class CardArqSoftwareComponent {
  /**
   * Listado de temas que se mostrarán en las tarjetas.
   * @type {ArqSoftwareTopic[]}
   * @remarks
   */
  @Input() topics: ArqSoftwareTopic[] = [];
}
