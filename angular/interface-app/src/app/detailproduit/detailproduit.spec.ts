import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailproduit } from './detailproduit';

describe('Detailproduit', () => {
  let component: Detailproduit;
  let fixture: ComponentFixture<Detailproduit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detailproduit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detailproduit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
