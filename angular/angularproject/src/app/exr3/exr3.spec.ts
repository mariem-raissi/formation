import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exr3 } from './exr3';

describe('Exr3', () => {
  let component: Exr3;
  let fixture: ComponentFixture<Exr3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exr3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exr3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
