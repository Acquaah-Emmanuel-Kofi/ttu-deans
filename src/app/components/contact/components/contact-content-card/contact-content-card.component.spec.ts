import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactContentCardComponent } from './contact-content-card.component';

describe('ContactContentCardComponent', () => {
  let component: ContactContentCardComponent;
  let fixture: ComponentFixture<ContactContentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactContentCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
