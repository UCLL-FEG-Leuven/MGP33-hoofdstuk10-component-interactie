import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoegKlokToeForm } from './voeg-klok-toe-form';

describe('VoegKlokToeFormComponent', () => {
  let component: VoegKlokToeForm;
  let fixture: ComponentFixture<VoegKlokToeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoegKlokToeForm]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoegKlokToeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
