import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgComponent } from './bg.component';

describe('BgComponent', () => {
  let component: BgComponent;
  let fixture: ComponentFixture<BgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BgComponent]
    });
    fixture = TestBed.createComponent(BgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
