import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContactPageComponent]
    });
    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
