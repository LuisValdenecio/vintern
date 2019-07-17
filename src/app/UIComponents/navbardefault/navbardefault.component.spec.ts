import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardefaultComponent } from './navbardefault.component';

describe('NavbardefaultComponent', () => {
  let component: NavbardefaultComponent;
  let fixture: ComponentFixture<NavbardefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbardefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbardefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
