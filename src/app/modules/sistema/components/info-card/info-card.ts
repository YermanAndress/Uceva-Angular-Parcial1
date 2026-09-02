import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  template: `
    <div class="card h-100 shadow-sm border-start border-4" [ngClass]="borderClass">
      <div class="card-header bg-transparent fw-bold h5 py-3">
        {{ title }}
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          @for (item of items; track item) {
            <li class="list-group-item bg-transparent border-0 px-0">
              <i class="bi me-2" [ngClass]="iconClass"></i>{{ item }}
            </li>
          }
        </ul>
      </div>
    </div>
  `,
  standalone: false
})
export class InfoCardComponent {
  @Input() title: string = '';
  @Input() items: string[] = [];
  @Input() type: 'info' | 'danger' | 'success' = 'info';

  get borderClass(): string {
    return {
      info: 'border-primary',
      danger: 'border-danger',
      success: 'border-success'
    }[this.type];
  }

  get iconClass(): string {
    return {
      info: 'bi-check-circle-fill text-primary',
      danger: 'bi-x-circle-fill text-danger',
      success: 'bi-star-fill text-success'
    }[this.type];
  }
}