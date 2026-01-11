import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPrivate } from './layout-private';

describe('LayoutPrivate', () => {
  let component: LayoutPrivate;
  let fixture: ComponentFixture<LayoutPrivate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutPrivate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutPrivate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
