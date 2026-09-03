import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrincipiosSoftComponentComponent } from './table-principios-soft.component.component';

describe('TablePrincipiosSoftComponentComponent', () => {
  let component: TablePrincipiosSoftComponentComponent;
  let fixture: ComponentFixture<TablePrincipiosSoftComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePrincipiosSoftComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePrincipiosSoftComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
