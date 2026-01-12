import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modales } from './modales';

describe('Modales', () => {
  let component: Modales;
  let fixture: ComponentFixture<Modales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modales);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
