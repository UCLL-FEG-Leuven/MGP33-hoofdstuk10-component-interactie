import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Over } from './over';

describe('OverComponent', () => {
  let component: Over;
  let fixture: ComponentFixture<Over>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Over]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Over);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
