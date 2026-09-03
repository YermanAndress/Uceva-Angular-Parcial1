import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArqSoftware } from './arq-software';

describe('ArqSoftware', () => {
  let component: ArqSoftware;
  let fixture: ComponentFixture<ArqSoftware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArqSoftware]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArqSoftware);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
