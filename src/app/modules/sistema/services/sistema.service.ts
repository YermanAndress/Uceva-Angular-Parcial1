import { Injectable } from '@angular/core';

export interface InfoCardData {
  title: string;
  items: string[];
  type: 'info' | 'danger' | 'success';
}

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  getQueEs(): string[] {
    return [
      'Conjunto de principios, reglas, componentes y patrones reutilizables.',
      'Asegura consistencia visual y funcional.',
      'Sirve como puente entre diseño y desarrollo.',
      'Escala productos digitales de forma ordenada.'
    ];
  }

  getPorQueUsar(): string[] {
    return [
      'Reduce inconsistencias en interfaces.',
      'Mejora mantenibilidad del frontend.',
      'Facilita colaboración entre equipos.',
      'Acelera el desarrollo y escala marcas.'
    ];
  }

  getProblemas(): string[] {
    return [
      'Interfaces inconsistentes',
      'Componentes duplicados',
      'Deuda técnica visual',
      'Dificultad para escalar',
      'Re-trabajo constante'
    ];
  }

  getNivelesAtomicos() {
    return [
      { name: 'Átomos', desc: 'Elementos básicos (Botones, Inputs, Badges)', badge: 'primary' },
      { name: 'Moléculas', desc: 'Combinaciones de átomos (Input Groups, Breadcrumbs)', badge: 'info' },
      { name: 'Organismos', desc: 'Estructuras complejas (Navbar, Cards, Tablas)', badge: 'success' },
      { name: 'Plantillas', desc: 'Estructuras de maquetación y layouts', badge: 'warning' },
      { name: 'Páginas', desc: 'Instancias reales con contenido final', badge: 'dark' }
    ];
  }
}