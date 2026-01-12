import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurneroServicios } from './turnero-servicios';

describe('TurneroServicios', () => {
  let component: TurneroServicios;
  let fixture: ComponentFixture<TurneroServicios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurneroServicios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurneroServicios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
