import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imberque } from './imberque';

describe('Imberque', () => {
  let component: Imberque;
  let fixture: ComponentFixture<Imberque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imberque]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Imberque);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
