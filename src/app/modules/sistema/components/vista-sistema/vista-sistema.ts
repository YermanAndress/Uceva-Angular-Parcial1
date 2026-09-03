import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vista-sistema',
  templateUrl: './vista-sistema.html',
  standalone: false
})
export class VistaSistemaComponent {
  @Input() niveles: Array<{ name: string; desc: string; badge: string }> = [];
  @Input() queEsData: string[] = [];
  @Input() porQueUsarData: string[] = [];
  @Input() problemasData: string[] = [];
}