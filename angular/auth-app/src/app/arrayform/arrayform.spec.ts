import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arrayform } from './arrayform';

describe('Arrayform', () => {
  let component: Arrayform;
  let fixture: ComponentFixture<Arrayform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arrayform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arrayform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
