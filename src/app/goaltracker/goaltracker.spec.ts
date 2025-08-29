import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goaltracker } from './goaltracker';

describe('Goaltracker', () => {
  let component: Goaltracker;
  let fixture: ComponentFixture<Goaltracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Goaltracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Goaltracker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
