import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detaills } from './detaills';

describe('Detaills', () => {
  let component: Detaills;
  let fixture: ComponentFixture<Detaills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detaills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detaills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
