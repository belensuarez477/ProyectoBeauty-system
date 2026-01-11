import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurneroClientes } from './turnero-clientes';

describe('TurneroClientes', () => {
  let component: TurneroClientes;
  let fixture: ComponentFixture<TurneroClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurneroClientes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurneroClientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
