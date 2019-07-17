import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbardefaultComponent } from './UIComponents/navbardefault/navbardefault.component';
import { CarouselInfoComponent } from './UIComponents/carousel-info/carousel-info.component';
import { FeatureSectionComponent } from './UIComponents/feature-section/feature-section.component';
import { LoginComponent } from './FeatureComponents/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbardefaultComponent,
    CarouselInfoComponent,
    FeatureSectionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
