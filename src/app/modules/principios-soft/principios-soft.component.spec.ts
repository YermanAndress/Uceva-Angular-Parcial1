import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipiosSoftComponent } from './principios-soft.component';

describe('PrincipiosSoftComponent', () => {
  let component: PrincipiosSoftComponent;
  let fixture: ComponentFixture<PrincipiosSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipiosSoftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipiosSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
