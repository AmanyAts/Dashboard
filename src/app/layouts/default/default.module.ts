import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component'
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/components/shared/shared.module';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatGridListModule
  ]
})
export class DefaultModule { }
