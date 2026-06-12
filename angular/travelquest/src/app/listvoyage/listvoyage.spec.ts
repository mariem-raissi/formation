import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listvoyage } from './listvoyage';

describe('Listvoyage', () => {
  let component: Listvoyage;
  let fixture: ComponentFixture<Listvoyage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listvoyage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listvoyage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
