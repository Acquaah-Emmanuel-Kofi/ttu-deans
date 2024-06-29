import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsPageComponent } from './academics-page.component';

describe('AcademicsPageComponent', () => {
  let component: AcademicsPageComponent;
  let fixture: ComponentFixture<AcademicsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcademicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
