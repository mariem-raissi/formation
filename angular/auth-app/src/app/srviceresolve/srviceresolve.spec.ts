import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Srviceresolve } from './srviceresolve';

describe('Srviceresolve', () => {
  let component: Srviceresolve;
  let fixture: ComponentFixture<Srviceresolve>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Srviceresolve]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Srviceresolve);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
