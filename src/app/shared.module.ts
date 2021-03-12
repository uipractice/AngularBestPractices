import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SplitCommaStringPipe } from './components/pipes/safe-url.pipe';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './components/footer/footer.component';
// import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
// import { ScrollEventModule } from 'ngx-scroll-event';
@NgModule({
  declarations: [
    HeaderComponent,
    SplitCommaStringPipe,
    FooterComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
    SplitCommaStringPipe,
    FooterComponent,
    LandingPageComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModuleModule { }
