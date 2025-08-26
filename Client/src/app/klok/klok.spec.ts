import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Klok } from './klok';

describe('KlokComponent', () => {
  let component: Klok;
  let fixture: ComponentFixture<Klok>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Klok]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Klok);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
