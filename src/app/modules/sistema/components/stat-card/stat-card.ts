import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  template: `
    <div class="card text-center h-100 shadow-sm border-0 bg-light">
      <div class="card-body d-flex flex-column justify-content-center align-items-center">
        <span class="badge mb-2" [ngClass]="'bg-' + color">{{ badgeText }}</span>
        <h5 class="card-title fw-bold m-0">{{ title }}</h5>
        <p class="card-text text-muted small mt-1" *ngIf="description">{{ description }}</p>
      </div>
    </div>
  `,
  standalone: false
})
export class StatCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() badgeText: string = '';
  @Input() color: string = 'primary';
}