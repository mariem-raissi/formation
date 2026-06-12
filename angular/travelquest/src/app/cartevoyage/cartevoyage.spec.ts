import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cartevoyage } from './cartevoyage';

describe('Cartevoyage', () => {
  let component: Cartevoyage;
  let fixture: ComponentFixture<Cartevoyage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cartevoyage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cartevoyage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
