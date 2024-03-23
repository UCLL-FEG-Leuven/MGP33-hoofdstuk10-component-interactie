import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverComponent } from './over.component';

describe('OverComponent', () => {
  let component: OverComponent;
  let fixture: ComponentFixture<OverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
