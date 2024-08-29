import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDeansComponent } from './faculty-deans.component';

describe('FacultyDeansComponent', () => {
  let component: FacultyDeansComponent;
  let fixture: ComponentFixture<FacultyDeansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyDeansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyDeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
