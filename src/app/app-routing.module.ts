import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes =[{
  path: '',
  component: DefaultComponent,
  children: [{
path:'',
component: DashboardComponent
  }]
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],exports:[RouterModule]
})
export class AppRoutingModule { }
