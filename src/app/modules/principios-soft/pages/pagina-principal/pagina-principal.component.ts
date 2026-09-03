import { Component, OnInit } from '@angular/core';
import { Concepto } from '../../../../core/interfaces/concepto.interface';
import { PrincipiosSoftService } from '../../services/principios-soft.service';

/** Presenta los principios y ejercicios de arquitectura de software. */
@Component({
  selector: 'app-pagina-principal',
  standalone: false,
  template: `
    <div class="principios-container">
      <h1>Principios de la Arquitectura de Software</h1>
      <p class="intro">
        Los principios de una buena arquitectura de software son guías que permiten crear sistemas organizados,
        fáciles de entender y que puedan evolucionar con el tiempo.
      </p>

      <!-- Tarjetas de cada principio -->
      <div class="principios-grid">
        <div *ngFor="let p of principios" class="principio-card">
          <h2>{{ p.titulo }}</h2>
          <p class="descripcion">{{ p.descripcion }}</p>

          <div class="beneficios">
            <h4>Beneficios:</h4>
            <ul>
              <li *ngFor="let b of p.beneficios">{{ b }}</li>
            </ul>
          </div>

          <div *ngIf="p.ejemploBueno" class="ejemplo-bueno">
            <h4>✅ Buen ejemplo:</h4>
            <p>{{ p.ejemploBueno }}</p>
          </div>

          <div *ngIf="p.ejemploMal" class="ejemplo-mal">
            <h4>❌ Mal ejemplo:</h4>
            <p>{{ p.ejemploMal }}</p>
          </div>
        </div>
      </div>

      <!-- Resumen de principios -->
      <div class="resumen">
        <h2>Resumen de los Principios</h2>
        <table>
          <thead>
            <tr>
              <th>Principio</th>
              <th>¿Se busca alto o bajo?</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Modularidad</td>
              <td>Alta</td>
              <td>Tener muchos módulos bien definidos.</td>
            </tr>
            <tr>
              <td>Acoplamiento</td>
              <td>Baja</td>
              <td>Que los módulos dependan poco entre sí.</td>
            </tr>
            <tr>
              <td>Cohesión</td>
              <td>Alta</td>
              <td>Cada módulo debe hacer una sola cosa bien.</td>
            </tr>
            <tr>
              <td>Separación de Responsabilidades</td>
              <td>Alta</td>
              <td>Dividir la aplicación por tipos de tareas.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Ejercicio 1: Clasificar módulos -->
      <div class="ejercicio">
        <h2>Ejercicio 1 - Clasificar Módulos</h2>
        <p>Funcionalidades y módulos sugeridos: Usuarios, Carrito, Pagos, Catálogo, Inventario, Notificaciones</p>
        <table>
          <thead>
            <tr>
              <th>Módulo</th>
              <th>Funcionalidades</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let grupo of ejerciciosAgrupados">
              <td><strong>{{ grupo.modulo }}</strong></td>
              <td>
                <ul>
                  <li *ngFor="let f of grupo.funcionalidades">{{ f }}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Ejercicio 2: Identificar el problema -->
      <div class="ejercicio">
        <h2>Ejercicio 2 - Identificar el Problema</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Situación</th>
              <th>Tipo de Problema</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let prob of problemas">
              <td>{{ prob.id }}</td>
              <td>{{ prob.situacion }}</td>
              <td>{{ prob.tipo }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .principios-container {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 0 1.5rem;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    h1 {
      font-size: 2.5rem;
      color: #2c3e50;
      border-bottom: 4px solid #3498db;
      padding-bottom: 0.5rem;
    }

    .intro {
      font-size: 1.1rem;
      color: #555;
      margin: 1.5rem 0 2rem;
    }

    .principios-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .principio-card {
      background: #f9f9f9;
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }

    .principio-card:hover {
      transform: translateY(-5px);
    }

    .principio-card h2 {
      color: #2980b9;
      margin-top: 0;
    }

    .descripcion {
      font-size: 0.95rem;
      line-height: 1.5;
      margin: 0.5rem 0;
    }

    .beneficios {
      margin: 1rem 0;
    }

    .beneficios ul {
      padding-left: 1.2rem;
    }

    .beneficios ul li {
      margin-bottom: 0.3rem;
    }

    .ejemplo-bueno {
      background: #e8f8f5;
      border-left: 4px solid #27ae60;
      padding: 0.5rem 1rem;
      margin: 0.5rem 0;
    }

    .ejemplo-mal {
      background: #fdedec;
      border-left: 4px solid #e74c3c;
      padding: 0.5rem 1rem;
      margin: 0.5rem 0;
    }

    .resumen, .ejercicio {
      margin: 2.5rem 0;
    }

    .resumen h2, .ejercicio h2 {
      color: #2c3e50;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    }

    th, td {
      border: 1px solid #ddd;
      padding: 0.75rem;
      text-align: left;
    }

    th {
      background: #34495e;
      color: white;
    }

    tr:nth-child(even) {
      background: #f2f2f2;
    }

    .ejercicio ul {
      margin: 0;
      padding-left: 1.2rem;
    }

    .ejercicio table td ul {
      list-style-type: disc;
    }
  `]
})
export class PaginaPrincipalComponent implements OnInit {

  /** Principios disponibles para consulta. */
  principios: Concepto[] = [];
  /** Funcionalidades agrupadas por modulo. */
  ejerciciosClasificacion: any[] = [];
  /** Situaciones de los ejercicios de analisis. */
  problemas: any[] = [];
  /** Grupos preparados para la tabla de clasificacion. */
  ejerciciosAgrupados: { modulo: string, funcionalidades: string[] }[] = [];

  /** Crea el componente con acceso a los datos del modulo. */
  constructor(private principiosService: PrincipiosSoftService) { }

  /** Carga los datos iniciales y prepara las agrupaciones. */
  ngOnInit(): void {
    this.principios = this.principiosService.getPrincipios();
    this.ejerciciosClasificacion = this.principiosService.getEjerciciosClasificacion();
    this.problemas = this.principiosService.getProblemas();
    this.agruparEjercicios();
  }

  /** Agrupa las funcionalidades por el modulo responsable. */
  agruparEjercicios(): void {
    const grupos: { [key: string]: string[] } = {};
    this.ejerciciosClasificacion.forEach(item => {
      if (!grupos[item.modulo]) {
        grupos[item.modulo] = [];
      }
      grupos[item.modulo].push(item.funcionalidad);
    });
    this.ejerciciosAgrupados = Object.keys(grupos).map(modulo => ({
      modulo,
      funcionalidades: grupos[modulo]
    }));
  }
}