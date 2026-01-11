import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feauters } from './feauters';

describe('Feauters', () => {
  let component: Feauters;
  let fixture: ComponentFixture<Feauters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feauters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feauters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
