import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Klokken } from './klokken';

describe('KlokkenComponent', () => {
  let component: Klokken;
  let fixture: ComponentFixture<Klokken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Klokken]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Klokken);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
