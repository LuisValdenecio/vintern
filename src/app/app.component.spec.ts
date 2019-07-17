import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbardefaultComponent } from './UIComponents/navbardefault/navbardefault.component';
import { CarouselInfoComponent } from './UIComponents/carousel-info/carousel-info.component';
import { FeatureSectionComponent } from './UIComponents/feature-section/feature-section.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NavbardefaultComponent,
        CarouselInfoComponent,
        FeatureSectionComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'vintern'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('vintern');
  });

});
