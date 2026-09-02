import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sistema } from './sistema';

describe('Sistema', () => {
  let component: Sistema;
  let fixture: ComponentFixture<Sistema>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sistema]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sistema);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
