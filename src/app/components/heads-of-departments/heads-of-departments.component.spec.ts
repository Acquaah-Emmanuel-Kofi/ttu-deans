import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsOfDepartmentsComponent } from './heads-of-departments.component';

describe('HeadsOfDepartmentsComponent', () => {
  let component: HeadsOfDepartmentsComponent;
  let fixture: ComponentFixture<HeadsOfDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadsOfDepartmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadsOfDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
