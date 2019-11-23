import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ionic4PhoneSpinnerComponent } from './ionic4-phone-spinner.component';

describe('NgxBadPhoneSpinnerComponent', () => {
  let component: Ionic4PhoneSpinnerComponent;
  let fixture: ComponentFixture<Ionic4PhoneSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ionic4PhoneSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ionic4PhoneSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
