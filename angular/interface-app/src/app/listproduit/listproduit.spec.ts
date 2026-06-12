import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listproduit } from './listproduit';

describe('Listproduit', () => {
  let component: Listproduit;
  let fixture: ComponentFixture<Listproduit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listproduit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listproduit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
