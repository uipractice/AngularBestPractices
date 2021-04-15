import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../components/header/header.component';
import { SharedModuleModule } from '../shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PrismModule } from '@ngx-prism/core';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModuleModule,
    PrismModule,
    MDBBootstrapModule.forRoot(),

  ]
})
export class DashboardModule { }
