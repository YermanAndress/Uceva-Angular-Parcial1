import { Component, inject, OnInit } from '@angular/core';
import { SistemaService } from '../../services/sistema.service';

@Component({
  selector: 'app-pagina-sistema',
  templateUrl: './pagina-sistema.html',
  standalone: false
})
export class PaginaSistemaComponent implements OnInit {
  private sistemaService = inject(SistemaService);

  queEsData: string[] = [];
  porQueUsarData: string[] = [];
  problemasData: string[] = [];
  nivelesData: Array<{ name: string; desc: string; badge: string }> = [];

  ngOnInit(): void {
    this.queEsData = this.sistemaService.getQueEs();
    this.porQueUsarData = this.sistemaService.getPorQueUsar();
    this.problemasData = this.sistemaService.getProblemas();
    this.nivelesData = this.sistemaService.getNivelesAtomicos();
  }
}