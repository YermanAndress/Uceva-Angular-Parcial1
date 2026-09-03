import { Component, Input } from '@angular/core';

/** Componente reutilizable para presentar datos tabulares. */
@Component({
  selector: 'app-table-principios-soft',
  standalone: false,
  templateUrl: './table-principios-soft.component.component.html',
  styleUrls: ['./table-principios-soft.component.component.scss']
})
export class TablePrincipiosSoftComponent {
  /** Titulo opcional de la tabla. */
  @Input() title: string = '';
  /** Encabezados de las columnas. */
  @Input() headers: string[] = [];
  /** Filas que se muestran en la tabla. */
  @Input() data: any[] = [];
  /** Indica si se muestra la columna de identificador. */
  @Input() showId: boolean = true;
}